(ns lt.plugins.lt-cljs-playground
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as editor-pool]
            [cljs.reader :refer [read-string] :as rdr]
            [cljs.tools.reader.reader-types :as reader-types]
            [cljs.tools.reader :as edn])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from lt-cljs-playground"])

(object/object* ::lt-cljs-playground.hello
                :tags [:lt-cljs-playground.hello]
                :behaviors [::on-close-destroy]
                :name "lt-cljs-playground"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "lt-cljs-playground: Close tab and tabset as well if last tab"
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::lt-cljs-playground.hello))

(defrecord EditorPushbackReader [ed state]
  rdr/PushbackReader
  (read-char [_]
             (if (seq (:buffer @state))
               (let [popped (last (:buffer @state))]
                 (swap! state update-in [:buffer] pop)
                 popped)
               (let [{:keys [line-contents line col]} @state]
                 (if (<= (count line-contents) col)
                   (loop [line-contents (editor/line ed (inc line))
                          line (inc line)]
                     (cond
                       (nil? line-contents) (do (swap! state assoc :eof? true) (println "THE END!" @state) nil)
                       (clojure.string/blank? line-contents) (recur (editor/line ed (inc line)) (inc line))
                       :else (do
                               (swap! state assoc :line line :col 1 :line-contents line-contents)
                               (aget line-contents 0))))
                   (do
                     (swap! state update-in [:col] inc)
                     (aget line-contents col))))))
  (unread [_ ch] (swap! state update-in [:buffer] conj ch)))

(defn- default-reader-state
  [ed start-line start-col]
  {:line start-line
   :col start-col
   :buffer []
   :line-contents (editor/line ed start-line)})

(defn editor-pushback-reader
  [ed]
  (EditorPushbackReader. ed (atom (default-reader-state ed 0 0))))

(defn read-all-forms-in-editor
  [ed]
  (loop [forms []
         r (editor-pushback-reader ed)]
    (if-not (:eof? @(:state r))
      (let [form (rdr/read r false :end true)
            state @(:state r)]
        (recur (conj forms form)
               (assoc r :state (atom (default-reader-state ed (:line state) (:col state))))))
      forms)))

(cmd/command {:command ::run-dis
              :desc "Idiocheck: Run dis"
              :exec (fn []
											(when-let [ed (editor-pool/last-active)]
                        (println (read-all-forms-in-editor ed))))})

