function login(data) {
  let username = data.shift();
  let countOfTries = 0;
  for (let el of data) {
    let currentPassword = el.split("").reverse().join("");
    if (currentPassword == username) {
      console.log(`User ${username} logged in.`);
    } else {
      countOfTries++;
      if (countOfTries > 3) {
        console.log(`User ${username} blocked!`);
        break;
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
