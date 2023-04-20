function formatGrade(grade) {
  let desc;
  grade = grade.toFixed(2);

  if (grade < 3) {
    desc = "Fail";
    grade = 2;
  } else if (grade < 3.5) {
    desc = "Poor";
  } else if (grade < 4.5) {
    desc = "Good";
  } else if (grade < 5.5) {
    desc = "Very good";
  } else {
    desc = "Excellent";
  }
  let result = `${desc} (${grade}) `;
  console.log(result);
}
formatGrade(2.99);
formatGrade(3.33);
formatGrade(4.5);
formatGrade(5.5);
