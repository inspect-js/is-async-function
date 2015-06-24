# is-async-function [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check that given function is async (callback) function or not. Trying to guess that based on check if `callback`, `cb`, `done` or `next` exists as function argument name.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-async-function --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isAsyncFunction = require('is-async-function')

var fs = require('fs')
isAsyncFunction(fs.readFile) //=> true
isAsyncFunction(fs.rename) //=> true
isAsyncFunction(fs.chown) //=> true
isAsyncFunction(fs.readFileSync) //=> false
isAsyncFunction(fs.renameSync) //=> false
isAsyncFunction(fs.chownSync) //=> false
isAsyncFunction(fs.createReadStream) //=> false

var request = require('request')
var got = require('got')

isAsyncFunction(request) //=> true
isAsyncFunction(got.get) //=> true
isAsyncFunction(got.post) //=> true
isAsyncFunction(got) //=> true
```


## Related
- [is-empty-function](https://github.com/tunnckoCore/is-empty-function): Checks the given function (or fn.toString()) is with empty body - dont have body.
- [is-missing](https://github.com/tunnckoCore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github [more](https://github.com/tunnckoCore/is-missing)
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system - globally or locally.
- [is-glob](https://github.com/jonschlinkert/is-glob): Returns `true` if the given string looks like a glob pattern.
- [is-es6-generators](https://github.com/tunnckocore/is-es6-generators): Check whether a value is a `Generator` or `GeneratorFunction`. The `co` way, more strict checking. Always return boolean true or false, never null or undefined.
- [npm-related](https://github.com/tunnckoCore/npm-related): Thin wrapper on top of `helper-related` for generating a list of links to the homepages of related NPM projects.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-async-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-async-function
[npmjs-img]: https://img.shields.io/npm/v/is-async-function.svg?label=is-async-function

[license-url]: https://github.com/tunnckoCore/is-async-function/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-async-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-async-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-async-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-async-function.svg

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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
