const equipment = require('../equips/equipmentObjects.js')

//Objects of different Characters to choose from
var Class = function(name, str, def, agi, mag, hp){
    this.name = name,
    this.str = str,
    this.def = def,
    this.agi = agi,
    this.mag = mag,
    this.hp = hp,
    this.weapon = []
    this.armor = [equipment.helmet, equipment.chestPlate, equipment.greaves, equipment.boots, equipment.gloves]
}

var fighter = new Class("Fighter", 5, 5, 2, 0, 30)
fighter.weapon.push(equipment.sword, equipment.shield)
var mage = new Class("Mage", 2, 2, 2, 10, 25)
mage.weapon.push(equipment.staff)
var rogue = new Class("Rogue", 2, 2, 10, 0, 25)
rogue.weapon.push(equipment.dagger)
rogue.sneakAttack = ()=>{
    var critChance = Math.floor(Math.random() * Math.floor(4))

    if(critChance==0){
        rogue.str = 10
    } else {
        rogue.str = 2
    }
}

var healer = new Class("Healer", 0, 2, 2, 10, 20)
healer.weapon.push(equipment.wand, equipment.shield)

module.exports = {
    fighter: fighter,
    mage: mage,
    rogue: rogue,
    healer: healer
}