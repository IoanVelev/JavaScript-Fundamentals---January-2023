function signCheck(num1, num2, num3) {
  let positiveCount = 0;
  let negativeCount = 0;
  if (num1 > 0) {
    positiveCount++;
  } else {
    negativeCount++;
  }

  if (num2 > 0) {
    positiveCount++;
  } else {
    negativeCount++;
  }

  if (num3 > 0) {
    positiveCount++;
  } else {
    negativeCount++;
  }

  if (negativeCount % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -14);
