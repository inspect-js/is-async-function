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
var mm = require('micromatch')
var isAsyncFunction = require('./index')

test('should throw TypeError if not function given', function (done) {
  function fixture () {
    isAsyncFunction(12345)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /is-async-function expect a function/)
  done()
})

test('should return true for async `fs` methods', function (done) {
  var keys = Object.keys(fs)
  var isMatch = mm.matcher('*{readFile,unlink,readdir}')

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
  var isMatch = mm.matcher('{readFile,stat,readdir}Sync')

  keys.forEach(function (method) {
    if (typeof fs[method] === 'function' && isMatch(method)) {
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
  // using fn3 temporary instead of fs.stat, until eventual fix in `function-arguments`
  // which as of january 2020 is failing in newer nodejs versions
  // because they moved to use "default params" for the `options` in the Nodejs Core
  function fn3 (path, options, callback) {}

  var res = isAsyncFunction(fn3, null, false)

  // fs.stat uses `callback` as callback argument
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
