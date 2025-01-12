
(ns clj-project.api.friends
  (:require [clj-project.models.friends :as friends]
            [clj-project.models.users :refer [users]]))

(defn add-friend-handler [req]
  (let [creator (:creator req) ;; Creator from middleware
        body (:body req)
        username (get body :username)
        name (get body :name)
        surname (get body :surname)
        email (get body :email)
        balance (get body :balance)]
    (if (and creator username name surname email balance) 
      (let [result (friends/add-friend-db creator username name surname email balance)]
        (case (:status result)
          :exists {:status 409 ;; Conflict
                   :headers {"Content-Type" "application/json"}
                   :body {:message (:message result)}}
          :success {:status 201 ;; Created
                    :headers {"Content-Type" "application/json"}
                    :body {:message (:message result)}}
          {:status 500 ;; Internal Server Error
           :headers {"Content-Type" "application/json"}
           :body {:message "Unexpected error occurred"}}))
      {:status 400
       :headers {"Content-Type" "application/json"}
       :body {:message "Invalid request payload"}})))

