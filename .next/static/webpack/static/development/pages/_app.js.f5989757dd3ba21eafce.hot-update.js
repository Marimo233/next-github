webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Container */ "./components/Container.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Footer,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content;
var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Search;
var LogoStyle = {
  color: 'white',
  fontSize: '40px',
  paddingTop: '10px',
  marginRight: '50px'
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      search = _useState[0],
      setSearch = _useState[1];

  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {}, []);
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(Header, null, __jsx("div", {
    className: "jsx-3895512798" + " " + 'logo'
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "github",
    style: LogoStyle
  })), __jsx("div", {
    className: "jsx-3895512798" + " " + 'header-searach'
  }, __jsx(Search, {
    placeholder: "\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D",
    style: {
      width: 350
    },
    onChange: function onChange(e) {
      setSearch(e.target.value);
    },
    onSearch: handleSearch
  })), __jsx("div", {
    className: "jsx-3895512798" + " " + 'avator'
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: "large",
    icon: "user"
  }))), __jsx(Content, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    renderer: __jsx("div", {
      style: {
        color: 'red'
      },
      className: "jsx-3895512798"
    })
  }, children)), __jsx(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "Next-Github Created by Marimo"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1719606059"
  }, ".logo.jsx-3895512798{float:left;}.header-searach.jsx-3895512798{float:left;line-height:64px;}.avator.jsx-3895512798{float:right;line-height:64px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2dCLEFBR21CLEFBR0EsQUFJQyxXQU5iLEFBR2tCLENBSUEsZ0JBSGxCLENBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXRcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExheW91dCxJY29uLElucHV0ICxBdmF0YXIgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi4vQ29udGFpbmVyJ1xyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgTG9nb1N0eWxlPXtjb2xvcjond2hpdGUnLGZvbnRTaXplOic0MHB4JyxwYWRkaW5nVG9wOicxMHB4JyxtYXJnaW5SaWdodDonNTBweCd9XHJcbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW59KT0+e1xyXG4gIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXT11c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTZWFyY2g9dXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gIClcclxuICByZXR1cm4gPExheW91dD5cclxuICAgIDxIZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cclxuICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e0xvZ29TdHlsZX0gLz4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1zZWFyYWNoJz5cclxuICAgICAgICA8U2VhcmNoIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5LuT5bqT5ZCNXCIgXHJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDozNTB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdG9yJz5cclxuICAgICAgICA8QXZhdGFyIHNpemU9XCJsYXJnZVwiIGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0hlYWRlcj5cclxuICAgIDxDb250ZW50PlxyXG4gICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCd9fS8+fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TmV4dC1HaXRodWIgQ3JlYXRlZCBieSBNYXJpbW88L0Zvb3Rlcj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmxvZ297XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLXNlYXJhY2h7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDo2NHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hdmF0b3J7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6NjRweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgIHtgI19fbmV4dHtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuYW50LWxheW91dHtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuYW50LWxheW91dC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzowXHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\components\\Layout\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2203881436"
  }, "#__next{height:100%;}.ant-layout{height:100%;}.ant-layout-header{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRE8sQUFFb0IsQUFHQSxBQUlkLFVBQUMsRUFOQSxBQUdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMYXlvdXQsSWNvbixJbnB1dCAsQXZhdGFyIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uL0NvbnRhaW5lcidcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XHJcbmNvbnN0IExvZ29TdHlsZT17Y29sb3I6J3doaXRlJyxmb250U2l6ZTonNDBweCcscGFkZGluZ1RvcDonMTBweCcsbWFyZ2luUmlnaHQ6JzUwcHgnfVxyXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVufSk9PntcclxuICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF09dXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoPXVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBbXSxcclxuICApXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICA8SGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XHJcbiAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXtMb2dvU3R5bGV9IC8+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItc2VhcmFjaCc+XHJcbiAgICAgICAgPFNlYXJjaCBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeS7k+W6k+WQjVwiIFxyXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6MzUwfX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRvcic+XHJcbiAgICAgICAgPEF2YXRhciBzaXplPVwibGFyZ2VcIiBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICA8Q29udGVudD5cclxuICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0vPn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5leHQtR2l0aHViIENyZWF0ZWQgYnkgTWFyaW1vPC9Gb290ZXI+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2dve1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1zZWFyYWNoe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6NjRweDtcclxuICAgICAgfVxyXG4gICAgICAuYXZhdG9ye1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjY0cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7YCNfX25leHR7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmFudC1sYXlvdXR7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmFudC1sYXlvdXQtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6MFxyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\components\\Layout\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=_app.js.f5989757dd3ba21eafce.hot-update.js.map