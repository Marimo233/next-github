module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  console.log(repo);
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
  }, ".root.jsx-2348854648{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-2348854648>span.jsx-2348854648+span.jsx-2348854648{margin-left:10px;}.root.jsx-2348854648+.root.jsx-2348854648{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-2348854648{font-size:20px;}.lang-star.jsx-2348854648{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-2348854648>span.jsx-2348854648{width:120px;text-align:right;}.repo-desc.jsx-2348854648{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcUmVwby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR3dCLEFBSUksQUFHUyxBQUlYLEFBR0YsQUFHRCxBQUlBLFlBSEssQUFJbkIsR0FWQSxFQVBBLFNBR21CLEdBV25CLGNBVkEsK0JBUmdDLEFBY2hDLG1IQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcUmVwby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TGljZW5zZShsaWNlbnNlKSB7XHJcbiAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJydcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVwbyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVwbylcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWMtaW5mb1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvLXRpdGxlXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbD9vd25lcj0ke3JlcG8ub3duZXIubG9naW59Jm5hbWU9JHtyZXBvLm5hbWV9YH0+XHJcbiAgICAgICAgICAgIDxhPntyZXBvLmZ1bGxfbmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvLWRlc2NcIj57cmVwby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib3RoZXItaW5mb1wiPlxyXG4gICAgICAgICAge3JlcG8ubGljZW5zZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGljZW5zZVwiPntnZXRMaWNlbnNlKHJlcG8ubGljZW5zZSl9PC9zcGFuPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LXVwZGF0ZWRcIj5cclxuICAgICAgICAgICAge2dldExhc3RVcGRhdGVkKHJlcG8udXBkYXRlZF9hdCl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGVuLWlzc3Vlc1wiPlxyXG4gICAgICAgICAgICB7cmVwby5vcGVuX2lzc3Vlc19jb3VudH0gb3BlbiBpc3N1ZXNcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmctc3RhclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhbmdcIj57cmVwby5sYW5ndWFnZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhcnNcIj5cclxuICAgICAgICAgIHtyZXBvLnN0YXJnYXplcnNfY291bnR9IDxJY29uIHR5cGU9XCJzdGFyXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3RoZXItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBvLXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmctc3RhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFuZy1zdGFyID4gc3BhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlcG8tZGVzYyB7XHJcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\components\\\\Repo.js */"));
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
  const full_name = repo.full_name;
  REPO_CACHE.set(full_name, repo);
};
const get = full_name => {
  return REPO_CACHE.get(full_name);
};
const cacheArray = repos => {
  repos.forEach(repo => {
    cache(repo.full_name, repo);
  });
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_repo_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/repo-cache */ "./lib/repo-cache.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const cache = new lru_cache__WEBPACK_IMPORTED_MODULE_7___default.a({
  maxAge: 1000 * 60 * 10 // 有效期十分钟

});
const isServer = true; // let cacheUserRepos,cacheUserStaredRepos

