function matchPhoneNumber(data){
let regex = /[+]359([ |-])2\1\d{3}\1\d{4}\b/g;
let match = regex.exec(data);
let array = [];
while (match != null) {
    array.push(match[0]);
    match = regex.exec(data);
}
let result = array.join(", ");
console.log(result);
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])