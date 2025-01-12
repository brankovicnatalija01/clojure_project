(ns cljs-project.components.home-page)

(defn home-page []
  [:div {:style {:display "flex"
                 :justify-content "center"
                 :align-items "center"
                 :height "100vh"
                 :background-color "#e8f5e9"}}
   [:h1 "Welcome to the Main Application Page!"]])
