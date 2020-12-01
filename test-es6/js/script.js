/*  <==== rimuovi qui

//1. INCATENAZIONE DI PIÙ STRINGHE

let frase1 = 'ciao';
let frase2 = 'come';
let frase3 = 'stai?';

// concatenazione di più stringhe
console.log(frase1 + ' ' + frase2 + ' ' + frase3 + '\nbene grazie');

// concatenazione di più stringhe es6 utilizzo `` e le variabili
// precedute da $ e coprese tra {}
// il bene grazie non necessita di apici o virgolette
console.log(`${frase1}, ${frase2}, ${frase3}, \nbene grazie`);

let printHtml = `
<h1>Titolo</h1>
<br>
<p>${frase1} ${frase2} ${frase3}</p>
`;
document.getElementById('incatenazione-es-1').innerHTML = printHtml;

rimuovi qui ====> */

//2. ARROW FUNCTION

// fuzione senza argomenti
const myFunction = () => 1 + 5;
let result = myFunction()
// equivalente scritto nel 'vecchio metodo'
/* function myFuntion() {return 1 + 5};  */
console.log(result);

// funzione con argomenti
// se scrita su una riga possiamo omettere le parentesi graffe e il return
const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
console.log(randomNumber(2, 34));
// arrow function applicata ad un EventListener
document.getElementById('arrow-function-eventlistener').addEventListener('click',
  () => alert('click')
);
// arrow function applicata ad un EventListener su due righe di codice
document.getElementById('arrow-function-eventlistener2').addEventListener('click',
  () => {
    alert('prima riga');
    alert('seconda riga');
  }
);
// il this all'interno delle arrow funcition renderà l'intera window e non l'elemento selezinato
// dal getElementById

//3. SPREAD ...

// ... permettono di passare un numero di argomenti indefinito nella mia funzione
const myFunction2 = (...arguments) => {
  console.log(arguments);
}
// restituisce un array con gli elementi scritti in funzione
myFunction2 ('ciao', 1, ['postizione1', 'posizione2'], {nome : 'leonardo'});
// funzione che restituisce la somma di tutti i numeri inserite comi argomento
const sommaXNumeri = (...num) => {
  var somma = 0;
  for(let i = 0; i < num.length; i++) {
    somma += num[i];
  }
  return somma;
}
var risultato = sommaXNumeri(1, 3, 6, 77,)
console.log(risultato);
/*  <==== rimuovi qui
rimuovi qui ====> */
