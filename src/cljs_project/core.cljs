(ns cljs-project.core
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [cljs-project.components.login-form :refer [login-form]]
            [cljs-project.components.home-page :refer [home-page]]
            [cljs-project.components.app-state :refer [current-page]]))

(defn app []
  (case @current-page
    :login [login-form] ;; Prikaži login formu
    :home [home-page]   ;; Prikaži glavnu stranicu
    [:div "Page not found"])) ;; Fallback za nepoznate vrednosti

(defonce root (rdom/create-root (.getElementById js/document "app")))
(defn init []
  (rdom/render root [app]))



