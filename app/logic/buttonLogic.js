// Logic to tie in everything under fightLogic folder to interact with the html
var attackDefend = require("../data/chars/characterObjects.js");
var heal = require("../data/chars/characterObjects.js");
var dragonAction = require("../data/chars/dragonObjects");
// button press for each character (fighter, mage, rogue, healer)
    // if attack, update the queue panel
    // if defend, update the queue panel
// once all 4 party members have decided, finalize the turn in the queue panel with a button and execute commands on dragon
    // update combat log
// dragon choses an attack/defend situation and executes it
    // update combat log
// end turn
    // update combat log
// repeat until party members are dead or dragon is dead.
// if party members die, game over screen
    // if game over screen, options for new game
// if dragon dies, randomly choose a new dragon
    // if new dragon, repeat basic gameplay until party members or dragon die

// after second dragon is defeated, party members face final dragon.
    // repeat gameplay loop
    // if party members die, game over screen
    // if game over screen, options for new game
    // if dragon is defeated, victory screen, options for new game.