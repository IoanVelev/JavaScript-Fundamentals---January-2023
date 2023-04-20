function palindromeIntegers(arr) {
  let newArray = [];
  let element = 0;

  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    let numToString = String(element);

    for (let j = 0; j < numToString.length; j++) {
      let digitNum = numToString[j];
      newArray.push(digitNum);
    }
    let reversedArr = newArray.reverse().join("");

    if (numToString === reversedArr) {
      console.log(true);
    } else {
      console.log(false);
    }

    newArray.shift();
    newArray.shift();
    newArray.shift();
  }
}
palindromeIntegers([123, 323, 421, 121]);
console.log("_______________________");
palindromeIntegers([32, 2, 232, 1010]);
