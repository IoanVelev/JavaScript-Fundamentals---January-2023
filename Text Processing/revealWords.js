function revealWords(word, text) {
  let wordsArray = word.split(", ");
  let textArray = text.split(" ");

  for (let currentWord of textArray) {
    for (let iterator of wordsArray) {
      let censored = "*".repeat(iterator.length);
      if (currentWord === censored) {
        text = text.replace(currentWord, iterator);
      } 
    }
  }
  console.log(text);
}
revealWords('great','softuni is ***** place for learning new programming languages');

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
