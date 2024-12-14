module.exports = (sequelize, DataTypes) => {
  const ItineraryItem = sequelize.define(
    "itineraryItem",
    {
      itineraryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: "itinerary",
          key: "id",
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  ItineraryItem.associate = function (models) {
    ItineraryItem.belongsTo(models.Itinerary, {
      foreignKey: "itineraryId",
    });
  };
  return ItineraryItem;
};
