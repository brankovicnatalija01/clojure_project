(ns cljs-project.components.home-page 
  (:require [cljs-project.components.add-friend-form :as add-friend-form]
            [cljs-project.components.login-form :as login-form]))

;; (defn home-page []
;;   [:div {:style {:display "flex"
;;                  :flex-direction "column"
;;                  :justify-content "center"
;;                  :align-items "center"
;;                  :height "100vh"
;;                  :background-color "#e8f5e9"}}
;;    [:h1 "Welcome to the Main Application Page!"]
;;    [:div {:style {:margin-top "150px"}}
;;     [add-friend-form/add-friend-form]]])

(defn home-page []
  [:div {:style {:display "flex"
                 :flex-direction "column"
                 :justify-content "center"
                 :align-items "center"
                 :height "100vh"
                 :background-color "#e8f5e9"}}
   [:div {:style {:margin-top "150px"}}
    [add-friend-form/add-friend-form]]])


