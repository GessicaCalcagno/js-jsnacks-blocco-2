

function rimuoviDallaTesta(array){

    const newArray = [];

    for ( let i = 1; i < array.length; i++){
        newArray.push(array[i]);
    }

    return newArray;

}