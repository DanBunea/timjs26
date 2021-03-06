(ns timjs26.core
  (:require
   [reagent.core :as r :refer [atom]]
   [cljs.core.async :refer [chan <! >! put! take! timeout ]]
   [ajax.core :refer [GET POST]]
   )
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))


(enable-console-print!)
(println "Edi1ts to  his te xt sh ould show  up in your developer console.")


(defn GET< [url]
  (let [ch (chan)]
         (GET url {:handler (fn [resp]
                              (put! ch resp))})
         ch))


(defn swapm! [x y]
  (swap! y (fn [xx] x)))



;;MODEL
(defonce model
  (r/atom
   {
    :title "Weather app with timeout!"
    :weather {
              :city "Timisoara"
              :temp "+3"
              }
    }))




;;CONTROLLER
(defn fetch-weather [query]
  (go
   (-> @model
       (assoc :title (str "Data for " query))
       (assoc :weather
         (let [data
               (alt!
                [(GET< (str " http://api.openweathermap.org/data/2.5/weather?appid=22f30c03f6fa4e96955fd942787dab02&q=" query))
                 (timeout 50)]
                ([v] v)
                )
               ]
           (print 1 data)
           (if (nil? data)
             {:temp "" :city "Operation timed out!"}
             ;;else
             {
              :temp (- (get-in data ["main" "temp"]) 273.15)
              :city query
              })))
       (swapm! model))))




;;VIEWS
(defn weather-component [city temp]
  [:div#weather
   [:h2#city city ]
   [:h3#temp temp]
   ])


(defn choose-city-component []
  (let [inner-state (r/atom {:text ""})]
    (fn []
      [:div
       [:input#txt_city
        {
         :type "text"
         :value (@inner-state :text)
         :on-change #(swap! inner-state assoc :text (.-value (.-target %)))
         }
        ]
       [:input#btn_go
        {
         :type "button"
         :value "GO"
         :on-click #(fetch-weather (@inner-state :text))
         }]
       ]
      )))


(defn app []
  [:h1 (get @model :title)
   [choose-city-component ]
   [weather-component (get-in @model [:weather :city]) (get-in @model [:weather :temp])]
   ])






(r/render-component [app]
  (. js/document (getElementById "app")))





(defn jsmodel []
  (clj->js @model))

(defn on-js-reload []
  )
