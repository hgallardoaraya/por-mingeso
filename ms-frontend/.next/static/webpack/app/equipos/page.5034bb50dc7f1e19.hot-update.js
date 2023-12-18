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

/***/ "(app-pages-browser)/./components/AccionEquipo.tsx":
/*!*************************************!*\
  !*** ./components/AccionEquipo.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccionEquipo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ModalTransaccion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalTransaccion */ \"(app-pages-browser)/./components/ModalTransaccion.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FormularioPrestamo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormularioPrestamo */ \"(app-pages-browser)/./components/FormularioPrestamo.tsx\");\n/* harmony import */ var _app_equipos_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/equipos/actions */ \"(app-pages-browser)/./app/equipos/actions.tsx\");\n/* harmony import */ var _FormularioDevolucion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormularioDevolucion */ \"(app-pages-browser)/./components/FormularioDevolucion.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AccionEquipo(param) {\n    let { equipo } = param;\n    _s();\n    const [openPrestamoModal, setOpenPrestamoModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [openDevolucionModal, setOpenDevolucionModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    async function ingresarPrestamo(data) {\n        console.log(data);\n        const response = await fetch(\"http://localhost:8082/api/prestamos\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const rawResponse = await response.json();\n        (0,_app_equipos_actions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        console.log(rawResponse);\n        if (rawResponse.status == 200) {\n            alert(\"Pr\\xe9stamo ingresado exit\\xf3samente.\");\n        } else {\n            alert(rawResponse.message);\n        }\n        // if(rawResponse.message) {\n        //   alert(rawResponse.message);\n        // }else{\n        //   alert(\"Préstamo ingresado exitósamente.\")\n        // }    \n        setOpenPrestamoModal(false);\n    }\n    async function ingresarDevolucion(data) {\n        console.log(data);\n        const response = await fetch(\"http://localhost:8082/api/devoluciones\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const rawResponse = await response.json();\n        if (rawResponse.status == 200) {\n            alert(\"Devoluci\\xf3n ingresada exit\\xf3samente.\");\n        } else {\n            alert(rawResponse.message);\n        }\n        (0,_app_equipos_actions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        setOpenDevolucionModal(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    equipo.disponible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        className: \"bg-teal-500 text-white hover:bg-teal-200 hover:text-teal-800 mb-2 w-full\",\n                        onClick: ()=>setOpenPrestamoModal(true),\n                        children: \"Pr\\xe9stamo\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        className: \"bg-amber-500 text-white hover:bg-amber-200 hover:text-amber-800 mb-2 w-full\",\n                        onClick: ()=>setOpenDevolucionModal(true),\n                        children: \"Devoluci\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        size: \"sm\",\n                        variant: \"outline\",\n                        className: \"bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-800 w-full\",\n                        children: \"Reporte\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalTransaccion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Ingresar pr\\xe9stamo\",\n                equipo: equipo,\n                open: openPrestamoModal,\n                setOpen: setOpenPrestamoModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormularioPrestamo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    equipo: equipo,\n                    ingresarPrestamo: ingresarPrestamo,\n                    handleCancel: ()=>setOpenPrestamoModal(false)\n                }, void 0, false, {\n                    fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalTransaccion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Ingresar devoluci\\xf3n\",\n                equipo: equipo,\n                open: openDevolucionModal,\n                setOpen: setOpenDevolucionModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormularioDevolucion__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    equipo: equipo,\n                    ingresarDevolucion: ingresarDevolucion,\n                    handleCancel: ()=>setOpenDevolucionModal(false)\n                }, void 0, false, {\n                    fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, equipo.id, true, {\n        fileName: \"D:\\\\2-2023\\\\MINGESO\\\\por-mingeso\\\\ms-frontend\\\\components\\\\AccionEquipo.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(AccionEquipo, \"XQGL9rGmqbY4vmiMNJWa68+PW4o=\");\n_c = AccionEquipo;\nvar _c;\n$RefreshReg$(_c, \"AccionEquipo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWNjaW9uRXF1aXBvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlxQztBQUVhO0FBR0w7QUFDUztBQUNBO0FBRUk7QUFFM0MsU0FBU00sYUFBYSxLQUF3QjtRQUF4QixFQUFDQyxNQUFNLEVBQWlCLEdBQXhCOztJQUNuQyxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNELE1BQU0sQ0FBQ1EscUJBQXFCQyx1QkFBdUIsR0FBR1QsK0NBQVFBLENBQUM7SUFFL0QsZUFBZVUsaUJBQWlCQyxJQUFTO1FBQ3ZDQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTUcsV0FBVyxNQUFNQyxNQUFNLHVDQUF1QztZQUNsRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNUO1FBQ3ZCO1FBRUEsTUFBTVUsY0FBYyxNQUFNUCxTQUFTUSxJQUFJO1FBRXZDcEIsZ0VBQWlCQTtRQUVqQlUsUUFBUUMsR0FBRyxDQUFDUTtRQUVaLElBQUdBLFlBQVlFLE1BQU0sSUFBSSxLQUFLO1lBQzVCQyxNQUFNO1FBQ1IsT0FBSztZQUNIQSxNQUFNSCxZQUFZSSxPQUFPO1FBQzNCO1FBRUEsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxTQUFTO1FBQ1QsOENBQThDO1FBQzlDLFFBQVE7UUFFUmxCLHFCQUFxQjtJQUN2QjtJQUVBLGVBQWVtQixtQkFBbUJmLElBQVM7UUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxXQUFXLE1BQU1DLE1BQU0sMENBQTBDO1lBQ3JFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1Q7UUFDdkI7UUFFQSxNQUFNVSxjQUFjLE1BQU1QLFNBQVNRLElBQUk7UUFFdkMsSUFBR0QsWUFBWUUsTUFBTSxJQUFJLEtBQUs7WUFDNUJDLE1BQU07UUFDUixPQUFLO1lBQ0hBLE1BQU1ILFlBQVlJLE9BQU87UUFDM0I7UUFFQXZCLGdFQUFpQkE7UUFDakJPLHVCQUF1QjtJQUN6QjtJQUVBLHFCQUNFLDhEQUFDa0I7OzBCQUNDLDhEQUFDQTs7b0JBQ0V0QixPQUFPdUIsVUFBVSxpQkFDaEIsOERBQUM5Qiw4Q0FBTUE7d0JBQUMrQixTQUFRO3dCQUFVQyxNQUFLO3dCQUFLQyxXQUFVO3dCQUEyRUMsU0FBUyxJQUFNekIscUJBQXFCO2tDQUFPOzs7Ozs2Q0FJcEssOERBQUNULDhDQUFNQTt3QkFBQytCLFNBQVE7d0JBQVVDLE1BQUs7d0JBQUtDLFdBQVU7d0JBQThFQyxTQUFTLElBQU12Qix1QkFBdUI7a0NBQU87Ozs7OztrQ0FJM0ssOERBQUNYLDhDQUFNQTt3QkFBQ2dDLE1BQUs7d0JBQUtELFNBQVE7d0JBQVVFLFdBQVU7a0NBQXNFOzs7Ozs7Ozs7Ozs7MEJBRXRILDhEQUFDaEMseURBQWdCQTtnQkFBQ2tDLE9BQU87Z0JBQXFCNUIsUUFBUUE7Z0JBQVE2QixNQUFNNUI7Z0JBQW1CNkIsU0FBUzVCOzBCQUM5Riw0RUFBQ04sMkRBQWtCQTtvQkFBQ0ksUUFBUUE7b0JBQVFLLGtCQUFrQkE7b0JBQWtCMEIsY0FBYyxJQUFNN0IscUJBQXFCOzs7Ozs7Ozs7OzswQkFFbkgsOERBQUNSLHlEQUFnQkE7Z0JBQUNrQyxPQUFPO2dCQUF1QjVCLFFBQVFBO2dCQUFRNkIsTUFBTTFCO2dCQUFxQjJCLFNBQVMxQjswQkFDbEcsNEVBQUNOLDZEQUFvQkE7b0JBQUNFLFFBQVFBO29CQUFRcUIsb0JBQW9CQTtvQkFBb0JVLGNBQWMsSUFBTTNCLHVCQUF1Qjs7Ozs7Ozs7Ozs7O09BakJuSEosT0FBT2dDLEVBQUU7Ozs7O0FBcUJ2QjtHQS9Fd0JqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FjY2lvbkVxdWlwby50c3g/NjlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUNvbnRlbnQsIERyb3Bkb3duTWVudUl0ZW0sIERyb3Bkb3duTWVudUxhYmVsLCBEcm9wZG93bk1lbnVTZXBhcmF0b3IsIERyb3Bkb3duTWVudVRyaWdnZXIgfSBmcm9tIFwiLi91aS9kcm9wZG93bi1tZW51XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgRXF1aXBvIGZyb20gXCJAL3R5cGVzL0VxdWlwb1wiO1xyXG5pbXBvcnQgTW9kYWxUcmFuc2FjY2lvbiBmcm9tIFwiLi9Nb2RhbFRyYW5zYWNjaW9uXCI7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQWxlcnREaWFsb2dDb250ZW50LCBBbGVydERpYWxvZ0hlYWRlciwgQWxlcnREaWFsb2dUaXRsZSwgQWxlcnREaWFsb2dUcmlnZ2VyIH0gZnJvbSBcIi4vdWkvYWxlcnQtZGlhbG9nXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtdWxhcmlvUHJlc3RhbW8gZnJvbSBcIi4vRm9ybXVsYXJpb1ByZXN0YW1vXCI7XHJcbmltcG9ydCByZXZhbGlkYXRlRXF1aXBvcyBmcm9tIFwiQC9hcHAvZXF1aXBvcy9hY3Rpb25zXCI7XHJcbmltcG9ydCBFc3RhZG9zQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XHJcbmltcG9ydCBGb3JtdWxhcmlvRGV2b2x1Y2lvbiBmcm9tIFwiLi9Gb3JtdWxhcmlvRGV2b2x1Y2lvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjaW9uRXF1aXBvKHtlcXVpcG99OntlcXVpcG86RXF1aXBvfSl7XHJcbiAgY29uc3QgW29wZW5QcmVzdGFtb01vZGFsLCBzZXRPcGVuUHJlc3RhbW9Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5EZXZvbHVjaW9uTW9kYWwsIHNldE9wZW5EZXZvbHVjaW9uTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBpbmdyZXNhclByZXN0YW1vKGRhdGE6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgyL2FwaS9wcmVzdGFtb3NcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZUVxdWlwb3MoKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocmF3UmVzcG9uc2UpO1xyXG5cclxuICAgIGlmKHJhd1Jlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgYWxlcnQoXCJQcsOpc3RhbW8gaW5ncmVzYWRvIGV4aXTDs3NhbWVudGUuXCIpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGFsZXJ0KHJhd1Jlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmKHJhd1Jlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgIC8vICAgYWxlcnQocmF3UmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAvLyB9ZWxzZXtcclxuICAgIC8vICAgYWxlcnQoXCJQcsOpc3RhbW8gaW5ncmVzYWRvIGV4aXTDs3NhbWVudGUuXCIpXHJcbiAgICAvLyB9ICAgIFxyXG4gIFxyXG4gICAgc2V0T3BlblByZXN0YW1vTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaW5ncmVzYXJEZXZvbHVjaW9uKGRhdGE6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgyL2FwaS9kZXZvbHVjaW9uZXNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYocmF3UmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBhbGVydChcIkRldm9sdWNpw7NuIGluZ3Jlc2FkYSBleGl0w7NzYW1lbnRlLlwiKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBhbGVydChyYXdSZXNwb25zZS5tZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZhbGlkYXRlRXF1aXBvcygpO1xyXG4gICAgc2V0T3BlbkRldm9sdWNpb25Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGtleT17ZXF1aXBvLmlkfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZXF1aXBvLmRpc3BvbmlibGUgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiYmctdGVhbC01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy10ZWFsLTIwMCBob3Zlcjp0ZXh0LXRlYWwtODAwIG1iLTIgdy1mdWxsXCIgb25DbGljaz17KCkgPT4gc2V0T3BlblByZXN0YW1vTW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICBQcsOpc3RhbW9cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiYmctYW1iZXItNTAwIHRleHQtd2hpdGUgaG92ZXI6YmctYW1iZXItMjAwIGhvdmVyOnRleHQtYW1iZXItODAwIG1iLTIgdy1mdWxsXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbkRldm9sdWNpb25Nb2RhbCh0cnVlKX0+XHJcbiAgICAgICAgICAgIERldm9sdWNpw7NuXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfSAgICAgICAgIFxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtMjAwIGhvdmVyOnRleHQtYmx1ZS04MDAgdy1mdWxsXCI+UmVwb3J0ZTwvQnV0dG9uPiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFRyYW5zYWNjaW9uIHRpdGxlPXtcIkluZ3Jlc2FyIHByw6lzdGFtb1wifSBlcXVpcG89e2VxdWlwb30gb3Blbj17b3BlblByZXN0YW1vTW9kYWx9IHNldE9wZW49e3NldE9wZW5QcmVzdGFtb01vZGFsfT5cclxuICAgICAgICA8Rm9ybXVsYXJpb1ByZXN0YW1vIGVxdWlwbz17ZXF1aXBvfSBpbmdyZXNhclByZXN0YW1vPXtpbmdyZXNhclByZXN0YW1vfSBoYW5kbGVDYW5jZWw9eygpID0+IHNldE9wZW5QcmVzdGFtb01vZGFsKGZhbHNlKX0vPlxyXG4gICAgICA8L01vZGFsVHJhbnNhY2Npb24+XHJcbiAgICAgIDxNb2RhbFRyYW5zYWNjaW9uIHRpdGxlPXtcIkluZ3Jlc2FyIGRldm9sdWNpw7NuXCJ9IGVxdWlwbz17ZXF1aXBvfSBvcGVuPXtvcGVuRGV2b2x1Y2lvbk1vZGFsfSBzZXRPcGVuPXtzZXRPcGVuRGV2b2x1Y2lvbk1vZGFsfT5cclxuICAgICAgICA8Rm9ybXVsYXJpb0Rldm9sdWNpb24gZXF1aXBvPXtlcXVpcG99IGluZ3Jlc2FyRGV2b2x1Y2lvbj17aW5ncmVzYXJEZXZvbHVjaW9ufSBoYW5kbGVDYW5jZWw9eygpID0+IHNldE9wZW5EZXZvbHVjaW9uTW9kYWwoZmFsc2UpfS8+XHJcbiAgICAgIDwvTW9kYWxUcmFuc2FjY2lvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJNb2RhbFRyYW5zYWNjaW9uIiwidXNlU3RhdGUiLCJGb3JtdWxhcmlvUHJlc3RhbW8iLCJyZXZhbGlkYXRlRXF1aXBvcyIsIkZvcm11bGFyaW9EZXZvbHVjaW9uIiwiQWNjaW9uRXF1aXBvIiwiZXF1aXBvIiwib3BlblByZXN0YW1vTW9kYWwiLCJzZXRPcGVuUHJlc3RhbW9Nb2RhbCIsIm9wZW5EZXZvbHVjaW9uTW9kYWwiLCJzZXRPcGVuRGV2b2x1Y2lvbk1vZGFsIiwiaW5ncmVzYXJQcmVzdGFtbyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJhd1Jlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsImFsZXJ0IiwibWVzc2FnZSIsImluZ3Jlc2FyRGV2b2x1Y2lvbiIsImRpdiIsImRpc3BvbmlibGUiLCJ2YXJpYW50Iiwic2l6ZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0aXRsZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2FuY2VsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AccionEquipo.tsx\n"));

/***/ })

});