function addAndSubtract(num1, num2, num3) {
  function sum(numOne, numTwo) {
    let operation = numOne + numTwo;
    return operation;
  }
  let sumOfFirstandSecond = sum(num1, num2);

  function subtract(sumOfFirstandSecond, numThree) {
    let operation = sumOfFirstandSecond - numThree;
    return operation;
  }

  let subtractOfNums = subtract(sumOfFirstandSecond, num3);
  console.log(subtractOfNums);
}
addAndSubtract(23, 6, 10);
