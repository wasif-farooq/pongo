webpackHotUpdate("main",{

/***/ "./src/Middlewares/SocketMiddleware.js":
/*!*********************************************!*\
  !*** ./src/Middlewares/SocketMiddleware.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocketMiddleware; });
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



function SocketMiddleware() {
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()();
  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return next(action);
        }

        var event = action.event,
            leave = action.leave,
            handle = action.handle,
            rest = Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(action, ["event", "leave", "handle"]);

        if (!event) {
          return next(action);
        }

        if (leave) {
          socket.removeListener(event);
        }

        var handleEvent = handle;

        if (typeof handleEvent === 'string') {
          handleEvent = function handleEvent(result) {
            return dispatch(Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
              type: handle,
              result: result
            }, rest));
          };
        }

        return socket.on(event, handleEvent);
      };
    };
  };
}

/***/ })

})
//# sourceMappingURL=main.a6008969a4c9a6b1df88.hot-update.js.map