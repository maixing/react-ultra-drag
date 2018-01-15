!function (e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t(require('react')) : 'function' == typeof define && define.amd ? define(['react'], t) : 'object' == typeof exports ? exports['react-ultra-drag'] = t(require('react')) : e['react-ultra-drag'] = t(e.React);
}(this, function (e) {
    return function (e) {
        function t(o) {
            if (r[o]) return r[o].exports;
            var i = r[o] = {exports: {}, id: o, loaded: !1};
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }

        var r = {};
        return t.m = e, t.c = r, t.p = '', t(0);
    }([function (e, t, r) {
        'use strict';

        function o(e) {
            return e && e.__esModule ? e : {default: e};
        }

        Object.defineProperty(t, '__esModule', {value: !0}), t.default = void 0;
        var i = r(1), n = o(i);
        t.default = n.default;
    }, function (e, t, r) {
        'use strict';

        function o(e) {
            return e && e.__esModule ? e : {default: e};
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }

        function n(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return !t || 'object' != typeof t && 'function' != typeof t ? e : t;
        }

        function s(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }

        Object.defineProperty(t, '__esModule', {value: !0});
        var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e;
        }, u = function () {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }

            return function (t, r, o) {
                return r && e(t.prototype, r), o && e(t, o), t;
            };
        }(), c = r(7), l = o(c), f = r(5), h = o(f), p = function (e) {
            function t(e) {
                i(this, t);
                var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                if (r.cursorX = 0, r.cursorY = 0, r.clicked = null, r.frameRect = {
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    }, r.props.bound) {
                    var o = r.frameRect;
                    o.top, o.left, o.width, o.height;
                    'number' == typeof r.props.bound.top && (r.frameRect.top = r.props.bound.top), 'number' == typeof r.props.bound.left && (r.frameRect.left = r.props.bound.left), 'number' == typeof r.props.bound.width && (r.frameRect.width = r.props.bound.width), 'number' == typeof r.props.bound.height && (r.frameRect.height = r.props.bound.height);
                }
                return r.state = {cursor: ''}, r.props.enableDrag && (r.mouseMoveListener = r._onMove.bind(r), r.mouseUpListener = r._onUp.bind(r)), r;
            }

            return s(t, e), u(t, [{
                key: 'getBounder', value: function () {
                    return this.frameRect;
                }
            }, {
                key: 'componentDidMount', value: function () {
                    var e = this.props.attachedTo;
                    this.props.enableDrag && (e.addEventListener('mousemove', this.mouseMoveListener), e.addEventListener('mouseup', this.mouseUpListener));
                }
            }, {
                key: 'componentWillUnmount', value: function () {
                    this.props.attachedTo.removeEventListener('mousemove', this.mouseMoveListener), this.props.attachedTo.removeEventListener('mouseup', this.mouseUpListener);
                }
            }, {
                key: 'getRightBottom', value: function () {
                    return l.default.createElement('div', {
                        style: {
                            position: 'absolute',
                            userSelect: 'none',
                            width: 10,
                            height: 10,
                            right: -10,
                            bottom: -10,
                            cursor: 'se-resize'
                        }
                    });
                }
            }, {
                key: 'getRight', value: function () {
                    return l.default.createElement('div', {
                        style: {
                            position: 'absolute',
                            userSelect: 'none',
                            width: 20,
                            top: 0,
                            right: -10,
                            bottom: 10,
                            cursor: 'ew-resize'
                        }
                    });
                }
            }, {
                key: 'getLeft', value: function () {
                    return l.default.createElement('div', {
                        style: {
                            position: 'absolute',
                            userSelect: 'none',
                            width: 20,
                            top: 0,
                            left: -10,
                            bottom: 10,
                            cursor: 'ew-resize'
                        }
                    });
                }
            }, {
                key: 'getBottom', value: function () {
                    return l.default.createElement('div', {
                        style: {
                            position: 'absolute',
                            userSelect: 'none',
                            height: 20,
                            left: 0,
                            bottom: -10,
                            right: 10,
                            cursor: 'ns-resize'
                        }
                    });
                }
            }, {
                key: 'getTop', value: function () {
                    return l.default.createElement('div', {
                        style: {
                            position: 'absolute',
                            userSelect: 'none',
                            height: 20,
                            right: 10,
                            top: -10,
                            left: 10,
                            cursor: 'ns-resize'
                        }
                    });
                }
            }, {
                key: 'render', value: function () {
                    var e = this, t = this.props, r = t.style, o = t.contentStyle, i = t.minWidth, n = t.minHeight,
                        s = (t.animate, t.cursorRemap), u = t.children, c = (t.bound, t.onMove), f = t.onResize,
                        h = a({}, this.frameRect);
                    if (this.clicked && this.props.enableDrag) {
                        var p = this.hitEdges, d = this.clicked.boundingBox;
                        if (p.top || p.bottom || p.left || p.right) {
                            if (p.right && (this.frameRect.width = Math.max((this.cursorX - d.left) / this.props.scale, i) + 'px'), p.bottom && (this.frameRect.height = Math.max((this.cursorY - d.top) / this.props.scale, n) + 'px'), p.left) {
                                var m = d.right - this.cursorX;
                                m > i && (this.frameRect.width = m / this.props.scale, this.frameRect.left = this.clicked.frameLeft + (this.cursorX - this.clicked.x) / this.props.scale);
                            }
                            if (p.top) {
                                var b = d.bottom - this.cursorY;
                                b > n && (this.frameRect.height = b / this.props.scale, this.frameRect.top = this.clicked.frameTop + (this.cursorY - this.clicked.y) / this.props.scale);
                            }
                        } else 'move' === this.state.cursor && (this.frameRect.top = this.clicked.frameTop + (this.cursorY - this.clicked.y) / this.props.scale, this.frameRect.left = this.clicked.frameLeft + (this.cursorX - this.clicked.x) / this.props.scale);
                    }
                    var g = this.state.cursor;
                    if (s) {
                        var v = s.call(this, g);
                        v && 'string' == typeof v && (g = v);
                    }
                    var y = {cursor: g, clicked: this.clicked, frameRect: this.frameRect},
                        R = l.default.Children.map(u, function (e) {
                            return 'string' == typeof e ? e : l.default.cloneElement(e, {dnrState: y});
                        });
                    return c && this.props.enableDrag && (h.top !== this.frameRect.top || h.left !== this.frameRect.left) && c.bind(this, this.frameRect, h), f && this.props.enableDrag && (h.width !== this.frameRect.width || h.height !== this.frameRect.height) && f.bind(this, this.frameRect, h), l.default.createElement('div', {
                        ref: function (t) {
                            e.frame = t;
                        },
                        onMouseDownCapture: this._onDown.bind(this),
                        onMouseMoveCapture: function (t) {
                            null !== e.clicked && t.preventDefault();
                        },
                        style: a({
                            position: 'absolute',
                            margin: 0,
                            padding: 0,
                            cursor: this.state.cursor
                        }, r, this.frameRect, this.clicked ? {} : {})
                    }, l.default.createElement('div', {
                        className: 'contentClassName',
                        style: a({position: 'absolute', width: '100%', top: 0, bottom: 0}, o)
                    }, R), this.props.resizeIcon ? this.props.resizeIcon : null, this.props.enableDrag ? this.getRightBottom() : null, this.props.enableDrag ? this.getBottom() : null, this.props.enableDrag ? this.getLeft() : null, this.props.enableDrag ? this.getTop() : null, this.props.enableDrag ? this.getRight() : null);
                }
            }, {
                key: 'getFrameRect', value: function () {
                    return this.frame.getBoundingClientRect();
                }
            }, {
                key: 'getDOMFrame', value: function () {
                    return this.frame;
                }
            }, {
                key: 'getTitleRect', value: function () {
                    return this.title.getBoundingClientRect();
                }
            }, {
                key: '_cursorStatus', value: function (e) {
                    if (this.props.enableDrag) {
                        var t = this.getFrameRect();
                        if (this.cursorX = e.clientX, this.cursorY = e.clientY, !this.clicked) {
                            var r = this.props.dragSize, o = this.cursorY <= t.top + r,
                                i = this.cursorY >= t.bottom - r, n = this.cursorX <= t.left + r,
                                s = this.cursorX >= t.right - r, a = 'default';
                            if (o || i || n || s) s && i ? a = 'se-resize' : s || n ? a = 'ew-resize' : (i || o) && (a = 'ns-resize'); else if (this.props.showHeader) {
                                var u = this.getTitleRect();
                                this.cursorX > u.left && this.cursorX < u.right && this.cursorY > u.top && this.cursorY < u.bottom && (a = 'move');
                            } else a = 'move';
                            this.hitEdges = {
                                top: o,
                                bottom: i,
                                left: n,
                                right: s
                            }, a !== this.state.cursor && this.setState({cursor: a});
                        }
                    }
                }
            }, {
                key: '_onDown', value: function (e) {
                    this.allowTransition = !1, this._cursorStatus(e);
                    var t = this.getFrameRect();
                    this.clicked = {
                        x: e.clientX,
                        y: e.clientY,
                        boundingBox: t,
                        frameTop: this.frame.offsetTop,
                        frameLeft: this.frame.offsetLeft
                    };
                }
            }, {
                key: '_onUp', value: function (e) {
                    this.clicked = null, this._cursorStatus(e);
                }
            }, {
                key: '_onMove', value: function (e) {
                    this._cursorStatus(e), null !== this.clicked && this.props.enableDrag && this.forceUpdate();
                }
            }]), t;
        }(l.default.Component);
        t.default = p, p.propTypes = {
            titleBar: h.default.oneOfType([h.default.object, h.default.string]),
            style: h.default.object,
            contentClassName: h.default.object,
            contentStyle: h.default.object,
            titleStyle: h.default.object,
            minWidth: h.default.number,
            minHeight: h.default.number,
            dragSize: h.default.number,
            animate: h.default.bool,
            onMove: h.default.func,
            onResize: h.default.func,
            cursorRemap: h.default.func,
            bound: h.default.object.isRequired,
            attachedTo: h.default.object,
            scale: h.default.number,
            enableDrag: h.default.bool,
            resizeIcon: h.default.object
        }, p.defaultProps = {
            minWidth: 20,
            minHeight: 20,
            dragSize: 10,
            animate: !0,
            attachedTo: window,
            scale: .5,
            enableDrag: !0,
            onMove: null,
            onResize: null,
            bound: {},
            resizeIcon: null
        };
    }, function (e, t) {
        'use strict';

        function r(e) {
            return function () {
                return e;
            };
        }

        var o = function () {
        };
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
            return this;
        }, o.thatReturnsArgument = function (e) {
            return e;
        }, e.exports = o;
    }, function (e, t, r) {
        'use strict';

        function o(e, t, r, o, n, s, a, u) {
            if (i(t), !e) {
                var c;
                if (void 0 === t) c = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'); else {
                    var l = [r, o, n, s, a, u], f = 0;
                    c = new Error(t.replace(/%s/g, function () {
                        return l[f++];
                    })), c.name = 'Invariant Violation';
                }
                throw c.framesToPop = 1, c;
            }
        }

        var i = function (e) {
        };
        e.exports = o;
    }, function (e, t, r) {
        'use strict';
        var o = r(2), i = r(3), n = r(6);
        e.exports = function () {
            function e(e, t, r, o, s, a) {
                a !== n && i(!1, 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
            }

            function t() {
                return e;
            }

            e.isRequired = e;
            var r = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return r.checkPropTypes = o, r.PropTypes = r, r;
        };
    }, function (e, t, r) {
        e.exports = r(4)();
    }, function (e, t) {
        'use strict';
        var r = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        e.exports = r;
    }, function (t, r) {
        t.exports = e;
    }]);
});