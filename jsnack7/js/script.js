//--------------------- ESERCIZIO -------------------------------------
//scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione.

// BONUS
// scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A
//----------------------------------------------------------

// TEST
//alert('ciao')

const arrayInput = [1, 2, 3, 4, 6];
console.log(arrayInput);

let finalArray = rimuoviDallaTesta(arrayInput);
console.log(finalArray);