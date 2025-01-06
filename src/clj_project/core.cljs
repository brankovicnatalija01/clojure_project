(ns clj-project.core
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [ajax.core :refer [POST]]))

(defonce root (rdom/create-root (.getElementById js/document "app")))

(defn modal [message on-close]
  [:div {:style {:position "fixed"
                 :top 0
                 :left 0
                 :width "100%"
                 :height "100%"
                 :background-color "rgba(0, 0, 0, 0.5)"
                 :display "flex"
                 :justify-content "center"
                 :align-items "center"
                 :z-index 1000}}
   [:div {:style {:background-color "white"
                  :padding "20px"
                  :border-radius "10px"
                  :box-shadow "0 4px 8px rgba(0,0,0,0.2)"
                  :width "300px"
                  :text-align "center"}}
    [:p {:style {:font-size "16px"
                 :margin-bottom "20px"}} message]
    [:button {:on-click on-close
              :style {:padding "10px 20px"
                      :background-color "#007BFF"
                      :color "white"
                      :border "none"
                      :border-radius "5px"
                      :cursor "pointer"}} "OK"]]])

(defn login-form []
  (let [username (r/atom "")
        password (r/atom "")
        modal-message (r/atom nil)] 

    (fn []
      [:div {:style {:display "flex"
                     :justify-content "center"
                     :align-items "center"
                     :height "100vh"
                     :background-color "#f5f5f5"}}
       [:div {:style {:width "300px"
                      :padding "20px"
                      :border-radius "10px"
                      :box-shadow "0 4px 8px rgba(0,0,0,0.2)"
                      :background-color "white"}}
        [:h1 {:style {:text-align "center"
                      :margin-bottom "20px"}} "Login"]
        [:form {:on-submit (fn [e]
                             (.preventDefault e) 
                             (POST "http://localhost:4000/api/login"
                                   {:params {:username @username :password @password}
                                    :format :json
                                    :response-format :raw 
                                    :headers {"Content-Type" "application/json"}
                                    :handler (fn [_]
                                               (reset! modal-message "Successfully logged in!"))
                                    :error-handler (fn [_]
                                                     (reset! modal-message "Invalid username or password."))}))}
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Username"]
          [:input {:type "text"
                   :value @username
                   :on-change #(reset! username (-> % .-target .-value))
                   :style {:width "100%"
                           :padding "10px"
                           :border "1px solid #ccc"
                           :border-radius "5px"}}]]
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Password"]
          [:input {:type "password"
                   :value @password
                   :on-change #(reset! password (-> % .-target .-value))
                   :style {:width "100%"
                           :padding "10px"
                           :border "1px solid #ccc"
                           :border-radius "5px"}}]]
         [:button {:type "submit"
                   :style {:width "100%"
                           :padding "10px"
                           :background-color "#007BFF"
                           :color "white"
                           :border "none"
                           :border-radius "5px"
                           :cursor "pointer"}} "Login"]]]
        (when @modal-message
          [modal @modal-message #(reset! modal-message nil)])])))

(defn init []
  (rdom/render root [login-form]))




