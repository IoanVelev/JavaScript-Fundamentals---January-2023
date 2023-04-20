function rightPlace(text, charToChange, finalText){
    let newString = "";
    for (let i = 0; i < text.length; i++) {
    if(text[i] === "_"){
        newString += charToChange;
    } else {
        newString += text[i]
    }
    }
    let output = newString === finalText ? "Matched" : "Not Matched"
    console.log(output);

}
rightPlace('Str_ng', 'i', 'String')