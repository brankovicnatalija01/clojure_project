(ns clj-project.models.friends
  (:require [clj-project.models.users :refer [users]])) 

(def friends (atom {}))

(defn add-friend [creator username name surname email balance]
  (if (contains? @users creator) 
    (do
      (swap! friends assoc username {:creator creator
                                     :name name
                                     :surname surname
                                     :email email
                                     :balance balance})
      (println (str "Friend '" username "' added successfully.")))
    (println (str "Creator '" creator "' does not exist in the system."))))

(defn show-friends-by-user [creator]
  (if (contains? @users creator)
    (let [user-friends (filter (fn [[_ friend]] (= (:creator friend) creator)) @friends)]
      (if (empty? user-friends)
        (println (str "No friends found for user: " creator))
        (doseq [[_ friend] user-friends]
          (println (:name friend) (:surname friend) "-" (:email friend) "- Balance:" (:balance friend)))))
    (println (str "User '" creator "' does not exist in the system."))))

(defn remove-friend [username]
  (if (contains? @friends username)
    (do
      (swap! friends dissoc username)
      (println (str "Friend with username '" username "' has been removed.")))
    (println (str "Friend with username '" username "' does not exist."))))