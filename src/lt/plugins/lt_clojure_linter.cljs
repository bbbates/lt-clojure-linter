(ns lt.plugins.lt-clojure-linter
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [lt.objs.plugins :as plugins]
            [cljs.extended-reader :as rdr]
            [kibit.check :as kibit]
            [cljs.core.logic :as logic]
            [cljs.core.async :as async])
  (:require-macros [lt.macros :refer [behavior background]]
                   [cljs.core.async.macros :refer [go go-loop]]))

(defn- next-char-from-reader
  "Takes the reader state and editor, and returns the next char and new state
  of the reader"
  [line-seq {:keys [line-contents line col buffer] :as state}]
  (if (seq buffer)
    ;; a char has been pushed back onto the buffer
    (let [popped (last buffer)]
      [popped (update-in state [:buffer] pop)])

    ;; read the next char from the editor
    (if (< (count line-contents) col)
      ;; end of line
      (loop [line-contents (get line-seq (inc line))
             line (inc line)]
        (cond
          (nil? line-contents) [nil (assoc state :eof? true)]
          (empty? line-contents) (recur (get line-seq (inc line)) (inc line))
          :else [(.charAt line-contents 0) (assoc state :line line :col 1 :line-contents line-contents)]))
      [(if (= "" (.charAt line-contents col))
         "\n"
         (.charAt line-contents col))
       (update-in state [:col] inc)])))

(defrecord LineSeqPushbackReader [line-seq state]
  rdr/Reader
  (read-char [_]
             (let [[next-char new-state] (next-char-from-reader line-seq @state)]
               (when (nil? next-char) new-state @state)
               (reset! state new-state)
               next-char))
  (peek-char [_] (first (next-char-from-reader line-seq @state)))

  rdr/IPushbackReader
  (unread [_ ch] (swap! state update-in [:buffer] conj ch))

  rdr/IndexingReader
  (get-line-number [_]
                   (-> (next-char-from-reader line-seq @state)
                       (last)
                       (:line)))
  (get-column-number [reader]
                     (-> (next-char-from-reader line-seq @state)
                         (last)
                         (:col))))

(defn- default-reader-state
  [line-seq start-line start-col]
  {:line start-line
   :col start-col
   :buffer []
   :line-contents (get line-seq start-line)})

(defn editor-pushback-reader
  [line-seq]
  (LineSeqPushbackReader. line-seq (atom (default-reader-state line-seq 0 0))))

(defn read-all-forms-in-editor
  [editor-text]
  (let [line-seq (vec (clojure.string/split editor-text #"\n"))]
    (loop [forms []
           r (editor-pushback-reader line-seq)]
      (if-not (or (:eof? @(:state r)) (= :end (last forms)))
        (let [form (rdr/read r false :end)
              state @(:state r)]
          (recur (conj forms form)
                 (assoc r :state (atom (default-reader-state line-seq (:line state) (:col state))))))
        (butlast forms)))))

(object/object* ::clojure-linter
                :triggers [:lt.objs.editor.lint/validate]
                :behaviors [::do-lint]
                :timeout 20000
                :linter-name "Clojure linter")

(defn- ->linter-result
  [{:keys [expr alt] :as res}]
  ;;TODO: need to get the form char range...
  (let [{:keys [line column end-line end-column]} (meta expr)]
    {:message (str "Consider using: " alt)
     :severity "warning"
     :from [line column]
     :to [end-line end-column]}))

(comment
  (defn- worker
    [ch]
    (let [id (rand-int 1000)]
      (go-loop [res []]
               (if-let [form (async/<! ch)]
                 (do
                   (println id "Checking: " form)
                   (recur (if-let [check-res (kibit/check-expr form)]
                            (do
                              (println id "Done: " form)
                              (conj res check-res))
                            (do
                              (println id "Done: " form) res))))
                 res))))

  (defn- lint-editor-text
    [editor-text callback]
    (let [forms (read-all-forms-in-editor editor-text)
          forms-ch (async/to-chan forms)
          workers (doall (repeatedly 3 (partial worker forms-ch)))]
      (go-loop [[wrk & r] workers res []]
               (if wrk
                 (do (println "Waiting for worker ")
                   (let [check-res (async/<! wrk)]
                     (recur r (concat res check-res))))
                 (callback (map ->linter-result res))))))

  (let [start (.getTime (js/Date.))]
    (lint-editor-text (editor/->val (editor-pool/last-active))
                      (fn [res]
                        (println "Took:" (- (.getTime (js/Date.)) start))
                        (println ">>>" res)))))

(comment
  (object/object* ::kibit-expr-checker
                 :results []
                 :callback identity
                 :behaviors [::exprs-checked])

 (behavior ::lint-callback
           :triggers #{::exprs-checked}
           :reaction (fn [& args]
                       (println "DONE!!!!")
                       (println args)))

 (def plugin-id "lt-clojure-linter")
 (defn- plugin-js-dir
   []
   (str plugins/user-plugins-dir "/" plugin-id "/" plugin-id "_compiled.js"))


 (def bg-expr-check
   (background
     (fn [obj-id plugin-js-dir editor-text]
       ;; provide a dummy util.load/provided? fn that will force all modules to be reloaded
       (aset js/global "lt" #js {})
       (aset js/lt "util" #js {})
       (aset js/lt.util "load" #js {})
       (aset js/lt.util.load "provided_QMARK_" (fn [] false))

       ;; provide a dummy objs.thread/thread* fn
       (aset js/lt "objs" #js {})
       (aset js/lt.objs "thread" #js {})
       (aset js/lt.objs.thread "thread_STAR" (fn [] false))

       (js/require (str js/ltpath "/core/node_modules/lighttable/cljs/lt/object.js"))
       (js/require plugin-js-dir)
       (let [forms (read-all-forms-in-editor editor-text)
             results (keep kibit/check-expr forms)]
         (raise obj-id ::exprs-checked (doall (map ->linter-result results))))))))

#_(defn- lint-editor-text
  [editor-text]
  (let [forms (read-all-forms-in-editor editor-text)
        results (keep kibit/check-expr forms)]
    (doall (map ->linter-result results))))

(behavior ::do-lint
          :triggers #{:lt.objs.editor.lint/validate}
          :reaction (fn [obj editor-text callback]
                      #_(callback (lint-editor-text editor-text))
                      #_(lint-editor-text editor-text callback)
                      (bg-expr-check (object/create ::kibit-expr-checker :callback callback)
                                     (plugin-js-dir) editor-text)))

(cmd/command {:command ::run-dis
              :desc "Idiocheck: Run dis 2"
              :exec (fn []
											(when-let [ed (editor-pool/last-active)]
                        (let [forms (read-all-forms-in-editor (editor/->val ed))]
                          (map (comp ->linter-result kibit/check-expr) forms))))})
