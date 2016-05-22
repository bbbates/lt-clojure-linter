(defproject lt-clojure-linter "0.0.1"
  :dependencies [[org.clojure/clojure "1.5.1"]]
  ;;TODO: use clojure.tools.reader.....
  :profiles {:expr-checker {:dependencies [[org.clojure/clojurescript "1.8.51"]
                                           [org.clojure/clojure "1.8.0"]
                                           [kibit-cljs "0.1.2"]]
                            :plugins [[lein-cljsbuild "1.1.3"]]
                            :cljsbuild {:builds [{:id "expr-checker-module"
                                                  :source-paths ["src-module"]
                                                  :compiler {:optimizations :simple
                                                             :output-wrapper true
                                                             :output-to "expr-checker-module.js"
                                                             :pretty-print true }}]}}}
  )
