//  ========== FIRST EXERCISE ==========
//  DICHIARAZIONE DELLA FUNZIONE
function palindrome(word) {
/* //--------- WITH REVERSE
  //      let reverseWord = word.split("").reverse().join("");
  //      if (word == reverseWord) {
  //          console.log(`La parola "${word}" è palindroma. Letta al contrario è "${reverseWord}".`)
  //      } else {
  //          console.log(`La parola "${word}" non è palindroma. Letta al contrario è "${reverseWord}".`)
  //      } */
  //------------ WITH FOR ----------
  let reverseWord = "";
  for (let k = word.length - 1; k >= 0; k--) {
    reverseWord += word[k];
  }
  // si poteva anche dividere la stringa a metà e verificare carattere 0 con carattere length - 1, poi 1 e length - i - 1 ecc
  if (reverseWord == word) {
    console.log(`La parola "${word}" è palindroma.`);
  } else {
    console.log(`La parola "${word}" non è palindroma.`);
  }
}

let userWord = prompt("Inserisci una parola");

palindrome(userWord);

// ========== SECOND EXERCISE ==========
// DICHIARAZIONE DELLE FUNZIONI
function random() {
    return Math.floor(Math.random() * 5 + 1)
}
function even(num) {
    return num % 2 === 0
}

let userSelection = prompt("Scrivi 'pari' o 'dispari'").toLowerCase();
while (userSelection !== "pari" && userSelection !== "dispari") {
    userSelection = prompt("Errore. Scrivi 'pari' o 'dispari'").toLowerCase()
}

// 1-5 number variable
let userNum = parseInt(prompt("Scegli un numero da 1 a 5"))
while (userNum < 1 || userNum > 5 || isNaN(userNum)) {
    userNum = parseInt(prompt("Non hai scelto un numero compreso tra 1 e 5. Riprova"))
}
// pc random number has to be saved in a variable
let pcNum = random();
// sum variable
let sum = pcNum + userNum
// result: is even or odd? change the value of "tot" according to the conditions
let tot;
if (even(sum)) {tot = "pari"}
else {tot = "dispari"}
//
if (tot === userSelection) {
    console.log(`Hai scelto ${userSelection} e il numero ${userNum}. Il numero del pc è ${pcNum} e la somma finale è ${tot}: hai vinto!`)
} else {
    console.log(`Hai scelto ${userSelection} e il numero ${userNum}. Il numero del pc è ${pcNum} e la somma finale è ${tot}: hai perso!`)
}