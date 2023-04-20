function convertToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  }

  let fromObjToJSON = JSON.stringify(person);

  console.log(fromObjToJSON);
}
convertToJSON("George", "Jones", "Brown");
