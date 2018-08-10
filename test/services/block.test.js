const assert = require('assert');
const app = require('../../src/app');

describe('\'block\' service', () => {
  it('registered the service', () => {
    const service = app.service('block');

    assert.ok(service, 'Registered the service');
  });
});
