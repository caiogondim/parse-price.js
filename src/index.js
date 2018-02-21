/**
 * @param {String} str
 * @return {String}
 */
function filterNumbers (str) {
  return str.replace(/[^\d]/g, '')
}

/**
 * @param {String} str
 * @return {String}
 */
function filterNumbersDotsAndCommas (str) {
  return str.replace(/[^\d.,]/g, '')
}

function getDecimalSymbol (str) {

  var str_filtered = filterNumbersDotsAndCommas(str)
  var endWithZero = str_filtered[str_filtered.length - 1] === '0'

    // for each character starting from the end...
  for (var i = str_filtered.length; i > 0; i--) {

      // if the last character is a "0" and the decimal position > 3, no decimal
    if (((str_filtered.length - i + 1) > 3) && endWithZero)
      return

    var currentChar = str_filtered[i - 1]

    if ([',', '.'].indexOf(currentChar) !== -1)
      return currentChar
  }
}

//
// API
//

/**
 * @param {Number|String} input
 * @return {Number}
 */
function parsePrice (input) {

  var str = String(input)

  var decimalPart = '00'
  var decimalSymbol = getDecimalSymbol(str)

  if (decimalSymbol)
    decimalPart = str.split(decimalSymbol)[1]

  var integerPart = str.split(decimalSymbol)[0]

  return Number(filterNumbers(integerPart) + '.' + filterNumbers(decimalPart))
}

module.exports = parsePrice
