(ns cljs-project.components.app-state
  (:require [reagent.core :as r]))


(defonce current-page (r/atom :login))