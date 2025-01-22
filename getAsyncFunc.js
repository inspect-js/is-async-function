'use strict';

/** @type {import('./getAsyncFunc')} */
module.exports = function () {
	try {
		return Function('return async function () {}')();
	} catch (e) {
		return false;
	}
};
