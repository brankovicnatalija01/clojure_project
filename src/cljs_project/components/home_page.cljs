(ns cljs-project.components.home-page 
  (:require [cljs-project.components.add-friend-form :as add-friend-form]
            [cljs-project.components.login-form :as login-form]
            [cljs-project.components.friends-list :as friend-list]))

(defn home-page []
  [:div {:style {:display "flex"
                 :flex-direction "row" 
                 :justify-content "space-between" 
                 :align-items "flex-start" 
                 :height "100vh"
                 :background-color "#e8f5e9"
                 :padding "20px"}}
   [:div {:style {:flex "1" 
                  :margin-right "20px"}} 
    [friend-list/friend-list]]

   [:div {:style {:flex "2" 
                  :display "flex"
                  :justify-content "center"
                  :align-items "center"}}
    [add-friend-form/add-friend-form]]])


