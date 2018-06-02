const enemies = require("../../data/chars/characterObjects")
const dragons = require("../../data/chars/dragonObjects")

var dragonArray = [dragons.fireDragon, dragons.waterDragon, dragons.earthDragon, dragons.windDragon, dragons.lightningDragon]
var enemyArray = [enemies.fighter, enemies.healer, enemies.mage, enemies.rogue]
var dragon = dragonArray[Math.floor(Math.random() * dragonArray.length)]
var target = enemyArray[Math.floor(Math.random() * enemyArray.length)];

console.log(dragon.name)

switch (dragon.name) {
    case 'Raza the Inferno':
        dragon = dragons.fireDragon
        break;
    case 'Luzo the Drowned':
        dragon = dragons.waterDragon
        break;
    case 'Derze the Mountain':
        dragon = dragons.earthDragon
        break;
    case 'Hera the Torrent':
        dragon = dragons.windDragon
        break;
    case 'Strigga the Flash':
        dragon = dragons.lightningDragon
        break;
    case 'Tiamat the End':
        dragon = dragons.bossDragon
        break;
}

console.log(dragon.dmg)

console.log("Target: " + target.name);
console.log("Target Def:" + target.def)
// var damage = this.strength - targetDef;


// console.log("Attack: " + damage)

// var attack = function () {
//     console.log("Target: " + target.name);
//     console.log(target.name + " HP: " + target.hp);
//     dodge();
// };

// var dodge = function () {
//     var dodgeChance = (target.agi / 10);
//     console.log("dodge chance: " + dodgeChance)
//     var hit = Math.random();
//     console.log("Hit: " + hit)
//     if (hit < dodgeChance) {
//         console.log("Dodged!")
//         damage = 0;
//     }
//     if (target.defend === true) {
//         damage = strength - (targetDef * 1.5);
//         target.hp = target.hp - damage;
//     } 
//     else {
//         target.hp = target.hp - damage
//     }
//     console.log(target.name +" HP: " + target.hp)
//     reset();
// };

// var reset = function() {
//     characters.fighter.defend = false;
//     characters.mage.defend = false;
//     characters.rogue.defend = false;
//     characters.healer.defend = false;
// }

// module.exports = {
//     attack: attack,
//     dodge: dodge,
//     reset: reset
// }