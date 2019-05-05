webpackHotUpdate("main",{

/***/ "./src/Components/DocumentRoot/index.jsx":
/*!***********************************************!*\
  !*** ./src/Components/DocumentRoot/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/home/wasif/projects/pongo/client/src/Components/DocumentRoot/index.jsx";



var DocumentRoot = function DocumentRoot(_ref) {
  var document = _ref.document;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var toggle = function toggle() {
    setExpand(!expand);
  };

  if (!expand) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onCanPlay: _this.toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, '_id : ' + document._id));
  }

  if (!expand) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      onCanPlay: _this.toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "-"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (DocumentRoot);

/***/ })

})
//# sourceMappingURL=main.29b84343f29850f2ac52.hot-update.js.map