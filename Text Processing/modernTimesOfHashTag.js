function modernTimesOfHashTag(input) {
  let text = input.split(" ");
  let res = [];
  for (let el of text) {
    if (el.startsWith("#") && el.length > 1) {
        el = el.substring(1);
        let isSpecial = true;
        for (let iterator of el) {
            iterator = iterator.toLowerCase();
             if (
             iterator.charCodeAt(0) < 97 || iterator.charCodeAt(0) > 122
             ) {
                isSpecial = false;
               break;
             } 
           }
           if (isSpecial) {
            res.push(el)
           }
    }
  }
  res = res.join("\n")
  console.log(res);
}
modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);

modernTimesOfHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
