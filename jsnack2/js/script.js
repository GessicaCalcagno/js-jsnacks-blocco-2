//--------------------- ESERCIZIO -------------------------------------
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
//----------------------------------------------------------

// TEST
//alert('ciao')

// chiedo all'utente 2 parole
// creo la funzione di paragone

const word1 = prompt("Inserisci la prima parola:");
const word2 = prompt("Inserisci la seconda parola:");

const finalResult = equalWord(1, 2);
console.log(finalResult);