module.exports = function(sequelize, DataTypes) {
  var Footprint = sequelize.define(
    "Footprint",
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unRegion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      carbon: {
        type: DataTypes.STRING,
        allowNull: false
      },
      perCapitaGDP: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      populations: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return Footprint;
};
