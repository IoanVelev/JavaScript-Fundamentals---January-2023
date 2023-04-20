function countStringOccurrences(text, word){
let textArray = text.split(" ");
let numOfOccurences = 0;
for (let currentWord of textArray) {
    if (currentWord === word) {
        numOfOccurences++;
    }
}
console.log(numOfOccurences);
}
countStringOccurrences('This is a word and it also is a sentence','is')
console.log("_____________________________");
countStringOccurrences('softuni is great place for learning new programming languages','softuni')