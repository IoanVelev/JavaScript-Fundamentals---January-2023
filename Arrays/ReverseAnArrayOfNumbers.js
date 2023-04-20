function ReverseAnArrayOfNumbers(num, inputArr) {
  let newArr = [];
  for (let i = num - 1; i >= 0; i--) {
    let element = inputArr[i];
    newArr.push(element);
  }
  console.log(newArr.join(" "));
}
ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
