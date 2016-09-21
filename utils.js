'use strict'

var utils = require('lazy-cache')(require)
var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Lazily required module dependencies
 */

require('arr-includes')
require('common-callback-names', 'callbackNames')
require('function-arguments', 'fnArgs')
require('lazy-arrayify/arrayify', 'arrayify')
require('lazy-arrayify/isarray', 'isArray')
require = fn // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Expose `utils` modules
 */

module.exports = utils
