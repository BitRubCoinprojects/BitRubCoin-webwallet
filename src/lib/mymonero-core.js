!function(A,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mymonero_core_js=t():A.mymonero_core_js=t()}(window,function(){return function(A){var t={};function e(r){if(t[r])return t[r].exports;var _=t[r]={i:r,l:!1,exports:{}};return A[r].call(_.exports,_,_.exports,e),_.l=!0,_.exports}return e.m=A,e.c=t,e.d=function(A,t,r){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:r})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var _ in A)e.d(r,_,function(t){return A[t]}.bind(null,_));return r},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="",e(e.s=83)}([function(A,t){"function"==typeof Object.create?A.exports=function(A,t){A.super_=t,A.prototype=Object.create(t.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}})}:A.exports=function(A,t){A.super_=t;var e=function(){};e.prototype=t.prototype,A.prototype=new e,A.prototype.constructor=A}},function(A,t,e){var r=e(2),_=r.Buffer;function a(A,t){for(var e in A)t[e]=A[e]}function i(A,t,e){return _(A,t,e)}_.from&&_.alloc&&_.allocUnsafe&&_.allocUnsafeSlow?A.exports=r:(a(r,t),t.Buffer=i),a(_,i),i.from=function(A,t,e){if("number"==typeof A)throw new TypeError("Argument must not be a number");return _(A,t,e)},i.alloc=function(A,t,e){if("number"!=typeof A)throw new TypeError("Argument must be a number");var r=_(A);return void 0!==t?"string"==typeof e?r.fill(t,e):r.fill(t):r.fill(0),r},i.allocUnsafe=function(A){if("number"!=typeof A)throw new TypeError("Argument must be a number");return _(A)},i.allocUnsafeSlow=function(A){if("number"!=typeof A)throw new TypeError("Argument must be a number");return r.SlowBuffer(A)}},function(A,t,e){"use strict";(function(A){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
//# sourceMappingURL=mymonero-core.js.map