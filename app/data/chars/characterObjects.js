const equipment = require('../equips/equipmentObjects.js')

//Objects of different Characters to choose from
var Class = function(name, str, def, agi, mag, hp){
    this.name = name,
    this.str = str,
    this.def = def,
    this.agi = agi,
    this.mag = mag,
    this.hp = hp,
    this.weapon = [],
    this.armor = [equipment.helmet, equipment.chestPlate, equipment.greaves, equipment.boots, equipment.gloves],
    this.defend = false
}
var fighter = new Class("Fighter", 5, 5, 2, 0, 20)
fighter.weapon.push(equipment.sword, equipment.shield)
var mage = new Class("Mage", 2, 2, 2, 10, 15)
mage.weapon.push(equipment.staff)
var rogue = new Class("Rogue", 2, 3, 10, 0, 15)
rogue.weapon.push(equipment.dagger)
var healer = new Class("Healer", 0, 2, 2, 10, 20)
healer.weapon.push(equipment.wand, equipment.shield)

module.exports = {
    fighter: fighter,
    mage: mage,
    rogue: rogue,
    healer: healer
}