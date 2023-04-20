function lettersChangeNumbers(input){
let text = input.split(" ");
let res = 0;
let array = [];
for (let iterator of text) {
    let length = iterator.length;
    let num = iterator.substring(1, length - 1);
    num = Number(num);
    if (iterator.charCodeAt(0) >= 65 && iterator.charCodeAt(0) <= 90) {
        res = (num / ((iterator.charCodeAt(0) - 64)));
        
    } else if (iterator.charCodeAt(0) >= 97 && iterator.charCodeAt(0) <= 122){
        res = (num * ((iterator.charCodeAt(0) - 96)));
        
    } if (iterator.charCodeAt(length - 1) >= 97 && iterator.charCodeAt(0) <= 122) {
        res += (iterator.charCodeAt(length - 1) - 96);
        array.push(res)
    } else if(iterator.charCodeAt(length - 1) >= 65 && iterator.charCodeAt(length - 1) <= 90){
        res = res - (iterator.charCodeAt(length - 1) - 64);
        array.push(res)
    }
    
}
let result = 0;
for (let nums of array) {
    result += nums;
}
console.log(result.toFixed(2));
}
lettersChangeNumbers('A12b s17G')

lettersChangeNumbers('P34562Z q2576f   H456z')

lettersChangeNumbers('a1A')