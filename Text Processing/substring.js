function substring(word, startingIndex, countOfEl) {
  let endIndex = startingIndex + countOfEl;
  let sub = word.substring(startingIndex, endIndex);
  console.log(sub);
}
substring("ASentence", 1, 8);

substring("JavaScript", 4, 8);