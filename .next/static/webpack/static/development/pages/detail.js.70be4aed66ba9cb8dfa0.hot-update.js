webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail/index.js":
/*!*******************************!*\
  !*** ./pages/detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_withDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/withDetail */ "./components/withDetail.js");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Markdown */ "./components/Markdown.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Detail = function Detail(_ref) {
  var readme = _ref.readme;
  console.log(_components_withDetail__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: readme.content,
    isbase64: true
  });
};

Detail.getInitialProps = function _callee(_ref2) {
  var _ref2$ctx, _ref2$ctx$query, owner, name, req, res, readmeResp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref2$ctx = _ref2.ctx, _ref2$ctx$query = _ref2$ctx.query, owner = _ref2$ctx$query.owner, name = _ref2$ctx$query.name, req = _ref2$ctx.req, res = _ref2$ctx.res;
          _context.prev = 1;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
            url: "/repos/".concat(owner, "/").concat(name, "/readme")
          }, req, res));

        case 4:
          readmeResp = _context.sent;
          return _context.abrupt("return", {
            readme: readmeResp.data
          });

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          return _context.abrupt("return", {
            readme: {}
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withDetail__WEBPACK_IMPORTED_MODULE_2__["default"])(Detail, 'index')); // export default  Detail

/***/ })

})
//# sourceMappingURL=detail.js.70be4aed66ba9cb8dfa0.hot-update.js.map