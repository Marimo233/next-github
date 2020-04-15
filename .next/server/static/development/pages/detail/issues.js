module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\detail\\issues.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Repo.js":
/*!****************************!*\
  !*** ./components/Repo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function getLicense(license) {
  return license ? `${license.spdx_id} license` : '';
}

/* harmony default export */ __webpack_exports__["default"] = (({
  repo
}) => {
  return __jsx("div", {
    className: "jsx-2348854648" + " " + "root"
  }, __jsx("div", {
    className: "jsx-2348854648" + " " + "basic-info"
  }, __jsx("h3", {
    className: "jsx-2348854648" + " " + "repo-title"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `/detail?owner=${repo.owner.login}&name=${repo.name}`
  }, __jsx("a", {
    className: "jsx-2348854648"
  }, repo.full_name))), __jsx("p", {
    className: "jsx-2348854648" + " " + "repo-desc"
  }, repo.description), __jsx("p", {
    className: "jsx-2348854648" + " " + "other-info"
  }, repo.license ? __jsx("span", {
    className: "jsx-2348854648" + " " + "license"
  }, getLicense(repo.license)) : null, __jsx("span", {
    className: "jsx-2348854648" + " " + "last-updated"
  }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_4__["getLastUpdated"])(repo.updated_at)), __jsx("span", {
    className: "jsx-2348854648" + " " + "open-issues"
  }, repo.open_issues_count, " open issues"))), __jsx("div", {
    className: "jsx-2348854648" + " " + "lang-star"
  }, __jsx("span", {
    className: "jsx-2348854648" + " " + "lang"
  }, repo.language), __jsx("span", {
    className: "jsx-2348854648" + " " + "stars"
  }, repo.stargazers_count, " ", __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "star",
    theme: "filled"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2348854648"
  }, ".root.jsx-2348854648{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-2348854648>span.jsx-2348854648+span.jsx-2348854648{margin-left:10px;}.root.jsx-2348854648+.root.jsx-2348854648{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-2348854648{font-size:20px;}.lang-star.jsx-2348854648{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-2348854648>span.jsx-2348854648{width:120px;text-align:right;}.repo-desc.jsx-2348854648{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcUmVwby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBR3dCLEFBSUksQUFHUyxBQUlYLEFBR0YsQUFHRCxBQUlBLFlBSEssQUFJbkIsR0FWQSxFQVBBLFNBR21CLEdBV25CLGNBVkEsK0JBUmdDLEFBY2hDLG1IQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcUmVwby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TGljZW5zZShsaWNlbnNlKSB7XHJcbiAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVwbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljLWluZm9cIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwby10aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWw/b3duZXI9JHtyZXBvLm93bmVyLmxvZ2lufSZuYW1lPSR7cmVwby5uYW1lfWB9PlxyXG4gICAgICAgICAgICA8YT57cmVwby5mdWxsX25hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwby1kZXNjXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm90aGVyLWluZm9cIj5cclxuICAgICAgICAgIHtyZXBvLmxpY2Vuc2UgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpY2Vuc2VcIj57Z2V0TGljZW5zZShyZXBvLmxpY2Vuc2UpfTwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC11cGRhdGVkXCI+XHJcbiAgICAgICAgICAgIHtnZXRMYXN0VXBkYXRlZChyZXBvLnVwZGF0ZWRfYXQpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1pc3N1ZXNcIj5cclxuICAgICAgICAgICAge3JlcG8ub3Blbl9pc3N1ZXNfY291bnR9IG9wZW4gaXNzdWVzXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5nLXN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJzXCI+XHJcbiAgICAgICAgICB7cmVwby5zdGFyZ2F6ZXJzX2NvdW50fSA8SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm90aGVyLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvb3QgKyAucm9vdCB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwby10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYW5nLXN0YXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmctc3RhciA+IHNwYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBvLWRlc2Mge1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\components\\\\Repo.js */"));
});

/***/ }),

/***/ "./components/SearchUser.js":
/*!**********************************!*\
  !*** ./components/SearchUser.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_4__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.Option;

function SearchUser({
  onChange,
  value
}) {
  const {
    0: fetching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: options,
    1: setOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]); // lastFetchIdRef作用是避免搜索结果请求过程中,又发起新的请求
  // 这样导致用户可能会看到现象，即一个数组刚显示就被立马替换的过程

  const lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(0);
  const handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"])(value => {
    lastFetchIdRef.current += 1;
    const fetchId = lastFetchIdRef.current;
    setFetching(true);
    setOptions([]);

    if (!value) {
      setFetching(false);
      setOptions([]);
      return;
    }

    _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: `/search/users?q=${value}`
    }).then(resp => {
      //由于闭包的存在，这里的fetachId保存的是这个请求时的lastFetchIdRef.current
      //而lastFetchIdRef.current则一直指向最新的
      if (fetchId !== lastFetchIdRef.current) {
        return;
      }

      const data = resp.data.data;
      data.items = data.items.map(item => {
        return {
          text: item.login,
          value: item.login
        };
      });
      setOptions(data.items);
    }).finally(() => {
      setFetching(false);
    });
  }, 500), []); // 用户选中了搜索结果后

  const handleChange = value => {
    setOptions([]);
    setFetching(false);
    onChange(value);
  };

  return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: value,
    filterOption: false,
    showSearch: true,
    filterOption: false,
    placeholder: "\u521B\u5EFA\u8005",
    notFoundContent: fetching ? __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small"
    }) : __jsx("span", null, "no user"),
    style: {
      width: 200
    },
    onSearch: handleSearch,
    onChange: handleChange
  }, options.map(item => {
    return __jsx(Option, {
      value: item.value,
      key: item.key
    }, item.text);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ }),

/***/ "./components/withDetail.js":
/*!**********************************!*\
  !*** ./components/withDetail.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_repo_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/repo-cache */ "./lib/repo-cache.js");
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Repo */ "./components/Repo.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function makeQuery(queryObject) {
  const query = Object.entries(queryObject).reduce((result, item) => {
    result.push(item.join('='));
    return result;
  }, []).join('&');
  return `?${query}`;
}

