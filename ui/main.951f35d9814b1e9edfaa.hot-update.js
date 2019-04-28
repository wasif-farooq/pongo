webpackHotUpdate("main",{

/***/ "./src/Reducers/index.js":
/*!*******************************!*\
  !*** ./src/Reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/wasif/projects/pongo/client/src/Reducers/index.js: 'return' outside of function (4:0)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m connection from \u001b[32m'./Connection'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[36mreturn\u001b[39m combineReducers({\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m    connection\u001b[33m:\u001b[39m connection\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m})\u001b[0m\n    at Object.raise (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:3851:17)\n    at Object.parseReturnStatement (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7652:12)\n    at Object.parseStatementContent (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7339:21)\n    at Object.parseStatement (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseStatement (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:1993:26)\n    at Object.parseBlockOrModuleBlockBody (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Object.parseTopLevel (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7220:10)\n    at Object.parseTopLevel (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:2820:28)\n    at Object.parse (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:8863:17)\n    at parse (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:11135:38)\n    at parser (/home/wasif/projects/pongo/client/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/home/wasif/projects/pongo/client/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/home/wasif/projects/pongo/client/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/home/wasif/projects/pongo/client/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/home/wasif/projects/pongo/client/node_modules/@babel/core/lib/transform.js:34:34)");

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux_starter_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-starter-kit */ "./node_modules/redux-starter-kit/dist/redux-starter-kit.esm.js");
/* harmony import */ var _Middlewares_SocketMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Middlewares/SocketMiddleware */ "./src/Middlewares/SocketMiddleware.js");
/* harmony import */ var Reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Reducers */ "./src/Reducers/index.js");
/* harmony import */ var Reducers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Reducers__WEBPACK_IMPORTED_MODULE_3__);




var store = Object(redux_starter_kit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
  reducer: function reducer() {},
  middleware: [].concat(Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(redux_starter_kit__WEBPACK_IMPORTED_MODULE_1__["getDefaultMiddleware"])()), [Object(_Middlewares_SocketMiddleware__WEBPACK_IMPORTED_MODULE_2__["default"])()])
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=main.951f35d9814b1e9edfaa.hot-update.js.map