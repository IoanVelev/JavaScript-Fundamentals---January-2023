function vacation(count, type, day) {
  let price = 0;
  switch (day) {
    case "Friday":
      switch (type) {
        case "Students":
          price = 8.45 * count;
          if (count >= 30) {
            price *= 0.85;
          }
          break;
        case "Business":
          price = 10.9 * count;
          if (count >= 100) {
            price = (count - 10) * 10.90;
          }
          break;
        case "Regular":
          price = 15 * count;
          if (count >= 10 && count <= 20) {
            price *= 0.95;
          }
          break;
      }
      break;
    case "Saturday":
      switch (type) {
        case "Students":
          price = 9.80 * count;
          if (count >= 30) {
            price *= 0.85;
          }
          break;
        case "Business":
          price = 15.60 * count;
          if (count >= 100) {
            price = (count - 10) * 15.60;
          }
          break;
        case "Regular":
          price = 20 * count;
          if (count >= 10 && count <= 20) {
            price *= 0.95;
          }
          break;
      }
      break;
    case "Sunday":
      switch (type) {
        case "Students":
          price = 10.46 * count;
          if (count >= 30) {
            price *= 0.85;
          }
          break;
        case "Business":
          price = 16 * count;
          if (count >= 100) {
            price = (count - 10) * 16;
          }
          break;
        case "Regular":
          price = 22.50 * count;
          if (count >= 10 && count <= 20) {
            price *= 0.95;
          }
      }
      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(10, "Regular", "Saturday");
