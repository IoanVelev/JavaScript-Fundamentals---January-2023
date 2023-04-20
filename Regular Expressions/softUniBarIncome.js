function softUniBarIncome(data){
let regex = /%(?<name>[A-Z][a-z]+)%[^$%*|]*?(?<product>\w+)>[^$%*|]*?\|(?<quantity>\d+)\|[^$%*|]*?(?<price>\d+[.]*\d*)\$/g
let match = regex.exec(data);
let total = 0;
while (match != null) {
    let person = match.groups.name;
    let product = match.groups.product;
    let quantity = Number(match.groups.quantity);
    let price = Number(match.groups.price);
    let finalPrice = quantity * price;
    total += finalPrice;
    console.log(`${person}: ${product} - ${finalPrice.toFixed(2)}`);
    match = regex.exec(data);
}
console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)
console.log("________________________________________");
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)