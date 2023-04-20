function simpleCalculator(num1, num2, operator){
let result;
let multiply = (firstNum, secondNum) => firstNum * secondNum;
let divide = (firstNum, secondNum) => firstNum / secondNum;
let subtract = (firstNum, secondNum) => firstNum - secondNum;
let add = (firstNum, secondNum) => firstNum + secondNum;
    switch (operator) {
        case "add":
            result = add(num1, num2);
            break;
            case "subtract":
                result = subtract(num1, num2);
            break;
            case "multiply":
                result = multiply(num1, num2);
            break;
            case "divide":
                result = divide(num1, num2);
            break;
    }
    console.log(result);
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')