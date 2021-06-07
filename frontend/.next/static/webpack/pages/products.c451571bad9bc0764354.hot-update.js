webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_moneyFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/moneyFormat */ \"./lib/moneyFormat.js\");\n/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddToCart */ \"./components/AddToCart.js\");\n/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteProduct */ \"./components/DeleteProduct.js\");\n\nvar _jsxFileName = \"/Users/andreasfricktoresand/Documents/frontend/Examensarbete/sell-stuff/frontend/components/Product.js\";\n\n\n\n\n\nvar ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Product__ProductStyles\",\n  componentId: \"vbu1sq-0\"\n})([\"grid-gap:1rem;border:1px solid #e2e2e2;border-radius:0.5rem;position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-weight:300;padding:0 2.5rem;font-size:1.5rem;text-align:center;}.buttons{display:grid;min-width:20%;justify-items:end;border:1px solid white;gap:0.5rem;padding:0.2rem;}.edit{a{color:black;}text-align:center;text-decoration:none;min-width:20%;border-radius:3px;border:1px solid black;grid-row:2 / 2;padding:1rem;& > *{border:0;font-size:1rem;}}.delete{text-align:center;min-width:20%;border-radius:3px;padding:1rem;border:1px solid black;& > *{background:white;border:0;font-size:1rem;}}.add{text-align:center;min-width:20%;border-radius:3px;padding:1rem;border:1px solid black;& > *{background:white;border:0;font-size:1rem;}@media (max-width:700px){font-size:10px;padding:0 10px;}@media (max-width:425px){font-size:10px;width:100%;display:grid;grid-template-rows:repeat(3,1fr);.buttons{width:100%;background-color:black;}.edit{width:100%;}.add{}.delete{}}}\"]);\n_c = ProductStyles;\nvar ProductTextStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h2.withConfig({\n  displayName: \"Product__ProductTextStyle\",\n  componentId: \"vbu1sq-1\"\n})([\"position:absolute;bottom:0px;left:0px;background-color:rgb(9,0,124);color:rgb(247,247,247);margin:0rem;font-size:1.25rem;padding:1rem;border-radius:3px;a{display:inline;font-size:4rem;text-align:center;color:rgb(247,247,247);padding:0 1rem;font-size:4rem;font-weight:normal;letter-spacing:-3.5px;line-height:1em;}@media (max-width:425px){font-size:2rem;display:flex;font-size:1rem;bottom:20rem;a{text-align:center;}}\"]);\n_c2 = ProductTextStyle;\nvar ProductPriceStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h3.withConfig({\n  displayName: \"Product__ProductPriceStyle\",\n  componentId: \"vbu1sq-2\"\n})([\"position:absolute;background-color:rgb(9,0,124);color:white;margin:0rem;font-size:2rem;display:inline-block;line-height:1.3;top:0px;right:0px;padding:1rem;border-radius:3px;\"]);\n_c3 = ProductPriceStyle;\nfunction Product(_ref) {\n  var _product$picture, _product$picture$imag;\n\n  var product = _ref.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductStyles, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: product === null || product === void 0 ? void 0 : (_product$picture = product.picture) === null || _product$picture === void 0 ? void 0 : (_product$picture$imag = _product$picture.image) === null || _product$picture$imag === void 0 ? void 0 : _product$picture$imag.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductTextStyle, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/product/\".concat(product.id),\n        children: product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductPriceStyle, {\n      children: Object(_lib_moneyFormat__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(product.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"buttons\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"add\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AddToCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          id: product.id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 32\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"edit\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: {\n            pathname: '/update',\n            query: {\n              id: product.id\n            }\n          },\n          children: \"Edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"delete\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          id: product.id,\n          children: \"Delete\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 176,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 149,\n    columnNumber: 13\n  }, this);\n}\n_c4 = Product;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ProductStyles\");\n$RefreshReg$(_c2, \"ProductTextStyle\");\n$RefreshReg$(_c3, \"ProductPriceStyle\");\n$RefreshReg$(_c4, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzPzlkMDYiXSwibmFtZXMiOlsiUHJvZHVjdFN0eWxlcyIsInN0eWxlZCIsImRpdiIsIlByb2R1Y3RUZXh0U3R5bGUiLCJoMiIsIlByb2R1Y3RQcmljZVN0eWxlIiwiaDMiLCJQcm9kdWN0IiwicHJvZHVjdCIsInBpY3R1cmUiLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImlkIiwibW9uZXlGb3JtYXQiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Z0NBQW5CO0tBQU1GLGE7QUErRk4sSUFBTUcsZ0JBQWdCLEdBQUdGLHlEQUFNLENBQUNHLEVBQVY7QUFBQTtBQUFBO0FBQUEsd2FBQXRCO01BQU1ELGdCO0FBK0JOLElBQU1FLGlCQUFpQixHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFMQUF2QjtNQUFNRCxpQjtBQWNTLFNBQVNFLE9BQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDekMsc0JBQ1EscUVBQUMsYUFBRDtBQUFBLDRCQUNJO0FBQ0ksU0FBRyxFQUFFQSxPQUFGLGFBQUVBLE9BQUYsMkNBQUVBLE9BQU8sQ0FBRUMsT0FBWCw4RUFBRSxpQkFBa0JDLEtBQXBCLDBEQUFFLHNCQUF5QkMsb0JBRGxDO0FBRUksU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLHFFQUFDLGdCQUFEO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLHFCQUFjSixPQUFPLENBQUNLLEVBQXRCLENBQVY7QUFBQSxrQkFBdUNMLE9BQU8sQ0FBQ0k7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQVFJLHFFQUFDLGlCQUFEO0FBQUEsZ0JBQ0tFLGdFQUFXLENBQUNOLE9BQU8sQ0FBQ08sS0FBVDtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFXSTtBQUFBLGdCQUFJUCxPQUFPLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLGVBWUo7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQXFCLHFFQUFDLGtEQUFEO0FBQVcsWUFBRSxFQUFFUixPQUFPLENBQUNLO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRVk7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUNJLGNBQUksRUFBRTtBQUNGSSxvQkFBUSxFQUFFLFNBRFI7QUFFRkMsaUJBQUssRUFBRTtBQUNITCxnQkFBRSxFQUFFTCxPQUFPLENBQUNLO0FBRFQ7QUFGTCxXQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZaLGVBY1k7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDSSxxRUFBQyxzREFBRDtBQUFlLFlBQUUsRUFBRUwsT0FBTyxDQUFDSyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQWlDSDtNQWxDdUJOLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IG1vbmV5Rm9ybWF0IGZyb20gJy4uL2xpYi9tb25leUZvcm1hdCdcbmltcG9ydCBBZGRUb0NhcnQgZnJvbSAnLi9BZGRUb0NhcnQnXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tICcuL0RlbGV0ZVByb2R1Y3QnXG5cbmNvbnN0IFByb2R1Y3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7ICovXG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMi41cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIC8qICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTsgKi9cbiAgICAgICAgbWluLXdpZHRoOiAyMCU7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgfVxuICAgIC5lZGl0IHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWluLXdpZHRoOiAyMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gMjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZWxldGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMjAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYWRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4td2lkdGg6IDIwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpOyAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVkaXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZCB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVsZXRlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmBcbmNvbnN0IFByb2R1Y3RUZXh0U3R5bGUgPSBzdHlsZWQuaDJgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMCwgMTI0KTtcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xuICAgIG1hcmdpbjogMHJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTMuNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGJvdHRvbTogMjByZW07XG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuYFxuY29uc3QgUHJvZHVjdFByaWNlU3R5bGUgPSBzdHlsZWQuaDNgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAwLCAxMjQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDByZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoeyBwcm9kdWN0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb2R1Y3RTdHlsZXM+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBpY3R1cmU/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdFRleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1Byb2R1Y3RUZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RQcmljZVN0eWxlPlxuICAgICAgICAgICAgICAgICAgICB7bW9uZXlGb3JtYXQocHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICAgICAgPC9Qcm9kdWN0UHJpY2VTdHlsZT5cbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZFwiPjxBZGRUb0NhcnQgaWQ9e3Byb2R1Y3QuaWR9Lz48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZGl0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy91cGRhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVsZXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVQcm9kdWN0IGlkPXtwcm9kdWN0LmlkfT5EZWxldGU8L0RlbGV0ZVByb2R1Y3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Qcm9kdWN0U3R5bGVzPlxuICAgICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

})