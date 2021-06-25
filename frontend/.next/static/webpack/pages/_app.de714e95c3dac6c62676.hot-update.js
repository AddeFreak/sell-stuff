webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/moneyFormat.js":
/*!****************************!*\
  !*** ./lib/moneyFormat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moneyFormat; });\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/utilities */ \"./node_modules/@apollo/client/utilities/index.js\");\n\nfunction moneyFormat() {\n  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var options = {\n    style: 'currency',\n    currency: 'SEK',\n    minimumFractionDigits: 0\n  };\n\n  if (amount % 100 === 0) {\n    options.minimumFractionDigits = 0;\n  }\n\n  var formatter = Intl.NumberFormat('sv-Se', options);\n  return formatter.format(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_0__[\"removeArgumentsFromDocument\"]);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL21vbmV5Rm9ybWF0LmpzPzU5YWYiXSwibmFtZXMiOlsibW9uZXlGb3JtYXQiLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJyZW1vdmVBcmd1bWVudHNGcm9tRG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsV0FBVCxHQUFnQztBQUFBLE1BQVhDLE1BQVcsdUVBQUYsQ0FBRTtBQUM5QyxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsU0FBSyxFQUFFLFVBREs7QUFFWkMsWUFBUSxFQUFFLEtBRkU7QUFHWkMseUJBQXFCLEVBQUU7QUFIWCxHQUFoQjs7QUFNQSxNQUFJSixNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUNwQkMsV0FBTyxDQUFDRyxxQkFBUixHQUFnQyxDQUFoQztBQUNIOztBQUVELE1BQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCTixPQUEzQixDQUFsQjtBQUVBLFNBQU9JLFNBQVMsQ0FBQ0csTUFBVixDQUFpQkMsb0ZBQWpCLENBQVA7QUFFQSIsImZpbGUiOiIuL2xpYi9tb25leUZvcm1hdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbW92ZUFyZ3VtZW50c0Zyb21Eb2N1bWVudCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb25leUZvcm1hdChhbW91bnQgPSAwKXtcbiBjb25zdCBvcHRpb25zID0ge1xuICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgY3VycmVuY3k6ICdTRUsnLFxuICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gfVxuXG4gaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xuICAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDBcbiB9XG5cbiBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnc3YtU2UnLCBvcHRpb25zKVxuXG4gcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQocmVtb3ZlQXJndW1lbnRzRnJvbURvY3VtZW50KVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/moneyFormat.js\n");

/***/ })

})