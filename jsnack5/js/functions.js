

/**
 * Description: dato un array deve restituire una stringa con tutti gli elemnti dell'array separati da una virgola
 * @param {array} 
 * @returns {string}
 */
function stampa(array){
    let result = "";
    for (let i = 0; i < array.length; i++){
        result += array[i];

        if (i !== array.length - 1){
            result += ", ";
        }
    }

    return result;
}