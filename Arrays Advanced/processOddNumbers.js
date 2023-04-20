function processOddNumbers(input) {
  let res = input
    .filter((v, i) => i % 2 === 1)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
  console.log(res);
}
processOddNumbers([10, 15, 20, 25]);
