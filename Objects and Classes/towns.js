function towns(input){
let obj = {}

for (let el of input) {
    let [town, latitude, longitude] = el.split(" | ")
    obj["town"] = town;
    obj["latitude"] = latitude;
    obj["longitude"] = longitude;

    obj.latitude = Number(latitude).toFixed(2);
    obj.longitude = Number(longitude).toFixed(2);
    console.log(obj);
}
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])