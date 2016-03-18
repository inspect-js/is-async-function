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
 * **Example**
 *
 * ```js
 * var fs = require('fs')
 * var isAsyncFn = require('is-async-function')
 *
 * console.log(isAsyncFunction(fs.readFile)) // => true
 * console.log(isAsyncFunction(fs.stat)) // => true
 *
 * console.log(isAsyncFunction(fs.readFileSync)) // => false
 * console.log(isAsyncFunction(fs.statSync)) // => false
 *
 * // or pass custom names to recognize as `async`
 * console.log(isAsyncFunction(fs.stat, ['cb'])) // => false
 * console.log(isAsyncFunction(fs.readFile, ['callback', 'next']))
 * // => false, because fs.readFile uses `callback_`
 * ```
 *
 * @param  {Function} `fn` Is this `fn` a callback function.
 * @param  {Array}    `ignores` Arguments names, default are `['callback', 'callback_', 'done', 'next', 'cb']`.
 * @param  {Number}   `max` How many characters to cut from `fn`s toString, default `250`. Passed to [function-arguments][].
 * @return {Boolean}
 * @api public
 */

module.exports = function isAsyncFunction (fn, ignores, max) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }

  var defaults = ['callback', 'callback_', 'done', 'next', 'cb']
  var args = require('function-arguments')(fn, max || 250)

  ignores = require('isarray')(ignores) ? ignores : defaults
  return require('arr-includes')(args, ignores)
}

