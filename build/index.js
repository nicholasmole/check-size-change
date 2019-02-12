module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checkSizeChange = checkSizeChange;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * checkSizeChange: Sends props to child - InputComponent 
 * @param {Component} InputComponent child component that will recieve props
 * @param {number} tablet Edit value for isTabletLimit boolean
 * @param {number} mobile Edit value for isMobileLimit boolean
 * @param {array} extraSizes Create extra sizes to compare and pass to child component 
 */

function checkSizeChange(InputComponent) {
	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$tablet = _ref.tablet,
	    tablet = _ref$tablet === undefined ? 992 : _ref$tablet,
	    _ref$mobile = _ref.mobile,
	    mobile = _ref$mobile === undefined ? 576 : _ref$mobile,
	    _ref$extraSizes = _ref.extraSizes,
	    extraSizes = _ref$extraSizes === undefined ? [] : _ref$extraSizes;

	return function (_Component) {
		_inherits(_class, _Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

			_this.state = {
				isTabletLimit: _this.isSmallerThanTestSize(window.innerWidth, tablet),
				isMobileLimit: _this.isSmallerThanTestSize(window.innerWidth, mobile),
				extraSizes: extraSizes
			};
			for (var i = 0; i < extraSizes.length; i++) {
				_this.state[extraSizes[i].prop] = false;
			}
			_this.isSmallerThanTestSize = _this.isSmallerThanTestSize.bind(_this);
			_this.onResize = _this.onResize.bind(_this);
			_this.passSelfRefForOnResize = _this.passSelfRefForOnResize.bind(_this);
			_this.isTabletLimit = _this.isTabletLimit.bind(_this);
			_this.isMobileLimit = _this.isMobileLimit.bind(_this);
			return _this;
		}

		_createClass(_class, [{
			key: 'isSmallerThanTestSize',
			value: function isSmallerThanTestSize(currentSize, limitSize) {
				return currentSize <= limitSize;
			}
		}, {
			key: 'onResize',
			value: function onResize(self) {
				var _this2 = this;

				setTimeout(function () {
					if (_this2) self = _this2;
					var tabletBreakSize = self.isSmallerThanTestSize(window.innerWidth, tablet);
					if (tabletBreakSize !== self.state.tabletLimitReached) {
						self.setState({
							isTabletLimit: tabletBreakSize
						});
					}
					var mobileBreakSize = self.isSmallerThanTestSize(window.innerWidth, mobile);
					if (mobileBreakSize !== self.state.mobileLimitReached) {
						self.setState({
							isMobileLimit: mobileBreakSize
						});
					}

					var extras = self.state.extraSizes;

					var _loop = function _loop(i) {
						var testSize = self.isSmallerThanTestSize(window.innerWidth, extras[i].limit);

						if (testSize !== extras[i].prop) {
							var _prop = function _prop() {
								self.state[extras[i].prop] = testSize;
							};
							self.setState(_prop());
						}
					};

					for (var i = 0; i < extras.length; i++) {
						_loop(i);
					}
				}, 150);
			}
		}, {
			key: 'passSelfRefForOnResize',
			value: function passSelfRefForOnResize(e, self) {
				e = e || window.event;
				self.onResize(self);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this3 = this;

				window.addEventListener('resize', function (e) {
					return _this3.passSelfRefForOnResize(e, _this3);
				});
				this.onResize();
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.removeEventListener('resize', this.onResize);
				window.removeEventListener('resize', this.passSelfRefForOnResize);
			}
		}, {
			key: 'isTabletLimit',
			value: function isTabletLimit() {
				return this.state.isTabletLimit;
			}
		}, {
			key: 'isMobileLimit',
			value: function isMobileLimit() {
				return this.state.isMobileLimit;
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(InputComponent, _extends({}, this.state, this.props));
			}
		}]);

		return _class;
	}(_react.Component);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _checkSizeChange = __webpack_require__(0);

Object.defineProperty(exports, 'checkSizeChange', {
	enumerable: true,
	get: function get() {
		return _checkSizeChange.checkSizeChange;
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);