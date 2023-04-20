function negativeOrPositiveNumbers(data){
    let result = [];
for (let i = 0; i < data.length; i++) {
    let num = Number(data[i]);
    if (num < 0 ) {
        result.unshift(num)
    } else {
        result.push(num)
    }
    
}
console.log(result.join("\n"));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])

negativeOrPositiveNumbers(['3', '-2', '0', '-1'])