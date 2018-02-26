<img src="http://rawgit.com/caiogondim/parse-price.js/master/logo/banner.svg">

# parse-price
<img src="http://travis-ci.org/caiogondim/parse-price.js.svg?branch=master" alt="Travis CI"> [![codecov](https://codecov.io/gh/caiogondim/parse-price.js/branch/master/graph/badge.svg)](https://codecov.io/gh/caiogondim/parse-price.js) <img src="https://david-dm.org/caiogondim/parse-price.js/status.svg" alt="dependencies status"> <img src="http://img.badgesize.io/caiogondim/parse-price.js/master/dist/parse-price.min.js?compression=gzip" alt="lib size">

Returns a `Number` from a localized price string.


## Installation

```shell
npm install --save parse-price
```

## Usage

Receives a string (price) as input and returns a `Number` (or `NaN`) as output.

```js
var parsePrice = require('parse-price')

parsePrice('€1.234,56') // => 1234.56
parsePrice('US$ 1.234,56') // => 1234.56
parsePrice('£1,234.56') // => 1234.56
parsePrice('R$1.234,56') // => 1234.56
parsePrice('1 234,56 руб') // => 1234.56
parsePrice('1,234.56 ₪') // => 1234.56
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
