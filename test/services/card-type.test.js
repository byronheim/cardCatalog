const assert = require('assert');
const app = require('../../src/app');

describe('\'cardType\' service', () => {
  it('registered the service', () => {
    const service = app.service('card-type');

    assert.ok(service, 'Registered the service');
  });
});
