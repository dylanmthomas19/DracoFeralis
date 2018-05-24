const dragon = require("../../data/chars/dragonObjects")
const characters = require("../../data/chars/characterObjects")

var attack = ((characters.mage.str + characters.mage.weapon[0].str) * 2);
console.log("Mage attack: " + attack);
var defense = ((dragon.fireDragon.def) * 0.5);
console.log("Dragon defense: " + defense);
var damage = attack - defense;

var attack = function(){
    console.log("Damage: " + damage)
    dodge();
}

// option to defend which gives defense bonus
var defense = function(){
    defense = (characters.mage.def + characters.mage.armor[1].def + characters.mage.armor[2].def + characters.mage.armor[3].def + characters.mage.armor[4].def + characters.mage.armor[0].def + characters.mage.weapon[0].def)
    console.log("Mage defense: " + defense);
}

var dodge = function () {
    var dodgeChance = (dragon.fireDragon.agi / 20);
    console.log("dodge chance: " + dodgeChance)
    var hit = Math.random();
    console.log("Hit: " + hit)
    if (hit < dodgeChance) {
        damage = 0;
    }
    else (
    dragon.fireDragon.hp = dragon.fireDragon.hp - damage
    );
    console.log("Dragon hp: " + dragon.fireDragon.hp)
};

attack();
console.log("-----------------------")
defense();