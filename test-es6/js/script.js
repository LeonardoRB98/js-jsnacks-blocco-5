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

// unione array tramite spread

const array1 = [1, 2, 3];
const array2 = [5, 12, 0];

// prende gli elemti dell'array1 e array2 e li combina in un unico array
const mergedArray = [...array1, ...array2];

// se lo scrivo in questo modo verrà creato un array bidimensionale ovvero un array lungo due con
// all'interno altri 2 array lunghi 3
/*const mergedArray = [array1, array2];*/
console.log(mergedArray);

//4.  OBJECT


var nome = 'leonardo';
var cognome = 'ranaldo';
var eta = 21;
var chiaveSesso = 'sesso'
// in automatico assegna il nome della variabile alla chiave ed il contenuto della var
// al valore della chiava
// posso anche aggiungere una chiave tramite una variabile con le parentesi []
var alunno =
{
  nome,
  cognome,
  eta,
  [chiaveSesso] : 'm'
}

// scritto nel 'vecchio' modo
var alunno2 =
{
  nome : nome,
  cognome : cognome,
  eta : eta,
}
console.log(alunno);
console.log(alunno2);
