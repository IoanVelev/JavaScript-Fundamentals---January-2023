function houseParty(data) {
  let arr = [];
  for (let line of data) {
    line = line.split(" ");
    if (line.length == 3) {
      let name = line[0];
      if (!arr.includes(name)) {
        arr.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      let name = line[0];
      if (arr.includes(name)) {
        let index = Number(arr.indexOf(name));
        arr.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  arr.map((x) => console.log(x));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
