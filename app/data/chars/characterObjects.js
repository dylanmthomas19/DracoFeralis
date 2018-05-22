const equipment = require('../equips/equipmentObjects.js')

//Objects of different Characters to choose from
var Class = function(name, str, def, agi, mag, hp, weapons){
    this.name = name,
    this.str = str,
    this.def = def,
    this.agi = agi,
    this.mag = mag,
    this.hp = hp,
    this.weapon = []
    this.armor = [equipment.helmet, equipment.chestPlate, equipment.greaves, equipment.boots, equipment.gloves]
}

var fighter = new Class("Fighter", 5, 10, 2, 0, 20)
fighter.weapon.push(equipment.sword, equipment.shield)
var mage = new Class("Mage", 2, 2, 2, 10, 15)
mage.weapon.push(equipment.staff)
var rogue = new Class("Rogue", 2, 2, 10, 0, 15)
rogue.weapon.push(equipment.dagger)
rogue.sneakAttack = ()=>{
    var critChance = Math.floor(Math.random() * Math.floor(4))

    if(critChance==0){
        rogue.str = 10
    } else {
        rogue.str = 2
    }
}

var healer = new Class("Healer", 0, 2, 2, 10, 10)
healer.weapon.push(equipment.wand, equipment.shield)

module.exports = {
    fighter: fighter,
    mage: mage,
    rogue: rogue,
    healer: healer
}