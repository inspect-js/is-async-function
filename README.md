# [is-async-function][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Is function really asynchronous (callback) function? Trying to guess that based on check if `callback`, `cb`, `done`, `next` exists as function argument names - or you can pass you custom.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i is-async-function --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const isAsyncFunction = require('is-async-function')
```

### [isAsyncFn](index.js#L20)

> Trying to guess is function asynchronous (callback) function or not.

**Params**

* `fn` **{Function}**    
* `ignores` **{Array}**    
* `max` **{Number}**    
* `returns` **{Boolean}**  

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-async-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[arr-includes]: https://github.com/tunnckocore/arr-includes
[function-arguments]: https://github.com/tunnckocore/function-arguments
[isarray]: https://github.com/juliangruber/isarray

[npmjs-url]: https://www.npmjs.com/package/is-async-function
[npmjs-img]: https://img.shields.io/npm/v/is-async-function.svg?label=is-async-function

[license-url]: https://github.com/tunnckoCore/is-async-function/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

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

