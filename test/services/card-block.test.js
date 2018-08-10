const assert = require('assert');
const app = require('../../src/app');

describe('\'cardBlock\' service', () => {
  it('registered the service', () => {
    const service = app.service('card-block');

    assert.ok(service, 'Registered the service');
  });
});
