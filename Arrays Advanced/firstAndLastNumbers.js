function firstAndLastNumbers(data) {
  let numberK = Number(data.shift());
  let res = [];
  let firstPart = data.slice(0, numberK);
  let secondPart = data.slice(data.length - numberK, data.length);

 for (let index = 0; index < firstPart.length; index++) {
    let element = firstPart[index];
    res.push(element)
 }
 console.log(res.join(" "));
 res = [];
 for (let index = 0; index < secondPart.length; index++) {
    let element = secondPart[index];
    res.push(element);
 }
 console.log(res.join(" "));
 
}
firstAndLastNumbers([2, 7, 8, 9]);

firstAndLastNumbers([3, 6, 7, 8, 9]);
