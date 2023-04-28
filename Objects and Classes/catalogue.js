function catalogue(data){
let obj = {};
let letters = {}
for (let item of data) {
    [product, price] = item.split(' : ')
    let currentLetter = item[0].toUpperCase();
    obj[product] = Number(price);
    letters[currentLetter] = currentLetter;
}
let sortedProducts = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

for (let [item, price] of sortedProducts) {
    let firstChar = item[0].toUpperCase();
    if (letters.hasOwnProperty(firstChar)) {
        console.log(letters[firstChar]);
        console.log(' ' + `${item}: ${price}`);
        delete letters[firstChar];
    } else{
        console.log(' ' + `${item}: ${price}`);
    }
}
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )