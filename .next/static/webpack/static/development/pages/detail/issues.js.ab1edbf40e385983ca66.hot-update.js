webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_withDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/withDetail */ "./components/withDetail.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var Markdown = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../../components/Markdown */ "./components/Markdown.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Markdown */ "./components/Markdown.js")];
    },
    modules: ['../../components/Markdown']
  }
});
var isServer = false;

function IssueDetail(_ref) {
  var issue = _ref.issue;
  return __jsx("div", {
    className: "jsx-1740130853" + " " + 'root'
  }, __jsx(Markdown, {
    content: issue.body
  }), __jsx("div", {
    className: "jsx-1740130853" + " " + 'actions'
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "\u6253\u5F00issue\u8BA8\u8BBA\u9875\u9762")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1740130853"
  }, ".root.jsx-1740130853{background:#fafafa;padding:20px;}.actions.jsx-1740130853{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCbUIsQUFHOEIsQUFJRixpQkFDbkIsRUFKZSxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB3aXRoRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aERldGFpbCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQge2dldExhc3RVcGRhdGVkfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuXHJcbmNvbnN0IE1hcmtkb3duPWR5bmFtaWMoKCk9PmltcG9ydCAoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd24nKSlcclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnXHJcblxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz5cclxuICAgICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSl7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8g6L+Z5Liq5YaZ5rOV5bCx5Y+v5Lul5LiN5L6d6LWWc2hvd0RldGFpbOOAgui/meS5iOWGmeWPr+S7pemBv+W8gOmXreWMhVxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naXNzdWUnPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDEwXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2hvd0RldGFpbD8n6ZqQ6JePJzon5p+l55yLJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfT48L0F2YXRhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSXNzdWVzPSh7aXNzdWVzLGxhYmVsc30pPT57XHJcblxyXG5jb25zdCBbY3JlYXRvcixzZXRDcmVhdG9yXT11c2VTdGF0ZSgnJylcclxuY29uc3QgW3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZSgnYWxsJylcclxuY29uc3QgW2xhYmVsLHNldExhYmVsXT11c2VTdGF0ZShbXSlcclxuXHJcbiAgLy8g6YCJ5Lit55So5oi357uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldENyZWF0b3IodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4reeKtuaAgee7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0U3RhdGUodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4rWxhYmVs57uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRMYWJlbCh2YWx1ZSlcclxuICB9LCBbXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cclxuICAgICAgICAgIDxTZWFyY2hVc2VyIG9uQ2hhbmc9e2hhbmRsZUNyZWF0b3JDaGFuZ2V9IHZhbHVlPXtjcmVhdG9yfS8+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyMDAsIG1hcmdpbkxlZnQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2FsbCc+YWxsPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J29wZW4nPm9wZW48L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nY2xvc2VkJz5jbG9zZWQ8L09wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2xhYmVsfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5SaWdodDogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzXHJcbiAgICAgICAgICA/bGFiZWxzLm1hcChsYSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYS5uYW1lfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gZGlzYWJsZWQ9e2ZldGNoaW5nfT5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpc3N1ZXMnPlxyXG4gICAgICAgICAge2lzc3Vlcy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8SXNzdWVJdGVtIGlzc3VlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eH0pPT57XHJcbiAgY29uc3Qge293bmVyLG5hbWV9PWN0eC5xdWVyeVxyXG4gIGxldCBpc3N1ZXM9W11cclxuICB0cnkge1xyXG4gICAgY29uc3QgaXNzdWVzUmVzcD1hd2FpdCBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcclxuICAgIH0sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNzdWVzOmlzU2VydmVyP2lzc3Vlc1Jlc3AuZGF0YTppc3N1ZXNSZXNwLmRhdGEuZGF0XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNzdWVzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0ICB3aXRoRGV0YWlsKElzc3VlcywnaXNzdWVzJylcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
}

function IssueItem(_ref2) {
  var issue = _ref2.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      showDetail = _useState[0],
      setShowDetail = _useState[1]; // 这个写法就可以不依赖showDetail。这么写可以避开闭包


  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    });
  }, []);
  return __jsx("div", null, __jsx("div", {
    className: "issue"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? '隐藏' : '查看')), __jsx("div", {
    className: "avatar"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), __jsx("div", {
    className: "jsx-1445670956" + " " + "main-info"
  }, __jsx("h6", {
    className: "jsx-1445670956"
  }, __jsx("span", {
    className: "jsx-1445670956"
  }, issue.title)), __jsx("p", {
    className: "jsx-1445670956" + " " + "sub-info"
  }, __jsx("span", {
    className: "jsx-1445670956"
  }, "Updated at ", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["getLastUpdated"])(issue.updated_at))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1445670956"
  }, ".issue.jsx-1445670956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1445670956:hover{background:#fafafa;}.issue.jsx-1445670956+.issue.jsx-1445670956{border-top:1px solid #eee;}.main-info.jsx-1445670956>h6.jsx-1445670956{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-1445670956{margin-right:20px;}.sub-info.jsx-1445670956{margin-bottom:0;}.sub-info.jsx-1445670956>span.jsx-1445670956+span.jsx-1445670956{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFc0IsQUFHMEIsQUFLTSxBQUdPLEFBR1YsQUFLRSxBQUdGLEFBR0ssZ0JBVk4sQUFRakIsRUFIQSxDQVhBLEVBaUJtQixLQWRuQixLQUlxQixPQVdKLFlBVmpCLEdBV0EscUJBeEJvQixrQkFDTCxhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB3aXRoRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aERldGFpbCdcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQge2dldExhc3RVcGRhdGVkfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcidcclxuXHJcbmNvbnN0IE1hcmtkb3duPWR5bmFtaWMoKCk9PmltcG9ydCAoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd24nKSlcclxuY29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnXHJcblxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz5cclxuICAgICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSl7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8g6L+Z5Liq5YaZ5rOV5bCx5Y+v5Lul5LiN5L6d6LWWc2hvd0RldGFpbOOAgui/meS5iOWGmeWPr+S7pemBv+W8gOmXreWMhVxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naXNzdWUnPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAxMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDEwXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2hvd0RldGFpbD8n6ZqQ6JePJzon5p+l55yLJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfT48L0F2YXRhcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSXNzdWVzPSh7aXNzdWVzLGxhYmVsc30pPT57XHJcblxyXG5jb25zdCBbY3JlYXRvcixzZXRDcmVhdG9yXT11c2VTdGF0ZSgnJylcclxuY29uc3QgW3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZSgnYWxsJylcclxuY29uc3QgW2xhYmVsLHNldExhYmVsXT11c2VTdGF0ZShbXSlcclxuXHJcbiAgLy8g6YCJ5Lit55So5oi357uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldENyZWF0b3IodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4reeKtuaAgee7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0U3RhdGUodmFsdWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIOmAieS4rWxhYmVs57uT5p6c55qE5Zue6LCDXHJcbiAgY29uc3QgaGFuZGxlTGFiZWxDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRMYWJlbCh2YWx1ZSlcclxuICB9LCBbXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cclxuICAgICAgICAgIDxTZWFyY2hVc2VyIG9uQ2hhbmc9e2hhbmRsZUNyZWF0b3JDaGFuZ2V9IHZhbHVlPXtjcmVhdG9yfS8+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyMDAsIG1hcmdpbkxlZnQ6IDIwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2FsbCc+YWxsPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J29wZW4nPm9wZW48L09wdGlvbj5cclxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nY2xvc2VkJz5jbG9zZWQ8L09wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e2xhYmVsfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5SaWdodDogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzXHJcbiAgICAgICAgICA/bGFiZWxzLm1hcChsYSA9PiAoXHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2xhLm5hbWV9IGtleT17bGEuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYS5uYW1lfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gZGlzYWJsZWQ9e2ZldGNoaW5nfT5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpc3N1ZXMnPlxyXG4gICAgICAgICAge2lzc3Vlcy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgIHJldHVybiA8SXNzdWVJdGVtIGlzc3VlPXtpdGVtfSAvPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eH0pPT57XHJcbiAgY29uc3Qge293bmVyLG5hbWV9PWN0eC5xdWVyeVxyXG4gIGxldCBpc3N1ZXM9W11cclxuICB0cnkge1xyXG4gICAgY29uc3QgaXNzdWVzUmVzcD1hd2FpdCBhcGkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcclxuICAgIH0sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNzdWVzOmlzU2VydmVyP2lzc3Vlc1Jlc3AuZGF0YTppc3N1ZXNSZXNwLmRhdGEuZGF0XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNzdWVzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0ICB3aXRoRGV0YWlsKElzc3VlcywnaXNzdWVzJylcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */")), showDetail ? __jsx(IssueDetail, {
    issue: issue
  }) : null);
}

