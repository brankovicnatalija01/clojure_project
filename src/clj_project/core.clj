(ns clj-project.core
  (:gen-class))

(def users (atom {}))


;Korisnik zeli da se registruje na sistem
(defn add-user [name surname username password email]
  (if (contains? @users username)
    (println (str "User with username '" username "' already exists."))
    (do
      (swap! users assoc username {:name name
                                   :surname surname
                                   :password password
                                   :email email
                                   :friends []})
      (println (str "User '" username "' added successfully.")))))

;(add-user "Pera" "Peric" "perapera" "password123" "pera.pera@example.com")
;users
;(add-user "Ana" "Ilic" "anana" "password123" "ana.ana@example.com")
;(add-user "Mika" "Mikic" "mikamika" "password456" "mika.mika@example.com")

(def friends (atom {}))

;Korisnik zeli da doda novog prijatelja
(defn add-friend [creator username name surname email balance]
  (swap! friends assoc username {:creator creator
                                 :name name
                                 :surname surname
                                 :email email
                                 :balance balance})
  (println (str "Friend '" username "' added successfully.")))

;(add-friend "perapera" "jovanovic" "Jovan" "Jovanovic" "jovan@example.com" 300)
;(add-friend "mikamika" "stojanovic" "Stojan" "Stojanovic" "stojan@example.com" -200)
;friends

;Korisnik zeli filtrira prijatelje prema korisniku koji ih je kreirao
(defn show-friends-by-user [creator]
  (let [user-friends (filter (fn [[_ friend]] (= (:creator friend) creator)) @friends)]
    (if (empty? user-friends)
      (println (str "No friends found for user: " creator))
      (doseq [[_ friend] user-friends]
        (println (:name friend) (:surname friend) "-" (:email friend) "- Balance:" (:balance friend))))))

;(show-friends-by-user "perapera")
;(add-friend "perapera" "milic" "Mila" "Milic" "mila@gmail.com" 300)

;Korisnik zeli da izbaci prijatelja iz liste prijatelja
(defn remove-friend [username]
  (if (contains? @friends username)
    (do
      (swap! friends dissoc username)
      (println (str "Friend with username '" username "' has been removed.")))
    (println (str "Friend with username '" username "' does not exist."))))

;(remove-friend "jovanovic")
;friends
;(add-friend "perapera" "anica123" "Anica" "Jovic" "anica@gmail.com" 0)
;(add-friend "mikamika" "nata123" "Natalija" "Ilic" "natalija@gmail.com" 0)

;Korisnik zeli da izbaci korisnika iz liste korisnika
(defn remove-user [username]
  (if (contains? @users username)
    (do
      (swap! users dissoc username)
      (println (str "User with username '" username "' has been removed.")))
    (println (str "User with username '" username "' does not exist."))))

;(remove-user "anana")

(def expenses (atom [])) ; Global atom to store all expenses

; Korisnik želi da unese novi trošak
(defn add-expense [username friend-username amount payer date description]
  (if (and (contains? @users username) ; Check if the user exists
           (contains? @friends friend-username)) ; Check if the friend exists
    (do
      (swap! expenses conj {:username username
                            :friend-username friend-username
                            :amount amount
                            :payer payer
                            :date date
                            :description description})
      ; Update the balance for the friend
      (swap! friends update friend-username 
             (fn [friend]
               (update friend :balance 
                       (fn [balance]
                         (if (= payer username)
                           (+ balance (/ amount 2)) ; Add half the amount if the user paid
                           (- balance (/ amount 2))))))) ; Subtract half the amount if the friend paid
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
;expenses
;(show-expenses-for-user "perapera")