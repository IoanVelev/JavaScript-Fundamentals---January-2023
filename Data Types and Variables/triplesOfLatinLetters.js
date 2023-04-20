function triplesOfLatinLetters(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let x = 0; x < num; x++) {
        let letter1 = String.fromCharCode(97 + i);
        let letter2 = String.fromCharCode(97 + j);
        let letter3 = String.fromCharCode(97 + x);
        console.log(`${letter1}${letter2}${letter3}`);
      }
    }
  }
}
triplesOfLatinLetters(3);
