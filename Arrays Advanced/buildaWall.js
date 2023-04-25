function buildaWall(arr) {
  let heightInFootPerDay = 195;
  let concretePrice = 1900;
  let neededDays = 30 - Math.min(...arr);
  let ammountConcretePerDay = [];
  let totalConcrete = 0;
  let sumOfConcrete = 0;
  for (let index = 0; index < neededDays; index++) {
    sumOfConcrete = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= 30) {
        let el = arr[j]
        arr.splice(arr.indexOf(el), 1);
        j--;
      }
      else{
        arr[j]++;
        sumOfConcrete += heightInFootPerDay;
      }
    }
    if (arr.length > 0) {
      totalConcrete += sumOfConcrete;
      ammountConcretePerDay.push(sumOfConcrete);
    }
  }
  let finalCost = totalConcrete * concretePrice;
  let finalRes = ammountConcretePerDay.join(", ");
  console.log(finalRes);
  console.log(`${finalCost} pesos`);
}
buildaWall([17, 22, 17, 19, 17]);
