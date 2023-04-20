function sumFirstAndLast(data){
let firstNum = +data.shift();
let lastNum = +data.pop();
let sum = firstNum + lastNum;
console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);

sumFirstAndLast(['5', '10'])