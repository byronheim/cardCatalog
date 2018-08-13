// Initializes the `cardType` service on path `/card-type`
const createService = require('feathers-sequelize');
const createModel = require('../../models/card-type.model');
const hooks = require('./card-type.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/card-type', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('card-type');

  service.hooks(hooks);
};
