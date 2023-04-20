function equalSums(arr) {
  let result = "no";
  let arrlength = arr.length;

  for (let i = 0; i < arrlength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // calc left sum
    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }
    // calc rigth sum
    for (let r = i + 1; r < arrlength; r++) {
      rightSum += arr[r];
    }
    if (leftSum === rightSum) {
      result = i;
    } 
}
console.log(result);
  
}
equalSums([1, 2, 3, 3]);
console.log("-----------");
equalSums([1, 2]);
console.log("-----------");
equalSums([1]);
