# [is-async-function][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Is function really asynchronous function? Trying to guess that based on check if [common-callback-names][] exists as function arguments names or you can pass your custom.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```
$ npm i is-async-function --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const isAsyncFunction = require('is-async-function')
```

## API

### [isAsyncFunction](index.js#L47)
> Trying to guess is `fn` asynchronous function or not. But not [is-callback-function][] be aware of that diff.

**Example**

```js
var fs = require('fs')
var isAsyncFn = require('is-async-function')

console.log(isAsyncFunction(fs.readFile)) // => true
console.log(isAsyncFunction(fs.stat)) // => true

console.log(isAsyncFunction(fs.readFileSync)) // => false
console.log(isAsyncFunction(fs.statSync)) // => false

// or pass custom names to recognize as `async`
console.log(isAsyncFunction(fs.stat, ['cb'])) // => false
console.log(isAsyncFunction(fs.readFile, ['foo', 'bar']))
// => false, because fs.readFile uses `cb`
```

**Params**

* `fn` **{Function}**: is this `fn` a callback function    
* `names` **{Array}**: arguments names, default are [common-callback-names][]    
* `strict` **{Boolean}**: defaults to `true` to always return a boolean, pass `false` to get index (position) - this is useful when you wanna understand which "callback name" exists as argument in that `fn`    
* `returns` **{Boolean|Number}**: always boolean `true` or `false` when on strict mode, othewise it can be Number index representing the position and if index is 0 it is transformed to boolean `true` - so always positive value if function is async.  

**non-strict mode**

> passing `false` as second or third argument

```js
var isAsyncFunction = require('is-async-function')

console.log(isAsyncFunction(fs.readFile, false)) // => 2
// => 2, because it callback argument is called `cb`
// and that's the third element in `common-callback-names` array

console.log(isAsyncFunction(fs.stat, false)) // => 1
// => 1, because it callback argument is called `callback_`
// and that's the second element in `common-callback-names` array
```

## Related
- [common-callback-names](https://www.npmjs.com/package/common-callback-names): List of common callback names - callback, cb, callback_, next, done. | [homepage](https://github.com/tunnckocore/common-callback-names#readme "List of common callback names - callback, cb, callback_, next, done.")
- [fn-args](https://www.npmjs.com/package/fn-args): Get the arguments of a function | [homepage](https://github.com/sindresorhus/fn-args "Get the arguments of a function")
- [fn-name](https://www.npmjs.com/package/fn-name): Get the name of a named function | [homepage](https://github.com/sindresorhus/fn-name "Get the name of a named function")
- [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors… [more](https://github.com/tunnckocore/function-arguments#readme) | [homepage](https://github.com/tunnckocore/function-arguments#readme "Get arguments of a function, useful for and used in dependency injectors. Works for regular functions, generator functions and arrow functions.")
- [get-fn-name](https://www.npmjs.com/package/get-fn-name): Get function name with strictness and correctness in mind. Also works for… [more](https://github.com/tunnckocore/get-fn-name#readme) | [homepage](https://github.com/tunnckocore/get-fn-name#readme "Get function name with strictness and correctness in mind. Also works for arrow functions and getting correct name of bounded functions. Powered by [fn-name][].")
- [is-callback-function](https://www.npmjs.com/package/is-callback-function): Returns true if function is a callback. Checks its name is one… [more](https://github.com/tunnckocore/is-callback-function#readme) | [homepage](https://github.com/tunnckocore/is-callback-function#readme "Returns true if function is a callback. Checks its name is one of [common-callback-names][] - callback, cb, cb_, callback_, next, done, they can be customized, these are default.")
- [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name, args… [more](https://github.com/tunnckocore/parse-function#readme) | [homepage](https://github.com/tunnckocore/parse-function#readme "Parse a function, arrow function or string to object with name, args, params and body properties.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-async-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[common-callback-names]: https://github.com/tunnckocore/common-callback-names
[function-arguments]: https://github.com/tunnckocore/function-arguments
[is-callback-function]: https://github.com/tunnckocore/is-callback-function

[npmjs-url]: https://www.npmjs.com/package/is-async-function
[npmjs-img]: https://img.shields.io/npm/v/is-async-function.svg?label=is-async-function

[license-url]: https://github.com/tunnckoCore/is-async-function/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/is-async-function.svg

[downloads-url]: https://www.npmjs.com/package/is-async-function
[downloads-img]: https://img.shields.io/npm/dm/is-async-function.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-async-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-async-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-async-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-async-function/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-async-function
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-async-function.svg

[david-url]: https://david-dm.org/tunnckoCore/is-async-function
[david-img]: https://img.shields.io/david/tunnckoCore/is-async-function.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[fn-name]: https://github.com/sindresorhus/fn-name