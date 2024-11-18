(ns clojure-projekat.core-test
  (:require [clojure.test :refer :all]
            [midje.sweet :refer :all]
            [clojure-projekat.core :refer :all]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))

(fact "Provera osnovne funkcije"
  (+ 1 2) => 3)