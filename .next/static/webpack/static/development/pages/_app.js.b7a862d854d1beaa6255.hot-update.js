webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Container */ "./components/Container.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_9___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Footer,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content;
var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a.Search;
var LogoStyle = {
  color: 'white',
  fontSize: '40px',
  paddingTop: '10px',
  marginRight: '50px'
};

function MyLayout(_ref) {
  var children = _ref.children,
      user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      search = _useState[0],
      setSearch = _useState[1];

  console.log(user);
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(Header, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    renderer: __jsx("div", {
      className: "jsx-3895512798"
    })
  }, __jsx("div", {
    className: "jsx-3895512798" + " " + 'logo'
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    } // onSearch={handleSearch}

  })), __jsx("div", {
    className: "jsx-3895512798" + " " + 'avator'
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "\u70B9\u51FB\u767B\u5F55"
  }, __jsx("a", {
    href: publicRuntimeConfig.OAUTH_URL,
    className: "jsx-3895512798"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "large",
    icon: "user"
  })))))), __jsx(Content, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
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
  }, "Next-Github Created by Marimo"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "1719606059"
  }, ".logo.jsx-3895512798{float:left;}.header-searach.jsx-3895512798{float:left;line-height:64px;}.avator.jsx-3895512798{float:right;line-height:64px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2dCLEFBR21CLEFBR0EsQUFJQyxXQU5iLEFBR2tCLENBSUEsZ0JBSGxCLENBSUEiLCJmaWxlIjoiRDpcXG5leHQtZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXRcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExheW91dCxJY29uLElucHV0ICxBdmF0YXIsVG9vbHRpcCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuLi9Db250YWluZXInXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcbmltcG9ydCB7Y29ubmVjdH1mcm9tICdyZWFjdC1yZWR1eCdcclxuY29uc3Qge3B1YmxpY1J1bnRpbWVDb25maWd9PWdldENvbmZpZygpXHJcbmNvbnN0IHsgSGVhZGVyLCBGb290ZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5jb25zdCBMb2dvU3R5bGU9e2NvbG9yOid3aGl0ZScsZm9udFNpemU6JzQwcHgnLHBhZGRpbmdUb3A6JzEwcHgnLG1hcmdpblJpZ2h0Oic1MHB4J31cclxuZnVuY3Rpb24gTXlMYXlvdXQoe2NoaWxkcmVuLHVzZXJ9KXtcclxuICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF09dXNlU3RhdGUoJycpXHJcbiAgY29uc29sZS5sb2codXNlcilcclxuICByZXR1cm4gPExheW91dD5cclxuICAgIDxIZWFkZXI+XHJcbiAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxkaXYvPn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cclxuICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e0xvZ29TdHlsZX0gLz4gIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1zZWFyYWNoJz5cclxuICAgICAgICA8U2VhcmNoIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5LuT5bqT5ZCNXCIgXHJcbiAgICAgICAgc3R5bGU9e3t3aWR0aDozNTB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICAvLyBvblNlYXJjaD17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXZhdG9yJz5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT0n54K55Ye755m75b2VJz5cclxuICAgICAgICA8YSBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0gPlxyXG4gICAgICAgICAgPEF2YXRhciBzaXplPVwibGFyZ2VcIiBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICA8Q29udGVudD5cclxuICAgICAgPENvbnRhaW5lciByZW5kZXJlcj17PGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0vPn0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5leHQtR2l0aHViIENyZWF0ZWQgYnkgTWFyaW1vPC9Gb290ZXI+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2dve1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1zZWFyYWNoe1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6NjRweDtcclxuICAgICAgfVxyXG4gICAgICAuYXZhdG9ye1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjY0cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICB7YCNfX25leHR7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmFudC1sYXlvdXR7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmFudC1sYXlvdXQtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6MFxyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG59XHJcbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKXtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGVcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoTXlMYXlvdXQpIl19 */\n/*@ sourceURL=D:\\next-github\\components\\Layout\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2203881436"
  }, "#__next{height:100%;}.ant-layout{height:100%;}.ant-layout-header{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RE8sQUFFb0IsQUFHQSxBQUlkLFVBQUMsRUFOQSxBQUdBIiwiZmlsZSI6IkQ6XFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMYXlvdXQsSWNvbixJbnB1dCAsQXZhdGFyLFRvb2x0aXAgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi4vQ29udGFpbmVyJ1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5pbXBvcnQge2Nvbm5lY3R9ZnJvbSAncmVhY3QtcmVkdXgnXHJcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfT1nZXRDb25maWcoKVxyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuY29uc3QgTG9nb1N0eWxlPXtjb2xvcjond2hpdGUnLGZvbnRTaXplOic0MHB4JyxwYWRkaW5nVG9wOicxMHB4JyxtYXJnaW5SaWdodDonNTBweCd9XHJcbmZ1bmN0aW9uIE15TGF5b3V0KHtjaGlsZHJlbix1c2VyfSl7XHJcbiAgY29uc3QgW3NlYXJjaCxzZXRTZWFyY2hdPXVzZVN0YXRlKCcnKVxyXG4gIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICA8SGVhZGVyPlxyXG4gICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2Lz59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyc+XHJcbiAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXtMb2dvU3R5bGV9IC8+ICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItc2VhcmFjaCc+XHJcbiAgICAgICAgPFNlYXJjaCBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeS7k+W6k+WQjVwiIFxyXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6MzUwfX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgLy8gb25TZWFyY2g9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRvcic+XHJcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9J+eCueWHu+eZu+W9lSc+XHJcbiAgICAgICAgPGEgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9ID5cclxuICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cImxhcmdlXCIgaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvSGVhZGVyPlxyXG4gICAgPENvbnRlbnQ+XHJcbiAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxkaXYgc3R5bGU9e3tjb2xvcjoncmVkJ319Lz59PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQ29udGVudD5cclxuICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5OZXh0LUdpdGh1YiBDcmVhdGVkIGJ5IE1hcmltbzwvRm9vdGVyPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubG9nb3tcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXItc2VhcmFjaHtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjY0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmF2YXRvcntcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDo2NHB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAge2AjX19uZXh0e1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5hbnQtbGF5b3V0e1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5hbnQtbGF5b3V0LWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOjBcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L0xheW91dD5cclxufVxyXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKE15TGF5b3V0KSJdfQ== */\n/*@ sourceURL=D:\\next-github\\components\\Layout\\index.js */"));
}

function mapState(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapState)(MyLayout));

/***/ })

})
//# sourceMappingURL=_app.js.b7a862d854d1beaa6255.hot-update.js.map