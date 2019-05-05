webpackHotUpdate("main",{

/***/ "./src/Components/DocumentRoot/index.jsx":
/*!***********************************************!*\
  !*** ./src/Components/DocumentRoot/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/wasif/projects/pongo/client/src/Components/DocumentRoot/index.jsx: Unexpected token (11:9)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m        {\u001b[33m!\u001b[39mexpand \u001b[33m&&\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m onCanPlay\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mtoggle}\u001b[33m>\u001b[39m\u001b[33m+\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m{\u001b[32m'_id : '\u001b[39m \u001b[33m+\u001b[39m document\u001b[33m.\u001b[39m_id}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object.raise (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:3851:17)\n    at Object.unexpected (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:5167:16)\n    at Object.parseIdentifierName (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:7007:18)\n    at Object.parseIdentifier (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:6985:23)\n    at Object.parseMaybePrivateName (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:6350:19)\n    at Object.parsePropertyName (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:6806:98)\n    at Object.parsePropertyName (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:2405:23)\n    at Object.parseObjectMember (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:6707:10)\n    at Object.parseObj (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:6641:25)\n    at Object.parseExprAtom (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:6274:21)\n    at Object.parseExprAtom (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:3570:20)\n    at Object.parseExprSubscripts (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:5914:23)\n    at Object.parseMaybeUnary (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:5894:21)\n    at Object.parseExprOps (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:5781:23)\n    at Object.parseMaybeConditional (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:5754:23)\n    at Object.parseMaybeAssign (/home/wasif/projects/pongo/client/node_modules/@babel/parser/lib/index.js:5701:21)");

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
/* harmony import */ var Components_DocumentRoot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Components_DocumentRoot__WEBPACK_IMPORTED_MODULE_1__);
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_DocumentRoot__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Records);

    return Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Records).apply(this, arguments));
  }

  Object(_home_wasif_projects_pongo_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Records, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Records"));
    }
  }]);

  return Records;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ })

})
//# sourceMappingURL=main.c7b53e1a67e4ab8d26a9.hot-update.js.map