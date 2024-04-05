

function equalWord(word1, word2) {
  let result;
  if (word1.length === word2.length) {
    result = "Stessa lunghezza";
  } else if (word1.length > word2.lenght) {
    result = "La prima parola è maggiore";
  } else {
    result = "La seconda parola è maggiore";
  }

  return result;
}
