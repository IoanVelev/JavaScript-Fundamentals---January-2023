function pascalCaseSplitter(input) {
  let arrayWords = [];
  let startIndex = 0;

  for (let index = 1; index < input.length; index++) {
    let char = input[index];
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      arrayWords.push(input.substring(startIndex, index));
      startIndex = index;
    }
  }

  arrayWords.push(input.substring(startIndex));
  let res = arrayWords.join(", ");
  console.log(res);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

pascalCaseSplitter("HoldTheDoor");
