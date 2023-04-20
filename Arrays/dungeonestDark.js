function dungeonestDark(data) {
    let health = 100;
    let coins = 0;
    let rooms = data.join("|");
    rooms = rooms.split("|");
    let currentRoom = 0;
    for (let iterator of rooms) {
      let [firstPart, secondPart] = iterator.split(" ");
      currentRoom++;
      if (firstPart === "potion") {
         hp = Number(secondPart);
  
        if (health + hp <= 100) {
          health += hp;
  
          console.log(`You healed for ${hp} hp.`);
        } else {
          console.log(`You healed for ${100 - health} hp.`);
          health = 100;
        }
        console.log(`Current health: ${health} hp.`);
      } else if (firstPart === "chest") {
        coins += Number(secondPart);
        let curretCoins = Number(secondPart)
        console.log(`You found ${curretCoins} coins.`);
      } else {
        let monsterName = firstPart;
        let damage = Number(secondPart);
        if (health - damage > 0) {
          health -= damage;
          console.log(`You slayed ${monsterName}.`);
        } else {
          health -= damage
          console.log(`You died! Killed by ${monsterName}.`);
          console.log(`Best room: ${currentRoom}`);
          break;
        }
      }
    }
    if (health > 0) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
  dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])