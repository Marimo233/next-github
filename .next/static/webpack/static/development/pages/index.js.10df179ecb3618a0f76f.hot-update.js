webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_10___default.a({
  maxAge: 1000 * 60 * 5 //有效期5分钟

});
var isServer = false; // let cacheUserRepos,cacheUserStaredRepos

function Index(_ref) {
  var userRepos = _ref.userRepos,
      user = _ref.user,
      router = _ref.router,
      userStaredRepos = _ref.userStaredRepos;
  // userRepos, userStaredRepos依赖的作用是,数据过期后,将重新请求的数据进行缓存
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!isServer) {
      console.log('x', userRepos);

      if (userRepos.length > 0) {
        cache.set('userRepos', userRepos);
      }

      if (userStaredRepos.length > 0) {
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
  var tabKey = router.query.key || '1';

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/?key=".concat(activeKey));
  };

  if (!user || !user.id) {
    return __jsx("div", {
      className: "jsx-550798303" + " " + 'root'
    }, __jsx("p", {
      className: "jsx-550798303"
    }, "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "primary",
      href: "/prepare-auth?url=".concat(router.asPath)
    }, "\u53BB\u767B\u5F55"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "550798303"
    }, ".root.jsx-550798303{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDUyxBQUc0QixrQkFDVixRQUNDLFNBQ3NCLHlHQUNsQiwwRUFDVSw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqNSAvL+acieaViOacnzXliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuLy8gbGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGNvbnNvbGUubG9nKCd4Jyx1c2VyUmVwb3MpXHJcbiAgICBpZih1c2VyUmVwb3MubGVuZ3RoPjApe1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKVxyXG4gICAgfVxyXG4gICAgaWYodXNlclN0YXJlZFJlcG9zLmxlbmd0aD4wKXtcclxuICAgICAgY2FjaGUuc2V0KCd1c2VyU3RhcmVkUmVwb3MnLHVzZXJTdGFyZWRSZXBvcylcclxuICAgIH1cclxuICAgIC8v5omL5Yqo57yT5a2YXHJcbiAgICAvLyBjYWNoZVVzZXJSZXBvcz11c2VyUmVwb3NcclxuICAgIC8vIGNhY2hlVXNlclN0YXJlZFJlcG9zPXVzZXJTdGFyZWRSZXBvc1xyXG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGNhY2hlVXNlclJlcG9zPW51bGxcclxuICAgIC8vICAgICBjYWNoZVVzZXJTdGFyZWRSZXBvcz1udWxsXHJcbiAgICAvLyB9LDEwMDAqNjAqNSlcclxuXHJcbiAgfVxyXG59LFt1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zXSlcclxuXHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSdcclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSBhY3RpdmVLZXkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgaHJlZj17YC9wcmVwYXJlLWF1dGg/dXJsPSR7cm91dGVyLmFzUGF0aH1gfT7ljrvnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VyLWluZm8nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJhdmF0YXJfdXJsXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5lbWFpbCA/IHVzZXIuZW1haWwgOiAnaHR0cHM6Ly9naXRodWIuY29tL0lGcmVlT3ZPJ31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJSZXBvcy5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgP3VzZXJSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6J+aaguaXtuacquafpeivouWIsOS7k+W6kydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLmxlbmd0aD4wXHJcbiAgICAgICAgICAgICAgICA/dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDon5pqC5peg5YWz5rOo55qE5LuT5bqTJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXBvc3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eCxyZWR1eFN0b3JlLHJlcX0pPT57XHJcbiAgY29uc3QgdXNlciA9cmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXJcclxuICBsZXQgdXNlclJlcG9zPVtdLHVzZXJTdGFyZWRSZXBvcz1bXSx1c2VyUmVwb3NSZXNwPXt9LHVzZXJTdGFycmVkUmVwb3NSZXNwPXt9XHJcbiAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46ZmFsc2UsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1lbHNle1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgY29uc29sZS5sb2coY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSlcclxuICAgICAgaWYoY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSYmY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgICAgIHVzZXJSZXBvczpjYWNoZVVzZXJSZXBvcyxcclxuICAgICAgICAgIHVzZXJTdGFyZWRSZXBvczpjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL+aJi+WKqOe8k+WtmFxyXG4gICAgICAvLyBpZihjYWNoZVVzZXJTdGFyZWRSZXBvcyYmY2FjaGVVc2VyUmVwb3Mpe1xyXG4gICAgICAvLyAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgIC8vICAgICB1c2VyUmVwb3M6Y2FjaGVVc2VyUmVwb3MsXHJcbiAgICAgIC8vICAgICB1c2VyU3RhcmVkUmVwb3M6Y2FjaGVVc2VyU3RhcmVkUmVwb3NcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHVzZXJSZXBvc1Jlc3A9YXdhaXQgYXBpLnJlcXVlc3Qoe3VybDonL3VzZXIvcmVwb3MnfSxjdHgucmVxLGN0eC5yZXMpXHJcbiAgICAgIHVzZXJTdGFycmVkUmVwb3NSZXNwPSBhd2FpdCBhcGkucmVxdWVzdCh7dXJsOicvdXNlci9zdGFycmVkJ30sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgICBpZihpc1NlcnZlcil7XHJcbiAgICAgICAgdXNlclJlcG9zPXVzZXJSZXBvc1Jlc3AuZGF0YXx8W11cclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M9dXNlclN0YXJyZWRSZXBvc1Jlc3AuZGF0YXx8W11cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYodXNlclJlcG9zUmVzcC5kYXRhJiZ1c2VyUmVwb3NSZXNwLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICB1c2VyUmVwb3M9dXNlclJlcG9zUmVzcC5kYXRhLmRhdGF8fFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHVzZXJTdGFyZWRSZXBvcy5kYXRhJiZ1c2VyU3RhcmVkUmVwb3MuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgIHVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcnJlZFJlcG9zUmVzcC5kYXRhLmRhdGF8fFtdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2luZG93IGVycm9yJyxlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgdXNlclJlcG9zLFxyXG4gICAgICB1c2VyU3RhcmVkUmVwb3MsXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb3Byb3BzPShzdGF0ZSk9PntcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGVcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9wcm9wcykoSW5kZXgpKSAiXX0= */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\pages\\index.js */"));
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
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "mail",
      style: {
        marginRight: 5
      }
    }), __jsx("a", {
      href: "mailto:".concat(user.email),
      className: "jsx-2976399386"
    }, user.email ? user.email : 'https://github.com/IFreeOvO'))), __jsx("div", {
      className: "jsx-2976399386" + " " + "user-repos"
    }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
      activeKey: tabKey,
      onChange: handleTabChange,
      animated: false
    }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane, {
      tab: "\u4F60\u7684\u4ED3\u5E93",
      key: "1"
    }, userRepos.length > 0 ? userRepos.map(function (repo) {
      return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        repo: repo,
        key: repo.id
      });
    }) : '暂时未查询到仓库'), __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane, {
      tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
      key: "2"
    }, userStaredRepos.length > 0 ? userStaredRepos.map(function (repo) {
      return __jsx(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        repo: repo,
        key: repo.id
      });
    }) : '暂无关注的仓库'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "2976399386"
    }, ".root.jsx-2976399386{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0;}.user-info.jsx-2976399386{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2976399386{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2976399386{font-size:16px;color:#777;}.bio.jsx-2976399386{margin-top:20px;color:#333;}.avatar.jsx-2976399386{width:100%;border-radius:5px;}.user-repos.jsx-2976399386{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHc0IsQUFHNEIsQUFJRCxBQU9JLEFBS0QsQUFJQyxBQUlMLEFBSU0sV0FIQyxDQXBCQSxHQVlQLENBTEksQUFTSixFQVFiLFFBWEEsQ0FJQSxFQUlBLENBcEJnQixDQU9FLGdCQUNsQiwyQkFiaUIsWUFNRixHQUxmLHVFQU13Qiw4RUFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqNSAvL+acieaViOacnzXliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuLy8gbGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGNvbnNvbGUubG9nKCd4Jyx1c2VyUmVwb3MpXHJcbiAgICBpZih1c2VyUmVwb3MubGVuZ3RoPjApe1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKVxyXG4gICAgfVxyXG4gICAgaWYodXNlclN0YXJlZFJlcG9zLmxlbmd0aD4wKXtcclxuICAgICAgY2FjaGUuc2V0KCd1c2VyU3RhcmVkUmVwb3MnLHVzZXJTdGFyZWRSZXBvcylcclxuICAgIH1cclxuICAgIC8v5omL5Yqo57yT5a2YXHJcbiAgICAvLyBjYWNoZVVzZXJSZXBvcz11c2VyUmVwb3NcclxuICAgIC8vIGNhY2hlVXNlclN0YXJlZFJlcG9zPXVzZXJTdGFyZWRSZXBvc1xyXG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGNhY2hlVXNlclJlcG9zPW51bGxcclxuICAgIC8vICAgICBjYWNoZVVzZXJTdGFyZWRSZXBvcz1udWxsXHJcbiAgICAvLyB9LDEwMDAqNjAqNSlcclxuXHJcbiAgfVxyXG59LFt1c2VyUmVwb3MsdXNlclN0YXJlZFJlcG9zXSlcclxuXHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSdcclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSBhY3RpdmVLZXkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApXHJcbiAgfVxyXG4gICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgaHJlZj17YC9wcmVwYXJlLWF1dGg/dXJsPSR7cm91dGVyLmFzUGF0aH1gfT7ljrvnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLnJvb3R7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdyb290Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2VyLWluZm8nPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJhdmF0YXJfdXJsXCIgY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibWFpbFwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1IH19IC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3VzZXIuZW1haWx9YH0+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5lbWFpbCA/IHVzZXIuZW1haWwgOiAnaHR0cHM6Ly9naXRodWIuY29tL0lGcmVlT3ZPJ31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJSZXBvcy5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgP3VzZXJSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6J+aaguaXtuacquafpeivouWIsOS7k+W6kydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlclN0YXJlZFJlcG9zLmxlbmd0aD4wXHJcbiAgICAgICAgICAgICAgICA/dXNlclN0YXJlZFJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDon5pqC5peg5YWz5rOo55qE5LuT5bqTJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1yZXBvc3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcz1hc3luYyAoe2N0eCxyZWR1eFN0b3JlLHJlcX0pPT57XHJcbiAgY29uc3QgdXNlciA9cmVkdXhTdG9yZS5nZXRTdGF0ZSgpLnVzZXJcclxuICBsZXQgdXNlclJlcG9zPVtdLHVzZXJTdGFyZWRSZXBvcz1bXSx1c2VyUmVwb3NSZXNwPXt9LHVzZXJTdGFycmVkUmVwb3NSZXNwPXt9XHJcbiAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46ZmFsc2UsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1lbHNle1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgY29uc29sZS5sb2coY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSlcclxuICAgICAgaWYoY2FjaGUuZ2V0KCd1c2VyU3RhcmVkUmVwb3MnKSYmY2FjaGUuZ2V0KCd1c2VyUmVwb3MnKSl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgICAgIHVzZXJSZXBvczpjYWNoZVVzZXJSZXBvcyxcclxuICAgICAgICAgIHVzZXJTdGFyZWRSZXBvczpjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL+aJi+WKqOe8k+WtmFxyXG4gICAgICAvLyBpZihjYWNoZVVzZXJTdGFyZWRSZXBvcyYmY2FjaGVVc2VyUmVwb3Mpe1xyXG4gICAgICAvLyAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgIC8vICAgICB1c2VyUmVwb3M6Y2FjaGVVc2VyUmVwb3MsXHJcbiAgICAgIC8vICAgICB1c2VyU3RhcmVkUmVwb3M6Y2FjaGVVc2VyU3RhcmVkUmVwb3NcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHVzZXJSZXBvc1Jlc3A9YXdhaXQgYXBpLnJlcXVlc3Qoe3VybDonL3VzZXIvcmVwb3MnfSxjdHgucmVxLGN0eC5yZXMpXHJcbiAgICAgIHVzZXJTdGFycmVkUmVwb3NSZXNwPSBhd2FpdCBhcGkucmVxdWVzdCh7dXJsOicvdXNlci9zdGFycmVkJ30sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgICBpZihpc1NlcnZlcil7XHJcbiAgICAgICAgdXNlclJlcG9zPXVzZXJSZXBvc1Jlc3AuZGF0YXx8W11cclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M9dXNlclN0YXJyZWRSZXBvc1Jlc3AuZGF0YXx8W11cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYodXNlclJlcG9zUmVzcC5kYXRhJiZ1c2VyUmVwb3NSZXNwLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICB1c2VyUmVwb3M9dXNlclJlcG9zUmVzcC5kYXRhLmRhdGF8fFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHVzZXJTdGFyZWRSZXBvcy5kYXRhJiZ1c2VyU3RhcmVkUmVwb3MuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgIHVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcnJlZFJlcG9zUmVzcC5kYXRhLmRhdGF8fFtdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2luZG93IGVycm9yJyxlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgdXNlclJlcG9zLFxyXG4gICAgICB1c2VyU3RhcmVkUmVwb3MsXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb3Byb3BzPShzdGF0ZSk9PntcclxuICByZXR1cm4ge1xyXG4gICAgLi4uc3RhdGVcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9wcm9wcykoSW5kZXgpKSAiXX0= */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\pages\\index.js */"));
  }
}

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, req, user, userRepos, userStaredRepos, userReposResp, userStarredReposResp;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore, req = _ref2.req;
            user = reduxStore.getState().user;
            userRepos = [], userStaredRepos = [], userReposResp = {}, userStarredReposResp = {};

            if (!(!user || !user.id)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              isLogin: false,
              userRepos: userRepos,
              userStaredRepos: userStaredRepos
            });

          case 7:
            if (isServer) {
              _context.next = 11;
              break;
            }

            console.log(cache.get('userStaredRepos'));

            if (!(cache.get('userStaredRepos') && cache.get('userRepos'))) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              isLogin: true,
              userRepos: cacheUserRepos,
              userStaredRepos: cacheUserStaredRepos
            });

          case 11:
            _context.prev = 11;
            _context.next = 14;
            return _lib_api__WEBPACK_IMPORTED_MODULE_11___default.a.request({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 14:
            userReposResp = _context.sent;
            _context.next = 17;
            return _lib_api__WEBPACK_IMPORTED_MODULE_11___default.a.request({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 17:
            userStarredReposResp = _context.sent;

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

            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](11);
            console.log('window error', _context.t0);

          case 24:
            return _context.abrupt("return", {
              isLogin: true,
              userRepos: userRepos,
              userStaredRepos: userStaredRepos
            });

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 21]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mapStateToprops = function mapStateToprops(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToprops)(Index)));

/***/ })

})
//# sourceMappingURL=index.js.10df179ecb3618a0f76f.hot-update.js.map