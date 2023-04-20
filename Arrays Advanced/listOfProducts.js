function listOfProducts(data){
let orderedArr = data.sort();
let currentIndex = 1;
for (let product of orderedArr) {
    console.log(`${currentIndex}.${product}`);
    currentIndex++
}
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])