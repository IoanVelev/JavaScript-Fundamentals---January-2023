function hardWord(input){
let fillText = input[0];
let words = input[1];
let text = input[0].split(" ");


    
   for (let i = 0; i < text.length; i++) {
    let el = text[i];
    if (el.startsWith("_")) {
        el = el.substring(0, el.lastIndexOf("_") + 1)
        for (let j = 0; j < words.length; j++) {
            let currentWord = words[j];
            
            if (el.length === currentWord.length) {
                fillText = fillText.replace(el, currentWord);
                
            }
        }
       }
    }
   console.log(fillText);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)