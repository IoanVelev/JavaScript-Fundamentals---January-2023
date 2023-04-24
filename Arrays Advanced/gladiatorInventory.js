function gladiatorInventory(data) {
  let inventory = data.shift().split(" ");
  for (line of data) {
    line = line.split(" ");
    let cmd = line[0];
    switch (cmd) {
      case "Buy":
        {
          let item = line[1];
          if (!inventory.includes(item)) {
            inventory.push(item);
          }
        }
        break;
      case "Trash":
        {
          let item = line[1];
          if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            inventory.splice(index, 1);
          }
        }
        break;
      case "Repair":
        {
          let item = line[1];
          if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            inventory.splice(index, 1);
            inventory.push(item);
          }
        }
        break;
      case "Upgrade": {
        let item = line[1].split("-");
        if (inventory.includes(item[0])) {
          let index = inventory.indexOf(item[0]) + 1;
          item = item.join(":");
          inventory.splice(index, 0, item);
        }
      }
    }
  }
  let result = inventory.join(" ");
  console.log(result);
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
