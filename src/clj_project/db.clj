(ns clj-project.db
  (:require [monger.core :as mg]
            [monger.collection :as mc]))

(defonce conn (atom nil))  
(defonce db (atom nil))    

(defn connect!
  []
  (let [connection (mg/connect)
        database (mg/get-db connection "expense-sharing")]  
    (reset! conn connection)
    (reset! db database)
    (println "Connected to MongoDB!")))

(defn disconnect!
  []
  (when @conn
    (mg/disconnect @conn)
    (reset! conn nil)
    (reset! db nil)
    (println "Disconnected from MongoDB!")))


