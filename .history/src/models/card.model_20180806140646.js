// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const card = sequelizeClient.define('card', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blueCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    whiteCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    greenCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blackCost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  card.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return card;
};
