webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_moneyFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/moneyFormat */ \"./lib/moneyFormat.js\");\n/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemoveFromCart */ \"./components/RemoveFromCart.js\");\n\nvar _jsxFileName = \"/Users/andreasfricktoresand/Documents/frontend/Examensarbete/sell-stuff/frontend/components/CartItem.js\";\n\n\n\nvar CartItemStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li.withConfig({\n  displayName: \"CartItem__CartItemStyle\",\n  componentId: \"sc-1ynqsg0-0\"\n})([\"display:grid;grid-template-columns:auto 1fr;img{margin:1rem;}button{}\"]);\n_c = CartItemStyle;\n\nfunction totalPrice(cart) {\n  return cart.reduce(function (tally, cartItem) {\n    if (!cartItem.product) return tally;\n    return tally + cartItem.quantity * cartItem.product.price;\n  }, 0);\n}\n\nfunction CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartItemStyle, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      width: \"100\",\n      src: cartItem.product.picture.image.publicUrlTransformed,\n      alt: cartItem.product.name,\n      className: \"src\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: cartItem.product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: Object(_lib_moneyFormat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cartItem.product.price * cartItem.quantity)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [cartItem.quantity, \" * \", Object(_lib_moneyFormat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cartItem.product.price)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: cartItem.id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 7\n  }, this);\n}\n_c2 = CartItem;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CartItemStyle\");\n$RefreshReg$(_c2, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcz81YWNmIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGUiLCJzdHlsZWQiLCJsaSIsInRvdGFsUHJpY2UiLCJjYXJ0IiwicmVkdWNlIiwidGFsbHkiLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJxdWFudGl0eSIsInByaWNlIiwiQ2FydEl0ZW0iLCJwaWN0dXJlIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJtb25leUZvcm1hdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsNkVBQW5CO0tBQU1GLGE7O0FBVU4sU0FBU0csVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3RDLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxPQUFkLEVBQXVCLE9BQU9GLEtBQVA7QUFDdkIsV0FBT0EsS0FBSyxHQUFHQyxRQUFRLENBQUNFLFFBQVQsR0FBb0JGLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkUsS0FBcEQ7QUFDRCxHQUhNLEVBR0osQ0FISSxDQUFQO0FBSUQ7O0FBQ2MsU0FBU0MsUUFBVCxPQUFnQztBQUFBLE1BQVpKLFFBQVksUUFBWkEsUUFBWTtBQUM3QyxzQkFDSSxxRUFBQyxhQUFEO0FBQUEsNEJBQ0k7QUFDSSxXQUFLLEVBQUMsS0FEVjtBQUVJLFNBQUcsRUFBRUEsUUFBUSxDQUFDQyxPQUFULENBQWlCSSxPQUFqQixDQUF5QkMsS0FBekIsQ0FBK0JDLG9CQUZ4QztBQUdJLFNBQUcsRUFBRVAsUUFBUSxDQUFDQyxPQUFULENBQWlCTyxJQUgxQjtBQUlJLGVBQVMsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU9JO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS1IsUUFBUSxDQUFDQyxPQUFULENBQWlCTztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFJQyxnRUFBVyxDQUFDVCxRQUFRLENBQUNDLE9BQVQsQ0FBaUJFLEtBQWpCLEdBQXlCSCxRQUFRLENBQUNFLFFBQW5DO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxtQkFDS0YsUUFBUSxDQUFDRSxRQURkLFNBQzJCTyxnRUFBVyxDQUFDVCxRQUFRLENBQUNDLE9BQVQsQ0FBaUJFLEtBQWxCLENBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBTUkscUVBQUMsdURBQUQ7QUFBZ0IsVUFBRSxFQUFFSCxRQUFRLENBQUNVO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCRDtNQW5CdUJOLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IG1vbmV5Rm9ybWF0IGZyb20gXCIuLi9saWIvbW9uZXlGb3JtYXRcIlxuaW1wb3J0IFJlbW92ZUZyb21DYXJ0IGZyb20gXCIuL1JlbW92ZUZyb21DYXJ0XCJcblxuY29uc3QgQ2FydEl0ZW1TdHlsZSA9IHN0eWxlZC5saWBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgXG4gICAgfVxuYFxuZnVuY3Rpb24gdG90YWxQcmljZShjYXJ0KSB7XG4gIHJldHVybiBjYXJ0LnJlZHVjZSgodGFsbHksIGNhcnRJdGVtKSA9PiB7XG4gICAgaWYgKCFjYXJ0SXRlbS5wcm9kdWN0KSByZXR1cm4gdGFsbHlcbiAgICByZXR1cm4gdGFsbHkgKyBjYXJ0SXRlbS5xdWFudGl0eSAqIGNhcnRJdGVtLnByb2R1Y3QucHJpY2VcbiAgfSwgMClcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRJdGVtKHsgY2FydEl0ZW0gfSkge1xuICByZXR1cm4gKFxuICAgICAgPENhcnRJdGVtU3R5bGU+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICB3aWR0aD0nMTAwJ1xuICAgICAgICAgICAgICBzcmM9e2NhcnRJdGVtLnByb2R1Y3QucGljdHVyZS5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgICAgYWx0PXtjYXJ0SXRlbS5wcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc3JjJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPntjYXJ0SXRlbS5wcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e21vbmV5Rm9ybWF0KGNhcnRJdGVtLnByb2R1Y3QucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSl9PC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbS5xdWFudGl0eX0gKiB7bW9uZXlGb3JtYXQoY2FydEl0ZW0ucHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPFJlbW92ZUZyb21DYXJ0IGlkPXtjYXJ0SXRlbS5pZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FydEl0ZW1TdHlsZT5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartItem.js\n");

/***/ })

})