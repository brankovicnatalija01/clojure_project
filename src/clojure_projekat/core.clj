(ns clojure-projekat.core
  (:gen-class))

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

(add-user "Pera" "Peric" "perapera" "password123" "pera.pera@example.com")

users

(add-user "Ana" "Ilic" "anana" "password123" "ana.ana@example.com")