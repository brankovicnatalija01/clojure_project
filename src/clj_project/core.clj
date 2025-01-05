(ns clj-project.core
  (:require [clj-project.users :as users]
            [clj-project.friends :as friends]
            [clj-project.expenses :as expenses]
            [clj-project.db :as db]
            [ring.adapter.jetty :as jetty]
            [clj-project.api :as api]))


(defn -main []
  ;; Povezivanje sa bazom
  (db/connect!)

  ;; Dodavanje inicijalnih podataka
  (users/add-user-db "Jane" "Doe" "janedoe" "password123" "jane.doe@example.com")

  ;; Pokretanje Jetty servera
 (jetty/run-jetty (api/app) {:port 4000 :join? true})
  (println "Server running on http://localhost:4000")


  )
            
