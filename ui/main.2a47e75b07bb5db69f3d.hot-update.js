webpackHotUpdate("main",{

/***/ "./src/Components/Collections/index.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Collections/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_project_pongo_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_project_pongo_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_project_pongo_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_project_pongo_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_project_pongo_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");





var _jsxFileName = "D:\\project\\pongo\\client\\src\\Components\\Collections\\index.jsx";



var Collections =
/*#__PURE__*/
function (_Component) {
  Object(D_project_pongo_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Collections, _Component);

  function Collections(props) {
    var _this;

    Object(D_project_pongo_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Collections);

    _this = Object(D_project_pongo_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(D_project_pongo_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Collections).call(this, props));
    _this.state = {
      collections: [{
        id: 1,
        name: 'MoveIn4Person-Person'
      }, {
        id: 2,
        name: 'MoveIn4Course-Course'
      }]
    };
    return _this;
  }

  Object(D_project_pongo_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Collections, [{
    key: "render",
    value: function render() {
      var collections = this.state.collections;
      var Item = react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
        as: "ul",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, collections.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Item, {
          as: "li",
          key: id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, name);
      }));
    }
  }]);

  return Collections;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Collections);

/***/ })

})
//# sourceMappingURL=main.2a47e75b07bb5db69f3d.hot-update.js.map