function cardGame(data) {
  let powerObj = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let typeObj = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let personScore = {};
  for (let line of data) {
    line = line.split(": ");
    let name = line[0];
    let deck = line[1].split(", ");
    if (!personScore.hasOwnProperty(name)) {
      personScore[name] = [];
      for (let card of deck) {
        if (!personScore[name].includes(card)) {
          personScore[name].push(card);
        }
      }
    } else {
      for (let card of deck) {
        if (!personScore[name].includes(card)) {
          personScore[name].push(card);
        }
      }
    }
  }
  let personPoints = {};
  for (let name in personScore) {
    let personResult = 0;
    let personDeck = personScore[name];
    for (let cardInfo of personDeck) {
      if (cardInfo.length == 2) {
        let [power, type] = cardInfo.split("");
        personResult += powerObj[power] * typeObj[type];
      } else {
        cardInfo = cardInfo.split("");
        let power = Number(cardInfo.slice(0, 2).join(""));
        let type = cardInfo.slice(2).join("");
        personResult += powerObj[power] * typeObj[type];
      }
      personPoints[name] = personResult;
    }
  }
 for (let key in personPoints) {
    console.log(`${key}: ${personPoints[key]}`);
 }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
