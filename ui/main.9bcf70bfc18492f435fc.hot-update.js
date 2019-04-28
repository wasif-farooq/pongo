webpackHotUpdate("main",{

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


 //import rootReducer from './reducers'

var store = Object(redux_starter_kit__WEBPACK_IMPORTED_MODULE_1__["configureStore"])({
  reducer: function reducer() {},
  middleware: [].concat(Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(redux_starter_kit__WEBPACK_IMPORTED_MODULE_1__["getDefaultMiddleware"])()), [Object(_Middlewares_SocketMiddleware__WEBPACK_IMPORTED_MODULE_2__["default"])()])
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=main.9bcf70bfc18492f435fc.hot-update.js.map