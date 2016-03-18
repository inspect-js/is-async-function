/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * > Trying to guess is function asynchronous (callback) function or not.
 *
 * @param  {Function} `fn`
 * @param  {Array}    `ignores`
 * @param  {Number}   `max`
 * @return {Boolean}
 * @api public
 */

module.exports = function isAsyncFn (fn, ignores, max) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }

  var defaults = ['callback', 'callback_', 'done', 'next', 'cb']
  var args = require('function-arguments')(fn, max || 250)

  ignores = require('isarray')(ignores) ? ignores : defaults
  return require('arr-includes')(args, ignores)
}

