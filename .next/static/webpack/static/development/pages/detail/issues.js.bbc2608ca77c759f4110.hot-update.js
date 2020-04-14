webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./components/SearchUser.js":
/*!**********************************!*\
  !*** ./components/SearchUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_5__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

function SearchUser(_ref) {
  var _jsx;

  var onChange = _ref.onChange,
      value = _ref.value;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1]; // lastFetchIdRef作用是避免搜索结果请求过程中,又发起新的请求
  // 这样导致用户可能会看到现象，即一个数组刚显示就被立马替换的过程


  var lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"])(function (value) {
    lastFetchIdRef.current += 1;
    var fetchId = lastFetchIdRef.current;
    setFetching(true);
    setOptions([]);

    if (!value) {
      setFetching(false);
      setOptions([]);
      return;
    }

    _lib_api__WEBPACK_IMPORTED_MODULE_5___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (resp) {
      //由于闭包的存在，这里的fetachId保存的是这个请求时的lastFetchIdRef.current
      //而lastFetchIdRef.current则一直指向最新的
      if (fetchId !== lastFetchIdRef.current) {
        return;
      }

      var data = resp.data.data;
      data.items.map(function (item) {
        return {
          text: item.login,
          value: item.login
        };
      });
      setOptions(data.items);
    })["finally"](function () {
      setFetching(false);
    });
  }, 500), []); // 用户选中了搜索结果后

  var handleChange = function handleChange(value) {
    setOptions([]);
    setFetching(false);
    onChange(value);
  };

  return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, (_jsx = {
    value: value,
    filterOption: false,
    showSearch: true
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "filterOption", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "placeholder", "\u521B\u5EFA\u8005"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "notFoundContent", fetching ? __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: "small"
  }) : __jsx("span", null, "no user")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
    width: '100%'
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onSearch", handleSearch), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", handleChange), _jsx), options.map(function (item) {
    return __jsx(Option, {
      value: item.value,
      key: item.key
    }, item.text);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ })

})
//# sourceMappingURL=issues.js.bbc2608ca77c759f4110.hot-update.js.map