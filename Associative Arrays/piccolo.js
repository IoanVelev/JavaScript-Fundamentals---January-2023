function piccolo(input) {
  let carSet = new Set();

  for (let carInfo of input) {
    let [direction, carNumber] = carInfo.split(", ");

    if (direction === "IN") {
      carSet.add(carNumber);
    } else {
      carSet.delete(carNumber);
    }
  }

  let sortedCarNumbers = Array.from(carSet).sort((a, b) => a.localeCompare(b));
  for (let carNum of sortedCarNumbers) {
    console.log(carNum);
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
