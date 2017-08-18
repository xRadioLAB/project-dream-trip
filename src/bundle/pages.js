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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"title":"台湾青年大陆互联网＋梦想之旅","pos":"新华网>台湾频道>专访专题>台湾青年大陆互联网梦想之旅","url":"http://www.xinhuanet.com/tw/zhuanti/twqndlmxzl/index.htm","isFreeMod":true,"台湾青年大陆互联网＋梦想之旅1":{"list":{"大图（要闻左侧的）":{"nid":"11161095","cid":"11160643"},"要闻":{"nid":"11161097","cid":"11160645"},"实习活动":{"nid":"11161098","cid":"11160646"},"参访活动":{"nid":"11161106","cid":"11160654"},"亮点扫描":{"nid":"11161099","cid":"11160647"},"参访企业巡礼":{"nid":"11161100","cid":"11160648"},"精彩瞬间":{"nid":"11161103","cid":"11160651"},"两岸青年交流":{"nid":"11161104","cid":"11160652"}}}}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var href = window.location.href;
    return (/dev/.test(href) || /localhost/.test(href) || /117:3000/.test(href)
    );
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var browser = window.BRO;
    return browser && (browser.device === 'mac' || browser.device === 'windows');
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var isDev = _ref.isDev,
        url = _ref.url;

    return isDev ? './bundle' : url;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var $target = _ref.$target,
        isMobile = _ref.isMobile;

    var date = new Date();
    var targetBlank = 'target="_blank"';
    var hrefCom = 'href="http://www.xinhuanet.com"';
    var hrefLtd = 'href="http://www.xinhuanet.ltd"';
    var mobileBr = isMobile ? '<br>' : '';
    var dom = '\n        <div class="footer">\n            Copyright &copy; 2000 - ' + date.getFullYear() + ' \n            <a ' + hrefCom + ' ' + targetBlank + '>XINHUANET.com</a>\n            ' + mobileBr + '\n            All Rights Reserved.<br>\n            \u5236\u4F5C\u5355\u4F4D\uFF1A<a ' + hrefLtd + ' ' + targetBlank + '>\u65B0\u534E\u7F51\u80A1\u4EFD\u6709\u9650\u516C\u53F8</a>\n            ' + mobileBr + '\n            \u7248\u6743\u6240\u6709 <a ' + hrefLtd + ' ' + targetBlank + '>\u65B0\u534E\u7F51\u80A1\u4EFD\u6709\u9650\u516C\u53F8</a>\n        </div>\n    ';
    $target.append(dom);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var title = _ref.title,
        substr = _ref.substr,
        _ref$script = _ref.script,
        script = _ref$script === undefined ? ['https://res.wx.qq.com/open/js/jweixin-1.0.0.js', 'http://www.xinhuanet.com/global/public/wxShare.js'] : _ref$script,
        src = _ref.src;

    $('body').append('\n        <div data-wechat="1" style="display:none">\n            <div class="share-title">' + $.trim(title) + '</div>\n            <div class="share-substr">' + $.trim(substr) + '</div>\n            <img class="share-img" src="' + src + '" width="300" height="300">\n        </div>\n        <script src="' + script[0] + '"></script>\n        <script src="' + script[1] + '"></script>\n    ');
};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isDev = __webpack_require__(1);

var _isDev2 = _interopRequireDefault(_isDev);

var _isPc = __webpack_require__(2);

var _isPc2 = _interopRequireDefault(_isPc);

var _assetsBaseUrl = __webpack_require__(3);

var _assetsBaseUrl2 = _interopRequireDefault(_assetsBaseUrl);

var _footer = __webpack_require__(4);

var _footer2 = _interopRequireDefault(_footer);

var _wechatShare = __webpack_require__(5);

var _wechatShare2 = _interopRequireDefault(_wechatShare);

var _getXpageNid = __webpack_require__(10);

var _getXpageNid2 = _interopRequireDefault(_getXpageNid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
    var $window = $(window);
    var $html = $('html');
    var $body = $('body');
    var _isDev$isPc = {
        isDev: (0, _isDev2.default)(),
        isPc: (0, _isPc2.default)()
    },
        isDev = _isDev$isPc.isDev,
        isPc = _isDev$isPc.isPc;

    var isMobile = !isPc;
    var assetsBaseUrl = (0, _assetsBaseUrl2.default)({
        isDev: isDev,
        url: 'http://www.xinhuanet.com/project-dream-trip/bundle'
    });

    if (isMobile) {
        var src = assetsBaseUrl + '/banner-mobile.jpg';
        $('.banner img').attr('src', src);
        (0, _wechatShare2.default)({
            title: $('title').text(),
            substr: $('[name="description"]').attr('content'),
            src: src
        });
    }

    (0, _footer2.default)({
        $target: $('body'),
        isMobile: isMobile
    });

    var initPage = function initPage() {
        var xpageConfig = (0, _getXpageNid2.default)({ colunmName: '#column-title' });
        var xpage = new XHW.Xpage('#data', {
            mode: 'listView', // 插件模式
            nid: xpageConfig.cid, // 栏目id
            pageSize: 20, // 每页条数
            moreButton: '.xpage-more-btn', // 更多按钮
            orderby: 1, // 0: 时间顺序, 1: 签发库顺序
            renderItem: function renderItem(item, index, list) {
                // 列表渲染方法
                return '\n                    <li>\n                        <a href="' + item.LinkUrl + '" target="_blank">\n                            ' + item.Title + '\n                        </a>\n                    </li>\n                ';
            }
        });
    };

    initPage();
});

// pages

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cmsConfig = __webpack_require__(0);

var _cmsConfig2 = _interopRequireDefault(_cmsConfig);

var _setColumnName = __webpack_require__(11);

var _setColumnName2 = _interopRequireDefault(_setColumnName);

var _setTitleName = __webpack_require__(12);

var _setTitleName2 = _interopRequireDefault(_setTitleName);

var _navMapping = __webpack_require__(13);

var _navMapping2 = _interopRequireDefault(_navMapping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var colunmName = _ref.colunmName;

    for (var porp in _navMapping2.default) {
        if (_navMapping2.default.hasOwnProperty(porp)) {
            var regex = new RegExp(_navMapping2.default[porp], 'i');
            var hasNid = regex.test(window.location.href);
            if (hasNid) {
                /*
                    TIPS: `cmsConfig[cmsConfig.title + '1']`
                    cms tools 制作的参数，第一个页面为 title + '1'
                    例如：
                        当 `{ "title": "这是页面名字" }`，
                        那么这个参数配置会包含属性 `"这是页面名字1": { "list": { ... }}`;
                */
                var result = _cmsConfig2.default[_cmsConfig2.default.title + '1'].list[porp].cid;
                (0, _setColumnName2.default)({
                    columnName: porp,
                    columnTag: colunmName
                });
                (0, _setTitleName2.default)({
                    columnName: porp
                });
                return {
                    porp: porp,
                    cid: result
                };
            }
        }
    }
    return false;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var setColumnName = function setColumnName(_ref) {
    var columnName = _ref.columnName,
        columnTag = _ref.columnTag;

    if (columnName) {
        $(columnTag).html(columnName);
    }
};

exports.default = setColumnName;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var setTitleName = function setTitleName(_ref) {
    var columnName = _ref.columnName;

    if (columnName) {
        $('title').prepend(columnName + '_');
    }
};

exports.default = setTitleName;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mapping = {
    '要闻': 'yw',
    '亮点扫描': 'ldsm',
    '两岸青年交流': 'laqnjl'
};

exports.default = mapping;

/***/ })
/******/ ]);