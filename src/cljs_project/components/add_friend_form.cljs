(ns cljs-project.components.add-friend-form
  (:require [reagent.core :as r]
            [ajax.core :refer [POST]]))

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

(defn add-friend-form []
  (let [form-data (r/atom {:username ""
                           :name ""
                           :surname ""
                           :email ""
                           :balance 0})
        modal-message (r/atom nil)]
    (fn []
      [:div {:style {:display "flex"
                     :justify-content "center"
                     :align-items "center"
                     :height "100vh"
                     :background-color "#f5f5f5"}}
       [:div {:style {:width "350px"
                      :padding "20px"
                      :border-radius "10px"
                      :box-shadow "0 4px 8px rgba(0,0,0,0.2)"
                      :background-color "white"}}
        [:h1 {:style {:text-align "center"
                      :margin-bottom "20px"}} "Add a Friend"]
        [:form {:on-submit (fn [e]
                             (.preventDefault e)
                             (POST "http://localhost:4000/api/friends"
                                   {:params @form-data
                                    :with-credentials? true
                                    :format :json
                                    :response-format :raw
                                    :headers {"Content-Type" "application/json"}
                                    :handler (fn [_]
                                               (reset! modal-message "Friend added successfully!")
                                               (reset! form-data {:username ""
                                                                  :name ""
                                                                  :surname ""
                                                                  :email ""
                                                                  :balance 0}))
                                    :error-handler (fn [_]
                                                     (reset! modal-message "Failed to add friend. Please try again."))}))}
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Username"]
          [:input {:type "text"
                   :value (:username @form-data)
                   :on-change #(swap! form-data assoc :username (-> % .-target .-value))
                   :style {:width "94%"
                           :padding "10px"
                           :border "1px solid #ccc"
                           :border-radius "5px"}}]]
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Name"]
          [:input {:type "text"
                   :value (:name @form-data)
                   :on-change #(swap! form-data assoc :name (-> % .-target .-value))
                   :style {:width "94%"
                           :padding "10px"
                           :border "1px solid #ccc"
                           :border-radius "5px"}}]]
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Surname"]
          [:input {:type "text"
                   :value (:surname @form-data)
                   :on-change #(swap! form-data assoc :surname (-> % .-target .-value))
                   :style {:width "94%"
                           :padding "10px"
                           :border "1px solid #ccc"
                           :border-radius "5px"}}]]
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Email"]
          [:input {:type "email"
                   :value (:email @form-data)
                   :on-change #(swap! form-data assoc :email (-> % .-target .-value))
                   :style {:width "94%"
                           :padding "10px"
                           :border "1px solid #ccc"
                           :border-radius "5px"}}]]
         [:div {:style {:margin-bottom "15px"}}
          [:label {:style {:display "block"
                           :margin-bottom "5px"}} "Balance"]
          [:input {:type "number"
                   :value (:balance @form-data)
                   :on-change #(swap! form-data assoc :balance (-> % .-target .-value))
                   :style {:width "94%"
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
                           :cursor "pointer"}} "Add Friend"]]]
        (when @modal-message
          [modal @modal-message #(reset! modal-message nil)])])))


