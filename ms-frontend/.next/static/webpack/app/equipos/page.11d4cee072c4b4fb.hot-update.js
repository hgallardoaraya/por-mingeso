"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/equipos/page",{

/***/ "(app-pages-browser)/./components/FormSelect.tsx":
/*!***********************************!*\
  !*** ./components/FormSelect.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormSelect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _ui_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/select */ \"(app-pages-browser)/./components/ui/select.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction FormSelect(param) {\n    let { items, onChange, defaultValue, placeholder } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_select__WEBPACK_IMPORTED_MODULE_2__.Select, {\n        onValueChange: onChange,\n        defaultValue: defaultValue,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_form__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectTrigger, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectValue, {\n                        placeholder: placeholder\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\FormSelect.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\FormSelect.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\FormSelect.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectContent, {\n                children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectItem, {\n                        value: typeof item.id == \"number\" ? item.id.toString() : item.id,\n                        children: item.texto\n                    }, \"\".concat(item.id, \" \").concat(index), false, {\n                        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\FormSelect.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\FormSelect.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\FormSelect.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = FormSelect;\nvar _c;\n$RefreshReg$(_c, \"FormSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybVNlbGVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHd0U7QUFDb0I7QUFFN0UsU0FBU00sV0FBVyxLQUF3SjtRQUF4SixFQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQTZHLEdBQXhKO0lBQ2pDLHFCQUNFLDhEQUFDVCw4Q0FBTUE7UUFBQ1UsZUFBZUg7UUFBVUMsY0FBY0E7OzBCQUM3Qyw4REFBQ1QsaURBQVdBOzBCQUNWLDRFQUFDSSxxREFBYUE7OEJBQ1osNEVBQUNDLG1EQUFXQTt3QkFBQ0ssYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDUixxREFBYUE7MEJBRVZLLE1BQU1LLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQ1gsa0RBQVVBO3dCQUE2QlksT0FBTyxPQUFPRixLQUFLRyxFQUFFLElBQUssV0FBV0gsS0FBS0csRUFBRSxDQUFDQyxRQUFRLEtBQUtKLEtBQUtHLEVBQUU7a0NBQUdILEtBQUtLLEtBQUs7dUJBQXJHLEdBQWNKLE9BQVhELEtBQUtHLEVBQUUsRUFBQyxLQUFTLE9BQU5GOzs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDO0tBakJ3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtU2VsZWN0LnRzeD83YzU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUl0ZW1zIH0gZnJvbSBcIkAvdHlwZXMvRm9ybVR5cGVzXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtRmllbGQsIEZvcm1JdGVtLCBGb3JtTGFiZWwgfSBmcm9tIFwiLi91aS9mb3JtXCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgU2VsZWN0Q29udGVudCwgU2VsZWN0SXRlbSwgU2VsZWN0VHJpZ2dlciwgU2VsZWN0VmFsdWUgfSBmcm9tIFwiLi91aS9zZWxlY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1TZWxlY3Qoe2l0ZW1zLCBvbkNoYW5nZSwgZGVmYXVsdFZhbHVlLCBwbGFjZWhvbGRlcn06e2l0ZW1zOiBGb3JtSXRlbXM7b25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgcGxhY2Vob2xkZXI6IHN0cmluZ30pIHtcclxuICByZXR1cm4oXHJcbiAgICA8U2VsZWN0IG9uVmFsdWVDaGFuZ2U9e29uQ2hhbmdlfSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0+XHJcbiAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICA8U2VsZWN0VHJpZ2dlcj5cclxuICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICA8U2VsZWN0Q29udGVudD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RJdGVtIGtleT17YCR7aXRlbS5pZH0gJHtpbmRleH1gfSB2YWx1ZT17dHlwZW9mKGl0ZW0uaWQpID09ICdudW1iZXInID8gaXRlbS5pZC50b1N0cmluZygpIDogaXRlbS5pZH0+e2l0ZW0udGV4dG99PC9TZWxlY3RJdGVtPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgPC9TZWxlY3RDb250ZW50PlxyXG4gICAgPC9TZWxlY3Q+ICBcclxuICApXHJcbn0iXSwibmFtZXMiOlsiRm9ybUNvbnRyb2wiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIkZvcm1TZWxlY3QiLCJpdGVtcyIsIm9uQ2hhbmdlIiwiZGVmYXVsdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJvblZhbHVlQ2hhbmdlIiwibWFwIiwiaXRlbSIsImluZGV4IiwidmFsdWUiLCJpZCIsInRvU3RyaW5nIiwidGV4dG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FormSelect.tsx\n"));

/***/ })

});