(ns clojure-projekat.core
  (:gen-class))

(def closed-parking-lots "nis-parking-zatvorena-parkiralista-tac.csv")

(def parking-zone1 "nis-parking-zona1-tac.csv")

(def parking-zone2  "nis-parking-zona2-tac.csv")

(slurp parking-zone1)

(defn parse
  "Convert a CSV into rows of columns"
  [string]
  (map #(clojure.string/split % #",")
       (clojure.string/split string #"\n")))


(parse (slurp parking-zone1))


(defn row-to-map
  "Convert a row to a map with specific keys"
  [[coordinates
    street
    parking-code
    parking-zone
    hourly-rate
    sms-hourly-payment
    time-limit
    multi-hour-rate
    sms-multi-hour-payment
    parking-type
    latitude
    longitude
    total-spaces
    disabled-spaces
    reserved-spaces]
  ]
  {:coordinates coordinates
   :street street
   :parking-code parking-code
   :parking-zone parking-zone
   :hourly-rate hourly-rate
   :sms-hourly-payment sms-hourly-payment
   :time-limit time-limit
   :multi-hour-rate multi-hour-rate
   :sms-multi-hour-payment sms-multi-hour-payment
   :parking-type parking-type
   :latitude latitude
   :longitude longitude
   :total-spaces total-spaces
   :disabled-spaces disabled-spaces
   :reserved-spaces reserved-spaces}
)

(defn create-hash-map
  "Convert parsed CSV data into a hash map with specific keys"
  [parsed-data]
  (map row-to-map parsed-data))

(def parking-zone1-data (create-hash-map (parse (slurp parking-zone1))))
parking-zone1-data

(def parking-zone2-data (create-hash-map (parse (slurp parking-zone2))))
parking-zone2-data

(def closed-parking-lots-data (create-hash-map (parse (slurp closed-parking-lots))))
closed-parking-lots-data