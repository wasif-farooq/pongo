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

var _jsxFileName = "/home/wasif/projects/pongo/client/src/Components/DocumentRoot/index.jsx";


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
      onCanPlay: toggle,
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
      onCanPlay: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "-"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (DocumentRoot);

/***/ }),

/***/ "./src/Components/DocumentTree/index.jsx":
/*!***********************************************!*\
  !*** ./src/Components/DocumentTree/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_DocumentRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/DocumentRoot */ "./src/Components/DocumentRoot/index.jsx");
var _jsxFileName = "/home/wasif/projects/pongo/client/src/Components/DocumentTree/index.jsx";



var DocumentTree = function DocumentTree(props) {
  var documents = props.documents;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, documents.map(function (document) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_DocumentRoot__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: document._id,
      document: document,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DocumentTree);

/***/ }),

/***/ "./src/Components/Records/index.jsx":
/*!******************************************!*\
  !*** ./src/Components/Records/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var Components_DocumentTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Components/DocumentTree */ "./src/Components/DocumentTree/index.jsx");





var _jsxFileName = "/home/wasif/projects/pongo/client/src/Components/Records/index.jsx";




var Records =
/*#__PURE__*/
function (_Component) {
  Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Records, _Component);

  function Records() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Records);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Records)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.documents = [{
      _id: 'asdwqdaszxcxzcxzcsweqwqe',
      name: 'test'
    }];
    return _this;
  }

  Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Records, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Components_DocumentTree__WEBPACK_IMPORTED_MODULE_7__["default"], {
        documents: documents,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })));
    }
  }]);

  return Records;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ })

})
//# sourceMappingURL=main.5e155cf6653bcbf7568f.hot-update.js.map