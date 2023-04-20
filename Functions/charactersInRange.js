function charactersInRange(char1, char2) {
  let array = [];
  let startChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
  let endChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));

  for (let i = startChar + 1; i < endChar; i++) {
    let currentCodeToChar = String.fromCharCode(i);
    array.push(currentCodeToChar);
  }
  console.log(array.join(" "));
}
//charactersInRange("a", "d");
charactersInRange("C", "#");
