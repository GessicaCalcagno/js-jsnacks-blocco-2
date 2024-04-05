//--------------------- ESERCIZIO -------------------------------------
//scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1
//----------------------------------------------------------

// TEST
//alert('ciao')

//variabile input di array
// variabile con elemento di input
// funzione mi deve restituire l'indice di dove si trova l'elemento dentro l'array

const arrayInput = [3, 4, 5, 8, 11];
console.log(arrayInput);
let elemInput = 6;
console.log(elemInput);

let result = trovaIndice(arrayInput, elemInput);
console.log(result);