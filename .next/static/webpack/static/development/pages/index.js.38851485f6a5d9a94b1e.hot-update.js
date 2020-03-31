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
var isServer = false;
var cacheUserRepos, cacheUserStaredRepos;

function Index(_ref) {
  var userRepos = _ref.userRepos,
      user = _ref.user,
      router = _ref.router,
      userStaredRepos = _ref.userStaredRepos;
  // userRepos, userStaredRepos依赖的作用是,数据过期后,将重新请求的数据进行缓存
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!isServer) {
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
    }, ".root.jsx-550798303{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDUyxBQUc0QixrQkFDVixRQUNDLFNBQ3NCLHlHQUNsQiwwRUFDVSw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqNSAvL+acieaViOacnzXliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxubGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGlmKHVzZXJSZXBvcy5sZW5ndGg+MCl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICB9XHJcbiAgICBpZih1c2VyU3RhcmVkUmVwb3MubGVuZ3RoPjApe1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsdXNlclN0YXJlZFJlcG9zKVxyXG4gICAgfVxyXG4gICAgLy/miYvliqjnvJPlrZhcclxuICAgIC8vIGNhY2hlVXNlclJlcG9zPXVzZXJSZXBvc1xyXG4gICAgLy8gY2FjaGVVc2VyU3RhcmVkUmVwb3M9dXNlclN0YXJlZFJlcG9zXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgY2FjaGVVc2VyUmVwb3M9bnVsbFxyXG4gICAgLy8gICAgIGNhY2hlVXNlclN0YXJlZFJlcG9zPW51bGxcclxuICAgIC8vIH0sMTAwMCo2MCo1KVxyXG5cclxuICB9XHJcbn0sW3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3NdKVxyXG5cclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJ1xyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YClcclxuICB9XHJcbiAgICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBocmVmPXtgL3ByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWB9PuWOu+eZu+W9lTwvQnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VzZXItaW5mbyc+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cImF2YXRhcl91cmxcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0gLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsID8gdXNlci5lbWFpbCA6ICdodHRwczovL2dpdGh1Yi5jb20vSUZyZWVPdk8nfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlclJlcG9zLmxlbmd0aD4wXHJcbiAgICAgICAgICAgICAgICA/dXNlclJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDon5pqC5pe25pyq5p+l6K+i5Yiw5LuT5bqTJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubGVuZ3RoPjBcclxuICAgICAgICAgICAgICAgID91c2VyU3RhcmVkUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOifmmoLml6DlhbPms6jnmoTku5PlupMnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLXJlcG9ze1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4LHJlZHV4U3RvcmUscmVxfSk9PntcclxuICBjb25zdCB1c2VyID1yZWR1eFN0b3JlLmdldFN0YXRlKCkudXNlclxyXG4gIGxldCB1c2VyUmVwb3M9W10sdXNlclN0YXJlZFJlcG9zPVtdLHVzZXJSZXBvc1Jlc3A9e30sdXNlclN0YXJyZWRSZXBvc1Jlc3A9e31cclxuICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2dpbjpmYWxzZSxcclxuICAgICAgdXNlclJlcG9zLFxyXG4gICAgICB1c2VyU3RhcmVkUmVwb3MsXHJcbiAgICB9XHJcbiAgfWVsc2V7XHJcbiAgICBpZighaXNTZXJ2ZXIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpKVxyXG4gICAgICBpZihjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpJiZjYWNoZS5nZXQoJ3VzZXJSZXBvcycpKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8v5omL5Yqo57yT5a2YXHJcbiAgICAgIC8vIGlmKGNhY2hlVXNlclN0YXJlZFJlcG9zJiZjYWNoZVVzZXJSZXBvcyl7XHJcbiAgICAgIC8vICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgLy8gICAgIHVzZXJSZXBvczpjYWNoZVVzZXJSZXBvcyxcclxuICAgICAgLy8gICAgIHVzZXJTdGFyZWRSZXBvczpjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdXNlclJlcG9zUmVzcD1hd2FpdCBhcGkucmVxdWVzdCh7dXJsOicvdXNlci9yZXBvcyd9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgICAgdXNlclN0YXJyZWRSZXBvc1Jlc3A9IGF3YWl0IGFwaS5yZXF1ZXN0KHt1cmw6Jy91c2VyL3N0YXJyZWQnfSxjdHgucmVxLGN0eC5yZXMpXHJcbiAgICAgIGlmKGlzU2VydmVyKXtcclxuICAgICAgICB1c2VyUmVwb3M9dXNlclJlcG9zUmVzcC5kYXRhfHxbXVxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcnJlZFJlcG9zUmVzcC5kYXRhfHxbXVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZih1c2VyUmVwb3NSZXNwLmRhdGEmJnVzZXJSZXBvc1Jlc3AuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgIHVzZXJSZXBvcz11c2VyUmVwb3NSZXNwLmRhdGEuZGF0YXx8W11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodXNlclN0YXJlZFJlcG9zLmRhdGEmJnVzZXJTdGFyZWRSZXBvcy5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdXNlclN0YXJlZFJlcG9zPXVzZXJTdGFycmVkUmVwb3NSZXNwLmRhdGEuZGF0YXx8W11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cgZXJyb3InLGVycm9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICB1c2VyUmVwb3MsXHJcbiAgICAgIHVzZXJTdGFyZWRSZXBvcyxcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvcHJvcHM9KHN0YXRlKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb3Byb3BzKShJbmRleCkpICJdfQ== */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\pages\\index.js */"));
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
    }, ".root.jsx-2976399386{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0;}.user-info.jsx-2976399386{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2976399386{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2976399386{font-size:16px;color:#777;}.bio.jsx-2976399386{margin-top:20px;color:#333;}.avatar.jsx-2976399386{width:100%;border-radius:5px;}.user-repos.jsx-2976399386{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGc0IsQUFHNEIsQUFJRCxBQU9JLEFBS0QsQUFJQyxBQUlMLEFBSU0sV0FIQyxDQXBCQSxHQVlQLENBTEksQUFTSixFQVFiLFFBWEEsQ0FJQSxFQUlBLENBcEJnQixDQU9FLGdCQUNsQiwyQkFiaUIsWUFNRixHQUxmLHVFQU13Qiw4RUFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqNSAvL+acieaViOacnzXliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxubGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGlmKHVzZXJSZXBvcy5sZW5ndGg+MCl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICB9XHJcbiAgICBpZih1c2VyU3RhcmVkUmVwb3MubGVuZ3RoPjApe1xyXG4gICAgICBjYWNoZS5zZXQoJ3VzZXJTdGFyZWRSZXBvcycsdXNlclN0YXJlZFJlcG9zKVxyXG4gICAgfVxyXG4gICAgLy/miYvliqjnvJPlrZhcclxuICAgIC8vIGNhY2hlVXNlclJlcG9zPXVzZXJSZXBvc1xyXG4gICAgLy8gY2FjaGVVc2VyU3RhcmVkUmVwb3M9dXNlclN0YXJlZFJlcG9zXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgY2FjaGVVc2VyUmVwb3M9bnVsbFxyXG4gICAgLy8gICAgIGNhY2hlVXNlclN0YXJlZFJlcG9zPW51bGxcclxuICAgIC8vIH0sMTAwMCo2MCo1KVxyXG5cclxuICB9XHJcbn0sW3VzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3NdKVxyXG5cclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJ1xyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YClcclxuICB9XHJcbiAgICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICAgIDxwPuS6su+8jOaCqOi/mOayoeacieeZu+W9leWTpn48L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBocmVmPXtgL3ByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWB9PuWOu+eZu+W9lTwvQnV0dG9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3Jvb3QnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VzZXItaW5mbyc+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cImF2YXRhcl91cmxcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPnt1c2VyLmxvZ2lufTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0gLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsID8gdXNlci5lbWFpbCA6ICdodHRwczovL2dpdGh1Yi5jb20vSUZyZWVPdk8nfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlclJlcG9zLmxlbmd0aD4wXHJcbiAgICAgICAgICAgICAgICA/dXNlclJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDon5pqC5pe25pyq5p+l6K+i5Yiw5LuT5bqTJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyU3RhcmVkUmVwb3MubGVuZ3RoPjBcclxuICAgICAgICAgICAgICAgID91c2VyU3RhcmVkUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOifmmoLml6DlhbPms6jnmoTku5PlupMnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51c2VyLXJlcG9ze1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4LHJlZHV4U3RvcmUscmVxfSk9PntcclxuICBjb25zdCB1c2VyID1yZWR1eFN0b3JlLmdldFN0YXRlKCkudXNlclxyXG4gIGxldCB1c2VyUmVwb3M9W10sdXNlclN0YXJlZFJlcG9zPVtdLHVzZXJSZXBvc1Jlc3A9e30sdXNlclN0YXJyZWRSZXBvc1Jlc3A9e31cclxuICBpZighdXNlcnx8IXVzZXIuaWQpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2dpbjpmYWxzZSxcclxuICAgICAgdXNlclJlcG9zLFxyXG4gICAgICB1c2VyU3RhcmVkUmVwb3MsXHJcbiAgICB9XHJcbiAgfWVsc2V7XHJcbiAgICBpZighaXNTZXJ2ZXIpe1xyXG4gICAgICBjb25zb2xlLmxvZyhjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpKVxyXG4gICAgICBpZihjYWNoZS5nZXQoJ3VzZXJTdGFyZWRSZXBvcycpJiZjYWNoZS5nZXQoJ3VzZXJSZXBvcycpKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8v5omL5Yqo57yT5a2YXHJcbiAgICAgIC8vIGlmKGNhY2hlVXNlclN0YXJlZFJlcG9zJiZjYWNoZVVzZXJSZXBvcyl7XHJcbiAgICAgIC8vICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgIGlzTG9naW46dHJ1ZSxcclxuICAgICAgLy8gICAgIHVzZXJSZXBvczpjYWNoZVVzZXJSZXBvcyxcclxuICAgICAgLy8gICAgIHVzZXJTdGFyZWRSZXBvczpjYWNoZVVzZXJTdGFyZWRSZXBvc1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdXNlclJlcG9zUmVzcD1hd2FpdCBhcGkucmVxdWVzdCh7dXJsOicvdXNlci9yZXBvcyd9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgICAgdXNlclN0YXJyZWRSZXBvc1Jlc3A9IGF3YWl0IGFwaS5yZXF1ZXN0KHt1cmw6Jy91c2VyL3N0YXJyZWQnfSxjdHgucmVxLGN0eC5yZXMpXHJcbiAgICAgIGlmKGlzU2VydmVyKXtcclxuICAgICAgICB1c2VyUmVwb3M9dXNlclJlcG9zUmVzcC5kYXRhfHxbXVxyXG4gICAgICAgIHVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcnJlZFJlcG9zUmVzcC5kYXRhfHxbXVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZih1c2VyUmVwb3NSZXNwLmRhdGEmJnVzZXJSZXBvc1Jlc3AuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgIHVzZXJSZXBvcz11c2VyUmVwb3NSZXNwLmRhdGEuZGF0YXx8W11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodXNlclN0YXJlZFJlcG9zLmRhdGEmJnVzZXJTdGFyZWRSZXBvcy5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdXNlclN0YXJlZFJlcG9zPXVzZXJTdGFycmVkUmVwb3NSZXNwLmRhdGEuZGF0YXx8W11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cgZXJyb3InLGVycm9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICB1c2VyUmVwb3MsXHJcbiAgICAgIHVzZXJTdGFyZWRSZXBvcyxcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvcHJvcHM9KHN0YXRlKT0+e1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdGF0ZVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb3Byb3BzKShJbmRleCkpICJdfQ== */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.38851485f6a5d9a94b1e.hot-update.js.map