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
      allowNull: true,
      field: 'red_cost',
    },
    blueCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'blue_cost',
    },
    whiteCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'white_cost',
    },
    greenCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'green_cost',
    },
    blackCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'black_cost',
    },
    colorlessCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'colorless_cost',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    allocated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    available: {
      type: DataTypes.VIRTUAL,
      get: function() {
        return this.get('quantity') - this.get('allocated');
      }
    }
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
