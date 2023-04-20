function furniture(data){
let regex = />>(?<product>[A-Za-z]+)<<(?<price>\d+[.]*\d+)!(?<quantity>\d+)/;
let finalPrice = 0;
console.log("Bought furniture:");
for (let line of data) {
    if (line === 'Purchase') {
        break;
    } 
        if (regex.test(line)){
            let productInfo = regex.exec(line);
            let productPrice = Number(productInfo.groups.price);
            let productQuantity = Number(productInfo.groups.quantity);
            let finalProductPrice = productPrice * productQuantity;
            console.log(productInfo.groups.product);
            finalPrice += finalProductPrice;
        }
        
    }
    console.log(`Total money spend: ${finalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'
]
)