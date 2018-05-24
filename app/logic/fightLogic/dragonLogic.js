const dragon = require("../../data/chars/dragonObjects");
const characters = require("../../data/chars/characterObjects");

var strength = dragon.fireDragon.dmg
var enemies = [characters.fighter, characters.healer, characters.mage, characters.rogue]
var target = enemies[Math.floor(Math.random() * enemies.length)];
var targetDef = target.def + target.armor[0].def + target.armor[1].def + target.armor[2].def + target.armor[3].def + target.armor[4].def + target.weapon[0].def;
if (target.name === "Fighter") {
    targetDef = targetDef + target.weapon[1].def;
}
console.log("Target Defense: " + targetDef);
var damage = strength - targetDef;


console.log("Attack: " + damage)

var attack = function () {
    console.log("Target: " + target.name);
    console.log(target.name + " HP: " + target.hp);
    dodge();
};

var dodge = function () {
    var dodgeChance = (target.agi / 10);
    console.log("dodge chance: " + dodgeChance)
    var hit = Math.random();
    console.log("Hit: " + hit)
    if (hit < dodgeChance) {
        console.log("Dodged!")
        damage = 0;
    }
    if (target.defend === true) {
        damage = strength - (targetDef * 1.5);
        target.hp = target.hp - damage;
    } 
    else {
        target.hp = target.hp - damage
    }
    console.log(target.name +" HP: " + target.hp)
    reset();
};

var reset = function() {
    characters.fighter.defend = false;
    characters.mage.defend = false;
    characters.rogue.defend = false;
    characters.healer.defend = false;
}

attack();