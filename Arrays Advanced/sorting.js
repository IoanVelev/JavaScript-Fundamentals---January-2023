function sorting(arr) {
  let newArr = [];
  let length = arr.length / 2;
  for (let index = 0; index < length; index++) {
    let currentBiggest = Math.max(...arr);
    let currentLowest = Math.min(...arr);
    if (currentBiggest != currentLowest) {
      newArr.push(currentBiggest, currentLowest);
    } else {
      newArr.push(currentBiggest);
    }
    arr.splice(arr.indexOf(currentBiggest), 1);
    arr.splice(arr.indexOf(currentLowest), 1);
  }
  let res = newArr.join(" ");
  console.log(res);
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
