(ns clj-project.core-test
  (:require [clojure.test :refer :all]
            [midje.sweet :refer :all]
            [clj-project.core :refer :all]))

(fact "Basic function check"
  (+ 1 2) => 3)

(fact "Adding a new user works correctly"
  (add-user "Pera" "Peric" "perapera" "password123" "pera@gmail.com") 
  @users => (contains {"perapera" {:name "Pera"
                                   :surname "Peric"
                                   :password "password123"
                                   :email "pera@gmail.com"
                                   :friends []}}))

(fact "Removing an existing user works correctly"
  ;; Add a user to the `users` atom before testing removal
  (swap! users assoc "perapera" {:name "Pera"
                                 :surname "Peric"
                                 :password "password123"
                                 :email "pera@gmail.com"
                                 :friends []})
  (remove-user "perapera") 
  (contains? @users "perapera") => false)

(fact "Adding a new friend works correctly"
  (add-friend "perapera" "anaana" "Ana" "Anic" "ana@gmail.com" 100)
  @friends => (contains {"anaana" {:creator "perapera"
                                      :name "Ana"
                                      :surname "Anic"
                                      :email "ana@gmail.com"
                                      :balance 100}}))

(fact "Removing an existing friend works correctly"
  ;; Add a friend to the `friends` atom before testing removal
  (swap! friends assoc "anaana" {:creator "perapera"
                                    :name "Ana"
                                    :surname "Anic"
                                    :email "ana@gmail.com"
                                    :balance 100}) 
  (remove-friend "anaana") 
  (contains? @friends "anaana") => false)

(fact "Showing friends by user works correctly"
  ;; Add friends to the `friends` atom
  (swap! friends assoc
         "friend1" {:creator "user123"
                    :name "Milica"
                    :surname "Ilic"
                    :email "milica@gmail.com"
                    :balance 100}
         "friend2" {:creator "user123"
                    :name "Jana"
                    :surname "Janic"
                    :email "jana@gmail.com"
                    :balance 200}
         "friend3" {:creator "anotherUser"
                    :name "Nikola"
                    :surname "Nikolic"
                    :email "nikola@gmail.com"
                    :balance 50})
  (str (with-out-str (show-friends-by-user "user123")))
  => (contains "Milica Ilic - milica@gmail.com - Balance: 100\nJana Janic - jana@gmail.com - Balance: 200\n"))


(add-user "Mila" "Markovic" "mila123" "password123" "mila.markovic@gmail.com")
(add-friend "mila123" "milan123" "Milan" "Jovanovic" "milan.jovanovic@gmail.com" 0)


(fact "Adding a new expense works correctly"
  ; Add a new expense
  (add-expense "mila123" "milan123" 200 "mila123" "2024-11-21" "Lunch with Milan") 
      
  @expenses => (contains [{:username "mila123"
                           :friend-username "milan123"
                           :amount 200
                           :payer "mila123"
                           :date "2024-11-21"
                           :description "Lunch with Milan"}])
)


