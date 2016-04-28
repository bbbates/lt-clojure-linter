(ns lt.plugins.lt-cljs-playground
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [cljs.extended.reader :as rdr]
            [kibit.check :as kibit]
            [cljs.core.logic :as logic])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn- next-char-from-reader
  "Takes the reader state and editor, and returns the next char and new state
  of the reader"
  [ed {:keys [line-contents line col buffer] :as state}]
  (if (seq buffer)
    ;; a char has been pushed back onto the buffer
    (let [popped (last buffer)]
      [popped (update-in state [:buffer] pop)])

    ;; read the next char from the editor
    (if (< (count line-contents) col)
      ;; end of line
      (loop [line-contents (editor/line ed (inc line))
             line (inc line)]
        (cond
          (nil? line-contents) [nil (assoc state :eof? true)]
          (clojure.string/blank? line-contents) (recur (editor/line ed (inc line)) (inc line))
          :else [(.charAt line-contents 0) (assoc state :line line :col 1 :line-contents line-contents)]))
      [(if (= "" (.charAt line-contents col))
         "\n"
         (.charAt line-contents col))
       (update-in state [:col] inc)])))

(defrecord EditorPushbackReader [ed state]
  rdr/Reader
  (read-char [_]
             (let [[next-char new-state] (next-char-from-reader ed @state)]
               (when (nil? next-char) new-state @state)
               (reset! state new-state)
               next-char))
  (peek-char [_] (first (next-char-from-reader ed @state)))

  rdr/IPushbackReader
  (unread [_ ch] (swap! state update-in [:buffer] conj ch))

  rdr/IndexingReader
  (get-line-number [_]
                   (-> (next-char-from-reader ed @state)
                       (last)
                       (:line)
                       (inc)))
  (get-column-number [reader]
                     (-> (next-char-from-reader ed @state)
                         (last)
                         (:col)
                         (inc)))
  (get-file-name [reader] (get-in @ed [:info :path])))

(defn- default-reader-state
  [ed start-line start-col]
  {:line start-line
   :col start-col
   :buffer []
   :line-contents (editor/line ed start-line)})

(defn editor-pushback-reader
  [ed]
  (EditorPushbackReader. ed (atom (default-reader-state ed 0 0))))

(defn- read-expr-with-meta
  [reader]
  (let [form (rdr/read reader false :end)]
    (if (satisfies? IWithMeta form)
      (with-meta form {:line (:line @(:state reader)) :column (:col @(:state reader))})
      form)))

(defn read-all-forms-in-editor
  [ed]
  (loop [forms []
         r (editor-pushback-reader ed)]
    (if-not (or (:eof? @(:state r)) (= :end (last forms)))
      (let [form (read-expr-with-meta r)
            state @(:state r)]
        (recur (conj forms form)
               (assoc r :state (atom (default-reader-state ed (:line state) (:col state))))))
      (butlast forms))))

(cmd/command {:command ::run-dis
              :desc "Idiocheck: Run dis"
              :exec (fn []
											(when-let [ed (editor-pool/last-active)]
                        (let [forms (read-all-forms-in-editor ed)]
                          (map kibit/check-expr forms)


                          )))})
