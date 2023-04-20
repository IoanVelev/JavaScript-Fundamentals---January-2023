function stringSubstring(word, text) {
  let textArray = text.split(" ");
  let isWordIn = false;
  for (let currentWord of textArray) {
    currentWord = currentWord.toLowerCase();

    if (currentWord === word) {
      console.log(currentWord);
      isWordIn = true;
      break;
    } else {
      isWordIn = false;
    }
  }

  if (isWordIn === false) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");

stringSubstring("python", "JavaScript is the best programming language");

stringSubstring("mysql", "I want to study MySql");
