function phoneBook(input){
let obj = {};
for (let line of input) {
    let [name, phoneNumber] = line.split(" ");
    obj[name] = phoneNumber;
}
for (let [name, phoneNumber] of Object.entries(obj)) {
    console.log(`${name} -> ${phoneNumber}`);
}
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
console.log("_____________________________");
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']

)