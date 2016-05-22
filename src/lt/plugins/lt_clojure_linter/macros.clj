(ns lt.plugins.lt-clojure-linter.macros)

(defmacro background-with-pool
  "Register given func to run on background thread pool"
  [pool func]
  `(lt.plugins.lt-clojure-linter.threads/pool-thread* ~pool
    (fn ~(gensym "tfun") []
      (let [orig# (js/argsArray js/arguments)
            msg# (.shift orig#)
            args# (.map orig# cljs.reader/read-string)
            ~'raise (fn [obj# k# v#]
                     (js/_send obj# k# (pr-str v#) "clj"))]
        (.unshift args# (.-obj msg#))
        (.apply ~func nil args#)))))
