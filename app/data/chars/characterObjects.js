//Objects of different Characters to choose from
var Class = function(name, str, def, agi, mag, hp){
    this.name = name,
    this.str = str,
    this.def = def,
    this.agi = agi,
    this.mag = mag,
    this.hp = hp
}

var fighter = new Class("Fighter", 5, 10, 2, 0, 20)
var mage = new Class("Mage", 2, 2, 2, 10, 15)
var rogue = new Class("Rogue", 2, 2, 10, 0, 15)
rogue.sneakAttack = ()=>{
    var critChance = Math.random()

    if(critChance>0){
        rogue.str = 20
    } else {
        rogue.str = 2
    }
}

var healer = new Class("Healer", 0, 2, 2, 10, 10)