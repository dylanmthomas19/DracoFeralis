module.exports = function(sequelize, DataTypes) {
    var Characters = sequelize.define("Characters", {
      name: DataTypes.STRING,
      str: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
      agi: DataTypes.INTEGER,
      mag: DataTypes.INTEGER,
      hp: DataTypes.INTEGER,
      defend: DataTypes.BOOLEAN
    });
    Characters.bulkCreate([
      {name: "Fighter", str: 5, def: 5, agi: 2, mag: 0, hp: 20},
      {name: "Mage", str: 2, def: 2, agi: 2, mag: 10, hp: 15},
      {name: "Rogue", str: 2, def: 3, agi: 10, mag: 0, hp: 15},
      {name: "Healer", str: 0, def: 2, agi: 2, mag: 10, hp: 20},
    ]);
    
    return Characters;
  };
  