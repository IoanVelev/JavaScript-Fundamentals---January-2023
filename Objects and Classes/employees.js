function employees(input){
    
for (let i = 0; i < input.length; i++) {
    let obj = {}
    obj["employeeName"] = input[i];
    obj["personalNumber"] = input[i].length
    console.log(`Name: ${obj.employeeName} -- Personal Number: ${obj.personalNumber}`);
}

}
employees(['Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'])