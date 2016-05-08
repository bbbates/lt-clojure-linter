(ns lt.plugins.lt-clojure-linter.expr-checker
  (:require [cljs.extended-reader :as rdr]
            [kibit.check :as kibit]))

(enable-console-print!)

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
    (when (seq line-seq)
      (loop [forms []
             r (editor-pushback-reader line-seq)]
        (if-not (or (:eof? @(:state r)) (= :end (last forms)))
          (let [form (rdr/read r false :end)
                state @(:state r)]
            (recur (conj forms form)
                   (assoc r :state (atom (default-reader-state line-seq (:line state) (:col state))))))
          (butlast forms))))))

(defn- ->expr-check-result
  [{:keys [expr alt] :as res}]
  (let [{:keys [line column end-line end-column]} (meta expr)]
    {:alt (pr-str alt)
     :severity :warning
     :from [line column]
     :to [end-line end-column]}))

(defn ^:export lint-editor-text
  [editor-text]
  (let [forms (read-all-forms-in-editor editor-text)
        results (keep kibit/check-expr forms)]
    {:results (map ->expr-check-result results)}))
