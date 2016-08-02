'use strict'

function hasDecimalPart(str) {
  str = filterNumbersDotsAndCommas(str)

  return (
    str[str.length - 3] === '.' ||
    str[str.length - 3] === ','
  )
}

function getDecimalSymbol(str) {
  str = filterNumbersDotsAndCommas(str)
  return str[str.length - 3]
}

function filterNumbers(str) {
  var filteredStr = str.replace(/[^\d]/g, '')
  return filteredStr
}

function filterNumbersDotsAndCommas(str) {
  return str.replace(/[^\d.,]/g, '')
}

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------

function parsePrice(str) {
  console.log('str:', str)
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
