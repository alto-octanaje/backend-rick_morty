const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "origin", 
    { 
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
