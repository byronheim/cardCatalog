const assert = require('assert');
const app = require('../../src/app');

describe('\'cardDeck\' service', () => {
  it('registered the service', () => {
    const service = app.service('card-deck');

    assert.ok(service, 'Registered the service');
  });
});