function Index({
  userRepos,
  user,
  router,
  userStaredRepos
}) {
  // userRepos, userStaredRepos依赖的作用是,数据过期后,将重新请求的数据进行缓存
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (!isServer) {
      if (userRepos) {
        cache.set('userRepos', userRepos);
      }

      if (userStaredRepos) {
        cache.set('userStaredRepos', userStaredRepos);
      } //手动缓存
      // cacheUserRepos=userRepos
      // cacheUserStaredRepos=userStaredRepos
      // setTimeout(()=>{
      //     cacheUserRepos=null
      //     cacheUserStaredRepos=null
      // },1000*60*5)

    }
  }, [userRepos, userStaredRepos]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (!isServer) {
      Object(_lib_repo_cache__WEBPACK_IMPORTED_MODULE_8__["cacheArray"])(userRepos);
      Object(_lib_repo_cache__WEBPACK_IMPORTED_MODULE_8__["cacheArray"])(userStaredRepos);
    }
  }, [userRepos, userStaredRepos]);
  const tabKey = router.query.key || '1';

  const handleTabChange = activeKey => {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/?key=${activeKey}`);
  };

  if (!user || !user.id) {
    return __jsx("div", {
      className: "jsx-550798303" + " " + 'root'
    }, __jsx("p", {
      className: "jsx-550798303"
    }, "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "primary",
      href: `/prepare-auth?url=${router.asPath}`
    }, "\u53BB\u767B\u5F55"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "550798303"
    }, ".root.jsx-550798303{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEUyxBQUc0QixrQkFDVixRQUNDLFNBQ3NCLHlHQUNsQiwwRUFDVSw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcblxyXG5pbXBvcnQge2NhY2hlQXJyYXl9IGZyb20gJy4uL2xpYi9yZXBvLWNhY2hlJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXHJcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbydcclxuXHJcbmNvbnN0IGNhY2hlID0gbmV3IExSVSh7XHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCAvLyDmnInmlYjmnJ/ljYHliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuLy8gbGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGlmKHVzZXJSZXBvcyl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICB9XHJcbiAgICBpZih1c2VyU3RhcmVkUmVwb3Mpe1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsdXNlclN0YXJlZFJlcG9zKVxyXG4gICAgfVxyXG4gICAgLy/miYvliqjnvJPlrZhcclxuICAgIC8vIGNhY2hlVXNlclJlcG9zPXVzZXJSZXBvc1xyXG4gICAgLy8gY2FjaGVVc2VyU3RhcmVkUmVwb3M9dXNlclN0YXJlZFJlcG9zXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgY2FjaGVVc2VyUmVwb3M9bnVsbFxyXG4gICAgLy8gICAgIGNhY2hlVXNlclN0YXJlZFJlcG9zPW51bGxcclxuICAgIC8vIH0sMTAwMCo2MCo1KVxyXG5cclxuICB9XHJcbn0sW3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3NdKVxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmKCFpc1NlcnZlcil7XHJcbiAgICBjYWNoZUFycmF5KHVzZXJSZXBvcylcclxuICAgIGNhY2hlQXJyYXkodXNlclN0YXJlZFJlcG9zKVxyXG4gIH1cclxufSxbdXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvc10pXHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSdcclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSBhY3RpdmVLZXkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgaHJlZj17YC9wcmVwYXJlLWF1dGg/dXJsPSR7cm91dGVyLmFzUGF0aH1gfT7ljrvnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VyLWluZm8nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJhdmF0YXJfdXJsXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5lbWFpbCA/IHVzZXIuZW1haWwgOiAnaHR0cHM6Ly9naXRodWIuY29tL0lGcmVlT3ZPJ31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJSZXBvcy5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgP3VzZXJSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6J+aaguaXtuacquafpeivouWIsOS7k+W6kydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLmxlbmd0aD4wXHJcbiAgICAgICAgICAgICAgICA/dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDon5pqC5peg5YWz5rOo55qE5LuT5bqTJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXBvc3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eCxyZWR1eFN0b3JlLHJlcX0pPT57XHJcbiAgY29uc3QgdXNlciA9cmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXJcclxuICBsZXQgdXNlclJlcG9zPVtdLHVzZXJTdGFyZWRSZXBvcz1bXSx1c2VyUmVwb3NSZXNwPXt9LHVzZXJTdGFycmVkUmVwb3NSZXNwPXt9XHJcbiAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46ZmFsc2UsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1lbHNle1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgaWYoY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSYmY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgICAgIHVzZXJSZXBvczpjYWNoZS5nZXQoJ3VzZXJSZXBvcycpLFxyXG4gICAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy/miYvliqjnvJPlrZhcclxuICAgICAgLy8gaWYoY2FjaGVVc2VyU3RhcmVkUmVwb3MmJmNhY2hlVXNlclJlcG9zKXtcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICAvLyAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAvLyAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB1c2VyUmVwb3NSZXNwPWF3YWl0IGFwaS5yZXF1ZXN0KHt1cmw6Jy91c2VyL3JlcG9zJ30sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgICB1c2VyU3RhcnJlZFJlcG9zUmVzcD0gYXdhaXQgYXBpLnJlcXVlc3Qoe3VybDonL3VzZXIvc3RhcnJlZCd9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgICAgaWYoaXNTZXJ2ZXIpe1xyXG4gICAgICAgIHVzZXJSZXBvcz11c2VyUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zPXVzZXJTdGFycmVkUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHVzZXJSZXBvc1Jlc3AuZGF0YSYmdXNlclJlcG9zUmVzcC5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdXNlclJlcG9zPXVzZXJSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih1c2VyU3RhcmVkUmVwb3MuZGF0YSYmdXNlclN0YXJlZFJlcG9zLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICB1c2VyU3RhcmVkUmVwb3M9dXNlclN0YXJyZWRSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBlcnJvcicsZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9wcm9wcz0oc3RhdGUpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvcHJvcHMpKEluZGV4KSkgIl19 */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\index.js */"));
  } else {
    return __jsx("div", {
      className: "jsx-2976399386" + " " + 'root'
    }, __jsx("div", {
      className: "jsx-2976399386" + " " + 'user-info'
    }, __jsx("img", {
      src: user.avatar_url,
      alt: "avatar_url",
      className: "jsx-2976399386" + " " + "avatar"
    }), __jsx("span", {
      className: "jsx-2976399386" + " " + "login"
    }, user.login), __jsx("span", {
      className: "jsx-2976399386" + " " + "name"
    }, user.name), __jsx("span", {
      className: "jsx-2976399386" + " " + "bio"
    }, user.bio), __jsx("p", {
      className: "jsx-2976399386" + " " + "email"
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "mail",
      style: {
        marginRight: 5
      }
    }), __jsx("a", {
      href: `mailto:${user.email}`,
      className: "jsx-2976399386"
    }, user.email ? user.email : 'https://github.com/IFreeOvO'))), __jsx("div", {
      className: "jsx-2976399386" + " " + "user-repos"
    }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a, {
      activeKey: tabKey,
      onChange: handleTabChange,
      animated: false
    }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane, {
      tab: "\u4F60\u7684\u4ED3\u5E93",
      key: "1"
    }, userRepos.length > 0 ? userRepos.map(repo => __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      repo: repo,
      key: repo.id
    })) : '暂时未查询到仓库'), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_0___default.a.TabPane, {
      tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
      key: "2"
    }, userStaredRepos.length > 0 ? userStaredRepos.map(repo => __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      repo: repo,
      key: repo.id
    })) : '暂无关注的仓库'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2976399386"
    }, ".root.jsx-2976399386{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0;}.user-info.jsx-2976399386{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2976399386{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2976399386{font-size:16px;color:#777;}.bio.jsx-2976399386{margin-top:20px;color:#333;}.avatar.jsx-2976399386{width:100%;border-radius:5px;}.user-repos.jsx-2976399386{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHc0IsQUFHNEIsQUFJRCxBQU9JLEFBS0QsQUFJQyxBQUlMLEFBSU0sV0FIQyxDQXBCQSxHQVlQLENBTEksQUFTSixFQVFiLFFBWEEsQ0FJQSxFQUlBLENBcEJnQixDQU9FLGdCQUNsQiwyQkFiaUIsWUFNRixHQUxmLHVFQU13Qiw4RUFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcblxyXG5pbXBvcnQge2NhY2hlQXJyYXl9IGZyb20gJy4uL2xpYi9yZXBvLWNhY2hlJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXHJcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbydcclxuXHJcbmNvbnN0IGNhY2hlID0gbmV3IExSVSh7XHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCAvLyDmnInmlYjmnJ/ljYHliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuLy8gbGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGlmKHVzZXJSZXBvcyl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICB9XHJcbiAgICBpZih1c2VyU3RhcmVkUmVwb3Mpe1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsdXNlclN0YXJlZFJlcG9zKVxyXG4gICAgfVxyXG4gICAgLy/miYvliqjnvJPlrZhcclxuICAgIC8vIGNhY2hlVXNlclJlcG9zPXVzZXJSZXBvc1xyXG4gICAgLy8gY2FjaGVVc2VyU3RhcmVkUmVwb3M9dXNlclN0YXJlZFJlcG9zXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgY2FjaGVVc2VyUmVwb3M9bnVsbFxyXG4gICAgLy8gICAgIGNhY2hlVXNlclN0YXJlZFJlcG9zPW51bGxcclxuICAgIC8vIH0sMTAwMCo2MCo1KVxyXG5cclxuICB9XHJcbn0sW3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3NdKVxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmKCFpc1NlcnZlcil7XHJcbiAgICBjYWNoZUFycmF5KHVzZXJSZXBvcylcclxuICAgIGNhY2hlQXJyYXkodXNlclN0YXJlZFJlcG9zKVxyXG4gIH1cclxufSxbdXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvc10pXHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSdcclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSBhY3RpdmVLZXkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgaHJlZj17YC9wcmVwYXJlLWF1dGg/dXJsPSR7cm91dGVyLmFzUGF0aH1gfT7ljrvnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VyLWluZm8nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJhdmF0YXJfdXJsXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5lbWFpbCA/IHVzZXIuZW1haWwgOiAnaHR0cHM6Ly9naXRodWIuY29tL0lGcmVlT3ZPJ31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJSZXBvcy5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgP3VzZXJSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6J+aaguaXtuacquafpeivouWIsOS7k+W6kydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLmxlbmd0aD4wXHJcbiAgICAgICAgICAgICAgICA/dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDon5pqC5peg5YWz5rOo55qE5LuT5bqTJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXBvc3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eCxyZWR1eFN0b3JlLHJlcX0pPT57XHJcbiAgY29uc3QgdXNlciA9cmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXJcclxuICBsZXQgdXNlclJlcG9zPVtdLHVzZXJTdGFyZWRSZXBvcz1bXSx1c2VyUmVwb3NSZXNwPXt9LHVzZXJTdGFycmVkUmVwb3NSZXNwPXt9XHJcbiAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46ZmFsc2UsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1lbHNle1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgaWYoY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSYmY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgICAgIHVzZXJSZXBvczpjYWNoZS5nZXQoJ3VzZXJSZXBvcycpLFxyXG4gICAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy/miYvliqjnvJPlrZhcclxuICAgICAgLy8gaWYoY2FjaGVVc2VyU3RhcmVkUmVwb3MmJmNhY2hlVXNlclJlcG9zKXtcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICAvLyAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAvLyAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB1c2VyUmVwb3NSZXNwPWF3YWl0IGFwaS5yZXF1ZXN0KHt1cmw6Jy91c2VyL3JlcG9zJ30sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgICB1c2VyU3RhcnJlZFJlcG9zUmVzcD0gYXdhaXQgYXBpLnJlcXVlc3Qoe3VybDonL3VzZXIvc3RhcnJlZCd9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgICAgaWYoaXNTZXJ2ZXIpe1xyXG4gICAgICAgIHVzZXJSZXBvcz11c2VyUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zPXVzZXJTdGFycmVkUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHVzZXJSZXBvc1Jlc3AuZGF0YSYmdXNlclJlcG9zUmVzcC5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdXNlclJlcG9zPXVzZXJSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih1c2VyU3RhcmVkUmVwb3MuZGF0YSYmdXNlclN0YXJlZFJlcG9zLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICB1c2VyU3RhcmVkUmVwb3M9dXNlclN0YXJyZWRSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBlcnJvcicsZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9wcm9wcz0oc3RhdGUpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvcHJvcHMpKEluZGV4KSkgIl19 */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\index.js */"));
  }
}

Index.getInitialProps = async ({
  ctx,
  reduxStore,
  req
}) => {
  const user = reduxStore.getState().user;
  let userRepos = [],
      userStaredRepos = [],
      userReposResp = {},
      userStarredReposResp = {};

  if (!user || !user.id) {
    return {
      isLogin: false,
      userRepos,
      userStaredRepos
    };
  } else {
    if (!isServer) {
      if (cache.get('userRepos') && cache.get('userStaredRepos')) {
        return {
          isLogin: true,
          userRepos: cache.get('userRepos'),
          userStaredRepos: cache.get('userStaredRepos')
        };
      } //手动缓存
      // if(cacheUserStaredRepos&&cacheUserRepos){
      //   return {
      //     isLogin:true,
      //     userRepos:cacheUserRepos,
      //     userStaredRepos:cacheUserStaredRepos
      //   }
      // }

    }

    try {
      userReposResp = await _lib_api__WEBPACK_IMPORTED_MODULE_9___default.a.request({
        url: '/user/repos'
      }, ctx.req, ctx.res);
      userStarredReposResp = await _lib_api__WEBPACK_IMPORTED_MODULE_9___default.a.request({
        url: '/user/starred'
      }, ctx.req, ctx.res);

      if (isServer) {
        userRepos = userReposResp.data || [];
        userStaredRepos = userStarredReposResp.data || [];
      } else {
        if (userReposResp.data && userReposResp.data.success) {
          userRepos = userReposResp.data.data || [];
        }

        if (userStaredRepos.data && userStaredRepos.data.success) {
          userStaredRepos = userStarredReposResp.data.data || [];
        }
      }
    } catch (error) {
      console.log('window error', error);
    }

    return {
      isLogin: true,
      userRepos,
      userStaredRepos
    };
  }
};

const mapStateToprops = state => {
  return _objectSpread({}, state);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToprops)(Index)));

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marimo\Desktop\next-github\pages\index.js */"./pages/index.js");


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

/***/ "antd/lib/tabs":
/*!********************************!*\
  !*** external "antd/lib/tabs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=index.js.map