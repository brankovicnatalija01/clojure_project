(ns clj-project.models.friends
  (:require [clj-project.models.users :refer [users]]
            [clj-project.db.db :refer [db]]
            [monger.collection :as mc])) 

(def friends (atom {}))

;; (defn add-friend [creator username name surname email balance]
;;   (if (contains? @users creator) 
;;     (do
;;       (swap! friends assoc username {:creator creator
;;                                      :name name
;;                                      :surname surname
;;                                      :email email
;;                                      :balance balance})
;;       (println (str "Friend '" username "' added successfully.")))
;;     (println (str "Creator '" creator "' does not exist in the system."))))

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


(defn add-friend-db [creator username name surname email balance]
  (let [existing-friend (mc/find-one-as-map @db "friends" {:creator creator :username username})]
    (if existing-friend
      {:status :exists ;; Friend already exists
       :message (str "Friend '" username "' already exists for user '" creator "'")}
      (do
        (mc/insert @db "friends" {:creator creator
                                  :username username
                                  :name name
                                  :surname surname
                                  :email email
                                  :balance balance})
        (mc/update @db "users"
                   {:username creator}
                   {"$push" {:friends {:username username
                                       :name name
                                       :surname surname
                                       :email email}}})
        {:status :success 
         :message (str "Friend '" username "' added successfully.")}))))