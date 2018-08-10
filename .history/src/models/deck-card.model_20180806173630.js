// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const deckCard = sequelizeClient.define('deck_card', {
    deckId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'deck_id',
    },
    cardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'card_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  deckCard.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return deckCard;
};
