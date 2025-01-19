(ns clj-project.api.routes
(:require
 [clj-project.api.friends :refer [add-friend-handler get-friends-handler]]
 [clj-project.api.login :refer [login-handler]]
 [reitit.ring :as ring]
 [ring.middleware.cors :refer [wrap-cors]]
 [ring.middleware.json :as middleware]
 [ring.middleware.session :refer [wrap-session]]
 [ring.middleware.session.memory :refer [memory-store]])) 

(defn wrap-session-debug [handler]
  (fn [req]
    (let [response (handler req)]
      (println "Request session:" (:session req))
      (println "Response session:" (:session response))
      response)))

(defn method-not-allowed-handler [req]
  {:status 405
   :headers {"Content-Type" "application/json"}
   :body {:error "Method not allowed"}})

(defn options-handler [_]
  {:status 204 ;; No Content
   :headers {"Access-Control-Allow-Origin" "http://localhost:8000"
             "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS"
             "Access-Control-Allow-Headers" "Content-Type, Authorization"
             "Access-Control-Allow-Credentials" "true"}})

(defn auth-middleware [handler]
  (fn [req]
    (println "Auth middleware triggered" (:session req))
    (if-let [user (:username (:session req))] 
      (handler (assoc req :creator user)) 
      {:status 401
       :headers {"Content-Type" "application/json"}
       :body {:message "Unauthorized"}})))

(defn app []
  (-> (ring/ring-handler
       (ring/router
        [["/api/login" {:post login-handler
                        :options options-handler}] 
         ["/api/friends" {:post add-friend-handler
                          ;:middleware [auth-middleware]
                          :options options-handler
                          }]
         ["/api/friends/:creator" {:get get-friends-handler}]]) 
       (ring/create-default-handler
        {:method-not-allowed method-not-allowed-handler}))
      wrap-session-debug
      (wrap-session {:store (memory-store)
               :cookie-attrs {:http-only true 
                              :same-site :lax 
                              :secure false}})
      (wrap-cors
       :access-control-allow-origin [#".*"]
       :access-control-allow-methods [:get :post :put :delete :options]
       :access-control-allow-headers ["Content-Type"]
       )
      (middleware/wrap-json-body {:keywords? true})
      (middleware/wrap-json-response)))



