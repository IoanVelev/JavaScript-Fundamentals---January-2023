function oddAndEvenSum(num) {
  let numAsString = String(num);
  let oddSum = 0;
  let evenSum = 0;
  let array = [];

  for (let i = 0; i < numAsString.length; i++) {
    stringAsNum = Number(numAsString[i]);
    array.push(stringAsNum);
  }

  for (let j = 0; j < array.length; j++) {
    let number = array[j];

    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
