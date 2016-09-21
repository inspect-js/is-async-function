/*!
 * is-async-function <https://github.com/tunnckoCore/is-async-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('mukla')
var matcher = require('is-match')
var isAsyncFunction = require('./index')

/**
 * deps to test against
 */

var got = require('got')
var ghGot = require('gh-got')
var request = require('request')
var isMatch = require('is-match')

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

test('should return true for `request`, `got` and `gh-got` packages', function (done) {
  test.equal(isAsyncFunction(got), true)
  test.equal(isAsyncFunction(ghGot), true)
  test.equal(isAsyncFunction(request), true)
  done()
})

test('should return false for `is-match` (micromatch) package', function (done) {
  var actual = isAsyncFunction(isMatch)
  var expected = false

  test.equal(actual, expected)
  done()
})