const isServer = true;
/* harmony default export */ __webpack_exports__["default"] = ((Comp, type) => {
  const withDetail = (_ref) => {
    let {
      repobasic,
      router
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["repobasic", "router"]);

    const query = makeQuery(router.query);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      !isServer && Object(_lib_repo_cache__WEBPACK_IMPORTED_MODULE_4__["cache"])(repobasic);
    });
    return __jsx("div", {
      className: "jsx-1242838066" + " " + 'root'
    }, repobasic && repobasic.id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-1242838066" + " " + "repo-basic"
    }, __jsx(_Repo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      repo: repobasic
    }), __jsx("div", {
      className: "jsx-1242838066" + " " + 'tabs'
    }, type === 'index' ? __jsx("span", {
      className: "jsx-1242838066" + " " + "tab index"
    }, "Readme") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/detail${query}`
    }, __jsx("a", {
      className: "jsx-1242838066" + " " + "tab index"
    }, "Readme")), type === 'issues' ? __jsx("span", {
      className: "jsx-1242838066" + " " + "tab issues"
    }, "issues") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/detail/issues${query}`
    }, __jsx("a", {
      className: "jsx-1242838066" + " " + "tab index"
    }, "issues")))), __jsx(Comp, rest)) : '暂无内容', __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1242838066"
    }, ".root.jsx-1242838066{padding-top:20px;}.repo-basic.jsx-1242838066{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1242838066+.tab.jsx-1242838066{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcd2l0aERldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGtCLEFBRzhCLEFBR0osQUFNSSxhQUxLLElBSHhCLEFBU0Esa0JBTHFCLG1CQUNELGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hcmltb1xcRGVza3RvcFxcbmV4dC1naXRodWJcXGNvbXBvbmVudHNcXHdpdGhEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtjYWNoZSxnZXR9IGZyb20gJy4uL2xpYi9yZXBvLWNhY2hlJ1xyXG5pbXBvcnQgUmVwbyBmcm9tICcuL1JlcG8nXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShxdWVyeU9iamVjdCl7XHJcbiAgY29uc3QgcXVlcnk9T2JqZWN0LmVudHJpZXMocXVlcnlPYmplY3QpXHJcbiAgICAucmVkdWNlKChyZXN1bHQsaXRlbSk9PntcclxuICAgICAgcmVzdWx0LnB1c2goaXRlbS5qb2luKCc9JykpXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICB9LFtdKVxyXG4gICAgLmpvaW4oJyYnKVxyXG4gIHJldHVybiBgPyR7cXVlcnl9YFxyXG59XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoQ29tcCx0eXBlKT0+e1xyXG4gIGNvbnN0IHdpdGhEZXRhaWw9KHsgcmVwb2Jhc2ljLCByb3V0ZXIsIC4uLnJlc3QgfSk9PntcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbWFrZVF1ZXJ5KHJvdXRlci5xdWVyeSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICFpc1NlcnZlciAmJiBjYWNoZShyZXBvYmFzaWMpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAge1xyXG4gICAgICAgIHJlcG9iYXNpYyYmcmVwb2Jhc2ljLmlkXHJcbiAgICAgICAgPzw+PGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XHJcbiAgICAgICAgPFJlcG8gcmVwbz17cmVwb2Jhc2ljfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJzJz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU9PT0naW5kZXgnXHJcbiAgICAgICAgICAgICAgPzxzcGFuIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA6PExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PjxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU9PT0naXNzdWVzJ1xyXG4gICAgICAgICAgICAgID88c3BhbiBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+aXNzdWVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDo8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PjxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPmlzc3VlczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb21wIHsuLi5yZXN0fSAvPjwvPlxyXG4gICAgICA6J+aaguaXoOWGheWuuSdcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBvLWJhc2ljIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRhYiArIC50YWIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbiAgd2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHM9IGFzeW5jIChjb250ZXh0KT0+e1xyXG4gICAgY29uc3QgeyBjdHggfSA9IGNvbnRleHRcclxuICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxyXG4gICAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXHJcbiAgICBsZXQgcGFnZURhdGE9e31cclxuICAgIFxyXG4gICAgaWYoQ29tcCYmQ29tcC5nZXRJbml0aWFsUHJvcHMpe1xyXG4gICAgICBwYWdlRGF0YSA9YXdhaXQgQ29tcC5nZXRJbml0aWFsUHJvcHMoY29udGV4dClcclxuICAgIH1cclxuICAgIGlmKGdldChmdWxsX25hbWUpKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVwb2Jhc2ljOiBnZXQoZnVsbF9uYW1lKSxcclxuICAgICAgICAuLi5wYWdlRGF0YVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcmVwb0Jhc2ljPXt9XHJcbiAgICB0cnkge1xyXG4gICAgIHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogYC9yZXBvcy8ke2Z1bGxfbmFtZX1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdHgucmVxLFxyXG4gICAgICAgIGN0eC5yZXNcclxuICAgICAgKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlcG9iYXNpYzogaXNTZXJ2ZXI/cmVwb0Jhc2ljLmRhdGE6cmVwb0Jhc2ljLmRhdGEuZGF0YSxcclxuICAgICAgLi4ucGFnZURhdGFcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIHJldHVybiB3aXRoUm91dGVyKHdpdGhEZXRhaWwpXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\components\\\\withDetail.js */"));
  };

  withDetail.getInitialProps = async context => {
    const {
      ctx
    } = context;
    const {
      owner,
      name
    } = ctx.query;
    const full_name = `${owner}/${name}`;
    let pageData = {};

    if (Comp && Comp.getInitialProps) {
      pageData = await Comp.getInitialProps(context);
    }

    if (Object(_lib_repo_cache__WEBPACK_IMPORTED_MODULE_4__["get"])(full_name)) {
      return _objectSpread({
        repobasic: Object(_lib_repo_cache__WEBPACK_IMPORTED_MODULE_4__["get"])(full_name)
      }, pageData);
    }

    let repoBasic = {};

    try {
      repoBasic = await _lib_api__WEBPACK_IMPORTED_MODULE_6___default.a.request({
        url: `/repos/${full_name}`
      }, ctx.req, ctx.res);
    } catch (error) {
      console.log('error');
    }

    return _objectSpread({
      repobasic: isServer ? repoBasic.data : repoBasic.data.data
    }, pageData);
  };

  return Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(withDetail);
});

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

