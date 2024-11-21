(ns clj-project.core-test
  (:require [clojure.test :refer :all]
            [midje.sweet :refer :all]
            [clj-project.core :refer :all]))

(fact "Provera osnovne funkcije"
  (+ 1 2) => 3)

(fact "Adding a new user works correctly"
  (add-user "Pera" "Peric" "perapera" "password123" "pera.pera@example.com")
  @users => (contains {"perapera" {:name "Pera"
                                   :surname "Peric"
                                   :password "password123"
                                   :email "pera.pera@example.com"
                                   :friends []}}))