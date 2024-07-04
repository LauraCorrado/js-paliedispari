# TRACCE

## TRACCIA 1
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

## TRACCIA 2
L’utente inserisce prima "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

# LOGICA

## Flow 1
- Dichiaro una funzione con parametro "word"
    - Scrivo delle istruzioni:
        - Inverto l'ordine delle lettere con reverse()
        - SE il valore dell'input è identico alla stringa invertita
            Stampo su console `La parola "${word}" è palindroma. Letta al contrario è "${reverseWord}"`
        - Altrimenti
            Stampo su console `La parola "${word}" non è palindroma. Letta al contrario è "${reverseWord}"`
- Chiedo all'utente di inserire una parola e salvo il valore in una variabile
- Chiamo la funzione inserendo come parametro la variabile appena creata

## Flow 2
- Dichiaro una funzione con ritorno senza parametri e la chiamo "random"
    - Scrivo la seguente istruzione:
        - Restituire un numero randomico tra 1 e 5 compresi, evitando numeri decimali

- Dichiaro una funzione con ritorno e con parametro "num", e la chiamo "evenOrOdd"          davedere
    - Scrivo la seguente istruzione                                                         davedere
        - Restituire se è vero o falso che num è pari                                       davedere

- (Step 1) Chiedo all'utente di scegliere tra pari e dispari
    - Rendo minuscolo il valore inserito dall'utente
    - Salvo tutto in una variabile che chiamo "userSelection"
- (Step 2) Chiedo all'utente di inserire un numero da 1 a 5
    - Rendo numerica la risposta dell'utente (parseInt())
    - Salvo tutto in una variabile che chiamo "userNum"
- Invoco la funzione in una variabile (pcNum)
- Dichiaro una variabile di somma e le do valore userNum + pcNum
- SE 