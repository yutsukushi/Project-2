module.exports = function(sequelize, DataTypes) {
  var RecentSearch = sequelize.define(
    "RecentSearch",
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      carbon: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return RecentSearch;
};
