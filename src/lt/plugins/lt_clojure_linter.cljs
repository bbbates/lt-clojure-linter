(ns lt.plugins.lt-clojure-linter
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [lt.objs.plugins :as plugins]
            [lt.plugins.lt-clojure-linter.expr-checker :as expr-checker]
            [cljs.reader :as reader])
  (:require-macros [lt.macros :refer [behavior background]]))

(reader/read-string "({:message \"Consider using: (inc x)\", :severity \"warning\", :from [0 1], :to [0 8]}
                    {:message \"Consider using: (when-not (pred? x y) (f x y))\", :severity \"warning\", :from [2 1], :to [2 33]}
                    {:message \"Consider using: (map inc [1 2 3])\",
                    :severity \"warning\", :from [4 1], :to [4 31]})")

(object/object* ::clojure-linter
                :triggers [:lt.objs.editor.lint/validate]
                :behaviors [::do-lint]
                :timeout 45000
                :linter-name "Clojure linter")

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
                      (let [callback (:callback @this)]
                        (callback (map ->linter-result (:results results))))))

(def plugin-id "lt-clojure-linter")

(defn- expr-checker-module
  []
  (str plugins/user-plugins-dir "/" plugin-id "/expr-checker-module.js"))

(def bg-expr-check
  (background
    (fn [obj-id expr-checker-module editor-text]
      (js-delete js/require.cache expr-checker-module)
      (let [lt (js/require expr-checker-module)]
        (->>
          (js/lt.plugins.lt_clojure_linter.expr_checker.lint_editor_text editor-text)
          (raise obj-id :exprs-check-complete))))))

(behavior ::do-lint
          :triggers #{:lt.objs.editor.lint/validate}
          :reaction (fn [obj editor-text callback]
                      (bg-expr-check (object/create ::kibit-expr-checker callback)
                                     (expr-checker-module) editor-text)))

(cmd/command {:command ::run-dis
              :desc "Idiocheck: Run dis 2"
              :exec (fn []
											(when-let [ed (editor-pool/last-active)]
                        (let [forms (read-all-forms-in-editor (editor/->val ed))]
                          (map (comp ->linter-result kibit/check-expr) forms))))})
