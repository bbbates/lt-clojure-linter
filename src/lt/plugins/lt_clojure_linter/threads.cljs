(ns
  ^{:doc "lt.objs.thread only allows a single child process. This namespace provides a pool."}
  lt.plugins.lt-clojure-linter.threads
  (:require [lt.objs.thread :as thread]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior background]]))

(def cpus (count ((:cpus (js->clj (js/require "os") :keywordize-keys true)))))

(object/object* ::pools
                :tags #{:thread-pools}
                :behaviors #{::kill-pools!}
                :pools [])

(def pools (object/create ::pools))

(object/object* ::pool
                :tags #{:thread-pool}
                :workers []
                :behaviors [::send-to-pool ::kill-pool!]
                :init (fn [this pool-size]
                        (object/update! pools [:pools] conj this)
                        (object/merge! this (assoc-in @this [:workers]
                                                      (repeatedly pool-size #(object/create :lt.objs.thread/worker-thread))))))

(defn create-pool
  []
  (object/create ::pool (inc cpus)))

;;TODO: detect unconnected workers in pool and reconnect
(defn send-to-all!
  [pool msg]
  (doseq [worker (:workers @pool)]
    (object/raise worker :try-send! msg)))

(defn send-to-worker!
  "Select a worker from the pool. If all worker queues are the same size, then select one at random."
  [pool msg]
  (let [queue-size-fn (comp count :queue deref)
         queue-sizes (map queue-size-fn (:workers @pool))]
    (object/raise
      (if (= (apply min queue-sizes) (apply max queue-sizes))
        (rand-nth (:workers @pool))
        (-> @pool :workers (sort-by queue-size-fn) first))
      :try-send! msg)))

(defn pool-thread* [pool func]
  (let [func-str (str "" func)
        n (gensym "theadfunc")] ;;trim off the errant return and outer function
    (send-to-all! pool {:msg "register"
                               :name n
                               :func func-str})
    (fn [obj & args]
      (send-to-worker! pool {:msg "call"
                               :name n
                               :obj (object/->id obj)
                               :params (map pr-str args)}))))


(behavior ::kill-pool!
          :triggers #{:kill-pool!}
          :reaction (fn [pool]
                      (let [workers (:workers @pool)]
                        (doseq [w workers] (object/raise! w :kill!)))))

(behavior ::kill-pools!
          :triggers #{:kill-pools!}
          :reaction (fn [pools]
                      (let [pools (:pools @pools)]
                        (doseq [p pools] (object/raise! p :kill-pool!)))))

(behavior ::shutdown-pools-on-close
          :triggers #{:closed}
          :reaction (fn [app]
                      (object/raise! pools :kill-pools!)))
