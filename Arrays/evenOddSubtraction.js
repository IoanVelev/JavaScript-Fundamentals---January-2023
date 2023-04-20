function evenOddSubtraction(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    currentNum = Number(arr[i]);
    if (currentNum % 2 === 0) {
      sumEven += currentNum;
    } else{
        sumOdd += currentNum;
    }
  }
  let diff = sumEven - sumOdd;
  console.log(diff);
}
evenOddSubtraction(["1", "2", "3", "4", "5", "6"]);
console.log("------------------------");
evenOddSubtraction(["3", "5", "7", "9"]);
console.log("------------------------");
evenOddSubtraction(["2", "4", "6", "8", "10"]);
