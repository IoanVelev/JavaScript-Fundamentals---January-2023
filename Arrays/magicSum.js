function magicSum(arr, num) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let currentElement = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = arr[j];
      sum = currentElement + nextElement;
      if (sum === num) {
        let validPair = `${currentElement} ${nextElement}`
        newArr.push(validPair);
        console.log(Number.isNumber(currentElement));
      }
    }
  } 
  console.log(newArr.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("_____________________");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log("_____________________");
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log("____________________");
magicSum([10, 30, 90, 70, 20, 80], 100);
