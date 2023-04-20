function integerAndFloat(firstNum, secondNum, thirdNum){
let sum = firstNum + secondNum + thirdNum;
let output = sum % 1 === 0 ? sum += " - Integer" : sum += " - Float"
console.log(output);
}
integerAndFloat(100, 200, 303)