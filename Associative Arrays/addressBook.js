function addressBook(input){
let myObj = {};

for (let line of input) {
    let [person, adress] = line.split(":");
    myObj[person] = adress;
}
let sortedNames = Array.from(Object.keys(myObj)).sort((nameA, nameB) => nameA.localeCompare(nameB));

for (let currentName of sortedNames) {
    console.log(`${currentName} -> ${myObj[currentName]}`);
}
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
console.log("________________________");
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)