function example(day, age) {
    let ticketPrice = 0;
    if (age >= 0 && age <= 18) {
      switch (day) {
        case "Holiday":
          ticketPrice = 5;
          break;
        case "Weekday":
          ticketPrice = 12;
          break;
        case "Weekend":
          ticketPrice = 15;
          break;
      }
      console.log(`${ticketPrice}$`);
    } else if (age > 18 && age <= 64) {
      switch (day) {
        case "Holiday":
          ticketPrice = 12;
          break;
        case "Weekday":
          ticketPrice = 18;
          break;
        case "Weekend":
          ticketPrice = 20;
  
          break;
      }
      console.log(`${ticketPrice}$`);
    } else if (age > 64 && age <= 122) {
      switch (day) {
        case "Holiday":
          ticketPrice = 10;
          break;
        case "Weekday":
          ticketPrice = 12;
          break;
        case "Weekend":
          ticketPrice = 15;
          break;
      }
      console.log(`${ticketPrice}$`);
    } else {
      console.log("Error!");
    }
  }
  example('Holiday', 18)