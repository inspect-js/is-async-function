/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function isAsyncFn (fn, max) {
  if (typeof fn !== 'function') {
    throw new TypeError('is-async-function expect a function')
  }

  var fnStr = fn.toString().slice(8, Number(max) || 100)
  return fnStr.indexOf('callback') !== -1 || fnStr.indexOf('cb') !== -1 ||
    fnStr.indexOf('done') !== -1 || fnStr.indexOf('next') !== -1
}
