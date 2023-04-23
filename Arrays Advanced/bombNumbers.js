function bombNumbers(seq, bombInfo) {
  let bombNumber = bombInfo.shift();
  let power = bombInfo.shift();
  let finalSum = 0;
  for (let index = 0; index < seq.length; index++) {
    let el = seq[index];
    if (el == bombNumber) {
      let startIndex = seq.indexOf(el) - power;
      elementsToRemove = power * 2 + 1;
      if (startIndex < 0) {
        elementsToRemove += startIndex;
        startIndex = 0;
      }
      seq.splice(startIndex, elementsToRemove);
      index = -1;
    }
  }
  for (let num of seq) {
    finalSum += num;
  }
  console.log(finalSum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])    
