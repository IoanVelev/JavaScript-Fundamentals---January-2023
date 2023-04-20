function matchFullName(input){
let regex = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g
let match = regex.exec(input);
let array = []
while (match != null) {
    array.push(match[0]);
    match = regex.exec(input);
}
let result = array.join(" ");
console.log(result);
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")