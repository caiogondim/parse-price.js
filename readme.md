<img src="http://rawgit.com/caiogondim/parse-price.js/master/logo/banner.svg">

# parse-price

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
