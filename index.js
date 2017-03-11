/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

var arrayify = require('arrify')
var arrIncludes = require('arr-includes')
var callbackNames = require('common-callback-names')
var functionArguments = require('function-arguments')

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
 * console.log(isAsyncFunction(fs.readFile, ['foo', 'bar']))
 * // => false, because fs.readFile uses `cb`
 * ```
 *
 * @param  {Function} `fn` is this `fn` a callback function
 * @param  {Array} `names` arguments names, default are [common-callback-names][]
 * @param  {Boolean} `strict` defaults to `true` to always return a boolean,
 *                            pass `false` to get index (position) - this is
 *                            useful when you wanna understand which "callback name"
 *                            exists as argument in that `fn`
 * @return {Boolean|Number} always boolean `true` or `false` when on strict mode,
 *                          othewise it can be Number index representing the position
 *                          and if index is 0 it is transformed to boolean `true` - so
 *                          always positive value if function is async.
 * @api public
 */

module.exports = function isAsyncFunction (fn, names, strict) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }

  strict = typeof names === 'boolean' ? names : strict
  strict = typeof strict === 'boolean' ? strict : true
  names = typeof names === 'boolean' ? null : names

  names = Array.isArray(names) ? names : arrayify(names)
  names = names.length ? names : callbackNames

  var idx = arrIncludes(names, functionArguments(fn))
  return strict ? Boolean(idx) : idx
}
