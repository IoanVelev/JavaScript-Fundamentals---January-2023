function cutAndReverse(input) {
  let word1 = input.substring(0, input.length / 2);
  let word2 = input.substring((input.length / 2));
  let array = [];
  for (let i = word1.length - 1; i >= 0; i--) {
    let el = word1[i];
    array.push(el);
  }
  console.log(array.join(""));
  array = [];
  for (let i = word2.length - 1; i >= 0; i--) {
    let el = word2[i];
    array.push(el);
  }
  console.log(array.join(""));
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
console.log("_________________________________");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
