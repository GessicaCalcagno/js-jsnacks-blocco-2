//--------------------- ESERCIZIO -------------------------------------
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
//----------------------------------------------------------

// TEST
//alert('ciao')

// chiedo all'utente 2 parole
// creo la funzione di paragone

const userWord1 = prompt("Inserisci la prima parola:");
console.log(userWord1);
const userWord2 = prompt("Inserisci la seconda parola:");
console.log(userWord2);

const finalResult = equalWord(userWord1, userWord2);
console.log(finalResult);