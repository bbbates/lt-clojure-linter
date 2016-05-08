(ns lt.plugins.lt-clojure-linter
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [lt.objs.plugins :as plugins]
            [lt.objs.notifos :as notifos]
            [lt.plugins.lt-clojure-linter.expr-checker :as expr-checker]
            [cljs.reader :as reader])
  (:require-macros [lt.macros :refer [behavior background]]))

(object/object* ::clojure-linter
                :triggers [:lt.objs.editor.lint/validate]
                :behaviors [::do-lint]
                :timeout 60000
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

(def bg-expr-check
  (background
    (fn [obj-id expr-checker-module editor-text]
      (let [lt (js/require expr-checker-module)]
        (->>
          (expr-checker/lint-editor-text editor-text)
          (raise obj-id :exprs-check-complete))))))

(behavior ::do-lint
          :triggers #{:lt.objs.editor.lint/validate}
          :reaction (fn [obj editor-text callback ed]
                      (let [checking-ns (:ns (:info @ed))]
                        (notifos/working (str "Checking " (name (or checking-ns "")) "..."))
                        (bg-expr-check (object/create ::kibit-expr-checker callback)
                                       (expr-checker-module) editor-text))))

