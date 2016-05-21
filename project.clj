(defproject lt-clojure-linter "0.0.1"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [kibit-cljs "0.1.1"]
                 [org.clojure/core.logic "0.8.7"]]
  :profiles {:expr-checker {:dependencies [[org.clojure/clojurescript "0.0-2138"]]
                            :plugins [[lein-cljsbuild "1.0.1"]]
                            :cljsbuild {:builds [{:id "expr-checker-module"
                                                  :source-paths ["src/lt/plugins/lt_clojure_linter" "src/cljs"]
                                                  :compiler {:optimizations :simple
                                                             :output-wrapper true
                                                             :output-to "expr-checker-module.js"
                                                             :pretty-print true }}]}}}
  )
