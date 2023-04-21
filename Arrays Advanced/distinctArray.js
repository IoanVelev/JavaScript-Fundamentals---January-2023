function distinctArray(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let currentNum = arr[index];
    if (!newArr.includes(currentNum)) {
      newArr.push(currentNum);
    }
  }
  let res = newArr.join(" ");
  console.log(res);
}
distinctArray([20, 20, 20, 8, 12, 13, 4, 4, 8, 5]);
