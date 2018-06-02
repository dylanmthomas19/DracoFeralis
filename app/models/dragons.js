module.exports = function(sequelize, DataTypes) {
    var Dragons = sequelize.define("Dragons", {
    type: DataTypes.STRING,
      name: DataTypes.STRING,
      dmg: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
      agi: DataTypes.INTEGER,
      hp: DataTypes.INTEGER
    });
    Dragons.bulkCreate([
      {type: "Fire Dragon", name: "Raza the Inferno", dmg: 15, def: 7, agi: 7, hp: 100},
      {type: "Water Dragon", name: "Luzo the Drowned", dmg: 10, def: 5, agi: 5, hp: 75},
      {type: "Earth Dragon", name: "Derze the Mountain", dmg: 10, def: 15, agi: 3, hp: 120},
      {type: "Wind Dragon", name: "Hera the Torrent", dmg: 10, def: 5, agi: 15, hp: 80},
      {type: "Lightning Dragon", name: "Strigga the Flash", dmg: 10, def: 10, agi: 10, hp: 100},
      {type: "Boss Dragon", name: "Tiamat the End", dmg: 20, def: 20, agi: 20, hp: 200}
    ]);
    return Dragons;
    
  };
  