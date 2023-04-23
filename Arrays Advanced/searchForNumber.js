function searchForNumber(arr1, arr2) {
  let numOfElements = arr2.shift();
  let elementsToRemove = arr2.shift();
  let searchedNum = arr2.shift();
  let elementsArr = arr1.slice(0, numOfElements);
  let numOccurences = 0;
  for (let index = 0; index < elementsToRemove; index++) {
    elementsArr.shift()
  }
  for (let num of elementsArr) {
    if (num == searchedNum) {
        numOccurences++;
    }
  }
  console.log(`Number ${searchedNum} occurs ${numOccurences} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
