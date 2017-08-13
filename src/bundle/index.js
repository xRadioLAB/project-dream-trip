/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cmsConfig = __webpack_require__(1);

var _cmsConfig2 = _interopRequireDefault(_cmsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
    console.log('====================================');
    console.log(_cmsConfig2.default);
    console.log('====================================');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"title":"台湾青年大陆互联网＋梦想之旅","pos":"新华网>台湾频道>专访专题>台湾青年大陆互联网梦想之旅","url":"http://www.xinhuanet.com/tw/zhuanti/twqndlmxzl/index.htm","isFreeMod":true,"台湾青年大陆互联网＋梦想之旅1":{"list":{"大图（要闻左侧的）":{"nid":"11161095","cid":"11160643"},"要闻":{"nid":"11161097","cid":"11160645"},"实习活动":{"nid":"11161098","cid":"11160646"},"参访活动":{"nid":"11161106","cid":"11160654"},"亮点扫描":{"nid":"11161099","cid":"11160647"},"参访企业巡礼":{"nid":"11161100","cid":"11160648"},"精彩瞬间":{"nid":"11161103","cid":"11160651"},"两岸青年交流":{"nid":"11161104","cid":"11160652"}}}}

/***/ })
/******/ ]);