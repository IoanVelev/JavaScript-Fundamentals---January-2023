function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let trashedHelmetCounter = 0;
  let trashedSwordCounter = 0;
  let trashedShieldCounter = 0;
  let trashedArmorCounter = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      trashedHelmetCounter++;
    }
    if (i % 3 === 0) {
      trashedSwordCounter++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      trashedShieldCounter++;
      if (trashedShieldCounter % 2 === 0) {
        trashedArmorCounter++;
      }
    }
  }
  let helmetExpenses = helmetPrice * trashedHelmetCounter;
  let swordExpenses = swordPrice * trashedSwordCounter;
  let shieldExpenses = shieldPrice * trashedShieldCounter;
  let armorExpenses = armorPrice * trashedArmorCounter;

  let overallExpenses =
    helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;
  console.log(`Gladiator expenses: ${overallExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
