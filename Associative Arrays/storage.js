function storage(input){
let map = new Map();

for (let line of input) {
    let productInfo = line.split(" ");
    let product = productInfo[0];
    let quantity = Number(productInfo[1]);
    

    if(!map.has(product)){
        map.set(product, quantity);
    } else {
        let oldQuantity = map.get(product);
        map.set(product, quantity + oldQuantity); 
    }
}


for (let [key, value] of map.entries()) {
    console.log(`${key} -> ${value}`);
}
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
console.log("__________________________________________");
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)

