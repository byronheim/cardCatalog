// Initializes the `cardBlock` service on path `/card-block`
const createService = require('feathers-sequelize');
const createModel = require('../../models/card-block.model');
const hooks = require('./card-block.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/card-block', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('card-block');

  service.hooks(hooks);
};
