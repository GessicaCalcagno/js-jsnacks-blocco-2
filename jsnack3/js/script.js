//--------------------- ESERCIZIO -------------------------------------
// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array.
//----------------------------------------------------------

// TEST
//alert('ciao')

//Definisco l'array di input
// la funzione deve restituire il numero degli elementi che ho inserito nell'array
// Rischiamo la funzione con una variabile

const arrayInput = [1, "2", 33, 4, 50, "", null, undefined, 0];
console.log(arrayInput);

let elemArray = contaElementi(arrayInput);
console.log(elemArray);
