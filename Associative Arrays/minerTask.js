function minerTask(input) {
  let resources = {};
  for (let index = 0; index < input.length; index++) {
    let el = input[index];
    if (index % 2 == 0) {
      if (resources.hasOwnProperty(el)) {
        continue;
      } else {
        resources[el] = [];
      }
    } else {
      let currentRes = input[input.indexOf(el) - 1];
      el = +el;
      resources[currentRes].push(el);
      input.shift();
      input.shift();
      index = -1;
    }
  }
  for (let key in resources) {
    let sum = 0;
    resources[key].forEach((ammount) => {
      sum += ammount;
    });
    resources[key] = sum;
  }

  for (let res in resources) {
    console.log(`${res} -> ${resources[res]}`);
  }
}
minerTask([
  "gold",
  "155",
  "silver",
  "10",
  "copper",
  "17",
  "gold",
  "15",
  "gold",
  "10",
]);
