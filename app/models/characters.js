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
    return Characters;
  };
  