const isServer = true;
const github_base_url = 'https://api.github.com';

async function request({
  method = 'GET',
  url,
  data
}, req, res) {
  if (!url) {
    throw Error('url must be provied');
  }

  if (isServer) {
    console.log('in');
    const githubAuth = req.session && req.session.githubAuth || {};
    const token = githubAuth && githubAuth.access_token;
    let headers = {};

    if (token) {
      headers['Authorization'] = `${githubAuth.token_type} ${token}`;
    }

    return axios({
      method,
      url: `${github_base_url}${url}`,
      headers,
      data
    });
  } else {
    return axios({
      method,
      url: `/github${url}`,
      data
    });
  }
}

module.exports = {
  request
};

/***/ }),

/***/ "./lib/repo-cache.js":
/*!***************************!*\
  !*** ./lib/repo-cache.js ***!
  \***************************/
/*! exports provided: cache, get, cacheArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheArray", function() { return cacheArray; });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

const REPO_CACHE = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
  maxAge: 1000 * 60 * 60
});
const cache = repo => {
  if (repo) {
    const full_name = repo.full_name;
    REPO_CACHE.set(full_name, repo);
  }
};
const get = full_name => {
  return REPO_CACHE.get(full_name);
};
const cacheArray = repos => {
  if (repos && Array.isArray(repos)) {
    repos.forEach(repo => {
      cache(repo.full_name, repo);
    });
  }
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: getLastUpdated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastUpdated", function() { return getLastUpdated; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function getLastUpdated(time) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_withDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/withDetail */ "./components/withDetail.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






const Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a.Option;
const Markdown = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/Markdown */ "./components/Markdown.js")), {
  loading: () => __jsx("p", null, "Loading"),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/Markdown */ "./components/Markdown.js")],
    modules: ['../../components/Markdown']
  }
});
const CACHE = {};
const isServer = true;

