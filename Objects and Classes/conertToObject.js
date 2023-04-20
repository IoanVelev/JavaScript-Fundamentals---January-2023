function conertToObject(string){
let objJSON = JSON.parse(string);
console.log(objJSON);
for (let [key, value] of Object.entries(objJSON)) {
    console.log(`${key}: ${value}`);
}
}
conertToObject('{"name": "George", "age": 40, "town": "Sofia"}');