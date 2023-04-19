function printAndSum(start, end){
    let sum = 0
    let buffNumber = "";
    for (let index = start; index <= end; index++) {
        sum += index
        buffNumber += index + " ";
    }
    console.log(buffNumber);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)