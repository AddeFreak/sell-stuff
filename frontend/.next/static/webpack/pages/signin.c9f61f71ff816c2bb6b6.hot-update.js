webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/andreasfricktoresand/Documents/frontend/Examensarbete/sell-stuff/frontend/components/SignIn.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n    mutation SIGNIN_MUTATION($email: String!, $password: String!) {\\n        authenticateUserWithPassword(email: $email, password: $password) {\\n            ... on UserAuthenticationWithPasswordSuccess {\\n                item {\\n                    id\\n                    email\\n                    name\\n                }\\n            }\\n            ... on UserAuthenticationWithPasswordFailure {\\n                code\\n                message\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].form.withConfig({\n  displayName: \"SignIn__FormStyle\",\n  componentId: \"sc-5d7x74-0\"\n})([\"display:flex;justify-content:center;box-shadow:1px 1px 25px rgba(0,0,0,0.35);border-radius:10px;border:6px solid #305a72;input,textarea{width:100%;padding:16px 8px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box;}button{width:auto;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;background-color:#305a72;}.formcontainer{text-align:left;margin:24px 50px 12px;}.container{padding:16px 0;text-align:left;}fieldset{border:none;}@media screen and (max-width:300px){span.psw{display:block;float:none;}}\"]);\n_c = FormStyle;\nfunction SignIn() {\n  _s();\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    email: '',\n    password: ''\n  }),\n      formData = _useForm.formData,\n      handleInputChange = _useForm.handleInputChange,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(SIGNIN_MUTATION, {\n    variables: formData,\n    refetchQueries: [{\n      query: _User__WEBPACK_IMPORTED_MODULE_10__[\"CURRENT_USER_QUERY\"]\n    }]\n  }),\n      _useMutation2 = Object(_Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useMutation, 2),\n      singin = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      error = _useMutation2$.error,\n      loading = _useMutation2$.loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FormStyle, {\n    method: \"POST\",\n    onSubmit: /*#__PURE__*/function () {\n      var _ref = Object(_Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n        var res;\n        return _Users_andreasfricktoresand_Documents_frontend_Examensarbete_sell_stuff_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault();\n                _context.next = 3;\n                return singin();\n\n              case 3:\n                res = _context.sent;\n                console.log(res);\n                resetForm();\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"fieldset\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Sign In To Your Account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Your email address\",\n          autoComplete: \"email\",\n          value: formData.email,\n          onChange: handleInputChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"password\",\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          autoComplete: \"password\",\n          value: formData.password,\n          onChange: handleInputChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \" Sign In! \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignIn, \"6l7Txbf5O58Lul4F7655YExEV/c=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c2 = SignIn;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FormStyle\");\n$RefreshReg$(_c2, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanM/NDgzOCJdLCJuYW1lcyI6WyJTSUdOSU5fTVVUQVRJT04iLCJncWwiLCJGb3JtU3R5bGUiLCJzdHlsZWQiLCJmb3JtIiwiU2lnbkluIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwic2luZ2luIiwiZXJyb3IiLCJsb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLGtEQUFILG1CQUFyQjtBQWtCQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsZ2pCQUFmO0tBQU1GLFM7QUEyQ1MsU0FBU0csTUFBVCxHQUFrQjtBQUFBOztBQUFBLGlCQUNzQkMsNERBQU8sQ0FBQztBQUN2REMsU0FBSyxFQUFFLEVBRGdEO0FBRXZEQyxZQUFRLEVBQUU7QUFGNkMsR0FBRCxDQUQ3QjtBQUFBLE1BQ3JCQyxRQURxQixZQUNyQkEsUUFEcUI7QUFBQSxNQUNYQyxpQkFEVyxZQUNYQSxpQkFEVztBQUFBLE1BQ1FDLFNBRFIsWUFDUUEsU0FEUjs7QUFBQSxxQkFLUUMsa0VBQVcsQ0FBQ1osZUFBRCxFQUFrQjtBQUM5RGEsYUFBUyxFQUFFSixRQURtRDtBQUU5REssa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMseURBQWtCQTtBQUEzQixLQUFEO0FBRjhDLEdBQWxCLENBTG5CO0FBQUE7QUFBQSxNQUt0QkMsTUFMc0I7QUFBQTtBQUFBLE1BS1pDLEtBTFksa0JBS1pBLEtBTFk7QUFBQSxNQUtMQyxPQUxLLGtCQUtMQSxPQUxLOztBQVM3QixzQkFDSSxxRUFBQyxTQUFEO0FBQ0ksVUFBTSxFQUFDLE1BRFg7QUFFSSxZQUFRO0FBQUEsZ2FBQUUsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ05BLGlCQUFDLENBQUNDLGNBQUY7QUFETTtBQUFBLHVCQUVZSixNQUFNLEVBRmxCOztBQUFBO0FBRUFLLG1CQUZBO0FBR05DLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBWCx5QkFBUzs7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRlo7QUFBQSw0QkFTSSxxRUFBQyxxREFBRDtBQUFjLFdBQUssRUFBRU87QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLGVBVUk7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVJO0FBQ0ksY0FBSSxFQUFDLE9BRFQ7QUFFSSxjQUFJLEVBQUMsT0FGVDtBQUdJLHFCQUFXLEVBQUMsb0JBSGhCO0FBSUksc0JBQVksRUFBQyxPQUpqQjtBQUtJLGVBQUssRUFBRVQsUUFBUSxDQUFDRixLQUxwQjtBQU1JLGtCQUFRLEVBQUVHO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQWFJO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQSw0Q0FFSTtBQUNJLGNBQUksRUFBQyxVQURUO0FBRUksY0FBSSxFQUFDLFVBRlQ7QUFHSSxxQkFBVyxFQUFDLFVBSGhCO0FBSUksc0JBQVksRUFBQyxVQUpqQjtBQUtJLGVBQUssRUFBRUQsUUFBUSxDQUFDRCxRQUxwQjtBQU1JLGtCQUFRLEVBQUVFO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSixlQXdCSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUNIOztHQWhEdUJMLE07VUFDK0JDLG9ELEVBSWRNLDBEOzs7TUFMakJQLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZ25Jbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJ1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSdcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcidcblxuY29uc3QgU0lHTklOX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFNJR05JTl9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgICAgICBhdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzIHtcbiAgICAgICAgICAgICAgICBpdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlIHtcbiAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYFxuXG5jb25zdCBGb3JtU3R5bGUgPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzMwNWE3MjtcblxuICAgIGlucHV0LFxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA1YTcyO1xuICAgIH1cbiAgICAuZm9ybWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMjRweCA1MHB4IDEycHg7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGZpZWxkc2V0IHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAgICBzcGFuLnBzdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIGNvbnN0IHsgZm9ybURhdGEsIGhhbmRsZUlucHV0Q2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KVxuICAgIGNvbnN0IFtzaW5naW4sIHsgZXJyb3IsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihTSUdOSU5fTVVUQVRJT04sIHtcbiAgICAgICAgdmFyaWFibGVzOiBmb3JtRGF0YSxcbiAgICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybVN0eWxlXG4gICAgICAgICAgICBtZXRob2Q9J1BPU1QnXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzaW5naW4oKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICByZXNldEZvcm0oKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGgyPlNpZ24gSW4gVG8gWW91ciBBY2NvdW50PC9oMj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nWW91ciBlbWFpbCBhZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+IFNpZ24gSW4hIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPC9Gb3JtU3R5bGU+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SignIn.js\n");

/***/ })

})