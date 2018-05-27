module.exports = function(sequelize, DataTypes) {
    var Dragons = sequelize.define("Dragons", {
    type: DataTypes.STRING,
      name: DataTypes.STRING,
      dmg: DataTypes.INTEGER,
      def: DataTypes.INTEGER,
      agi: DataTypes.INTEGER,
      hp: DataTypes.INTEGER
    });
    return Dragons;
  };
  