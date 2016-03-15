(ns timjs26.core
  (:require [reagent.core :as r :refer [atom]]))

(enable-console-print!)
(println "Edi1ts to  his te xt sh ould show  up in your developer console.")






;;MODEL
(defonce model
  (r/atom
   {
    :title "Weather app"
    :weather {
              :city "Timisoara"
              :temp "+3"
              }
    }))


;;VIEWS
(defn weather-component [city temp]
  [:div#weather
    [:h2#city city ]
    [:h3#temp temp]
   ])




(defn app []
  [:h1 (get @model :title)
   [weather-component (get-in @model [:weather :city]) (get-in @model [:weather :temp])]
   ])






(r/render-component [app]
  (. js/document (getElementById "app")))





(defn jsmodel []
  (clj->js @model))

(defn on-js-reload []
  )
