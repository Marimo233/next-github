webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-devtools-extension/logOnly.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/logOnly.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! ./utils/assign */ "./node_modules/redux-devtools-extension/utils/assign.js");
var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

function enhancer() {
  var config = arguments[0] || {};
  config.features = { pause: true, export: true, test: true };
  config.type = 'redux';
  if (config.autoPause === undefined) config.autoPause = true;
  if (config.latency === undefined) config.latency = 500;

  return function(createStore) {
    return function(reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var origDispatch = store.dispatch;

      var devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(config);
      devTools.init(store.getState());

      var dispatch = function(action) {
        var r = origDispatch(action);
        devTools.send(action, store.getState());
        return r;
      };

      if (Object.assign) return Object.assign(store, { dispatch: dispatch });
      return assign(store, 'dispatch', dispatch);
    }
  }
}

function composeWithEnhancer(config) {
  return function () {
    return compose(compose.apply(null, arguments), enhancer(config));
  }
}

exports.__esModule = true;
exports.composeWithDevTools = function() {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    if (arguments.length === 0) return enhancer();
    if (typeof arguments[0] === 'object') return composeWithEnhancer(arguments[0]);
    return composeWithEnhancer().apply(null, arguments);
  }

  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return compose;
  return compose.apply(null, arguments);
};

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    enhancer :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-devtools-extension/logOnlyInProduction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-devtools-extension/logOnlyInProduction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;
var logOnly = __webpack_require__(/*! ./logOnly */ "./node_modules/redux-devtools-extension/logOnly.js");

exports.__esModule = true;
exports.composeWithDevTools = (
   false ? undefined :
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
      function() {
        if (arguments.length === 0) return undefined;
        if (typeof arguments[0] === 'object') return compose;
        return compose.apply(null, arguments);
      }
);

exports.devToolsEnhancer = (
   false ? undefined :
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__ :
      function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-devtools-extension/utils/assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-devtools-extension/utils/assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
      if ({}.hasOwnProperty.call(obj, key)) keys.push(key);
    }
    return keys;
  };

function assign(obj, newKey, newValue) {
  var keys = objectKeys(obj);
  var copy = {};

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    copy[key] = obj[key];
  }

  copy[newKey] = newValue;
  return copy;
}

module.exports = assign;


/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initialStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension/logOnlyInProduction */ "./node_modules/redux-devtools-extension/logOnlyInProduction.js");
/* harmony import */ var redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./store/reducer/index.js");




function initialStore(state) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state), Object(redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_2__["devToolsEnhancer"])() // composeWithDevTools()
  );
  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.aed68e0927629816a721.hot-update.js.map