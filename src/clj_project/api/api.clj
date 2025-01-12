(ns clj-project.api.api
  (:require [reitit.ring :as ring]
            [ring.middleware.json :as middleware]
            [ring.middleware.cors :refer [wrap-cors]] 
            [clj-project.users :as users]))

(defn login-handler [req]
  (let [body (:body req)
        username (get body :username)
        password (get body :password)]
    (if (and username password) 
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
  {:status 405
   :headers {"Content-Type" "application/json"}
   :body {:error "Method not allowed"}})

(defn app []
  (-> (ring/ring-handler
       (ring/router
        [["/api/login" {:post login-handler}]])
       (ring/create-default-handler
        {:method-not-allowed method-not-allowed-handler}))
      (wrap-cors
       :access-control-allow-origin [#".*"] 
       :access-control-allow-methods [:get :post :put :delete] 
       :access-control-allow-headers ["Content-Type"]) 
      (middleware/wrap-json-body {:keywords? true}) 
      (middleware/wrap-json-response))) 



