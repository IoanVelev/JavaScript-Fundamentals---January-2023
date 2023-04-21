function bitcoinMining(data) {
  let oneBitcoinValue = 11949.16;
  let goldPricePerGram = 67.51;
  let money = 0;
  let boughtBitcoin = 0;
  let dayOfFirstBitcoin = 0;
  let sumOfBitcoins = 0;
  for (let index = 0; index < data.length; index++) {
    let goldAmmount = data[index];
    if ((index + 1) % 3 === 0) {
      goldAmmount -= goldAmmount * (30 / 100);
    }
    let profitPerDay = goldPricePerGram * goldAmmount;
    money += profitPerDay;

    if (money >= oneBitcoinValue) {
      boughtBitcoin = Number(Math.floor(money / oneBitcoinValue).toFixed(2));
      money -= boughtBitcoin * oneBitcoinValue;
      sumOfBitcoins += boughtBitcoin;
    }
  }

  let totalGold = 0;
  for (let goldPerDay of data) {
    totalGold += goldPerDay;
    if (totalGold * goldPricePerGram >= oneBitcoinValue) {
      dayOfFirstBitcoin = data.indexOf(goldPerDay) + 1;
      break;
    }
  }
  if (boughtBitcoin > 0) {
    console.log(`Bought bitcoins: ${sumOfBitcoins}`);
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
  } else {
    console.log(`Bought bitcoins: ${sumOfBitcoins}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
  }
}
bitcoinMining([100, 200, 300]);
