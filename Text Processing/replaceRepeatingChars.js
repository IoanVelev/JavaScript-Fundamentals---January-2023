function replaceRepeatingChars(input){
    let index = 1;
    let letCurrentEl = input[index];
    let previousEl = input[index - 1];
    let textArray = [];
    
 for (let iterator of input) {
    letCurrentEl = input[index];
    previousEl = input[index - 1];
    if(previousEl != letCurrentEl){
        textArray.push(iterator);
    }
    index++;
 }
 let res = textArray.join("");
 console.log(res);

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')

replaceRepeatingChars('qqqwerqwecccwd')