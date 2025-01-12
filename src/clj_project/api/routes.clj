(ns clj-project.api.routes
(:require [reitit.ring :as ring]
            [ring.middleware.json :as middleware]
            [ring.middleware.session :refer [wrap-session]]
            [ring.middleware.cors :refer [wrap-cors]] 
            [clj-project.models.users :as users]
            [clj-project.api.login :refer [login-handler]]
            [clj-project.api.friends :refer [add-friend-handler]])) 

(defn method-not-allowed-handler [req]
  {:status 405
   :headers {"Content-Type" "application/json"}
   :body {:error "Method not allowed"}})

(defn auth-middleware [handler]
  (fn [req]
    (println "Auth middleware triggered" (:session req))
    (if-let [user (:username (:session req))] ;; Check if the user is logged in
      (handler (assoc req :creator user)) 
      {:status 401
       :headers {"Content-Type" "application/json"}
       :body {:message "Unauthorized"}})))

(defn app []
  (-> (ring/ring-handler
       (ring/router
        [["/api/login" {:post login-handler}] ;; Ruta za logovanje, bez auth-middleware
         ["/api/friends" {:post add-friend-handler
                          :middleware [auth-middleware]}]]) ;; Ruta za prijatelje sa auth-middleware
       (ring/create-default-handler
        {:method-not-allowed method-not-allowed-handler}))
      (wrap-session) ;; Omogući sesije
      (wrap-cors
       :access-control-allow-origin [#".*"]
       :access-control-allow-methods [:get :post :put :delete]
       :access-control-allow-headers ["Content-Type"])
      (middleware/wrap-json-body {:keywords? true})
      (middleware/wrap-json-response)))




