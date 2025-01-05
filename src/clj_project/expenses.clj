(ns clj-project.expenses
  (:require [clj-project.friends :refer [friends]]))

(def expenses (atom []))

(defn add-expense [username friend-username amount payer date description]
  (if (and (contains? @friends friend-username))
    (do
      (swap! expenses conj {:username username
                            :friend-username friend-username
                            :amount amount
                            :payer payer
                            :date date
                            :description description})
      (swap! friends update friend-username
             (fn [friend]
               (update friend :balance
                       (fn [balance]
                         (if (= payer username)
                           (+ balance (/ amount 2))
                           (- balance (/ amount 2)))))))
      (println (str "Expense added. New balance for friend '" friend-username 
                    "': " (:balance (@friends friend-username)))))
    (println "Invalid user or friend username.")))

(defn show-expenses-for-user [username]
  (let [user-expenses (filter #(= (:username %) username) @expenses)]
    (if (empty? user-expenses)
      (println (str "No expenses found for user: " username))
      (doseq [expense user-expenses]
        (println (str "Date: " (:date expense)
                      ", Description: " (:description expense)
                      ", Amount: " (:amount expense)
                      ", Payer: " (:payer expense)
                      ", Friend: " (:friend-username expense)))))))
