/**
 * Description: deve dirmi quanti elementi [i] ci sono nell'array
 * @param {array} //deve essere un array
 * @returns {number}
 */
function contaElementi(array) {
  let elem = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== undefined && array[i] !== "") {
      elem += 1;
    }
  }

  return elem;
}
