(ns clj-project.users)

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
