(ns clj-project.api.login
  (:require [reitit.ring :as ring]
            [clj-project.models.users :as users]))

(defn login-handler [req]
  (let [body (:body req)
        username (get body :username)
        password (get body :password)]
    (if (and username password)
      (let [user (users/get-user-db username)]
        (if (and user (= (:password user) password))
          (do
            (println "User logged in, setting session:" {:username username}) 
            {:status 200
             :headers {"Content-Type" "application/json"}
             :session {:username username} 
             :body {:message "Login successful"}})
          {:status 401
           :headers {"Content-Type" "application/json"}
           :body {:message "Invalid username or password"}}))
      {:status 400
       :headers {"Content-Type" "application/json"}
       :body {:message "Invalid request payload"}})))




