!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-ultra-drag"]=t(require("react")):e["react-ultra-drag"]=t(e.React)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),i=o(n);t.default=i.default},function(e,t){"use strict";function r(){var e,t,r="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(r+="-"),r+=(12===e?4:16===e?3&t|8:t).toString(16);return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(8),l=o(c),p=r(6),h=o(p),f=r(1),d=o(f),m=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.removeEvent=function(){r.props.attachedTo.removeEventListener("mousemove",r.mouseMoveListener),r.props.attachedTo.removeEventListener("mouseup",r.mouseUpListener)},r._onCompUP=function(e){r.preId=r.id},r._onUp=function(e){e.stopPropagation(),e.preventDefault(),r.clicked=null,r.props.enableDrag&&r.id==r.preId&&r.props.hasOwnProperty("onChange")&&r.props.onChange&&r.props.onChange(r.frameRect),r.preId=""},r.cursorX=0,r.cursorY=0,r.clicked=null,r.id=(0,d.default)(),r.preId="",r.moveInterval=0,r.isUpdateBound=!1,r.mstate="",r.frameRect={width:0,height:0,left:0,top:0},r.props.bound&&r.updateBound(r.props.bound,!1),r.state={cursor:"",isUpdateBound:!1},r.mouseMoveListener=r._onMove.bind(r),r.mouseUpListener=r._onUp.bind(r),r}return s(t,e),u(t,[{key:"getBounder",value:function(){return this.frameRect}},{key:"updateBound",value:function(e,t){this.isUpdateBound=t,e&&("number"==typeof e.top&&(this.frameRect.top=e.top),"number"==typeof e.left&&(this.frameRect.left=e.left),"number"==typeof e.width&&(this.frameRect.width=e.width),"number"==typeof e.height&&(this.frameRect.height=e.height)),t&&this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props.attachedTo;this.props.enableDrag&&(e.addEventListener("mousemove",this.mouseMoveListener),e.addEventListener("mouseup",this.mouseUpListener))}},{key:"componentWillUnmount",value:function(){this.props.attachedTo.removeEventListener("mousemove",this.mouseMoveListener),this.props.attachedTo.removeEventListener("mouseup",this.mouseUpListener)}},{key:"getRightBottom",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",width:10,height:10,right:-10,bottom:-10,cursor:"se-resize"}})}},{key:"getRight",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",width:20,top:0,right:-10,bottom:10,cursor:"ew-resize"}})}},{key:"getLeft",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",width:20,top:0,left:-10,bottom:10,cursor:"ew-resize"}})}},{key:"getBottom",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",height:20,left:0,bottom:-10,right:10,cursor:"ns-resize"}})}},{key:"getTop",value:function(){return l.default.createElement("div",{style:{position:"absolute",userSelect:"none",height:20,right:10,top:-10,left:10,cursor:"ns-resize"}})}},{key:"componentWillReceiveProps",value:function(e){e.enableDrag&&this.allowDrag()}},{key:"allowDrag",value:function(){var e=this.props.attachedTo;this.props.attachedTo.removeEventListener("mousemove",this.mouseMoveListener),this.props.attachedTo.removeEventListener("mouseup",this.mouseUpListener),this.props.enableDrag&&(e.addEventListener("mousemove",this.mouseMoveListener),e.addEventListener("mouseup",this.mouseUpListener))}},{key:"render",value:function(){var e=this,t=this.props,r=t.style,o=t.contentStyle,n=(t.minWidth,t.minHeight,t.animate,t.cursorRemap),i=t.children;t.bound,t.onChange,a({},this.frameRect);this.setFramerect(this.frameRect,this.state.cursor);var s=this.state.cursor;if(this.mstate=s,n){var u=n.call(this,s);u&&"string"==typeof u&&(s=u)}var c={cursor:s,clicked:this.clicked,frameRect:this.frameRect};l.default.Children.map(i,function(e){return"string"==typeof e?e:l.default.cloneElement(e,{dnrState:c})});return l.default.createElement("div",{ref:function(t){e.frame=t},onMouseDownCapture:this._onDown.bind(this),onMouseUp:this._onCompUP.bind(this,this.id),style:a({position:"absolute",margin:0,padding:0,cursor:this.state.cursor},r,this.frameRect,this.clicked?{}:{})},l.default.createElement("div",{className:"contentClassName",style:a({position:"absolute",width:"100%",top:0,bottom:0},o)},this.props.children),this.props.resizeIcon?this.props.resizeIcon:null,this.props.enableDrag?this.getRightBottom():null,this.props.enableDrag?this.getBottom():null,this.props.enableDrag?this.getLeft():null,this.props.enableDrag?this.getTop():null,this.props.enableDrag?this.getRight():null)}},{key:"setFramerect",value:function(e,t){if(this.isUpdateBound)return void(this.isUpdateBound=!1);if(this.clicked){var r=this.hitEdges,o=this.clicked.boundingBox;if(r.top||r.bottom||r.left||r.right){if(r.right&&(e.width=Math.max((this.cursorX-o.left)/this.props.scale,this.props.minWidth)),r.bottom&&(e.height=Math.max((this.cursorY-o.top)/this.props.scale,this.props.minHeight)),r.left){var n=o.right-this.cursorX;n>this.props.minWidth&&(e.width=n/this.props.scale,e.left=this.clicked.frameLeft+(this.cursorX-this.clicked.x)/this.props.scale)}if(r.top){var i=o.bottom-this.cursorY;i>this.props.minHeight&&(e.height=i/this.props.scale,e.top=this.clicked.frameTop+(this.cursorY-this.clicked.y)/this.props.scale)}}else"move"===t&&(e.top=this.clicked.frameTop+(this.cursorY-this.clicked.y)/this.props.scale,e.left=this.clicked.frameLeft+(this.cursorX-this.clicked.x)/this.props.scale)}}},{key:"getFrameRect",value:function(){return this.frame.getBoundingClientRect()}},{key:"getDOMFrame",value:function(){return this.frame}},{key:"getTitleRect",value:function(){return this.title.getBoundingClientRect()}},{key:"_cursorStatus",value:function(e){var t=this.getFrameRect();if(this.cursorX=e.clientX,this.cursorY=e.clientY,!this.clicked){var r=this.props.dragSize,o=this.cursorY<=t.top+r,n=this.cursorY>=t.bottom-r,i=this.cursorX<=t.left+r,s=this.cursorX>=t.right-r,a="default";return this.props.enableDrag&&(o||n||i||s?s&&n?a="se-resize":s||i?a="ew-resize":(n||o)&&(a="ns-resize"):a="move"),this.hitEdges={top:o,bottom:n,left:i,right:s},a!==this.state.cursor&&this.setState({cursor:a}),a}}},{key:"_onDown",value:function(e){e.stopPropagation(),e.preventDefault(),this._cursorStatus(e);var t=this.getFrameRect();this.clicked={x:e.clientX,y:e.clientY,boundingBox:t,frameTop:this.frame.offsetTop,frameLeft:this.frame.offsetLeft}}},{key:"_onMove",value:function(e){if(e.stopPropagation(),e.preventDefault(),this.props.enableDrag){var t=this._cursorStatus(e);if(this.clicked&&this.props.hasOwnProperty("onMove")&&this.props.onMove){var r=a({},this.frameRect);this.setFramerect(r,t),this.props.onMove(r,this.mstate)}}else"default"!==this.state.cursor&&this.setState({cursor:"default"});null!==this.clicked&&this.props.enableDrag&&!this.isUpdateBound&&this.forceUpdate()}}]),t}(l.default.Component);t.default=m,m.propTypes={titleBar:h.default.oneOfType([h.default.object,h.default.string]),style:h.default.object,contentClassName:h.default.object,contentStyle:h.default.object,titleStyle:h.default.object,minWidth:h.default.number,minHeight:h.default.number,dragSize:h.default.number,animate:h.default.bool,onChange:h.default.func,onMove:h.default.func,cursorRemap:h.default.func,bound:h.default.object.isRequired,attachedTo:h.default.object,scale:h.default.number,moveInterval:h.default.number,enableDrag:h.default.bool,resizeIcon:h.default.object},m.defaultProps={minWidth:20,minHeight:20,dragSize:10,animate:!0,attachedTo:window,scale:.5,enableDrag:!0,onChange:null,onMove:null,bound:{},resizeIcon:null,moveInterval:40}},function(e,t){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";function o(e,t,r,o,i,s,a,u){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,s,a,u],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var n=function(e){};e.exports=o},function(e,t,r){"use strict";var o=r(3),n=r(4),i=r(7);e.exports=function(){function e(e,t,r,o,s,a){a!==i&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){e.exports=r(5)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(t,r){t.exports=e}])});