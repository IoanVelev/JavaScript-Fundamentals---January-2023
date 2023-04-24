function arrayManipulator(arrInt, arrCmd) {
  let finalRes = [];
  for (let line of arrCmd) {
    line = line.split(" ");
    let cmd = line.shift();
    switch (cmd) {
      case "add":
        {
          let index = Number(line[0]);
          let element = Number(line[1]);
          arrInt.splice(index, 0, element);
        }
        break;
      case "addMany":
        {
          let index = Number(line.shift());
          let set = line.slice();
          for (let i = 0; i < set.length; i++) {
            let el = Number(set[i]);
            arrInt.splice(index + i, 0, el);
          }
        }
        break;
      case "contains":
        {
          let el = Number(line.shift());
          if (arrInt.includes(el)) {
            console.log(arrInt.indexOf(el));
          } else {
            console.log("-1");
          }
        }
        break;
      case "remove":
        {
          let index = Number(line.shift());
          arrInt.splice(index, 1);
        }
        break;
      case "shift":
        {
          let positions = Number(line.shift());
          for (let j = 0; j < positions; j++) {
            let currentEl = arrInt.shift();
            arrInt.push(currentEl);
          }
        }
        break;
      case "sumPairs":
        {
          finalRes = [];
          for (let k = 0; k < arrInt.length; k += 2) {
            let sumPair = 0;
            let numPairs = arrInt.splice(k, 2);
            numPairs.map((x) => (sumPair += x));
            finalRes.push(sumPair);
            k -= 2;
          }
          arrInt = finalRes;
        }
        break;
      case "print":
        {
          console.log(` [ ${arrInt.join(", ")} ] `);
        }
        break;
    }
  }
}
arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
