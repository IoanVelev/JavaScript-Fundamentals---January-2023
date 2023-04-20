function arrayManipulations(data) {
  let arr = data.shift().split(" ").map(x => Number(x))
  for (let line of data) {
    line = line.split(" ");
    let cmd = line[0];
    switch (cmd) {
      case "Add":
        let numToAdd = Number(line[1]);
        arr.push(numToAdd);
        break;
      case "Remove":
        let numToRemove = Number(line[1]);
        arr = arr.filter(x => x !== numToRemove);
        break;
      case "RemoveAt":
        let indexToRemove = Number(line[1]);
        arr = arr.filter((v, i)=> i !== indexToRemove);
        break;
      case "Insert":
        let numToInsert = Number(line[1]);
        let atIndex = Number(line[2]);
        arr.splice(atIndex, 0, numToInsert)
        break;
    }
  }
  let res = arr.join(" ")
  console.log(res);
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
