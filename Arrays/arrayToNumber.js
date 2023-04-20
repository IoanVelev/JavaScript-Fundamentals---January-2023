function arrayToNumber(arr){
    while(arr.length > 1){
        let newArr = []
      for (let i = 0; i < arr.length - 1; i++) {
        let firstElement = arr[i];
        let secondElement = arr[i + 1];
        newArr.push(firstElement + secondElement)
    }
    arr = newArr
  }
  let finalNum = arr[0];
  console.log(finalNum);

}
arrayToNumber([5,0,4,1,2])
console.log("---------------------");
arrayToNumber([2,10,3])