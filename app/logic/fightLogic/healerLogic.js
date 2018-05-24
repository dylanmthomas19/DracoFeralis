const dragon = require("../../data/chars/dragonObjects");
const characters = require("../../data/chars/characterObjects");

var attack = (characters.mage.str + characters.mage.weapon[0]);

var heal = function() {
    selected.companion.hp = selected.companion.hp + attack;
};


var defense = function(){
    defense = (characters.healer.def + characters.healer.armor[1].def + characters.healer.armor[2].def + characters.healer.armor[3].def + characters.healer.armor[4].def + characters.healer.armor[0].def + characters.healer.weapon[0].def)
    console.log("Healer defense: " + defense);
}