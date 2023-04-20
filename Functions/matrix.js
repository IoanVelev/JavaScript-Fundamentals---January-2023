function matrix(num) {
  let newArray = [];

  for (let i = 0; i < num; i++) {
    let array = [];

    for (let j = 0; j < num; j++) {
      array.push(num);
    }
    newArray.push(array.join(" "));
  }
  console.log(newArray.join("\n"));
}
matrix(2);
