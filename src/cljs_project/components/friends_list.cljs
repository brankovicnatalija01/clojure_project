(ns cljs-project.components.friends-list
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]
            [clj-project.components.login-form :refer [logged-in-username]]))

(let [username @logged-in-username] 
  (println "Current logged-in username:" username))

(defn friend-item [friend]
  [:div {:style {:border "1px solid #ddd"
                 :border-radius "8px"
                 :padding "15px"
                 :margin-bottom "10px"
                 :background-color "#fff"
                 :box-shadow "0 4px 6px rgba(0, 0, 0, 0.1)"
                 :text-align "left"}}
   [:p {:style {:font-weight "bold"
                :margin "0"
                :font-size "16px"}} (:username friend)] 
   [:p {:style {:margin "5px 0 0 0"
                :color "#555"
                :font-size "14px"}} 
    (str (:name friend) " " (:surname friend))]
   [:p {:style {:margin "5px 0 0 0"
                :color "#777"
                :font-size "14px"}} 
    (str "Balance: $" (:balance friend))]])

(defn friend-list []
  (let [friends (r/atom nil)            
        error-message (r/atom nil)      
        current-page (r/atom 1)         
        items-per-page 5]               
    
    (defn fetch-friends []
      (GET "http://localhost:4000/api/friends/username"
           {:with-credentials? true
            :response-format :json
            :keywords? true
            :handler (fn [response]
                       (reset! friends response)) 
            :error-handler (fn [error]
                             (reset! error-message "Failed to load friends. Please try again."))}))

    (fetch-friends)

    (fn []
      (let [start (* (- @current-page 1) items-per-page)
            end (min (+ start items-per-page) (count @friends))
            paginated-friends (subvec (vec @friends) start end)] ;
        [:div {:style {:margin "20px auto"
                       :width "60%"
                       :background-color "#f9f9f9"
                       :padding "20px"
                       :border-radius "8px"
                       :box-shadow "0 4px 6px rgba(0, 0, 0, 0.1)"}}
         [:h1 {:style {:text-align "center"
                       :color "#333"
                       :margin-bottom "20px"}} "Friends List"]
         (if @error-message
           [:p {:style {:color "red"}} @error-message]
           (if @friends
             [:<>
              [:div {:style {:display "flex"
                             :flex-direction "column"
                             :gap "10px"}} 
               (for [friend paginated-friends]
                 ^{:key (:_id friend)} [friend-item friend])]
              [:div {:style {:display "flex"
                             :justify-content "center"
                             :align-items "center"
                             :gap "20px" 
                             :margin-top "20px"}}
               [:button {:on-click #(swap! current-page dec)
                         :disabled (= @current-page 1)
                         :style {:padding "10px 20px" 
                                 :width "100px"
                                 :background-color (if (= @current-page 1) "#ccc" "#008000")
                                 :color "white"
                                 :border "none"
                                 :border-radius "5px"
                                 :cursor (if (= @current-page 1) "not-allowed" "pointer")}}
                "Previous"]
               [:span {:style {:font-size "16px"
                               :font-weight "bold"
                               :color "#333"}}
                (str "Page " @current-page " of " (Math/ceil (/ (count @friends) items-per-page)))]
               [:button {:on-click #(swap! current-page inc)
                         :disabled (>= (* @current-page items-per-page) (count @friends))
                         :style {:padding "10px 20px" 
                                 :width "100px"
                                 :background-color (if (>= (* @current-page items-per-page) (count @friends)) "#ccc" "#008000")
                                 :color "white"
                                 :border "none"
                                 :border-radius "5px"
                                 :cursor (if (>= (* @current-page items-per-page) (count @friends)) "not-allowed" "pointer")}}
                "Next"]]]
             [:p "Loading friends..."]))]))))


