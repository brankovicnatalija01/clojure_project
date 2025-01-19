
(ns clj-project.api.friends
  (:require
   [clj-project.api.login :refer [current-creator]]
   [clj-project.models.friends :as friends]))

(defn add-friend-handler [req]
  (let [creator @current-creator ;; Dobijamo `:creator` iz sesije
        body (:body req)
        username (get body :username)
        name (get body :name)
        surname (get body :surname)
        email (get body :email)
        balance (get body :balance)]
    (println "Creator from session:" creator)
    (println "Add friend payload:" username name surname email balance)
    (if (and creator username name surname email balance) 
      (let [result (friends/add-friend-db creator username name surname email balance)]
        (println "Add friend result:" result)
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


