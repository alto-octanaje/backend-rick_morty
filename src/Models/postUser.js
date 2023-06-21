const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "postUser",
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
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      origin: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          hasOriginName(value) {
            if (!value.name) {
              throw new Error(
                'La propiedad "origin" debe tener la propiedad "name"'
              );
            }
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
