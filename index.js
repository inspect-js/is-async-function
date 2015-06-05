/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function isAsyncFn (fn, max) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }

  var fnStr = fn.toString().slice(8, Number(max) || 150)
  return fnStr.indexOf('callback') !== -1 || fnStr.indexOf('cb') !== -1
}
