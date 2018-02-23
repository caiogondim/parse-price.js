/**
 * parse-price - returns a Number from a localized price string
 *
 * @version 1.1.6
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


/***/ })
/******/ ])
});
;