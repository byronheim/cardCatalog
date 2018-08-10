// Initializes the `block` service on path `/block`
const createService = require('feathers-sequelize');
const createModel = require('../../models/block.model');
const hooks = require('./block.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/block', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('block');

  service.hooks(hooks);
};
