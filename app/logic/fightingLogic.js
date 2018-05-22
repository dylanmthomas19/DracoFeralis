//Handles how characters fight dragons
var dragon = require("../data/chars/dragonObjects");
var characters = require("../data/chars/characterObjects");
var weapons = require("../data/equips/equipmentObjects");


var damageTaken = attacker.str;

var attack = function(){
    dodge();
}
// dragon hp = dragon hp - attackers str

// option to defend which gives defense bonus

// each attack has math.random to see if opponent dodges


var dodge = function () {
    var dodgeChance = (defender.agi % 10);
    var hit = Math.random();
    if (hit < dodgeChance) {
        damageTaken = 0;
    };
    defender.hp = defender.hp - damageTaken;
};

// if statement to check that party members hp is above 0 to allow them to attack