/**
 * parse-price - returns a Number from a localized price string
 *
 * @version 1.1.8
 * @link https://github.com/caiogondim/parse-price.js#readme
 * @author Caio Gondim
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["parsePrice"] = factory();
	else
		root["parsePrice"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ])
});
;