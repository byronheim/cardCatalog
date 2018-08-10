// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const card = sequelizeClient.define('card', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    redCost: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'red_cost',
    },
    blueCost: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'blue_cost',
    },
    whiteCost: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'white_cost',
    },
    greenCost: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'green_cost',
    },
    blackCost: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'black_cost',
    },
    colorlessCost: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'colorless_cost',
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    allocated: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    available: {
      type: Sequelize.VIRTUAL(Sequelize.INTEGER, "('card'.quantity - 'card'.allocated') as available"),
    },
  }, {
    timestamps: false,
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
