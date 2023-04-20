function meetings(input) {
  let myObj = {};

  for (let line of input) {
    let [weekDay, personName] = line.split(" ");

    if (!myObj.hasOwnProperty(weekDay)) {
      myObj[weekDay] = personName;
      console.log(`Scheduled for ${weekDay}`);
    } else {
      console.log(`Conflict on ${weekDay}!`);
    }
  }

  for (let [dayOfWeek, nameOfPerson] of Object.entries(myObj)) {
    console.log(`${dayOfWeek} -> ${nameOfPerson}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
