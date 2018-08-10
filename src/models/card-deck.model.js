// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cardDeck = sequelizeClient.define('card_deck', {
    cardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'card_id'
    },
    deckId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'deck_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    beforeCount(options) {
      options.raw = true;
    }
  });

  // eslint-disable-next-line no-unused-vars
  cardDeck.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    cardDeck.belongsTo(models.card, { sourceKey: 'id', foreignKey: 'cardId'});
    cardDeck.belongsTo(models.deck, { sourceKey: 'id', foreignKey: 'deckId'});
  };

  return cardDeck;
};
