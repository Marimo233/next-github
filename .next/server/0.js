exports.ids = [0];
exports.modules = {

/***/ "./components/Markdown.js":
/*!********************************!*\
  !*** ./components/Markdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Markdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it */ "markdown-it");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! github-markdown-css */ "./node_modules/github-markdown-css/github-markdown.css");
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const md = new markdown_it__WEBPACK_IMPORTED_MODULE_1___default.a({
  html: true,
  // 将ms里的html转换
  linkify: true // 把链接转成可点击的连接

}); // 解决atob中文解码后乱码问题

function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

function Markdown({
  content,
  isbase64
}) {
  const markdown = isbase64 ? b64_to_utf8(content) : content;
  const html = md.render(markdown);
  return __jsx("div", {
    className: "markdown-body"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}

/***/ }),

/***/ "./node_modules/github-markdown-css/github-markdown.css":
/*!**************************************************************!*\
  !*** ./node_modules/github-markdown-css/github-markdown.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map