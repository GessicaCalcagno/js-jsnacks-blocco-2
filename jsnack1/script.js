//--------------------- ESERCIZIO -------------------------------------
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

const userChoice = parseInt(prompt("Dimmi un numero"));//Number
console.log(userChoice);

function generateArray(numbArray){
    let arrays = [];
for ( let i = 0; i < numbArray; i++){
    let array = [];
    for (let j = 0; j < 10 ; j++){
        array.push(Math.floor(Math.random()* 100) + 1);
    }

    arrays.push(array);

}

return arrays;

}


let newArrays = generateArray(userChoice);
console.log(newArrays);

//Output



