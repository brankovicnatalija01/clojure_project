(ns clj-project.users
  (:require [monger.collection :as mc]
            [clj-project.db :refer [db]]))

(def users (atom {}))

(defn add-user [name surname username password email]
  (if (contains? @users username)
    (println (str "User with username '" username "' already exists."))
    (do
      (swap! users assoc username {:name name
                                   :surname surname
                                   :password password
                                   :email email
                                   :friends []})
      (println (str "User '" username "' added successfully.")))))

(defn remove-user [username]
  (if (contains? @users username)
    (do
      (swap! users dissoc username)
      (println (str "User with username '" username "' has been removed.")))
    (println (str "User with username '" username "' does not exist."))))

(defn add-user-db [name surname username password email]
  (if (mc/find-one-as-map @db "users" {:username username})
    (println (str "User with username '" username "' already exists."))
    (do
      (mc/insert @db "users" {:name name
                              :surname surname
                              :username username
                              :password password
                              :email email
                              :friends []})
      (println (str "User '" username "' added successfully to the database.")))))

(defn get-user-db [username]
  (let [user (mc/find-one-as-map @db "users" {:username username})]
    (if user
      (do
        (println (str "Found user in database: " user))
        user)
      (println (str "No user found in database with username '" username "'")))))

(defn remove-user-db [username]
  (if (mc/find-one-as-map @db "users" {:username username})
    (do
      (mc/remove @db "users" {:username username})
      (println (str "User with username '" username "' has been removed from the database.")))
    (println (str "User with username '" username "' does not exist in the database."))))
