webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var isServer = false;
var github_base_url = 'https://api.github.com';

function request(_ref, req, res) {
  var _ref$method, method, url, data, githubAuth, token, headers;

  return _regeneratorRuntime.async(function request$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, url = _ref.url, data = _ref.data;

          if (url) {
            _context.next = 3;
            break;
          }

          throw Error('url must be provied');

        case 3:
          if (!isServer) {
            _context.next = 12;
            break;
          }

          console.log('in');
          githubAuth = req.session && req.session.githubAuth || {};
          token = githubAuth && githubAuth.access_token;
          headers = {};

          if (token) {
            headers['Authorization'] = "".concat(githubAuth.token_type, " ").concat(token);
          }

          return _context.abrupt("return", axios({
            method: method,
            url: "".concat(github_base_url).concat(url),
            headers: headers,
            data: data
          }));

        case 12:
          return _context.abrupt("return", axios({
            method: method,
            url: "/github".concat(url),
            data: data
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

module.exports = {
  request: request
};

/***/ })

})
//# sourceMappingURL=detail.js.c6eac6a869c9b53052ff.hot-update.js.map