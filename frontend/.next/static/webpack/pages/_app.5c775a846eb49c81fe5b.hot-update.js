webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n/* harmony import */ var _lib_moneyFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/moneyFormat */ \"./lib/moneyFormat.js\");\n/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartItem */ \"./components/CartItem.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _jsxFileName = \"/Users/andreasfricktoresand/Documents/frontend/Examensarbete/sell-stuff/frontend/components/Cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar CartStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Cart__CartStyle\",\n  componentId: \"rdjata-0\"\n})([\"transform:translateX(100%);transition:all 0.3s;position:fixed;height:100%;z-index:5;width:40%;position:relative;background:white;position:fixed;height:100%;top:0;right:0;min-width:500px;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);display:grid;grid-template-rows:auto 1fr;button{border:none;display:inline-block;position:absolute;}.buttisch{display:inline-block;background-color:pink;top:2rem;right:4rem;background-color:pink;}\", \";ul{list-style:none;overflow:scroll;}\"], function (props) {\n  return props.open && \"transform: translateX(0);\";\n});\n_c = CartStyle;\nvar CartNameStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3.withConfig({\n  displayName: \"Cart__CartNameStyle\",\n  componentId: \"rdjata-1\"\n})([\"background-color:rgb(9,0,124);color:white;padding:2rem;margin:1rem;display:inline-block;font-size:3rem;font-weight:400;\"]);\n_c2 = CartNameStyle;\n\nfunction totalPrice(cart) {\n  return cart.reduce(function (tally, cartItem) {\n    if (!cartItem.product) return tally;\n    return tally + cartItem.quantity * cartItem.product.price;\n  }, 0);\n}\n\nfunction Cart() {\n  _s();\n\n  var _this = this;\n\n  var cartStuff = Object(_User__WEBPACK_IMPORTED_MODULE_5__[\"useUser\"])();\n\n  var _useCart = Object(_lib_cartState__WEBPACK_IMPORTED_MODULE_2__[\"useCart\"])(),\n      cartOpen = _useCart.cartOpen,\n      toggleCart = _useCart.toggleCart;\n\n  if (!cartStuff) return null;\n  console.log(cartStuff);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartStyle, {\n    open: cartOpen,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CartNameStyle, {\n      children: [cartStuff.name, \"'s Cart\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"buttisch\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: toggleCart,\n          children: \"X\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 19\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: cartStuff.cart.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CartItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          cartItem: cartItem\n        }, cartItem.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 19\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: Object(_lib_moneyFormat__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(totalPrice(cartStuff.cart))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Cart, \"UUfzSLocjVDaskdA4AMkH7OcFgU=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_5__[\"useUser\"], _lib_cartState__WEBPACK_IMPORTED_MODULE_2__[\"useCart\"]];\n});\n\n_c3 = Cart;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CartStyle\");\n$RefreshReg$(_c2, \"CartNameStyle\");\n$RefreshReg$(_c3, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiQ2FydFN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQ2FydE5hbWVTdHlsZSIsImgzIiwidG90YWxQcmljZSIsImNhcnQiLCJyZWR1Y2UiLCJ0YWxseSIsImNhcnRJdGVtIiwicHJvZHVjdCIsInF1YW50aXR5IiwicHJpY2UiLCJDYXJ0IiwiY2FydFN0dWZmIiwidXNlVXNlciIsInVzZUNhcnQiLCJjYXJ0T3BlbiIsInRvZ2dsZUNhcnQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIm1hcCIsImlkIiwibW9uZXlGb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3ZEErQlQsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsSUFBTiwrQkFBWDtBQUFBLENBL0JTLENBQWY7S0FBTUosUztBQXFDTixJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsK0hBQW5CO01BQU1ELGE7O0FBU04sU0FBU0UsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEIsU0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3BDLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxPQUFkLEVBQXVCLE9BQU9GLEtBQVA7QUFDdkIsV0FBT0EsS0FBSyxHQUFHQyxRQUFRLENBQUNFLFFBQVQsR0FBb0JGLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkUsS0FBcEQ7QUFDSCxHQUhNLEVBR0osQ0FISSxDQUFQO0FBSUg7O0FBQ2MsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxTQUFTLEdBQUdDLHFEQUFPLEVBQXpCOztBQUQ2QixpQkFFRUMsOERBQU8sRUFGVDtBQUFBLE1BRXRCQyxRQUZzQixZQUV0QkEsUUFGc0I7QUFBQSxNQUVaQyxVQUZZLFlBRVpBLFVBRlk7O0FBRzdCLE1BQUksQ0FBQ0osU0FBTCxFQUFnQixPQUFPLElBQVA7QUFDaEJLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBRUEsc0JBQ0kscUVBQUMsU0FBRDtBQUFXLFFBQUksRUFBRUcsUUFBakI7QUFBQSw0QkFDSSxxRUFBQyxhQUFEO0FBQUEsaUJBQ0tILFNBQVMsQ0FBQ08sSUFEZiwwQkFFSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQU8sRUFBRUgsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFBLGdCQUNLSixTQUFTLENBQUNSLElBQVYsQ0FBZWdCLEdBQWYsQ0FBbUIsVUFBQ2IsUUFBRDtBQUFBLDRCQUNoQixxRUFBQyxpREFBRDtBQUE0QixrQkFBUSxFQUFFQTtBQUF0QyxXQUFlQSxRQUFRLENBQUNjLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBbkI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkosZUFlSTtBQUFBLGdCQUFJQyxnRUFBVyxDQUFDbkIsVUFBVSxDQUFDUyxTQUFTLENBQUNSLElBQVgsQ0FBWDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CRDs7R0F6QnVCTyxJO1VBQ0pFLDZDLEVBQ2FDLHNEOzs7TUFGVEgsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL2NhcnRTdGF0ZVwiXG5pbXBvcnQgbW9uZXlGb3JtYXQgZnJvbSBcIi4uL2xpYi9tb25leUZvcm1hdFwiXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSBcIi4vQ2FydEl0ZW1cIiBcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiLi9Vc2VyXCJcblxuY29uc3QgQ2FydFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG5cbiAgICBidXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC5idXR0aXNjaCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgdG9wOiAycmVtO1xuICAgICAgICByaWdodDogNHJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICB9XG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9wZW4gJiYgYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtgfTtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuYFxuY29uc3QgQ2FydE5hbWVTdHlsZSA9IHN0eWxlZC5oM2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMCwgMTI0KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuYFxuZnVuY3Rpb24gdG90YWxQcmljZShjYXJ0KSB7XG4gICAgcmV0dXJuIGNhcnQucmVkdWNlKCh0YWxseSwgY2FydEl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFjYXJ0SXRlbS5wcm9kdWN0KSByZXR1cm4gdGFsbHlcbiAgICAgICAgcmV0dXJuIHRhbGx5ICsgY2FydEl0ZW0ucXVhbnRpdHkgKiBjYXJ0SXRlbS5wcm9kdWN0LnByaWNlXG4gICAgfSwgMClcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XG4gIGNvbnN0IGNhcnRTdHVmZiA9IHVzZVVzZXIoKVxuICBjb25zdCB7Y2FydE9wZW4sIHRvZ2dsZUNhcnR9ID0gdXNlQ2FydCgpXG4gIGlmICghY2FydFN0dWZmKSByZXR1cm4gbnVsbFxuICBjb25zb2xlLmxvZyhjYXJ0U3R1ZmYpXG4gIFxuICByZXR1cm4gKFxuICAgICAgPENhcnRTdHlsZSBvcGVuPXtjYXJ0T3Blbn0+XG4gICAgICAgICAgPENhcnROYW1lU3R5bGU+XG4gICAgICAgICAgICAgIHtjYXJ0U3R1ZmYubmFtZX0ncyBDYXJ0XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0aXNjaCc+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17dG9nZ2xlQ2FydH0+XG4gICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FydE5hbWVTdHlsZT5cblxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2NhcnRTdHVmZi5jYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2NhcnRJdGVtLmlkfSBjYXJ0SXRlbT17Y2FydEl0ZW19IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHA+e21vbmV5Rm9ybWF0KHRvdGFsUHJpY2UoY2FydFN0dWZmLmNhcnQpKX08L3A+XG4gICAgICA8L0NhcnRTdHlsZT5cbiAgKVxufSAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ })

})