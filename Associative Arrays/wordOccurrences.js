function wordOccurrences(input) {
  let map = new Map();
  let wordOccurrences = 0;
  for (let word of input) {
    if (!map.has(word)) {
      map.set(word);
      wordOccurrences = 1;
      map.set(word, wordOccurrences);
    } else {
      wordOccurrences = map.get(word);
      map.set(word, wordOccurrences + 1);
    }
  }
  let descendingSorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let words of descendingSorted) {
    let currentWord = words[0];
    let currentWordOccurrences = words[1];
    console.log(`${currentWord} -> ${currentWordOccurrences} times`);
  }
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
console.log("_____________________________________________________");
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
