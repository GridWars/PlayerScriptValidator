const test = require('tape');
const validator = require('./player-script-validator');
const error = require('./player-script-error');

test('first test', function (t) {
    t.plan(5);

    t.same([error.EMPTY], validator(''));
    t.same([error.EVAL], validator('eval()'));
    t.same([error.FUNCTION], validator('Function()'));

    t.same([error.EVAL, error.FUNCTION], validator("eval('Function()')"));

    t.same([], validator('var player = {};'));
});