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

// 1- chiedere un numero all'utente
// 2- Finchè non raggiunge il numero N detto dall'utente, devi creare un Array e stamparlo a schermo

const userChoice = parseInt(prompt("Dimmi un numero"));//Number
console.log(userChoice);


for (let i = 0; i < userChoice; i++){
    let newArray = generateArray()
    console.log(newArray);

}


/**
 * Description: crea un array di 10 numeri random
 * @returns {array}
 */ 
function generateArray(){
    let array = [];
    for (let i = 0; i < 10; i++){
        let = numbInArray = getRndInteger(1, 100);

        array.push(numbInArray);
    }

    return array

 }

 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }




/**
 * Description: stampa l'array in pagina
 * @param {array} arrayToPrint
 * @returns {} niente perchè è void
 */
  function printArray(arrayToPrint){
    const resultElem = document.getElementById("result");
    console.log(arrayToPrint);

    resultElem.innerHTML += ` <li> ${arrayToPrint} <li> `;
  }



// function generateArray(numbArray){
//     let arrays = [];
// for ( let i = 0; i < numbArray; i++){
//     let array = [];
//     for (let j = 0; j < 10 ; j++){
//         array.push(Math.floor(Math.random()* 100) + 1);
//     }

//     arrays.push(array);

// }

// return arrays;

// }


// let newArrays = generateArray(userChoice);
// console.log(newArrays);

//Output



