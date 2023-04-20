function smallestTwoNumbers(input){
    let outputRes = input.sort((a, b) => a - b).slice(0, 2).join(" ")
    console.log(outputRes);
}
smallestTwoNumbers([30, 15, 50, 5])