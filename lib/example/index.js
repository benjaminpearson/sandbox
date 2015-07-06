/**
 * Example library
 */
var Promise = require('bluebird');
Promise.onPossiblyUnhandledRejection(function(error) {
	throw error;
});

function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function subtract(a, b) {
	return Promise.resolve().then(function calculate() {
		if (a > 10) {
			throw new Error('ValueTooHigh');
		}

		if (a < 0) {
			throw new Error('ValueTooLow');
		}

		return a - b;
	});
}

module.exports = {
	sum: sum,
	multiply: multiply,
	subtract: subtract
};
