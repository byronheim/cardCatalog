const assert = require('assert');
const app = require('../../src/app');

describe('\'cardDB\' service', () => {
  it('registered the service', () => {
    const service = app.service('card-db');

    assert.ok(service, 'Registered the service');
  });
});
