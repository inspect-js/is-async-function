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

test('should return false for JSON.parse', function (done) {
  var actual = isAsyncFunction(JSON.parse)
  var expected = false

  test.equal(actual, expected)
  done()
})

test('should return false for JSON.stringify', function (done) {
  var actual = isAsyncFunction(JSON.stringify)
  var expected = false

  test.equal(actual, expected)
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

test('should return true for `request` package', function (done) {
  var request = require('request')
  var actual = isAsyncFunction(request)
  var expected = true

  test.equal(actual, expected)
  done()
})

test('should return false for `is-match` (micromatch) package', function (done) {
  var isMatch = require('is-match')
  var actual = isAsyncFunction(isMatch)
  var expected = false

  test.equal(actual, expected)
  done()
})

test('should return true for `got` package', function (done) {
  var got = require('got')
  var actual = isAsyncFunction(got)
  var expected = true

  test.equal(actual, expected)
  done()
})

test('should return true for `gh-got` package', function (done) {
  var ghgot = require('gh-got')
  var actual = isAsyncFunction(ghgot)
  var expected = true

  test.equal(actual, expected)
  done()
})
