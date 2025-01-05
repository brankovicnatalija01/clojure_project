(ns clj-project.api
  (:require [reitit.ring :as ring]
            [ring.middleware.json :as middleware]
            [clj-project.users :as users]))

(defn login-handler [req]
  (let [body (:body req)
        username (get body :username)
        password (get body :password)]
    (if (and username password) ;; Check if username and password are provided
      (let [user (users/get-user-db username)]
        (if (and user (= (:password user) password)) 
          {:status 200
           :headers {"Content-Type" "application/json"}
           :body {:message "Login successful"}}
          {:status 401
           :headers {"Content-Type" "application/json"}
           :body {:message "Invalid username or password"}}))
      {:status 400
       :headers {"Content-Type" "application/json"}
       :body {:message "Invalid request payload"}})))

(defn method-not-allowed-handler [req]
  ;; Custom handler for requests using unsupported HTTP methods
  {:status 405
   :headers {"Content-Type" "application/json"}
   :body {:error "Method not allowed"}})

(defn app []
  ;; Configure the application with routes and middleware
  (ring/ring-handler
   (ring/router
    [["/api/login" {:post login-handler}]]) ;
   (ring/create-default-handler
    {:method-not-allowed method-not-allowed-handler})
   {:middleware [middleware/wrap-json-body
                 middleware/wrap-json-response]}))

