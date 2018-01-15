(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-ultra-drag"] = factory(require("react"));
	else
		root["react-ultra-drag"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _reactUltraDrag = __webpack_require__(1);

	var _reactUltraDrag2 = _interopRequireDefault(_reactUltraDrag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reactUltraDrag2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactUltraDrag = function (_React$Component) {
	    _inherits(ReactUltraDrag, _React$Component);

	    function ReactUltraDrag(props) {
	        _classCallCheck(this, ReactUltraDrag);

	        var _this = _possibleConstructorReturn(this, (ReactUltraDrag.__proto__ || Object.getPrototypeOf(ReactUltraDrag)).call(this, props));

	        _this.cursorX = 0;
	        _this.cursorY = 0;
	        _this.clicked = null;
	        _this.frameRect = {
	            width: 0,
	            height: 0,
	            left: 0,
	            top: 0
	        };
	        if (_this.props.bound) {
	            var _this$frameRect = _this.frameRect,
	                top = _this$frameRect.top,
	                left = _this$frameRect.left,
	                width = _this$frameRect.width,
	                height = _this$frameRect.height;

	            if (typeof _this.props.bound.top === 'number') {
	                _this.frameRect.top = _this.props.bound.top;
	            }
	            if (typeof _this.props.bound.left === 'number') {
	                _this.frameRect.left = _this.props.bound.left;
	            }
	            if (typeof _this.props.bound.width === 'number') {
	                _this.frameRect.width = _this.props.bound.width;
	            }
	            if (typeof _this.props.bound.height === 'number') {
	                _this.frameRect.height = _this.props.bound.height;
	            }
	        }
	        _this.state = {
	            cursor: ''
	        };
	        if (_this.props.enableDrag) {
	            _this.mouseMoveListener = _this._onMove.bind(_this);
	            _this.mouseUpListener = _this._onUp.bind(_this);
	        }
	        return _this;
	    }

	    _createClass(ReactUltraDrag, [{
	        key: 'getBounder',
	        value: function getBounder() {
	            return this.frameRect;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var attachedTo = this.props.attachedTo;


	            if (this.props.enableDrag) {
	                attachedTo.addEventListener('mousemove', this.mouseMoveListener);
	                attachedTo.addEventListener('mouseup', this.mouseUpListener);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.attachedTo.removeEventListener('mousemove', this.mouseMoveListener);
	            this.props.attachedTo.removeEventListener('mouseup', this.mouseUpListener);
	        }
	    }, {
	        key: 'getRightBottom',
	        value: function getRightBottom() {
	            return _react2.default.createElement('div', { style: { position: 'absolute', userSelect: 'none', width: 10, height: 10, right: -10, bottom: -10, cursor: 'se-resize' } });
	        }
	    }, {
	        key: 'getRight',
	        value: function getRight() {
	            return _react2.default.createElement('div', { style: { position: 'absolute', userSelect: 'none', width: 20, top: 0, right: -10, bottom: 10, cursor: 'ew-resize' } });
	        }
	    }, {
	        key: 'getLeft',
	        value: function getLeft() {
	            return _react2.default.createElement('div', { style: { position: 'absolute', userSelect: 'none', width: 20, top: 0, left: -10, bottom: 10, cursor: 'ew-resize' } });
	        }
	    }, {
	        key: 'getBottom',
	        value: function getBottom() {
	            return _react2.default.createElement('div', { style: { position: 'absolute', userSelect: 'none', height: 20, left: 0, bottom: -10, right: 10, cursor: 'ns-resize' } });
	        }
	    }, {
	        key: 'getTop',
	        value: function getTop() {
	            return _react2.default.createElement('div', { style: { position: 'absolute', userSelect: 'none', height: 20, right: 10, top: -10, left: 10, cursor: 'ns-resize' } });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                style = _props.style,
	                contentStyle = _props.contentStyle,
	                minWidth = _props.minWidth,
	                minHeight = _props.minHeight,
	                animate = _props.animate,
	                cursorRemap = _props.cursorRemap,
	                children = _props.children,
	                bound = _props.bound,
	                onMove = _props.onMove,
	                onResize = _props.onResize;


	            var pervFrameRect = _extends({}, this.frameRect);

	            if (this.clicked && this.props.enableDrag) {
	                var hits = this.hitEdges;
	                var boundingBox = this.clicked.boundingBox;

	                if (hits.top || hits.bottom || hits.left || hits.right) {
	                    if (hits.right) this.frameRect.width = Math.max((this.cursorX - boundingBox.left) / this.props.scale, minWidth) + 'px';
	                    if (hits.bottom) this.frameRect.height = Math.max((this.cursorY - boundingBox.top) / this.props.scale, minHeight) + 'px';

	                    if (hits.left) {
	                        var currentWidth = boundingBox.right - this.cursorX;
	                        if (currentWidth > minWidth) {
	                            this.frameRect.width = currentWidth / this.props.scale;
	                            this.frameRect.left = this.clicked.frameLeft + (this.cursorX - this.clicked.x) / this.props.scale;
	                        }
	                    }

	                    if (hits.top) {
	                        var currentHeight = boundingBox.bottom - this.cursorY;
	                        if (currentHeight > minHeight) {
	                            this.frameRect.height = currentHeight / this.props.scale;
	                            this.frameRect.top = this.clicked.frameTop + (this.cursorY - this.clicked.y) / this.props.scale;
	                        }
	                    }
	                } else if (this.state.cursor === 'move') {
	                    this.frameRect.top = this.clicked.frameTop + (this.cursorY - this.clicked.y) / this.props.scale;
	                    this.frameRect.left = this.clicked.frameLeft + (this.cursorX - this.clicked.x) / this.props.scale;
	                }
	            }

	            var cursor = this.state.cursor;

	            if (cursorRemap) {
	                var res = cursorRemap.call(this, cursor);

	                if (res && typeof res === 'string') cursor = res;
	            }

	            var dnrState = {
	                cursor: cursor,
	                clicked: this.clicked,
	                frameRect: this.frameRect
	            };
	            var childrenWithProps = _react2.default.Children.map(children, function (child) {
	                return typeof child === 'string' ? child : _react2.default.cloneElement(child, { dnrState: dnrState });
	            });

	            if (onMove && this.props.enableDrag && (pervFrameRect.top !== this.frameRect.top || pervFrameRect.left !== this.frameRect.left)) {
	                onMove.bind(this, this.frameRect, pervFrameRect);
	            }

	            if (onResize && this.props.enableDrag && (pervFrameRect.width !== this.frameRect.width || pervFrameRect.height !== this.frameRect.height)) {
	                onResize.bind(this, this.frameRect, pervFrameRect);
	            }
	            return _react2.default.createElement(
	                'div',
	                { ref: function ref(component) {
	                        _this2.frame = component;
	                    },
	                    onMouseDownCapture: this._onDown.bind(this),
	                    onMouseMoveCapture: function onMouseMoveCapture(e) {
	                        if (_this2.clicked !== null) {
	                            e.preventDefault();
	                        }
	                    },
	                    style: _extends({
	                        position: 'absolute',
	                        margin: 0,
	                        padding: 0,
	                        // overflow: 'hidden',
	                        cursor: this.state.cursor
	                    }, style, this.frameRect, this.clicked ? {} : {}) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'contentClassName',
	                        style: _extends({
	                            position: 'absolute',
	                            width: '100%',
	                            top: 0,
	                            bottom: 0 }, contentStyle) },
	                    childrenWithProps
	                ),
	                this.props.resizeIcon ? this.props.resizeIcon : null,
	                this.props.enableDrag ? this.getRightBottom() : null,
	                this.props.enableDrag ? this.getBottom() : null,
	                this.props.enableDrag ? this.getLeft() : null,
	                this.props.enableDrag ? this.getTop() : null,
	                this.props.enableDrag ? this.getRight() : null
	            );
	        }
	    }, {
	        key: 'getFrameRect',
	        value: function getFrameRect() {
	            return this.frame.getBoundingClientRect();
	        }
	    }, {
	        key: 'getDOMFrame',
	        value: function getDOMFrame() {
	            return this.frame;
	        }
	    }, {
	        key: 'getTitleRect',
	        value: function getTitleRect() {
	            return this.title.getBoundingClientRect();
	        }
	    }, {
	        key: '_cursorStatus',
	        value: function _cursorStatus(e) {
	            if (!this.props.enableDrag) {
	                return;
	            }
	            var boundingBox = this.getFrameRect();
	            this.cursorX = e.clientX;
	            this.cursorY = e.clientY;
	            if (this.clicked) return;

	            var hitRange = this.props.dragSize;
	            var hitTop = this.cursorY <= boundingBox.top + hitRange;
	            var hitBottom = this.cursorY >= boundingBox.bottom - hitRange;
	            var hitLeft = this.cursorX <= boundingBox.left + hitRange;
	            var hitRight = this.cursorX >= boundingBox.right - hitRange;

	            var cursor = 'default';

	            if (hitTop || hitBottom || hitLeft || hitRight) {
	                if (hitRight && hitBottom) {
	                    cursor = 'se-resize';
	                } else if (hitRight || hitLeft) {
	                    cursor = 'ew-resize';
	                } else if (hitBottom || hitTop) {
	                    cursor = 'ns-resize';
	                }
	                // e.stopPropagation();
	            } else {
	                if (this.props.showHeader) {
	                    var titleBounding = this.getTitleRect();
	                    if (this.cursorX > titleBounding.left && this.cursorX < titleBounding.right && this.cursorY > titleBounding.top && this.cursorY < titleBounding.bottom) {
	                        cursor = 'move';
	                    }
	                } else {
	                    cursor = 'move';
	                }
	            }

	            this.hitEdges = {
	                top: hitTop,
	                bottom: hitBottom,
	                left: hitLeft,
	                right: hitRight
	            };

	            if (cursor !== this.state.cursor) {
	                this.setState({ cursor: cursor });
	            }
	        }
	    }, {
	        key: '_onDown',
	        value: function _onDown(e) {
	            this.allowTransition = false;
	            this._cursorStatus(e);
	            var boundingBox = this.getFrameRect();
	            this.clicked = {
	                x: e.clientX, y: e.clientY, boundingBox: boundingBox,
	                frameTop: this.frame.offsetTop, frameLeft: this.frame.offsetLeft
	            };
	        }
	    }, {
	        key: '_onUp',
	        value: function _onUp(e) {
	            this.clicked = null;
	            this._cursorStatus(e);
	        }
	    }, {
	        key: '_onMove',
	        value: function _onMove(e) {
	            this._cursorStatus(e);
	            if (this.clicked !== null && this.props.enableDrag) {
	                this.forceUpdate();
	            }
	        }
	    }]);

	    return ReactUltraDrag;
	}(_react2.default.Component);

	exports.default = ReactUltraDrag;


	ReactUltraDrag.propTypes = {
	    titleBar: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	    style: _propTypes2.default.object,
	    contentClassName: _propTypes2.default.object,
	    contentStyle: _propTypes2.default.object,
	    titleStyle: _propTypes2.default.object,
	    minWidth: _propTypes2.default.number,
	    minHeight: _propTypes2.default.number,
	    dragSize: _propTypes2.default.number,
	    animate: _propTypes2.default.bool,
	    onMove: _propTypes2.default.func,
	    onResize: _propTypes2.default.func,
	    cursorRemap: _propTypes2.default.func,
	    bound: _propTypes2.default.object.isRequired,
	    attachedTo: _propTypes2.default.object,
	    scale: _propTypes2.default.number,
	    enableDrag: _propTypes2.default.bool,
	    resizeIcon: _propTypes2.default.object
	};

	ReactUltraDrag.defaultProps = {
	    minWidth: 20,
	    minHeight: 20,
	    dragSize: 10,
	    animate: true,
	    attachedTo: window,
	    scale: 0.5,
	    enableDrag: true,
	    onMove: null,
	    onResize: null,
	    bound: {},
	    resizeIcon: null
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(2);
	var invariant = __webpack_require__(3);
	var ReactPropTypesSecret = __webpack_require__(6);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(4)();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })
/******/ ])
});
;