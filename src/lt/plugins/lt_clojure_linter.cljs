(ns lt.plugins.lt-clojure-linter
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [lt.objs.plugins :as plugins]
            [lt.objs.notifos :as notifos]
            [lt.objs.thread :as t]
            [lt.plugins.lt-clojure-linter.threads :as threads])
  (:require-macros [lt.macros :refer [behavior background]]
                   [lt.plugins.lt-clojure-linter.macros :refer [background-with-pool]]))

(object/object* ::clojure-linter
                :behaviors [::do-lint]
                :timeout 360000 ;; wait a generous 6 minutes for kibit to do it's thing
                :linter-name "clojure expression checker")

(object/object* ::kibit-expr-checker
                :tags #{::expr-check}
                :results []
                :callback identity
                :behaviors [::kibit-expr-checker-callback]
                :init (fn [this callback]
                        (object/merge! this {:callback callback})))

(defn- ->linter-result
  [{:keys [alt] :as res}]
  (assoc res :message (str "Consider using: " alt)))

(behavior ::kibit-expr-checker-callback
          :triggers #{:exprs-check-complete}
          :reaction (fn [this results]
                      (let [results (or (:results results) [])
                            err (:error results)
                            callback (:callback @this)
                            message (when-not err (str "Done checking expressions, found " (count results) " suggestions."))]
                        (notifos/done-working message)
                        (callback (map ->linter-result results)))))

(def plugin-id "lt-clojure-linter")

(defn- expr-checker-module
  []
  (str plugins/user-plugins-dir "/" plugin-id "/expr-checker-module.js"))

(def thread-pool (threads/create-pool))

(def bg-expr-check
  (background-with-pool thread-pool
    (fn [obj-id expr-checker-module editor-text file-name]
      (let [lt (js/require expr-checker-module)]
        (->>
          (js/lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text editor-text file-name)
          (raise obj-id :exprs-check-complete))))))

(behavior ::do-lint
          :triggers #{:lt.plugins.lt-lint/validate}
          :reaction (fn [obj editor-text callback ed]
                      (let [checking-ns (:ns (:info @ed))]
                        (notifos/working (str "Checking " (name (or checking-ns "")) "..."))
                        (bg-expr-check (object/create ::kibit-expr-checker callback)
                                       (expr-checker-module) editor-text (get-in @ed [:info :path])))))

