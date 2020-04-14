webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_withDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/withDetail */ "./components/withDetail.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.Option;
var Markdown = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../../components/Markdown */ "./components/Markdown.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Markdown */ "./components/Markdown.js")];
    },
    modules: ['../../components/Markdown']
  }
});
var isServer = false;

function IssueDetail(_ref) {
  var issue = _ref.issue;
  return __jsx("div", {
    className: "jsx-1740130853" + " " + 'root'
  }, __jsx(Markdown, {
    content: issue.body
  }), __jsx("div", {
    className: "jsx-1740130853" + " " + 'actions'
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "\u6253\u5F00issue\u8BA8\u8BBA\u9875\u9762")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1740130853"
  }, ".root.jsx-1740130853{background:#fafafa;padding:20px;}.actions.jsx-1740130853{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCbUIsQUFHOEIsQUFJRixpQkFDbkIsRUFKZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB3aXRoRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aERldGFpbCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQge2dldExhc3RVcGRhdGVkfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuXHJcbmNvbnN0IE9wdGlvbj1TZWxlY3QuT3B0aW9uXHJcbmNvbnN0IE1hcmtkb3duPWR5bmFtaWMoKCk9PmltcG9ydCAoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd24nKSlcclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnXHJcblxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz5cclxuICAgICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlLGxhYmVsc30pe1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIOi/meS4quWGmeazleWwseWPr+S7peS4jeS+nei1lnNob3dEZXRhaWzjgILov5nkuYjlhpnlj6/ku6Xpgb/lvIDpl63ljIVcclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lzc3VlJz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3dEZXRhaWw/J+makOiXjyc6J+afpeeciyd9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0+PC9BdmF0YXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElzc3Vlcz0oe2lzc3VlcyxsYWJlbHN9KT0+e1xyXG5cclxuY29uc3QgW2NyZWF0b3Isc2V0Q3JlYXRvcl09dXNlU3RhdGUoJycpXHJcbmNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV09dXNlU3RhdGUoJ2FsbCcpXHJcbmNvbnN0IFtsYWJlbCxzZXRMYWJlbF09dXNlU3RhdGUoW10pXHJcblxyXG4gIC8vIOmAieS4reeUqOaIt+e7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK3nirbmgIHnu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldFN0YXRlKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK1sYWJlbOe7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0TGFiZWwodmFsdWUpXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICA8U2VhcmNoVXNlciBvbkNoYW5nZT17aGFuZGxlQ3JlYXRvckNoYW5nZX0gdmFsdWU9e2NyZWF0b3J9Lz5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nYWxsJz5hbGw8L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nb3Blbic+b3BlbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdjbG9zZWQnPmNsb3NlZDwvT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17bGFiZWx9XHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogMjAsIG1hcmdpblJpZ2h0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWxzXHJcbiAgICAgICAgICAgID9sYWJlbHMubWFwKGxhID0+IChcclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYS5uYW1lfSBrZXk9e2xhLmlkfT5cclxuICAgICAgICAgICAgICAgIHtsYS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgey8qIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGRpc2FibGVkPXtmZXRjaGluZ30+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lzc3Vlcyc+XHJcbiAgICAgICAgICB7aXNzdWVzLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxJc3N1ZUl0ZW0gaXNzdWU9e2l0ZW19IC8+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4fSk9PntcclxuICBjb25zdCB7b3duZXIsbmFtZX09Y3R4LnF1ZXJ5XHJcbiAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXHJcblxyXG4gIGNvbnN0IGZldGNocz1Qcm9taXNlLmFsbChbXHJcbiAgICBhd2FpdCByZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxyXG4gICAgICB9LFxyXG4gICAgICBjdHgucmVxLFxyXG4gICAgICBjdHgucmVzXHJcbiAgICApLFxyXG4gICAgYXdhaXQgcmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcclxuICAgICAgfSxcclxuICAgICAgY3R4LnJlcSxcclxuICAgICAgY3R4LnJlc1xyXG4gICAgKVxyXG4gIF0pXHJcblxyXG4gIGNvbnN0IFtJc3N1ZXNSZXNwLExhYmVsc1Jlc3BdPWZldGNoc1xyXG4gIHJldHVybiB7XHJcbiAgICBvd25lcixcclxuICAgIG5hbWUsXHJcbiAgICBpbml0aWFsSXNzdWVzOiBJc3N1ZXNSZXNwLmRhdGEsXHJcbiAgICBsYWJlbHM6IExhYmVsc1Jlc3AuZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgd2l0aERldGFpbChJc3N1ZXMsJ2lzc3VlcycpXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
}

function IssueItem(_ref2) {
  var issue = _ref2.issue,
      labels = _ref2.labels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      showDetail = _useState[0],
      setShowDetail = _useState[1]; // 这个写法就可以不依赖showDetail。这么写可以避开闭包


  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    });
  }, []);
  return __jsx("div", null, __jsx("div", {
    className: "issue"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? '隐藏' : '查看')), __jsx("div", {
    className: "avatar"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), __jsx("div", {
    className: "jsx-1445670956" + " " + "main-info"
  }, __jsx("h6", {
    className: "jsx-1445670956"
  }, __jsx("span", {
    className: "jsx-1445670956"
  }, issue.title)), __jsx("p", {
    className: "jsx-1445670956" + " " + "sub-info"
  }, __jsx("span", {
    className: "jsx-1445670956"
  }, "Updated at ", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["getLastUpdated"])(issue.updated_at))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1445670956"
  }, ".issue.jsx-1445670956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1445670956:hover{background:#fafafa;}.issue.jsx-1445670956+.issue.jsx-1445670956{border-top:1px solid #eee;}.main-info.jsx-1445670956>h6.jsx-1445670956{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-1445670956{margin-right:20px;}.sub-info.jsx-1445670956{margin-bottom:0;}.sub-info.jsx-1445670956>span.jsx-1445670956+span.jsx-1445670956{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fc0IsQUFHMEIsQUFLTSxBQUdPLEFBR1YsQUFLRSxBQUdGLEFBR0ssZ0JBVk4sQUFRakIsRUFIQSxDQVhBLEVBaUJtQixLQWRuQixLQUlxQixPQVdKLFlBVmpCLEdBV0EscUJBeEJvQixrQkFDTCxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB3aXRoRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aERldGFpbCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQge2dldExhc3RVcGRhdGVkfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuXHJcbmNvbnN0IE9wdGlvbj1TZWxlY3QuT3B0aW9uXHJcbmNvbnN0IE1hcmtkb3duPWR5bmFtaWMoKCk9PmltcG9ydCAoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd24nKSlcclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnXHJcblxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz5cclxuICAgICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlLGxhYmVsc30pe1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIOi/meS4quWGmeazleWwseWPr+S7peS4jeS+nei1lnNob3dEZXRhaWzjgILov5nkuYjlhpnlj6/ku6Xpgb/lvIDpl63ljIVcclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lzc3VlJz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3dEZXRhaWw/J+makOiXjyc6J+afpeeciyd9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0+PC9BdmF0YXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElzc3Vlcz0oe2lzc3VlcyxsYWJlbHN9KT0+e1xyXG5cclxuY29uc3QgW2NyZWF0b3Isc2V0Q3JlYXRvcl09dXNlU3RhdGUoJycpXHJcbmNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV09dXNlU3RhdGUoJ2FsbCcpXHJcbmNvbnN0IFtsYWJlbCxzZXRMYWJlbF09dXNlU3RhdGUoW10pXHJcblxyXG4gIC8vIOmAieS4reeUqOaIt+e7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK3nirbmgIHnu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldFN0YXRlKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK1sYWJlbOe7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0TGFiZWwodmFsdWUpXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICA8U2VhcmNoVXNlciBvbkNoYW5nZT17aGFuZGxlQ3JlYXRvckNoYW5nZX0gdmFsdWU9e2NyZWF0b3J9Lz5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nYWxsJz5hbGw8L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nb3Blbic+b3BlbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdjbG9zZWQnPmNsb3NlZDwvT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17bGFiZWx9XHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogMjAsIG1hcmdpblJpZ2h0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWxzXHJcbiAgICAgICAgICAgID9sYWJlbHMubWFwKGxhID0+IChcclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYS5uYW1lfSBrZXk9e2xhLmlkfT5cclxuICAgICAgICAgICAgICAgIHtsYS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgey8qIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGRpc2FibGVkPXtmZXRjaGluZ30+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lzc3Vlcyc+XHJcbiAgICAgICAgICB7aXNzdWVzLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDxJc3N1ZUl0ZW0gaXNzdWU9e2l0ZW19IC8+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4fSk9PntcclxuICBjb25zdCB7b3duZXIsbmFtZX09Y3R4LnF1ZXJ5XHJcbiAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXHJcblxyXG4gIGNvbnN0IGZldGNocz1Qcm9taXNlLmFsbChbXHJcbiAgICBhd2FpdCByZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxyXG4gICAgICB9LFxyXG4gICAgICBjdHgucmVxLFxyXG4gICAgICBjdHgucmVzXHJcbiAgICApLFxyXG4gICAgYXdhaXQgcmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcclxuICAgICAgfSxcclxuICAgICAgY3R4LnJlcSxcclxuICAgICAgY3R4LnJlc1xyXG4gICAgKVxyXG4gIF0pXHJcblxyXG4gIGNvbnN0IFtJc3N1ZXNSZXNwLExhYmVsc1Jlc3BdPWZldGNoc1xyXG4gIHJldHVybiB7XHJcbiAgICBvd25lcixcclxuICAgIG5hbWUsXHJcbiAgICBpbml0aWFsSXNzdWVzOiBJc3N1ZXNSZXNwLmRhdGEsXHJcbiAgICBsYWJlbHM6IExhYmVsc1Jlc3AuZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgd2l0aERldGFpbChJc3N1ZXMsJ2lzc3VlcycpXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */")), showDetail ? __jsx(IssueDetail, {
    issue: issue
  }) : null);
}

