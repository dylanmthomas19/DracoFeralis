//Objects for Items that characters equip
var Weapon = function(type, str, def){
    this.type = type,
    this.str = str,
    this.def = def
};

var sword = new Weapon("Sword", 3, 1);
var staff = new Weapon("Staff", 5, 0);
var dagger = new Weapon("Dagger", 2, 0);
var wand = new Weapon("Wand", 0, 0);
var shield = new Weapon("Shield", 0, 2);

var Armor = function(type, def){
    this.type = type,
    this.def = def
}

var helmet = new Armor("Helmet", 1);
var chestPlate = new Armor("Chest Plate", 2);
var greaves = new Armor("Greaves", 1);
var boots = new Armor("Boots", 1);