function orders(product, quanitity) {
  let price = 0;
  switch (product) {
    case "water":
      price = quanitity * 1;
      break;
    case "coffee":
      price = quanitity * 1.5;
      break;
    case "coke":
      price = quanitity * 1.4;
      break;
    case "snacks":
      price = quanitity * 2.0;
      break;
  }
  let result = price.toFixed(2);
  console.log(result);
}
orders("water", 5);
orders("coffee", 2);
