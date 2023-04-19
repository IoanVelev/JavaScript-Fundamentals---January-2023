function example(n) {
    let sumNum = 0;
    for (let i = 1; i <= (n * 2); i+=2) {
      console.log(i);
      sumNum += i
    }
    console.log(`Sum: ${sumNum}`);
  }
  example(5)