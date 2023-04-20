function schoolGrades(input) {
  let map = new Map();

  for (let line of input) {
    let studentInfo = line.split(" ");
    let name = studentInfo.shift();
    let setOfGrades = studentInfo;

    if (!map.has(name)) {
      map.set(name, setOfGrades);
    } else {
      let mainGradeSet = map.get(name);
      for (let newGrade of setOfGrades) {
        mainGradeSet.push(newGrade);
      }
    }
  }
  let sortedNames = Array.from(map.keys()).sort((nameA, nameB) =>
    nameA.localeCompare(nameB)
  );

  for (let name of sortedNames) {
    let sumOfGrades = 0;
    let avgGrade = 0;
    let numOfGrades = 0;
    let grades = map.get(name);

    for (let grade of grades) {
      numOfGrades++;
      sumOfGrades += Number(grade);
      avgGrade = sumOfGrades / numOfGrades;
    }
    console.log(`${name}: ${avgGrade.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("______________________________________________");
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
