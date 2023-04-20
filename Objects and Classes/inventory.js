function inventory(input){
    let heroes = [];
for (let line of input) {
    let [hero, level, items] = line.split(' / ');
    let heroObj = {
        hero,
        level: Number(level),
        items,
    }
   heroes.push(heroObj)
  
}
heroes.sort((a,b) => a.level - b.level);

heroes.forEach(heroObj => {
    console.log(`Hero: ${heroObj.hero}`);
    console.log(`level => ${heroObj.level}`);
    console.log(`items => ${heroObj.items}`);
});
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )