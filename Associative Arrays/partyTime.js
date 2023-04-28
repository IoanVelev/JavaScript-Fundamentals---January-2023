function partyTime(input) {
  let regularGuests = [];
  let vipGuests = [];
  let cmd = input.shift();
  while (cmd !== "PARTY") {
    let isRegularGuest = isNaN(Number(cmd[0]));
    if (isRegularGuest) {
      regularGuests.push(cmd);
    } else {
      vipGuests.push(cmd);
    }
    cmd = cmd = input.shift();
  }
  for (let guest of input) {
    if (regularGuests.includes(guest)) {
      regularGuests.splice(regularGuests.indexOf(guest), 1);
    } else if (vipGuests.includes(guest)) {
      vipGuests.splice(vipGuests.indexOf(guest), 1);
    }
  }
  let countOfMissingGuests = regularGuests.length + vipGuests.length;
  console.log(countOfMissingGuests);
  let missingGuests = vipGuests.concat(regularGuests);
  missingGuests.forEach((guest) => {
    console.log(guest);
  });
}
partyTime([
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "7IK9Yo0h",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
console.log("________________________________________________");

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
