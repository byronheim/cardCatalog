// Initializes the `cardDeck` service on path `/card-deck`
const createService = require('feathers-sequelize');
const createModel = require('../../models/card-deck.model');
const hooks = require('./card-deck.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/card-deck', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('card-deck');

  service.hooks(hooks);
};
