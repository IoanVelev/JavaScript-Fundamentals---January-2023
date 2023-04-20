function storeProvision(currentStock, orderedStock){
    let storeObj = {

    }
    for (let i = 0; i < currentStock.length; i+=2) {
        let productName = currentStock[i];
        let productQuantity = Number(currentStock[i + 1]);
        storeObj[productName] = productQuantity;
    }
    
    
    for (let i = 0; i < orderedStock.length; i+=2) {
        let productName = orderedStock[i];
        let productQuantity = Number(orderedStock[i + 1]);
       
        if (storeObj.hasOwnProperty(productName)) {
            storeObj[productName] += productQuantity
        } else{
            storeObj[productName] = productQuantity;
        }
    }

for (let productName in storeObj) {
    console.log(`${productName} -> ${storeObj[productName]}`);
} 
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )