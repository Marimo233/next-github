webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/action/index.js":
/*!*******************************!*\
  !*** ./store/action/index.js ***!
  \*******************************/
/*! exports provided: ADD_COUNT, LOGOUT, handleLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COUNT", function() { return ADD_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLogout", function() { return handleLogout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var ADD_COUNT = 'ADD_COUNT';
var LOGOUT = 'LOGOUT';
var handleLogout = function handleLogout() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/user/logout').then(function (resp) {
      console.log(resp);
      var success = resp.data.success;

      if (resp.status === 200 && success) {
        dispatch({
          type: LOGOUT
        });
      } else {
        console.log('logout failed', resp);
      }
    })["catch"](function (err) {
      console.log('logout failed', err);
    });
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.4f37ebf2ac86c7212492.hot-update.js.map