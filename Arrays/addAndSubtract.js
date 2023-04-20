function addAndSubtract(arr){
    let newArr = [];
    let sumArr = 0;
    let sumOfNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        if(currNum % 2 === 0){
            let evenNum = currNum + Number([i]);
            currNum = evenNum;
           
        } else{
            let oddNum = currNum - Number([i]);
            currNum = oddNum;
        }
        
        newArr.push(currNum)
    }
    for (let j = 0; j < arr.length; j++) {
        sumArr += arr[j];
    }
    for (let k = 0; k < newArr.length; k++) {
        sumOfNewArr += newArr[k]
    }
console.log(newArr);
console.log(sumArr);
console.log(sumOfNewArr);
}
addAndSubtract([5,15,23,56,35])