function train(data) {
  let wagons = data.shift().split(" ");
  let maxPeople = Number(data.shift());
  for (let cmd of data) {
    if (cmd.includes("Add")) {
      let wagon = cmd.split(" ")[1];
      wagons.push(wagon);
    } else {
      cmd = Number(cmd);
      for (let currentWagon of wagons) {
        currentWagon = currentWagon;
        if (Number(currentWagon) + cmd <= maxPeople) {
          let newWagon = Number(currentWagon) + cmd;
          wagons[wagons.indexOf(currentWagon)] = newWagon;
          break;
        }
      }
    }
  }
  let res = wagons.join(" ");
  console.log(res);
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
