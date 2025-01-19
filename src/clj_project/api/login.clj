(ns clj-project.api.login
  (:require [reitit.ring :as ring]
            [clj-project.models.users :as users]
            [ring.util.response :refer [response]]))

(def current-creator (atom nil)) 

(defn login-handler [req]
  (let [body (:body req)
        username (get body :username)
        password (get body :password)]
    (if (and username password)
      (let [user (users/get-user-db username)] ;; Proverava korisnika u bazi
        (if (and user (= (:password user) password))
          (do
            (println "User logged in, setting session:" {:username username}) 
            (reset! current-creator username)
            (-> (response {:message "Login successful"}) ;; Kreiramo odgovor sa porukom
                (assoc :session {:username username
                                 :creator username}))) ;; Dodajemo korisnika u sesiju
          {:status 401
           :headers {"Content-Type" "application/json"}
           :body {:message "Invalid username or password"}}))
      {:status 400
       :headers {"Content-Type" "application/json"}
       :body {:message "Invalid request payload"}})))




