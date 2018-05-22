const dragon = require("../../data/chars/dragonObjects")
const characters = require("../../data/chars/characterObjects")

var attack = ((characters.rogue.str + characters.rogue.weapon[0].str) * 2);
console.log("Rogue attack: " + attack);
var defense = ((dragon.fireDragon.def) * 0.5);
console.log("Dragon defense: " + defense);
var damage = attack - defense;

var attack = function(){
    console.log("Damage: " + damage)
    sneakAttack();
}

// option to defend which gives defense bonus
var defense = function(){
    defense = (characters.rogue.def + characters.rogue.armor[1].def + characters.rogue.armor[2].def + characters.rogue.armor[3].def + characters.rogue.armor[4].def + characters.rogue.armor[0].def + characters.rogue.weapon[0].def)
    console.log("Rogue defense: " + defense);
}

var sneakAttack = function() {
    var critChance = Math.floor(Math.random() * Math.floor(3))
    if(critChance==0){
        console.log("Sneak attack successful!")
        damage = damage * 3;
        console.log("New damage: " + damage);
    } else {
        console.log("Sneak attack failed!")
    }
    dodge();
}

var dodge = function () {
    var dodgeChance = (dragon.fireDragon.agi / 20);
    console.log("dodge chance: " + dodgeChance)
    var hit = Math.random();
    console.log("Hit: " + hit)
    if (hit < dodgeChance) {
        console.log("Dodged!")
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