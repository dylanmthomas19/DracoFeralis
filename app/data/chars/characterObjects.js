//Objects of different Characters to choose from
var Class = function(name, str, def, agi, mag, hp){
    this.name = name,
    this.str = str,
    this.def = def,
    this.agi = agi,
    this.mag = mag,
    this.hp = hp,
    this.defend = false
}
var fighter = new Class("Fighter", 10, 15, 5, 0, 30)
var mage = new Class("Mage", 5, 10, 5, 20, 25)
var rogue = new Class("Rogue", 5, 10, 15, 0, 15)
var healer = new Class("Healer", 0, 10, 5, 10, 25)

module.exports = {
    fighter: fighter,
    mage: mage,
    rogue: rogue,
    healer: healer
}