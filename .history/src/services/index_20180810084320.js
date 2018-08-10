const cardDb = require('./card-db/card-db.service.js');
const card = require('./card/card.service.js');
const deck = require('./deck/deck.service.js');
const block = require('./block/block.service.js');
const cardBlock = require('./card-block/card-block.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cardDb);
  app.configure(card);
  app.configure(deck);
  app.configure(block);
  app.configure(cardBlock);
};
