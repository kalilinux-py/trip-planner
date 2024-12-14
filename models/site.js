module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define(
    "site",
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Site;
};
