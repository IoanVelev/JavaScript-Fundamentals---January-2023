function commonElements(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
       if(arr1.includes(arr2[i])){
        console.log(arr2[i]);
       }
    }
 }
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
console.log("-------------------");
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
