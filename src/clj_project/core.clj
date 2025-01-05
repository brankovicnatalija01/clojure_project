(ns clj-project.core
  (:require [clj-project.users :as users]
            [clj-project.friends :as friends]
            [clj-project.expenses :as expenses]
            [clj-project.db :as db]))

(defn -main []
  (println "Welcome to the Expense Sharing App!")
  ;; Test functions
  (users/add-user "Pera" "Peric" "perapera" "password123" "pera.pera@example.com")
  (friends/add-friend "perapera" "jovanovic" "Jovan" "Jovanovic" "jovan@example.com" 300)
  (expenses/add-expense "perapera" "jovanovic" 200 "perapera" "2025-01-01" "Dinner"))


(db/connect!)
(db/disconnect!)