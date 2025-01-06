(defproject clj_project "0.1.0-SNAPSHOT"
  :description "Fullstack Clojure and ClojureScript project"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [com.novemberain/monger "3.5.0"]
                 [ring/ring-core "1.9.5"]
                 [ring/ring-json "0.5.1"]
                 [ring-cors "0.1.13"]
                 [metosin/reitit "0.5.18"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [reagent "1.2.0"]
                 [cljs-ajax "0.8.4"]
                 [org.clojure/clojurescript "1.10.844"]
                 [hiccup "2.0.0-alpha2"]
                 [cljs-ajax "0.8.4"]]
  :plugins [[lein-shadow "0.4.0"]] 
  :main ^:skip-aot clj-project.core
  :target-path "target/%s"
  :clean-targets ^{:protect false} ["target"
                                    "resources/public/js"] 
  :shadow-cljs {:nrepl true} 
  :profiles {:uberjar {:aot :all}}
)
