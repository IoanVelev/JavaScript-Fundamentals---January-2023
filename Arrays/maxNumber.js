function maxNumber(arr) {
  let newArr = [];
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    let currElement = arr[i];
    let nextElement = arr[i - 1];
    if (nextElement > currElement) {
      newArr.unshift(nextElement);
    }
  }
  
  newArr.push(lastElement);

  for (let i = 0; i < newArr.length; i++) {
    let currElement = newArr[0];
    let nextElement = newArr[1];

    if (currElement < nextElement) {
      newArr.shift();
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([10, 40, 30, 20]);
console.log("-------------");
maxNumber([14, 24, 3, 19, 15, 17]);
console.log("-------------");
maxNumber([41, 41, 34, 20]);
console.log("-------------");
maxNumber([27, 19, 42, 2, 13, 45, 48]);
