function wordTracker(input){
let obj = {};

let words = input.shift().split(" ");

for (let currentWord of words) {
    obj[currentWord] = 0;
    
}
for (let word of input) {
    if (obj.hasOwnProperty(word)) {
        obj[word] += 1;
    }
}
let sortedWordValues = Object.entries(obj).sort((a, b) => b[1] - a[1]);

for (let [key, value] of sortedWordValues) {
    console.log(`${key} - ${value}`);
}
}
wordTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
console.log("______________________________________________________________");
wordTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])