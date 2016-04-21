/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * > Trying to guess is `fn` asynchronous function or not.
 * But not [is-callback-function][] be aware of that diff.
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
 * @param  {Array}    `names` Arguments names, default are [common-callback-names][].
 * @return {Boolean}
 * @api public
 */

module.exports = function isAsyncFunction (fn, names) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }
  names = require('isarray')(names) ? names : require('common-callback-names')
  return require('arr-includes')(require('function-arguments')(fn), names)
}
