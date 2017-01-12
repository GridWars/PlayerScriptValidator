const error = require('./player-script-error');

const rules = {
    EVAL: /eval[\s]*\(/i,
    FUNCTION: /Function[\s]*\(/,
    WINDOW: /(\.|\['|\[")[\s]*window/i,
    DOCUMENT: /(\.|\['|\[")[\s]*document/i,
    PARENT: /(\.|\['|\[")[\s]*parent/i,
    TOP: /(\.|\['|\[")[\s]*top/i,
    CALL: /(\.|\['|\[")[\s]*call/i,
    APPLY: /(\.|\['|\[")[\s]*apply/i,
    CONSTRUCTOR: /(\.|\['|\[")[\s]*constructor/i,
    CALLER: /(\.|\['|\[")[\s]*caller/i,
    PROTOTYPE: /(\.|\['|\[")[\s]*prototype/i
};

module.exports = function (source) {
    const script = source.trim();

    if (script === '') {
        return [error.EMPTY];
    }

    let errors = [];

    for (let name in rules) {
        if (rules[name].test(script)) {
            errors.push(error[name]);
        }
    }

    return errors;
};