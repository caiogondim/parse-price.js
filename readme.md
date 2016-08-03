<img src="http://rawgit.com/caiogondim/parse-price.js/master/logo/banner.svg">

# parse-price.js

Returns a `Number` from a localized price string.

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

## Installation

### Bundler

To use the library, install it through [npm](https://npmjs.com)

```shell
npm install --save parse-price
```

To port it to Browser or any other (non CJS) environment, use your favorite CJS
bundler. No favorite yet? Try: [Browserify](http://browserify.org/),
[Webmake](https://github.com/medikoo/modules-webmake) or
[Webpack](http://webpack.github.io/)

### Drop-in

If using a bunlder is not your thing, there are two files with UMD (Universal
Module Definition) under `dist/` folder, one of them already minified. Just
reference it on your browser (drop it) and use it.

```html
<script src="dist/parse-price.min.js"></script>
<script>
  var price = window.parsePrice('€1.1234,56')
</script>
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