var Issues = function Issues(_ref3) {
  var issues = _ref3.issues,
      labels = _ref3.labels;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      creator = _useState2[0],
      setCreator = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('all'),
      state = _useState3[0],
      setState = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      label = _useState4[0],
      setLabel = _useState4[1]; // 选中用户结果的回调


  var handleCreatorChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    setCreator(value);
  }, []); // 选中状态结果的回调

  var handleStateChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    setState(value);
  }, []); // 选中label结果的回调

  var handleLabelChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (value) {
    setLabel(value);
  }, []);
  return __jsx("div", {
    className: "jsx-2212480553" + " " + 'root'
  }, __jsx("div", {
    className: "jsx-2212480553" + " " + 'search'
  }, __jsx(_components_SearchUser__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onChang: handleCreatorChange,
    value: creator
  }), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  }, "closed")), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    mode: "multiple",
    placeholder: "Label",
    onChange: handleLabelChange,
    value: label,
    style: {
      flexGrow: 1,
      marginLeft: 20,
      marginRight: 20
    }
  }, labels ? labels.map(function (la) {
    return __jsx(Option, {
      value: la.name,
      key: la.id
    }, la.name);
  }) : ''), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: handleSearch,
    disabled: fetching
  }, "\u641C\u7D22")), __jsx("div", {
    className: "jsx-2212480553" + " " + 'issues'
  }, issues.map(function (item) {
    return __jsx(IssueItem, {
      issue: item
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2212480553"
  }, ".issues.jsx-2212480553{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2212480553{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-2212480553{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlLb0IsQUFHaUMsQUFNVCxBQUdBLGFBQ0EsU0FUSyxrQkFDQyxtQkFDSCxlQUlsQixDQUhBLFlBT3FCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXG1hcmltb1xcRGVza3RvcFxcbmV4dC1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIFNlbGVjdCwgU3BpbiB9IGZyb20gJ2FudGQnXHJcblxyXG5pbXBvcnQgd2l0aERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhEZXRhaWwnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IHtnZXRMYXN0VXBkYXRlZH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInXHJcblxyXG5jb25zdCBNYXJrZG93bj1keW5hbWljKCgpPT5pbXBvcnQgKCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duJykpXHJcbmNvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ1xyXG5cclxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoe2lzc3VlfSl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgPE1hcmtkb3duIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucyc+XHJcbiAgICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICDmiZPlvIBpc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgIC5yb290IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHtpc3N1ZX0pe1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIOi/meS4quWGmeazleWwseWPr+S7peS4jeS+nei1lnNob3dEZXRhaWzjgILov5nkuYjlhpnlj6/ku6Xpgb/lvIDpl63ljIVcclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lzc3VlJz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Nob3dEZXRhaWw/J+makOiXjyc6J+afpeeciyd9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0+PC9BdmF0YXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElzc3Vlcz0oe2lzc3VlcyxsYWJlbHN9KT0+e1xyXG5cclxuY29uc3QgW2NyZWF0b3Isc2V0Q3JlYXRvcl09dXNlU3RhdGUoJycpXHJcbmNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV09dXNlU3RhdGUoJ2FsbCcpXHJcbmNvbnN0IFtsYWJlbCxzZXRMYWJlbF09dXNlU3RhdGUoW10pXHJcblxyXG4gIC8vIOmAieS4reeUqOaIt+e7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0b3JDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK3nirbmgIHnu5PmnpznmoTlm57osINcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcclxuICAgIHNldFN0YXRlKHZhbHVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyDpgInkuK1sYWJlbOe7k+aenOeahOWbnuiwg1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgc2V0TGFiZWwodmFsdWUpXHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XHJcbiAgICAgICAgICA8U2VhcmNoVXNlciBvbkNoYW5nPXtoYW5kbGVDcmVhdG9yQ2hhbmdlfSB2YWx1ZT17Y3JlYXRvcn0vPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjAwLCBtYXJnaW5MZWZ0OiAyMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdhbGwnPmFsbDwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdvcGVuJz5vcGVuPC9PcHRpb24+XHJcbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2Nsb3NlZCc+Y2xvc2VkPC9PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtsYWJlbH1cclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luUmlnaHQ6IDIwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVsc1xyXG4gICAgICAgICAgP2xhYmVscy5tYXAobGEgPT4gKFxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYS5uYW1lfSBrZXk9e2xhLmlkfT5cclxuICAgICAgICAgICAgICB7bGEubmFtZX1cclxuICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOicnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGRpc2FibGVkPXtmZXRjaGluZ30+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXNzdWVzJz5cclxuICAgICAgICAgIHtpc3N1ZXMubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gPElzc3VlSXRlbSBpc3N1ZT17aXRlbX0gLz5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHM9YXN5bmMgKHtjdHh9KT0+e1xyXG4gIGNvbnN0IHtvd25lcixuYW1lfT1jdHgucXVlcnlcclxuICBsZXQgaXNzdWVzPVtdXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGlzc3Vlc1Jlc3A9YXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXHJcbiAgICB9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzc3Vlczppc1NlcnZlcj9pc3N1ZXNSZXNwLmRhdGE6aXNzdWVzUmVzcC5kYXRhLmRhdFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzc3Vlc1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCAgd2l0aERldGFpbChJc3N1ZXMsJ2lzc3VlcycpXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\marimo\\\\Desktop\\\\next-github\\\\pages\\\\detail\\\\issues.js */"));
};

Issues.getInitialProps = function _callee(_ref4) {
  var ctx, _ctx$query, owner, name, issues, issuesResp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = _ref4.ctx;
          _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
          issues = [];
          _context.prev = 3;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
            url: "/repos/".concat(owner, "/").concat(name, "/issues")
          }, ctx.req, ctx.res));

        case 6:
          issuesResp = _context.sent;
          return _context.abrupt("return", {
            issues: isServer ? issuesResp.data : issuesResp.data.dat
          });

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.log(_context.t0);
          return _context.abrupt("return", {
            issues: issues
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withDetail__WEBPACK_IMPORTED_MODULE_7__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.ab1edbf40e385983ca66.hot-update.js.map