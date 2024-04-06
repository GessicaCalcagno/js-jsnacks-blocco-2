/**
 * Description: aggiunge elemento all'inizio dell'array
 * @param {array} A è la copia dell'array
 * @param {number} E è l'elemento in input
 * @returns {array} restituisce E + A
 */
// F è la prova del fatto che posso aggiungere più input.
function inserisciInTesta(A, E, F) {
  //lo spread operator (...) --> Crea una copia dell'array, per evitare modifiche all'array originale.
  const copyArray = [...A];
  // Inserisce l'elemento E in testa all'array B
  copyArray.unshift(E, F);
  return copyArray;
}