function Label({
  label
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
    style: {
      backgroundColor: `#${label.color}`
    },
    className: "jsx-1709400167" + " " + "label"
  }, label.name), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1709400167"
  }, ".label.jsx-1709400167{display:inline-block;line-height:20px;margin-left:15px;padding:3px;border-radius:3px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFHZ0MscUJBQ0osaUJBQ0EsaUJBQ0wsWUFDTSxrQkFDSCxlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hcmltb1xcRGVza3RvcFxcbmV4dC1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCwgU3BpbiB9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgd2l0aERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhEZXRhaWwnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IHtnZXRMYXN0VXBkYXRlZH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInXHJcblxyXG5jb25zdCBPcHRpb249U2VsZWN0Lk9wdGlvblxyXG5jb25zdCBNYXJrZG93bj1keW5hbWljKCgpPT5pbXBvcnQgKCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duJyksIHtcclxuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nPC9wPlxyXG59KVxyXG5cclxuY29uc3QgQ0FDSEUgPSB7fVxyXG5jb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCdcclxuXHJcblxyXG5mdW5jdGlvbiBMYWJlbCh7IGxhYmVsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCMke2xhYmVsLmNvbG9yfWAgfX0+XHJcbiAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgPE1hcmtkb3duIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+XHJcbiAgICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICDmiZPlvIBpc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZX0pe1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIOi/meS4quWGmeazleWwseWPr+S7peS4jeS+nei1lnNob3dEZXRhaWzjgILov5nkuYjlhpnlj6/ku6Xpgb/lvIDpl63ljIVcclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDEwXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2hvd0RldGFpbD8n6ZqQ6JePJzon5p+l55yLJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0+PC9BdmF0YXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICB7aXNzdWUubGFiZWxzLm1hcChsYWJlbCA9PiA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfS8+KX1cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyDojrflj5bor7fmsYLlj4LmlbBcclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBsZXQgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXHJcbiAgbGV0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJydcclxuICBsZXQgbGFiZWxTdHIgPSAnJ1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCkge1xyXG4gICAgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcnIgPSBbXVxyXG5cclxuICBjcmVhdG9yU3RyICYmIGFyci5wdXNoKGNyZWF0b3JTdHIpXHJcbiAgc3RhdGVTdHIgJiYgYXJyLnB1c2goc3RhdGVTdHIpXHJcbiAgbGFiZWxTdHIgJiYgYXJyLnB1c2gobGFiZWxTdHIpXHJcblxyXG4gIHJldHVybiBgPyR7YXJyLmpvaW4oJyYnKX1gXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSXNzdWVzPSh7aW5pdGlhbElzc3VlcywgbGFiZWxzLCBvd25lciwgbmFtZX0pPT57XHJcblxyXG5jb25zdCBbY3JlYXRvcixzZXRDcmVhdG9yXT11c2VTdGF0ZSgnJylcclxuY29uc3QgW3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZSgnYWxsJylcclxuY29uc3QgW2xhYmVsLHNldExhYmVsXT11c2VTdGF0ZShbXSlcclxuY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRpYWxJc3N1ZXMpXHJcbmNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIOe8k+WtmGxhYmVs6K+35rGC57uT5p6cXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFpc1NlcnZlciAmJiAoQ0FDSEVbYCR7b3duZXJ9LyR7bmFtZX1gXSA9IGxhYmVscylcclxuICB9LCBbb3duZXIsIG5hbWUsIGxhYmVsc10pXHJcblxyXG4gIC8vIOmAieS4reeUqOaIt+e7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK3nirbmgIHnu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldFN0YXRlKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK1sYWJlbOe7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0TGFiZWwodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZldGNoaW5nKHRydWUpXHJcbiAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbCl9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcCA9PiBzZXRJc3N1ZXMocmVzcC5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9LCBbb3duZXIsIG5hbWUsIGNyZWF0b3IsIHN0YXRlLCBsYWJlbF0pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICA8U2VhcmNoVXNlciBvbkNoYW5nZT17aGFuZGxlQ3JlYXRvckNoYW5nZX0gdmFsdWU9e2NyZWF0b3J9Lz5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nYWxsJz5hbGw8L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nb3Blbic+b3BlbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdjbG9zZWQnPmNsb3NlZDwvT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17bGFiZWx9XHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogMjAsIG1hcmdpblJpZ2h0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWxzXHJcbiAgICAgICAgICAgID9sYWJlbHMubWFwKGxhID0+IChcclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYS5uYW1lfSBrZXk9e2xhLmlkfT5cclxuICAgICAgICAgICAgICAgIHtsYS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gZGlzYWJsZWQ9e2ZldGNoaW5nfT5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtmZXRjaGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IChcclxuICAgICAgICAgICAgPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9PjwvSXNzdWVJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eH0pPT57XHJcbiAgY29uc3Qge293bmVyLG5hbWV9PWN0eC5xdWVyeVxyXG4gIGNvbnN0IGZ1bGxfbmFtZSA9IGAke293bmVyfS8ke25hbWV9YFxyXG5cclxuICBjb25zdCBmZXRjaHM9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGFwaS5yZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxyXG4gICAgICB9LFxyXG4gICAgICBjdHgucmVxLFxyXG4gICAgICBjdHgucmVzXHJcbiAgICApLFxyXG4gICAgQ0FDSEVbZnVsbF9uYW1lXSA/IFByb21pc2UucmVzb2x2ZSh7ZGF0YTogQ0FDSEVbZnVsbF9uYW1lXX0pIDogYXBpLnJlcXVlc3QoXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9sYWJlbHNgXHJcbiAgICAgIH0sXHJcbiAgICAgIGN0eC5yZXEsXHJcbiAgICAgIGN0eC5yZXNcclxuICAgIClcclxuICBdKVxyXG5cclxuICBjb25zdCBbSXNzdWVzUmVzcCxMYWJlbHNSZXNwXT1mZXRjaHNcclxuICByZXR1cm4ge1xyXG4gICAgb3duZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgaW5pdGlhbElzc3VlczogSXNzdWVzUmVzcC5kYXRhLFxyXG4gICAgbGFiZWxzOiBMYWJlbHNSZXNwLmRhdGFcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIHdpdGhEZXRhaWwoSXNzdWVzLCdpc3N1ZXMnKVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
}

function IssueDetail({
  issue
}) {
  return __jsx("div", {
    className: "jsx-1740130853" + " " + 'root'
  }, __jsx(Markdown, {
    content: issue.body
  }), __jsx("div", {
    className: "jsx-1740130853" + " " + 'actions'
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "\u6253\u5F00issue\u8BA8\u8BBA\u9875\u9762")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1740130853"
  }, ".root.jsx-1740130853{background:#fafafa;padding:20px;}.actions.jsx-1740130853{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDbUIsQUFHOEIsQUFJRixpQkFDbkIsRUFKZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB3aXRoRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aERldGFpbCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQge2dldExhc3RVcGRhdGVkfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuXHJcbmNvbnN0IE9wdGlvbj1TZWxlY3QuT3B0aW9uXHJcbmNvbnN0IE1hcmtkb3duPWR5bmFtaWMoKCk9PmltcG9ydCAoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd24nKSwge1xyXG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmc8L3A+XHJcbn0pXHJcblxyXG5jb25zdCBDQUNIRSA9IHt9XHJcbmNvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIExhYmVsKHsgbGFiZWwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgIyR7bGFiZWwuY29sb3J9YCB9fT5cclxuICAgICAgICB7bGFiZWwubmFtZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz5cclxuICAgICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSl7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8g6L+Z5Liq5YaZ5rOV5bCx5Y+v5Lul5LiN5L6d6LWWc2hvd0RldGFpbOOAgui/meS5iOWGmeWPr+S7pemBv+W8gOmXreWMhVxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICByaWdodDogMTBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzaG93RGV0YWlsPyfpmpDol48nOifmn6XnnIsnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfT48L0F2YXRhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtpc3N1ZS5sYWJlbHMubWFwKGxhYmVsID0+IDxMYWJlbCBsYWJlbD17bGFiZWx9IGtleT17bGFiZWwuaWR9Lz4pfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIOiOt+WPluivt+axguWPguaVsFxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGxldCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJydcclxuICBsZXQgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJ1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnXHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoKSB7XHJcbiAgICBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWBcclxuICB9XHJcblxyXG4gIGNvbnN0IGFyciA9IFtdXHJcblxyXG4gIGNyZWF0b3JTdHIgJiYgYXJyLnB1c2goY3JlYXRvclN0cilcclxuICBzdGF0ZVN0ciAmJiBhcnIucHVzaChzdGF0ZVN0cilcclxuICBsYWJlbFN0ciAmJiBhcnIucHVzaChsYWJlbFN0cilcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWBcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBJc3N1ZXM9KHtpbml0aWFsSXNzdWVzLCBsYWJlbHMsIG93bmVyLCBuYW1lfSk9PntcclxuXHJcbmNvbnN0IFtjcmVhdG9yLHNldENyZWF0b3JdPXVzZVN0YXRlKCcnKVxyXG5jb25zdCBbc3RhdGUsc2V0U3RhdGVdPXVzZVN0YXRlKCdhbGwnKVxyXG5jb25zdCBbbGFiZWwsc2V0TGFiZWxdPXVzZVN0YXRlKFtdKVxyXG5jb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbElzc3VlcylcclxuY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8g57yT5a2YbGFiZWzor7fmsYLnu5PmnpxcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWlzU2VydmVyICYmIChDQUNIRVtgJHtvd25lcn0vJHtuYW1lfWBdID0gbGFiZWxzKVxyXG4gIH0sIFtvd25lciwgbmFtZSwgbGFiZWxzXSlcclxuXHJcbiAgLy8g6YCJ5Lit55So5oi357uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldENyZWF0b3IodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4reeKtuaAgee7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0U3RhdGUodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4rWxhYmVs57uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRMYWJlbCh2YWx1ZSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcodHJ1ZSlcclxuICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzJHttYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVsKX1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwID0+IHNldElzc3VlcyhyZXNwLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH0sIFtvd25lciwgbmFtZSwgY3JlYXRvciwgc3RhdGUsIGxhYmVsXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cclxuICAgICAgICAgIDxTZWFyY2hVc2VyIG9uQ2hhbmdlPXtoYW5kbGVDcmVhdG9yQ2hhbmdlfSB2YWx1ZT17Y3JlYXRvcn0vPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwLCBtYXJnaW5MZWZ0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdhbGwnPmFsbDwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdvcGVuJz5vcGVuPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2Nsb3NlZCc+Y2xvc2VkPC9PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtsYWJlbH1cclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luUmlnaHQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbHNcclxuICAgICAgICAgICAgP2xhYmVscy5tYXAobGEgPT4gKFxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PlxyXG4gICAgICAgICAgICAgICAge2xhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VhcmNofSBkaXNhYmxlZD17ZmV0Y2hpbmd9PlxyXG4gICAgICAgICAg5pCc57SiXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2ZldGNoaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgICA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0+PC9Jc3N1ZUl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4fSk9PntcclxuICBjb25zdCB7b3duZXIsbmFtZX09Y3R4LnF1ZXJ5XHJcbiAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXHJcblxyXG4gIGNvbnN0IGZldGNocz0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgYXBpLnJlcXVlc3QoXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXHJcbiAgICAgIH0sXHJcbiAgICAgIGN0eC5yZXEsXHJcbiAgICAgIGN0eC5yZXNcclxuICAgICksXHJcbiAgICBDQUNIRVtmdWxsX25hbWVdID8gUHJvbWlzZS5yZXNvbHZlKHtkYXRhOiBDQUNIRVtmdWxsX25hbWVdfSkgOiBhcGkucmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcclxuICAgICAgfSxcclxuICAgICAgY3R4LnJlcSxcclxuICAgICAgY3R4LnJlc1xyXG4gICAgKVxyXG4gIF0pXHJcblxyXG4gIGNvbnN0IFtJc3N1ZXNSZXNwLExhYmVsc1Jlc3BdPWZldGNoc1xyXG4gIHJldHVybiB7XHJcbiAgICBvd25lcixcclxuICAgIG5hbWUsXHJcbiAgICBpbml0aWFsSXNzdWVzOiBJc3N1ZXNSZXNwLmRhdGEsXHJcbiAgICBsYWJlbHM6IExhYmVsc1Jlc3AuZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgd2l0aERldGFpbChJc3N1ZXMsJ2lzc3VlcycpXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
}

function IssueItem({
  issue
}) {
  const {
    0: showDetail,
    1: setShowDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false); // 这个写法就可以不依赖showDetail。这么写可以避开闭包

  const toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setShowDetail(detail => !detail);
  }, []);
  return __jsx("div", null, __jsx("div", {
    className: "jsx-1445670956" + " " + "issue"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? '隐藏' : '查看'), __jsx("div", {
    className: "jsx-1445670956" + " " + "avatar"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), __jsx("div", {
    className: "jsx-1445670956" + " " + "main-info"
  }, __jsx("h6", {
    className: "jsx-1445670956"
  }, __jsx("span", {
    className: "jsx-1445670956"
  }, issue.title), issue.labels.map(label => __jsx(Label, {
    label: label,
    key: label.id
  }))), __jsx("p", {
    className: "jsx-1445670956" + " " + "sub-info"
  }, __jsx("span", {
    className: "jsx-1445670956"
  }, "Updated at ", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["getLastUpdated"])(issue.updated_at)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1445670956"
  }, ".issue.jsx-1445670956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1445670956:hover{background:#fafafa;}.issue.jsx-1445670956+.issue.jsx-1445670956{border-top:1px solid #eee;}.main-info.jsx-1445670956>h6.jsx-1445670956{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-1445670956{margin-right:20px;}.sub-info.jsx-1445670956{margin-bottom:0;}.sub-info.jsx-1445670956>span.jsx-1445670956+span.jsx-1445670956{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGa0IsQUFHMEIsQUFLTSxBQUdPLEFBR1YsQUFLRSxBQUdGLEFBR0ssZ0JBVk4sQUFRakIsRUFIQSxDQVhBLEVBaUJtQixLQWRuQixLQUlxQixPQVdKLFlBVmpCLEdBV0EscUJBeEJvQixrQkFDTCxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB3aXRoRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aERldGFpbCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQge2dldExhc3RVcGRhdGVkfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuXHJcbmNvbnN0IE9wdGlvbj1TZWxlY3QuT3B0aW9uXHJcbmNvbnN0IE1hcmtkb3duPWR5bmFtaWMoKCk9PmltcG9ydCAoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd24nKSwge1xyXG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmc8L3A+XHJcbn0pXHJcblxyXG5jb25zdCBDQUNIRSA9IHt9XHJcbmNvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIExhYmVsKHsgbGFiZWwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgIyR7bGFiZWwuY29sb3J9YCB9fT5cclxuICAgICAgICB7bGFiZWwubmFtZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz5cclxuICAgICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSl7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8g6L+Z5Liq5YaZ5rOV5bCx5Y+v5Lul5LiN5L6d6LWWc2hvd0RldGFpbOOAgui/meS5iOWGmeWPr+S7pemBv+W8gOmXreWMhVxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6IDEwLFxyXG4gICAgICAgICAgICByaWdodDogMTBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzaG93RGV0YWlsPyfpmpDol48nOifmn6XnnIsnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfT48L0F2YXRhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtpc3N1ZS5sYWJlbHMubWFwKGxhYmVsID0+IDxMYWJlbCBsYWJlbD17bGFiZWx9IGtleT17bGFiZWwuaWR9Lz4pfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIOiOt+WPluivt+axguWPguaVsFxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGxldCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJydcclxuICBsZXQgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJ1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnXHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoKSB7XHJcbiAgICBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWBcclxuICB9XHJcblxyXG4gIGNvbnN0IGFyciA9IFtdXHJcblxyXG4gIGNyZWF0b3JTdHIgJiYgYXJyLnB1c2goY3JlYXRvclN0cilcclxuICBzdGF0ZVN0ciAmJiBhcnIucHVzaChzdGF0ZVN0cilcclxuICBsYWJlbFN0ciAmJiBhcnIucHVzaChsYWJlbFN0cilcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWBcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBJc3N1ZXM9KHtpbml0aWFsSXNzdWVzLCBsYWJlbHMsIG93bmVyLCBuYW1lfSk9PntcclxuXHJcbmNvbnN0IFtjcmVhdG9yLHNldENyZWF0b3JdPXVzZVN0YXRlKCcnKVxyXG5jb25zdCBbc3RhdGUsc2V0U3RhdGVdPXVzZVN0YXRlKCdhbGwnKVxyXG5jb25zdCBbbGFiZWwsc2V0TGFiZWxdPXVzZVN0YXRlKFtdKVxyXG5jb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbElzc3VlcylcclxuY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8g57yT5a2YbGFiZWzor7fmsYLnu5PmnpxcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWlzU2VydmVyICYmIChDQUNIRVtgJHtvd25lcn0vJHtuYW1lfWBdID0gbGFiZWxzKVxyXG4gIH0sIFtvd25lciwgbmFtZSwgbGFiZWxzXSlcclxuXHJcbiAgLy8g6YCJ5Lit55So5oi357uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldENyZWF0b3IodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4reeKtuaAgee7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0U3RhdGUodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4rWxhYmVs57uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRMYWJlbCh2YWx1ZSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcodHJ1ZSlcclxuICAgIGFwaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzJHttYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVsKX1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwID0+IHNldElzc3VlcyhyZXNwLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH0sIFtvd25lciwgbmFtZSwgY3JlYXRvciwgc3RhdGUsIGxhYmVsXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cclxuICAgICAgICAgIDxTZWFyY2hVc2VyIG9uQ2hhbmdlPXtoYW5kbGVDcmVhdG9yQ2hhbmdlfSB2YWx1ZT17Y3JlYXRvcn0vPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwLCBtYXJnaW5MZWZ0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdhbGwnPmFsbDwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdvcGVuJz5vcGVuPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2Nsb3NlZCc+Y2xvc2VkPC9PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtsYWJlbH1cclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luUmlnaHQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsYWJlbHNcclxuICAgICAgICAgICAgP2xhYmVscy5tYXAobGEgPT4gKFxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PlxyXG4gICAgICAgICAgICAgICAge2xhLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIDonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2VhcmNofSBkaXNhYmxlZD17ZmV0Y2hpbmd9PlxyXG4gICAgICAgICAg5pCc57SiXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2ZldGNoaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgICA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0+PC9Jc3N1ZUl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4fSk9PntcclxuICBjb25zdCB7b3duZXIsbmFtZX09Y3R4LnF1ZXJ5XHJcbiAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXHJcblxyXG4gIGNvbnN0IGZldGNocz0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgYXBpLnJlcXVlc3QoXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXHJcbiAgICAgIH0sXHJcbiAgICAgIGN0eC5yZXEsXHJcbiAgICAgIGN0eC5yZXNcclxuICAgICksXHJcbiAgICBDQUNIRVtmdWxsX25hbWVdID8gUHJvbWlzZS5yZXNvbHZlKHtkYXRhOiBDQUNIRVtmdWxsX25hbWVdfSkgOiBhcGkucmVxdWVzdChcclxuICAgICAge1xyXG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcclxuICAgICAgfSxcclxuICAgICAgY3R4LnJlcSxcclxuICAgICAgY3R4LnJlc1xyXG4gICAgKVxyXG4gIF0pXHJcblxyXG4gIGNvbnN0IFtJc3N1ZXNSZXNwLExhYmVsc1Jlc3BdPWZldGNoc1xyXG4gIHJldHVybiB7XHJcbiAgICBvd25lcixcclxuICAgIG5hbWUsXHJcbiAgICBpbml0aWFsSXNzdWVzOiBJc3N1ZXNSZXNwLmRhdGEsXHJcbiAgICBsYWJlbHM6IExhYmVsc1Jlc3AuZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgd2l0aERldGFpbChJc3N1ZXMsJ2lzc3VlcycpXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */")), showDetail ? __jsx(IssueDetail, {
    issue: issue
  }) : null);
} // 获取请求参数


