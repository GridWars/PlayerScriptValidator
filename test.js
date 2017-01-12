var test = require('tape');
var validator = require('./player-script-validator');
var error = require('./player-script-error');

test('first test', function (t) {
    t.plan(1);

    t.same([error.EMPTY], validator(''));
});