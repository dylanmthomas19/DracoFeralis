//Handles how characters fight dragons
const dragon = require("../data/chars/dragonObjects")
const characters = require("../data/chars/characterObjects")
//line 5 just shows how to call stats
//console.log(characters.fighter.str + characters.fighter.weapon[0].str)

var damageTaken = attacker.str;
// click for each party member action
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