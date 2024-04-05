/**
 * Description:dato un array deve dirmi se c'è l'elemento che indico io tra gli elementi dell'array
 * @param {array} 
 * @param {number} 
 * @returns {i}
 */
function trovaIndice(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elem) {
      return i;
    }
  }

  return -1;
}
