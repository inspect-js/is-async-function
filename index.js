/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

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
 * @param  {Function} `fn` is this `fn` a callback function
 * @param  {Array} `names` arguments names, default are [common-callback-names][]
 * @param  {Boolean} `strict` defaults to `true` to always return a boolean,
 *                            pass `false` to get index (position) - this is
 *                            useful when you wanna understand which "callback name"
 *                            exists as argument in that `fn`
 * @return {Boolean}
 * @api public
 */

module.exports = function isAsyncFunction (fn, names, strict) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }

  strict = typeof names === 'boolean' ? names : strict
  strict = typeof strict === 'boolean' ? strict : true
  names = typeof names === 'boolean' ? null : names

  names = utils.isArray(names) ? names : utils.arrayify(names)
  names = names.length ? names : utils.callbackNames

  var idx = utils.arrIncludes(utils.fnArgs(fn), names)
  return strict ? Boolean(idx) : idx
}