function makeQuery(creator, state, labels) {
  let creatorStr = creator ? `creator=${creator}` : '';
  let stateStr = state ? `state=${state}` : '';
  let labelStr = '';

  if (labels && labels.length) {
    labelStr = `labels=${labels.join(',')}`;
  }

  const arr = [];
  creatorStr && arr.push(creatorStr);
  stateStr && arr.push(stateStr);
  labelStr && arr.push(labelStr);
  return `?${arr.join('&')}`;
}

const Issues = ({
  initialIssues,
  labels,
  owner,
  name
}) => {
  const {
    0: creator,
    1: setCreator
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('');
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('all');
  const {
    0: label,
    1: setLabel
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const {
    0: issues,
    1: setIssues
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialIssues);
  const {
    0: fetching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false); // 缓存label请求结果

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    !isServer && (CACHE[`${owner}/${name}`] = labels);
  }, [owner, name, labels]); // 选中用户结果的回调

  const handleCreatorChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(value => {
    setCreator(value);
  }, []); // 选中状态结果的回调

  const handleStateChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(value => {
    setState(value);
  }, []); // 选中label结果的回调

  const handleLabelChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(value => {
    setLabel(value);
  }, []);
  const handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(() => {
    setFetching(true);
    _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
      url: `/repos/${owner}/${name}/issues${makeQuery(creator, state, label)}`
    }).then(resp => setIssues(resp.data)).catch(err => console.error(err)).finally(() => {
      setFetching(false);
    });
  }, [owner, name, creator, state, label]);
  return __jsx("div", {
    className: "jsx-2212480553" + " " + 'root'
  }, __jsx("div", {
    className: "jsx-2212480553" + " " + 'search'
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onChange: handleCreatorChange,
    value: creator
  }), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, "closed")), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mode: "multiple",
    placeholder: "Label",
    onChange: handleLabelChange,
    value: label,
    style: {
      flexGrow: 1,
      marginLeft: 20,
      marginRight: 20
    }
  }, labels ? labels.map(la => __jsx(Option, {
    value: la.name,
    key: la.id
  }, la.name)) : ''), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "primary",
    onClick: handleSearch,
    disabled: fetching
  }, "\u641C\u7D22")), fetching ? __jsx("div", {
    className: "jsx-2212480553" + " " + "loading"
  }, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, null)) : __jsx("div", {
    className: "jsx-2212480553" + " " + "issues"
  }, issues.map(issue => __jsx(IssueItem, {
    issue: issue,
    key: issue.id
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2212480553"
  }, ".issues.jsx-2212480553{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2212480553{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-2212480553{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlPb0IsQUFHaUMsQUFNVCxBQUdBLGFBQ0EsU0FUSyxrQkFDQyxtQkFDSCxlQUlsQixDQUhBLFlBT3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hcmltb1xcRGVza3RvcFxcbmV4dC1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCwgU3BpbiB9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgd2l0aERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhEZXRhaWwnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IHtnZXRMYXN0VXBkYXRlZH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInXHJcblxyXG5jb25zdCBPcHRpb249U2VsZWN0Lk9wdGlvblxyXG5jb25zdCBNYXJrZG93bj1keW5hbWljKCgpPT5pbXBvcnQgKCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duJyksIHtcclxuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nPC9wPlxyXG59KVxyXG5cclxuY29uc3QgQ0FDSEUgPSB7fVxyXG5jb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCdcclxuXHJcblxyXG5mdW5jdGlvbiBMYWJlbCh7IGxhYmVsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCMke2xhYmVsLmNvbG9yfWAgfX0+XHJcbiAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgPE1hcmtkb3duIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+XHJcbiAgICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICDmiZPlvIBpc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZX0pe1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIOi/meS4quWGmeazleWwseWPr+S7peS4jeS+nei1lnNob3dEZXRhaWzjgILov5nkuYjlhpnlj6/ku6Xpgb/lvIDpl63ljIVcclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDEwXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2hvd0RldGFpbD8n6ZqQ6JePJzon5p+l55yLJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0+PC9BdmF0YXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICB7aXNzdWUubGFiZWxzLm1hcChsYWJlbCA9PiA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfS8+KX1cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyDojrflj5bor7fmsYLlj4LmlbBcclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBsZXQgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXHJcbiAgbGV0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJydcclxuICBsZXQgbGFiZWxTdHIgPSAnJ1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCkge1xyXG4gICAgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcnIgPSBbXVxyXG5cclxuICBjcmVhdG9yU3RyICYmIGFyci5wdXNoKGNyZWF0b3JTdHIpXHJcbiAgc3RhdGVTdHIgJiYgYXJyLnB1c2goc3RhdGVTdHIpXHJcbiAgbGFiZWxTdHIgJiYgYXJyLnB1c2gobGFiZWxTdHIpXHJcblxyXG4gIHJldHVybiBgPyR7YXJyLmpvaW4oJyYnKX1gXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSXNzdWVzPSh7aW5pdGlhbElzc3VlcywgbGFiZWxzLCBvd25lciwgbmFtZX0pPT57XHJcblxyXG5jb25zdCBbY3JlYXRvcixzZXRDcmVhdG9yXT11c2VTdGF0ZSgnJylcclxuY29uc3QgW3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZSgnYWxsJylcclxuY29uc3QgW2xhYmVsLHNldExhYmVsXT11c2VTdGF0ZShbXSlcclxuY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRpYWxJc3N1ZXMpXHJcbmNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIC8vIOe8k+WtmGxhYmVs6K+35rGC57uT5p6cXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFpc1NlcnZlciAmJiAoQ0FDSEVbYCR7b3duZXJ9LyR7bmFtZX1gXSA9IGxhYmVscylcclxuICB9LCBbb3duZXIsIG5hbWUsIGxhYmVsc10pXHJcblxyXG4gIC8vIOmAieS4reeUqOaIt+e7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK3nirbmgIHnu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldFN0YXRlKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK1sYWJlbOe7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0TGFiZWwodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZldGNoaW5nKHRydWUpXHJcbiAgICBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbCl9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcCA9PiBzZXRJc3N1ZXMocmVzcC5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9LCBbb3duZXIsIG5hbWUsIGNyZWF0b3IsIHN0YXRlLCBsYWJlbF0pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICA8U2VhcmNoVXNlciBvbkNoYW5nZT17aGFuZGxlQ3JlYXRvckNoYW5nZX0gdmFsdWU9e2NyZWF0b3J9Lz5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nYWxsJz5hbGw8L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nb3Blbic+b3BlbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdjbG9zZWQnPmNsb3NlZDwvT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17bGFiZWx9XHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogMjAsIG1hcmdpblJpZ2h0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bGFiZWxzXHJcbiAgICAgICAgICAgID9sYWJlbHMubWFwKGxhID0+IChcclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYS5uYW1lfSBrZXk9e2xhLmlkfT5cclxuICAgICAgICAgICAgICAgIHtsYS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gZGlzYWJsZWQ9e2ZldGNoaW5nfT5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtmZXRjaGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IChcclxuICAgICAgICAgICAgPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9PjwvSXNzdWVJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eH0pPT57XHJcbiAgY29uc3Qge293bmVyLG5hbWV9PWN0eC5xdWVyeVxyXG4gIGNvbnN0IGZ1bGxfbmFtZSA9IGAke293bmVyfS8ke25hbWV9YFxyXG5cclxuICBjb25zdCBmZXRjaHM9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGFwaS5yZXF1ZXN0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxyXG4gICAgICB9LFxyXG4gICAgICBjdHgucmVxLFxyXG4gICAgICBjdHgucmVzXHJcbiAgICApLFxyXG4gICAgQ0FDSEVbZnVsbF9uYW1lXSA/IFByb21pc2UucmVzb2x2ZSh7ZGF0YTogQ0FDSEVbZnVsbF9uYW1lXX0pIDogYXBpLnJlcXVlc3QoXHJcbiAgICAgIHtcclxuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9sYWJlbHNgXHJcbiAgICAgIH0sXHJcbiAgICAgIGN0eC5yZXEsXHJcbiAgICAgIGN0eC5yZXNcclxuICAgIClcclxuICBdKVxyXG5cclxuICBjb25zdCBbSXNzdWVzUmVzcCxMYWJlbHNSZXNwXT1mZXRjaHNcclxuICByZXR1cm4ge1xyXG4gICAgb3duZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgaW5pdGlhbElzc3VlczogSXNzdWVzUmVzcC5kYXRhLFxyXG4gICAgbGFiZWxzOiBMYWJlbHNSZXNwLmRhdGFcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIHdpdGhEZXRhaWwoSXNzdWVzLCdpc3N1ZXMnKVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
};

Issues.getInitialProps = async ({
  ctx
}) => {
  const {
    owner,
    name
  } = ctx.query;
  const full_name = `${owner}/${name}`;
  const fetchs = await Promise.all([_lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
    url: `/repos/${owner}/${name}/issues`
  }, ctx.req, ctx.res), CACHE[full_name] ? Promise.resolve({
    data: CACHE[full_name]
  }) : _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
    url: `/repos/${owner}/${name}/labels`
  }, ctx.req, ctx.res)]);
  const [IssuesResp, LabelsResp] = fetchs;
  return {
    owner,
    name,
    initialIssues: IssuesResp.data,
    labels: LabelsResp.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withDetail__WEBPACK_IMPORTED_MODULE_7__["default"])(Issues, 'issues'));

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/detail/issues.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marimo\Desktop\next-github\pages\detail\issues.js */"./pages/detail/issues.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=issues.js.map