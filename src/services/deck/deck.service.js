// Initializes the `deck` service on path `/deck`
const createService = require('feathers-sequelize');
const createModel = require('../../models/deck.model');
const hooks = require('./deck.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/deck', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('deck');

  service.hooks(hooks);
};
