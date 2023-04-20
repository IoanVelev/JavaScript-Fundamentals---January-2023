function passwordGenerator(input) {
  let concatenateStrings = input[0] + input[1];
  let thirdString = input[2];
  thirdString = thirdString.repeat(concatenateStrings.length / thirdString.length);
  let res = concatenateStrings.split("");
  let array = [];
  let index = 0;
  
for (let i = 0; i < res.length; i++) {
    let currentEl = res[i];
    if (currentEl === 'a' || currentEl === 'e' || currentEl === 'i' || currentEl === 'o' || currentEl === 'u') {
        
        for (let j = index; j < thirdString.length; j++) {
            currentEl = thirdString[j].toUpperCase();
            array.push(currentEl);
            break;
        }
        index++;
        j = index;  
    } else {
        array.push(currentEl)
    }
}
let result = array.reverse().join("");
console.log(`Your generated password is ${result}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);

passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);

passwordGenerator([
  "areyousureaboutthisone",
  "notquitebutitrustyou",
  "disturbed",
])
