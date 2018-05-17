//Objects of Dragon Enemies
var Dragon = function(name, dmg, def, agi, hp){
    this.name = name,
    this.dmg = dmg,
    this.def = def,
    this.agi = agi,
    this.hp = hp
}

var fireDragon = ("Raza the Inferno", 15, 7, 7, 100)
var waterDragon = ("Luzo the Drowned", 10, 5, 5, 75)
waterDragon.heal = ()=>{
    this.hp += 5
}
var earthDragon = ("Derze the Mountain", 10, 15, 3, 120)
var windDragon = ("Hera the Torrent", 10, 5, 15, 80)
var lightningDragon = ("Strigga the Flash", 10, 10, 10, 100)
var ultimaDragon = ("Tiamat the End", 20, 20, 20, 200)