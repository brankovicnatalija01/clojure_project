(ns clj-project.core
  (:require [clj-project.models.users :as users]
            [clj-project.models.friends :as friends]
            [clj-project.models.expenses :as expenses]
            [clj-project.db.db :as db]
            [ring.adapter.jetty :as jetty]
            [clj-project.api.api :as api]
            [cljs-project.components.home-page :refer [home-page]]
            [cljs-project.components.login-form :refer [login-form]]))


(defn -main []
  ;; Povezivanje sa bazom
  (db/connect!)

  ;; Dodavanje inicijalnih podataka
  (users/add-user-db "Jane" "Doe" "janedoe" "password123" "jane.doe@example.com")

  ;; Pokretanje Jetty servera
 (jetty/run-jetty (api/app) {:port 4000 :join? true})
  (println "Server running on http://localhost:4000")


  )

