// Initializes the `cardDB` service on path `/card-db`
const createService = require('feathers-sequelize');
const createModel = require('../../models/card-db.model');
const hooks = require('./card-db.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/card-db', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('card-db');

  service.hooks(hooks);
};