var Issues = function Issues(_ref3) {
  var issues = _ref3.issues,
      labels = _ref3.labels;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(''),
      creator = _useState2[0],
      setCreator = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('all'),
      state = _useState3[0],
      setState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      label = _useState4[0],
      setLabel = _useState4[1]; // 选中用户结果的回调


  var handleCreatorChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (value) {
    setCreator(value);
  }, []); // 选中状态结果的回调

  var handleStateChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (value) {
    setState(value);
  }, []); // 选中label结果的回调

  var handleLabelChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (value) {
    setLabel(value);
  }, []);
  return __jsx("div", {
    className: "jsx-2212480553" + " " + 'root'
  }, __jsx("div", {
    className: "jsx-2212480553" + " " + 'search'
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onChange: handleCreatorChange,
    value: creator
  }), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    placeholder: "\u72B6\u6001",
    onChange: handleStateChange,
    value: state,
    style: {
      width: 200,
      marginLeft: 20
    }
  }, __jsx(Option, {
    value: "all"
  }, "all"), __jsx(Option, {
    value: "open"
  }, "open"), __jsx(Option, {
    value: "closed"
  }, "closed")), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mode: "multiple",
    placeholder: "Label",
    onChange: handleLabelChange,
    value: label,
    style: {
      flexGrow: 1,
      marginLeft: 20,
      marginRight: 20
    }
  }, labels ? labels.map(function (la) {
    return __jsx(Option, {
      value: la.name,
      key: la.id
    }, la.name);
  }) : '')), __jsx("div", {
    className: "jsx-2212480553" + " " + 'issues'
  }, issues.map(function (item) {
    return __jsx(IssueItem, {
      issue: item
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2212480553"
  }, ".issues.jsx-2212480553{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2212480553{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-2212480553{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtLb0IsQUFHaUMsQUFNVCxBQUdBLGFBQ0EsU0FUSyxrQkFDQyxtQkFDSCxlQUlsQixDQUhBLFlBT3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hcmltb1xcRGVza3RvcFxcbmV4dC1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCwgU3BpbiB9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgd2l0aERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhEZXRhaWwnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IHtnZXRMYXN0VXBkYXRlZH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInXHJcblxyXG5jb25zdCBPcHRpb249U2VsZWN0Lk9wdGlvblxyXG5jb25zdCBNYXJrZG93bj1keW5hbWljKCgpPT5pbXBvcnQgKCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duJykpXHJcbmNvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ1xyXG5cclxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgPE1hcmtkb3duIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+XHJcbiAgICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICDmiZPlvIBpc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZSxsYWJlbHN9KXtcclxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAvLyDov5nkuKrlhpnms5XlsLHlj6/ku6XkuI3kvp3otZZzaG93RGV0YWls44CC6L+Z5LmI5YaZ5Y+v5Lul6YG/5byA6Zet5YyFXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpc3N1ZSc+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICByaWdodDogMTBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzaG93RGV0YWlsPyfpmpDol48nOifmn6XnnIsnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9PjwvQXZhdGFyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBJc3N1ZXM9KHtpc3N1ZXMsbGFiZWxzfSk9PntcclxuXHJcbmNvbnN0IFtjcmVhdG9yLHNldENyZWF0b3JdPXVzZVN0YXRlKCcnKVxyXG5jb25zdCBbc3RhdGUsc2V0U3RhdGVdPXVzZVN0YXRlKCdhbGwnKVxyXG5jb25zdCBbbGFiZWwsc2V0TGFiZWxdPXVzZVN0YXRlKFtdKVxyXG5cclxuICAvLyDpgInkuK3nlKjmiLfnu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVDcmVhdG9yQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0Q3JlYXRvcih2YWx1ZSlcclxuICB9LCBbXSlcclxuXHJcbiAgLy8g6YCJ5Lit54q25oCB57uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh2YWx1ZSlcclxuICB9LCBbXSlcclxuXHJcbiAgLy8g6YCJ5LitbGFiZWznu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVMYWJlbENoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldExhYmVsKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxyXG4gICAgICAgICAgPFNlYXJjaFVzZXIgb25DaGFuZ2U9e2hhbmRsZUNyZWF0b3JDaGFuZ2V9IHZhbHVlPXtjcmVhdG9yfS8+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyMDAsIG1hcmdpbkxlZnQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2FsbCc+YWxsPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J29wZW4nPm9wZW48L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nY2xvc2VkJz5jbG9zZWQ8L09wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2xhYmVsfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5SaWdodDogMjAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xhYmVsc1xyXG4gICAgICAgICAgICA/bGFiZWxzLm1hcChsYSA9PiAoXHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGEubmFtZX0ga2V5PXtsYS5pZH0+XHJcbiAgICAgICAgICAgICAgICB7bGEubmFtZX1cclxuICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgOicnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIHsvKiA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VhcmNofSBkaXNhYmxlZD17ZmV0Y2hpbmd9PlxyXG4gICAgICAgICAg5pCc57SiXHJcbiAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpc3N1ZXMnPlxyXG4gICAgICAgICAge2lzc3Vlcy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8SXNzdWVJdGVtIGlzc3VlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eH0pPT57XHJcbiAgY29uc3Qge293bmVyLG5hbWV9PWN0eC5xdWVyeVxyXG4gIGNvbnN0IGZ1bGxfbmFtZSA9IGAke293bmVyfS8ke25hbWV9YFxyXG5cclxuICBjb25zdCBmZXRjaHM9UHJvbWlzZS5hbGwoW1xyXG4gICAgYXdhaXQgcmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcclxuICAgICAgfSxcclxuICAgICAgY3R4LnJlcSxcclxuICAgICAgY3R4LnJlc1xyXG4gICAgKSxcclxuICAgIGF3YWl0IHJlcXVlc3QoXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9sYWJlbHNgXHJcbiAgICAgIH0sXHJcbiAgICAgIGN0eC5yZXEsXHJcbiAgICAgIGN0eC5yZXNcclxuICAgIClcclxuICBdKVxyXG5cclxuICBjb25zdCBbSXNzdWVzUmVzcCxMYWJlbHNSZXNwXT1mZXRjaHNcclxuICByZXR1cm4ge1xyXG4gICAgb3duZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgaW5pdGlhbElzc3VlczogSXNzdWVzUmVzcC5kYXRhLFxyXG4gICAgbGFiZWxzOiBMYWJlbHNSZXNwLmRhdGFcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIHdpdGhEZXRhaWwoSXNzdWVzLCdpc3N1ZXMnKVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
};

Issues.getInitialProps = function _callee(_ref4) {
  var ctx, _ctx$query, owner, name, full_name, fetchs, _fetchs, IssuesResp, LabelsResp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = _ref4.ctx;
          _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
          full_name = "".concat(owner, "/").concat(name);
          _context.t0 = Promise;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(request({
            url: "/repos/".concat(owner, "/").concat(name, "/issues")
          }, ctx.req, ctx.res));

        case 6:
          _context.t1 = _context.sent;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(request({
            url: "/repos/".concat(owner, "/").concat(name, "/labels")
          }, ctx.req, ctx.res));

        case 9:
          _context.t2 = _context.sent;
          _context.t3 = [_context.t1, _context.t2];
          fetchs = _context.t0.all.call(_context.t0, _context.t3);
          _fetchs = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(fetchs, 2), IssuesResp = _fetchs[0], LabelsResp = _fetchs[1];
          return _context.abrupt("return", {
            owner: owner,
            name: name,
            initialIssues: IssuesResp.data,
            labels: LabelsResp.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withDetail__WEBPACK_IMPORTED_MODULE_8__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.44f0deb0958dd169e15b.hot-update.js.map