webpackHotUpdate("static\\development\\pages\\detail.js",{

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
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

var REPO_CACHE = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a({
  maxAge: 1000 * 60 * 60
});
var cache = function cache(repo) {
  if (repo) {
    var full_name = repo.full_name;
    REPO_CACHE.set(full_name, repo);
  }
};
var get = function get(full_name) {
  return REPO_CACHE.get(full_name);
};
var cacheArray = function cacheArray(repos) {
  if (repos && Array.isArray(repos)) {
    repos.forEach(function (repo) {
      cache(repo.full_name, repo);
    });
  }
};

/***/ })

})
//# sourceMappingURL=detail.js.2b9b31a9bcc675412061.hot-update.js.map