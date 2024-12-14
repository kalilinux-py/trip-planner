module.exports = (sequelize, DataTypes) => {
  const Itinerary = sequelize.define(
    "itinerary",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  Itinerary.associate = function (models) {
    Itinerary.hasMany(models.itineraryItem, {
      foreignKey: "id",
    });
  };
  return Itinerary;
};
