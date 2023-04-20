function lastKNumbersSequance(n, k) {
  let arr = [1];
  for (let i = arr.length; i < n; i++) {
    let sum = 0;
    let index = Math.max(arr.length - k, 0)
    let currentArr = arr.slice(index);
    for (let num of currentArr) {
      sum += num;
    }
    arr.push(sum)
}
let res = arr.join(" ");
console.log(res);
}
lastKNumbersSequance(6, 3);
