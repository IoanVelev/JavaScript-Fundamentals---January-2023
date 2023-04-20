function sumEvenNumbers(arr){
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
   arr[i] = Number(arr[i]);
    let currentNum = arr[i];
    if(currentNum % 2 === 0){
        sum += currentNum;
    }
}
console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6'])
console.log("-------------------");
sumEvenNumbers(['3','5','7','9'])
console.log("-------------------");
sumEvenNumbers(['2','4','6','8','10'])