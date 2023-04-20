function oddOccurrences(input) {
  let data = input.split(" ");
  let occurrences = new Map();
  for (let el of data) {
    el = el.toLowerCase();

    if (!occurrences.has(el)) {
      occurrences.set(el, 1);
    } else {
      occurrences.set(el, occurrences.get(el) + 1);
    }
  }

  let elements = Array.from(occurrences);
  let line = "";

  for (let [key, value] of elements) {
    if (value % 2 === 1) {
      line += key + " ";
    }
  }
  console.log(line);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
