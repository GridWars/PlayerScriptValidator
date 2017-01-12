const test = require('tape');
const validator = require('./player-script-validator');
const error = require('./player-script-error');

test('first test', function (t) {
    t.plan(1);

    t.same([error.EMPTY], validator(''));
});