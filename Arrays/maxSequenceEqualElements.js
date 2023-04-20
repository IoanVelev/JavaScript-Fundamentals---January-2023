function maxSequenceEqualElements(arr) {
  let maxSequence = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSequence = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentSequence.push(arr[i]);
      } else {
        break;
      }
    }

    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }
  console.log(maxSequence.join(" "));
}

maxSequenceEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log("_______________________");
maxSequenceEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log("_______________________");
maxSequenceEqualElements([4, 4, 4, 4]);
