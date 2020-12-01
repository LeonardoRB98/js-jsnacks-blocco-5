//Si scriva una funzione che accetti tre argomenti, un array e due
// numeri (a più piccolo di b). La funzione ritornerà un nuovo
// array con i valori che hanno la posizione compresa tra i due
// numeri
var mainArray = ['ciao', 'prova', 'penna', 'divano', 'letto', 'casa', 'cane'];
var a = 1;
var b = 3;

var prova = nonLoSo(mainArray, a, b);
console.log(prova);

/*------------------FUNZIONI----------------------------------------*/
function nonLoSo(array, nMin , nMax) {
  var newArray = [];
  for (var i = nMin; i <= nMax; i++) {
    newArray.push(array[i])
  }
  return newArray;
}
