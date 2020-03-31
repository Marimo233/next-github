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
      if (userRepos.length > 0) {
        cache.set('userRepos', userRepos);
        cache.get('userRepos', userRepos);
        console.log('y', cache.get('userRepos', userRepos));
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
    }, ".root.jsx-550798303{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUc0QixrQkFDVixRQUNDLFNBQ3NCLHlHQUNsQiwwRUFDVSw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqNSAvL+acieaViOacnzXliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuLy8gbGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGlmKHVzZXJSZXBvcy5sZW5ndGg+MCl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICAgIGNhY2hlLmdldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICAgIGNvbnNvbGUubG9nKCd5JyxjYWNoZS5nZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKSlcclxuICAgIH1cclxuICAgIGlmKHVzZXJTdGFyZWRSZXBvcy5sZW5ndGg+MCl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclN0YXJlZFJlcG9zJyx1c2VyU3RhcmVkUmVwb3MpXHJcbiAgICB9XHJcbiAgICAvL+aJi+WKqOe8k+WtmFxyXG4gICAgLy8gY2FjaGVVc2VyUmVwb3M9dXNlclJlcG9zXHJcbiAgICAvLyBjYWNoZVVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcmVkUmVwb3NcclxuICAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgIC8vICAgICBjYWNoZVVzZXJSZXBvcz1udWxsXHJcbiAgICAvLyAgICAgY2FjaGVVc2VyU3RhcmVkUmVwb3M9bnVsbFxyXG4gICAgLy8gfSwxMDAwKjYwKjUpXHJcblxyXG4gIH1cclxufSxbdXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvc10pXHJcblxyXG4gIGNvbnN0IHRhYktleSA9IHJvdXRlci5xdWVyeS5rZXkgfHwgJzEnXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gYWN0aXZlS2V5ID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKVxyXG4gIH1cclxuICAgIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIGhyZWY9e2AvcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YH0+5Y6755m75b2VPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIC5yb290e1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXNlci1pbmZvJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwiYXZhdGFyX3VybFwiIGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpb308L3NwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fSAvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9PlxyXG4gICAgICAgICAgICAgICAge3VzZXIuZW1haWwgPyB1c2VyLmVtYWlsIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9JRnJlZU92Tyd9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyUmVwb3MubGVuZ3RoPjBcclxuICAgICAgICAgICAgICAgID91c2VyUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOifmmoLml7bmnKrmn6Xor6LliLDku5PlupMnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgP3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6J+aaguaXoOWFs+azqOeahOS7k+W6kydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmVwb3N7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHM9YXN5bmMgKHtjdHgscmVkdXhTdG9yZSxyZXF9KT0+e1xyXG4gIGNvbnN0IHVzZXIgPXJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyXHJcbiAgbGV0IHVzZXJSZXBvcz1bXSx1c2VyU3RhcmVkUmVwb3M9W10sdXNlclJlcG9zUmVzcD17fSx1c2VyU3RhcnJlZFJlcG9zUmVzcD17fVxyXG4gIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOmZhbHNlLFxyXG4gICAgICB1c2VyUmVwb3MsXHJcbiAgICAgIHVzZXJTdGFyZWRSZXBvcyxcclxuICAgIH1cclxuICB9ZWxzZXtcclxuICAgIGlmKCFpc1NlcnZlcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJykpXHJcbiAgICAgIGlmKGNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJykmJmNhY2hlLmdldCgndXNlclJlcG9zJykpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgICAgICB1c2VyUmVwb3M6Y2FjaGVVc2VyUmVwb3MsXHJcbiAgICAgICAgICB1c2VyU3RhcmVkUmVwb3M6Y2FjaGVVc2VyU3RhcmVkUmVwb3NcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy/miYvliqjnvJPlrZhcclxuICAgICAgLy8gaWYoY2FjaGVVc2VyU3RhcmVkUmVwb3MmJmNhY2hlVXNlclJlcG9zKXtcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICAvLyAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAvLyAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB1c2VyUmVwb3NSZXNwPWF3YWl0IGFwaS5yZXF1ZXN0KHt1cmw6Jy91c2VyL3JlcG9zJ30sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgICB1c2VyU3RhcnJlZFJlcG9zUmVzcD0gYXdhaXQgYXBpLnJlcXVlc3Qoe3VybDonL3VzZXIvc3RhcnJlZCd9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgICAgaWYoaXNTZXJ2ZXIpe1xyXG4gICAgICAgIHVzZXJSZXBvcz11c2VyUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zPXVzZXJTdGFycmVkUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHVzZXJSZXBvc1Jlc3AuZGF0YSYmdXNlclJlcG9zUmVzcC5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdXNlclJlcG9zPXVzZXJSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih1c2VyU3RhcmVkUmVwb3MuZGF0YSYmdXNlclN0YXJlZFJlcG9zLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICB1c2VyU3RhcmVkUmVwb3M9dXNlclN0YXJyZWRSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBlcnJvcicsZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9wcm9wcz0oc3RhdGUpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvcHJvcHMpKEluZGV4KSkgIl19 */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\pages\\index.js */"));
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
    }, ".root.jsx-2976399386{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px 0;}.user-info.jsx-2976399386{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2976399386{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2976399386{font-size:16px;color:#777;}.bio.jsx-2976399386{margin-top:20px;color:#333;}.avatar.jsx-2976399386{width:100%;border-radius:5px;}.user-repos.jsx-2976399386{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWFyaW1vXFxEZXNrdG9wXFxuZXh0LWdpdGh1YlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHc0IsQUFHNEIsQUFJRCxBQU9JLEFBS0QsQUFJQyxBQUlMLEFBSU0sV0FIQyxDQXBCQSxHQVlQLENBTEksQUFTSixFQVFiLFFBWEEsQ0FJQSxFQUlBLENBcEJnQixDQU9FLGdCQUNsQiwyQkFiaUIsWUFNRixHQUxmLHVFQU13Qiw4RUFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtYXJpbW9cXERlc2t0b3BcXG5leHQtZ2l0aHViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLEljb24sVGFic30gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExSVSBmcm9tICdscnUtY2FjaGUnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgY2FjaGU9bmV3IExSVSh7XHJcbiAgbWF4QWdlOjEwMDAqNjAqNSAvL+acieaViOacnzXliIbpkp9cclxufSlcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuLy8gbGV0IGNhY2hlVXNlclJlcG9zLGNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyUmVwb3MsdXNlcixyb3V0ZXIsdXNlclN0YXJlZFJlcG9zfSl7XHJcblxyXG4gIC8vIHVzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9z5L6d6LWW55qE5L2c55So5pivLOaVsOaNrui/h+acn+WQjizlsIbph43mlrDor7fmsYLnmoTmlbDmja7ov5vooYznvJPlrZhcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgaWYoIWlzU2VydmVyKXtcclxuICAgIGlmKHVzZXJSZXBvcy5sZW5ndGg+MCl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICAgIGNhY2hlLmdldCgndXNlclJlcG9zJyx1c2VyUmVwb3MpXHJcbiAgICAgIGNvbnNvbGUubG9nKCd5JyxjYWNoZS5nZXQoJ3VzZXJSZXBvcycsdXNlclJlcG9zKSlcclxuICAgIH1cclxuICAgIGlmKHVzZXJTdGFyZWRSZXBvcy5sZW5ndGg+MCl7XHJcbiAgICAgIGNhY2hlLnNldCgndXNlclN0YXJlZFJlcG9zJyx1c2VyU3RhcmVkUmVwb3MpXHJcbiAgICB9XHJcbiAgICAvL+aJi+WKqOe8k+WtmFxyXG4gICAgLy8gY2FjaGVVc2VyUmVwb3M9dXNlclJlcG9zXHJcbiAgICAvLyBjYWNoZVVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcmVkUmVwb3NcclxuICAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgIC8vICAgICBjYWNoZVVzZXJSZXBvcz1udWxsXHJcbiAgICAvLyAgICAgY2FjaGVVc2VyU3RhcmVkUmVwb3M9bnVsbFxyXG4gICAgLy8gfSwxMDAwKjYwKjUpXHJcblxyXG4gIH1cclxufSxbdXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvc10pXHJcblxyXG4gIGNvbnN0IHRhYktleSA9IHJvdXRlci5xdWVyeS5rZXkgfHwgJzEnXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gYWN0aXZlS2V5ID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKVxyXG4gIH1cclxuICAgIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIGhyZWY9e2AvcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YH0+5Y6755m75b2VPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIC5yb290e1xyXG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXNlci1pbmZvJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwiYXZhdGFyX3VybFwiIGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPnt1c2VyLmJpb308L3NwYW4+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgPEljb24gdHlwZT1cIm1haWxcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fSAvPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9PlxyXG4gICAgICAgICAgICAgICAge3VzZXIuZW1haWwgPyB1c2VyLmVtYWlsIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9JRnJlZU92Tyd9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyUmVwb3MubGVuZ3RoPjBcclxuICAgICAgICAgICAgICAgID91c2VyUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOifmmoLml7bmnKrmn6Xor6LliLDku5PlupMnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5sZW5ndGg+MFxyXG4gICAgICAgICAgICAgICAgP3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6J+aaguaXoOWFs+azqOeahOS7k+W6kydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmVwb3N7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHM9YXN5bmMgKHtjdHgscmVkdXhTdG9yZSxyZXF9KT0+e1xyXG4gIGNvbnN0IHVzZXIgPXJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyXHJcbiAgbGV0IHVzZXJSZXBvcz1bXSx1c2VyU3RhcmVkUmVwb3M9W10sdXNlclJlcG9zUmVzcD17fSx1c2VyU3RhcnJlZFJlcG9zUmVzcD17fVxyXG4gIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOmZhbHNlLFxyXG4gICAgICB1c2VyUmVwb3MsXHJcbiAgICAgIHVzZXJTdGFyZWRSZXBvcyxcclxuICAgIH1cclxuICB9ZWxzZXtcclxuICAgIGlmKCFpc1NlcnZlcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJykpXHJcbiAgICAgIGlmKGNhY2hlLmdldCgndXNlclN0YXJlZFJlcG9zJykmJmNhY2hlLmdldCgndXNlclJlcG9zJykpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgICAgICB1c2VyUmVwb3M6Y2FjaGVVc2VyUmVwb3MsXHJcbiAgICAgICAgICB1c2VyU3RhcmVkUmVwb3M6Y2FjaGVVc2VyU3RhcmVkUmVwb3NcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy/miYvliqjnvJPlrZhcclxuICAgICAgLy8gaWYoY2FjaGVVc2VyU3RhcmVkUmVwb3MmJmNhY2hlVXNlclJlcG9zKXtcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgICAvLyAgICAgdXNlclJlcG9zOmNhY2hlVXNlclJlcG9zLFxyXG4gICAgICAvLyAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB1c2VyUmVwb3NSZXNwPWF3YWl0IGFwaS5yZXF1ZXN0KHt1cmw6Jy91c2VyL3JlcG9zJ30sY3R4LnJlcSxjdHgucmVzKVxyXG4gICAgICB1c2VyU3RhcnJlZFJlcG9zUmVzcD0gYXdhaXQgYXBpLnJlcXVlc3Qoe3VybDonL3VzZXIvc3RhcnJlZCd9LGN0eC5yZXEsY3R4LnJlcylcclxuICAgICAgaWYoaXNTZXJ2ZXIpe1xyXG4gICAgICAgIHVzZXJSZXBvcz11c2VyUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zPXVzZXJTdGFycmVkUmVwb3NSZXNwLmRhdGF8fFtdXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHVzZXJSZXBvc1Jlc3AuZGF0YSYmdXNlclJlcG9zUmVzcC5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgdXNlclJlcG9zPXVzZXJSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih1c2VyU3RhcmVkUmVwb3MuZGF0YSYmdXNlclN0YXJlZFJlcG9zLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICB1c2VyU3RhcmVkUmVwb3M9dXNlclN0YXJyZWRSZXBvc1Jlc3AuZGF0YS5kYXRhfHxbXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBlcnJvcicsZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOnRydWUsXHJcbiAgICAgIHVzZXJSZXBvcyxcclxuICAgICAgdXNlclN0YXJlZFJlcG9zLFxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9wcm9wcz0oc3RhdGUpPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnN0YXRlXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvcHJvcHMpKEluZGV4KSkgIl19 */\n/*@ sourceURL=C:\\Users\\marimo\\Desktop\\next-github\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.5ead2d149fbe4ac39de8.hot-update.js.map