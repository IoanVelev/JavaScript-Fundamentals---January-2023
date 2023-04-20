function charsToString(char1, char2, char3) {
  if (char1 && char2 && char3 === String) {
    console.log(char1 + char2 + char3);
  } else {
    char1 = String(char1);
    char2 = String(char2);
    char3 = String(char3);
    console.log(char1 + char2 + char3);
  }
}

charsToString("1", "5", "o");
