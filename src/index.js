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
  return str
    .replace(/[^\d.,]/g, '')
    .replace(/[.,]$/, '')
}

function getDecimalSymbol (str) {
  var strFiltered = filterNumbersDotsAndCommas(str)
  var endWithZero = strFiltered[strFiltered.length - 1] === '0'

  // For each character starting from the end...
  for (var i = strFiltered.length; i > 0; i--) {
    // If the last character is a "0" and the decimal position > 3, no decimal
    if (((strFiltered.length - i + 1) > 3) && endWithZero) {
      return
    }

    var currentChar = strFiltered[i - 1]

    if ([',', '.'].indexOf(currentChar) !== -1) {
      return currentChar
    }
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

  if (decimalSymbol) {
    decimalPart = str.split(decimalSymbol)[1]
  }

  var integerPart = str.split(decimalSymbol)[0]

  return Number(filterNumbers(integerPart) + '.' + filterNumbers(decimalPart))
}

module.exports = parsePrice
