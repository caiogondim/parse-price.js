/**
 * @param {String} str
 * @return {Boolean}
 */
function hasDecimalPart (str) {
  str = filterNumbersDotsAndCommas(str)

  return (
    str[str.length - 3] === '.' ||
    str[str.length - 3] === ','
  )
}

/**
 * @param {String} str
 * @return {String}
 */
function getDecimalSymbol (str) {
  str = filterNumbersDotsAndCommas(str)
  return str[str.length - 3]
}

/**
 * @param {String} str
 * @return {String}
 */
function filterNumbers (str) {
  var filteredStr = str.replace(/[^\d]/g, '')
  return filteredStr
}

/**
 * @param {String} str
 * @return {String}
 */
function filterNumbersDotsAndCommas (str) {
  return str.replace(/[^\d.,]/g, '')
}

//
// API
//

/**
 * @param {String} str
 * @return {Number}
 */
function parsePrice (str) {
  var decimalPart = '00'

  if (hasDecimalPart(str)) {
    var decimalSymbol = getDecimalSymbol(str)
    // There should be only one decimal symbol.
    decimalPart = str.split(decimalSymbol)[1]
    decimalPart = filterNumbers(decimalPart)
  }

  var integerPart = filterNumbers(str.split(decimalSymbol)[0])

  return Number(integerPart + '.' + decimalPart)
}

module.exports = parsePrice
