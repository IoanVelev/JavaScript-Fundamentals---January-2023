function sumDigits(num) {
  let numAsChar = String(num);
  let sum = 0;
  for (let i = 0; i < numAsChar.length; i++) {
    let numAsNumber = Number(numAsChar[i]);
    sum += numAsNumber;
  }
  console.log(sum);
}
sumDigits(543);
