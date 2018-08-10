// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cardBlock = sequelizeClient.define('card_block', {
    cardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'card_id'
    },
    blockId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'block_id'
    }
  }, {
    hooks: {
      timestamps: false,
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  cardBlock.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cardBlock;
};
