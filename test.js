/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('mukla')
var matcher = require('is-match')
var isAsyncFunction = require('./index')

test('should throw TypeError if not function given', function (done) {
  function fixture () {
    isAsyncFunction(12345)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /is-async-function expect a function/)
  done()
})

test('should return true for all async `fs` methods', function (done) {
  var keys = Object.keys(fs)
  var isMatch = matcher('!*{Sync,sync,Stats,_*,watch,Stream}*')

  keys.forEach(function (method) {
    if (typeof fs[method] === 'function' && isMatch(method)) {
      var actual = isAsyncFunction(fs[method])
      var expected = true

      test.equal(actual, expected)
    }
  })
  done()
})

test('should return false for JSON.parse and JSON.stringify', function (done) {
  test.equal(isAsyncFunction(JSON.parse), false)
  test.equal(isAsyncFunction(JSON.stringify), false)
  done()
})

test('should return false for fs.readFileSync, fs.statSync, etc', function (done) {
  var keys = Object.keys(fs)
  var isMatch = matcher('*Sync')

  keys.forEach(function (method) {
    if (isMatch(method)) {
      var actual = isAsyncFunction(fs[method])
      var expected = false

      test.equal(actual, expected)
    }
  })
  done()
})

test('should accept second argument `names` to be boolean true', function (done) {
  test.strictEqual(isAsyncFunction(fs.readFile, true), true)
  done()
})

test('should have non-strict mode to return index', function (done) {
  var res = isAsyncFunction(fs.stat, null, false)

  // fs.stat uses `callback` as callbacka rgument
  test.strictEqual(typeof res, 'boolean')
  test.strictEqual(res, true)

  // `next` is 6th item in `common-callback-names`
  function fn (foo, bar, next) {}
  function fn2 (foo, cb_) {}
  test.strictEqual(isAsyncFunction(fn, null, false), 5)
  test.strictEqual(isAsyncFunction(fn2, false), 3)
  done()
})

test('should allow passing custom names', function (done) {
  var result = isAsyncFunction(fs.readFile, ['foo', 'bar'])

  test.strictEqual(result, false)
  done()
})
