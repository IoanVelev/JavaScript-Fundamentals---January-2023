function factorialDivision(num1, num2) {
  let factorial1 = 1;
  let factorial2 = 1;
  while (num1 > 1) {
    factorial1 *= num1;
    num1--;
  }
  while (num2 != 1) {
    factorial2 *= num2;
    num2--;
  }
  let result = (factorial1 / factorial2).toFixed(2);
  console.log(result);
}
factorialDivision(5, 2);
