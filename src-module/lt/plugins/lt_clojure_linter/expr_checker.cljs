(ns lt.plugins.lt-clojure-linter.expr-checker
  (:require [cljs.tools.reader.reader-types :as rt]
            [cljs.tools.reader :as reader]
            [cljs.pprint :as pp]
            [kibit.check :as kibit]))

(enable-console-print!)

(defn read-all-forms-in-editor
  [editor-text file-name]
  (binding [reader/resolve-symbol identity
            reader/*default-data-reader-fn* (fn [_ form] form)]
    (when-not (clojure.string/blank? editor-text)
      (loop [rdr (rt/indexing-push-back-reader editor-text 1 file-name) forms []]
        (if-not (= (last forms) :eof)
          (let [form (reader/read {:eof :eof} rdr)]
            (recur rdr (conj forms form)))
          (butlast forms))))))

(defn- ->expr-check-result
  [{:keys [expr alt] :as res}]
  (let [{:keys [line column end-line end-column]} (meta expr)]
    {:alt (with-out-str (pp/pprint alt))
     :severity :warning
     :from [(dec line) (dec column)]
     :to [(dec end-line) (dec end-column)]}))

(defn ^:export lint-editor-text
  [editor-text file-name]
  (try
    (let [forms (read-all-forms-in-editor editor-text file-name)
          exprs (mapcat kibit/expr-seq forms)
          results (keep #(kibit/check-expr % :resolution :subform) exprs)]
      {:results (map ->expr-check-result results)})
    (catch :default err
      (println "ERR!" err)
      {:error (:message err)})))
