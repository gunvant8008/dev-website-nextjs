"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logoIcons_SunLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logoIcons/SunLogo */ \"./src/components/logoIcons/SunLogo.jsx\");\n/* harmony import */ var _logoIcons_MoonLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logoIcons/MoonLogo */ \"./src/components/logoIcons/MoonLogo.jsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const { systemTheme , theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    const renderThemeChanger = ()=>{\n        if (!mounted) return null;\n        const currentTheme = theme === \"system\" ? systemTheme : theme;\n        if (currentTheme === \"dark\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-yellow-500 border-none\",\n                onClick: ()=>setTheme(\"light\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logoIcons_SunLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"border-none\",\n                onClick: ()=>setTheme(\"dark\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logoIcons_MoonLogo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"dark:bg-dark-4 dark:text-gray-100 bg-light-1 p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" container flex-col justify-between m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            rel: \"noopener noreferrer\",\n                            href: \"/\",\n                            \"aria-label\": \"Back to homepage\",\n                            className: \"md:text-4xl flex items-center p-2 text-2xl font-bold\",\n                            children: \"G.S.Labs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        renderThemeChanger()\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex items-center justify-center p-1 border-2 border-gray-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                rel: \"noopener noreferrer\",\n                                href: \"/\",\n                                className: \"link flex items-center px-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillHome, {\n                                    className: \"text-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                rel: \"noopener noreferrer\",\n                                href: \"https://github.com/gunvant8008\",\n                                className: \"link flex items-center px-4\",\n                                target: \"_blank\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiFillGithub, {\n                                    className: \"text-2xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                rel: \"noopener noreferrer\",\n                                href: \"https://www.linkedin.com/in/gunvant-sharma-006057b2/\",\n                                className: \"link flex items-center px-4\",\n                                target: \"_blank\",\n                                children: \"LinkedIn\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                rel: \"noopener noreferrer\",\n                                href: \"/contact\",\n                                className: \"link flex items-center px-4\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"cOKLkRcZNbCdMKEM8Lp+dLN5ZYU=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = Header;\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \" dark:bg-dark-4 bg-light-1 py-4 mt-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex justify-center mx-auto\",\n            children: \"\\xa9 2023 G.S.Labs\"\n        }, void 0, false, {\n            fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Footer;\nfunction Layout(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container flex-1 mx-auto\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {\n                fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gunvantsharma/Desktop/deployedProjects/01personal-blog-next-tcss/src/components/Layout.jsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"Footer\");\n$RefreshReg$(_c2, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVTtBQUNLO0FBQ0Y7QUFDRTtBQUNjO0FBRXpELFNBQVNRLFNBQVM7O0lBQ2hCLE1BQU0sRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHVixxREFBUUE7SUFDakQsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUNELGdEQUFTQSxDQUFDLElBQU07UUFDZFcsV0FBVyxJQUFJO0lBQ2pCLEdBQUcsRUFBRTtJQUVMLE1BQU1DLHFCQUFxQixJQUFNO1FBQy9CLElBQUksQ0FBQ0YsU0FBUyxPQUFPLElBQUk7UUFDekIsTUFBTUcsZUFBZUwsVUFBVSxXQUFXRCxjQUFjQyxLQUFLO1FBQzdELElBQUlLLGlCQUFpQixRQUFRO1lBQzNCLHFCQUNFLDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsU0FBUyxJQUFNUCxTQUFTOzBCQUV4Qiw0RUFBQ1AsMERBQU9BOzs7Ozs7Ozs7O1FBR2QsT0FBTztZQUNMLHFCQUNFLDhEQUFDWTtnQkFBT0MsV0FBVTtnQkFBY0MsU0FBUyxJQUFNUCxTQUFTOzBCQUN0RCw0RUFBQ04sMkRBQVFBOzs7Ozs7Ozs7O1FBR2YsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNjO1FBQU9GLFdBQVU7a0JBQ2hCLDRFQUFDRztZQUFJSCxXQUFVOzs4QkFDYiw4REFBQ0c7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDakIsa0RBQUlBOzRCQUNIcUIsS0FBSTs0QkFDSkMsTUFBSzs0QkFDTEMsY0FBVzs0QkFDWE4sV0FBVTtzQ0FDWDs7Ozs7O3dCQUdBSDs7Ozs7Ozs4QkFHSCw4REFBQ1U7b0JBQUdQLFdBQVU7O3NDQUNaLDhEQUFDUTs0QkFBR1IsV0FBVTtzQ0FDWiw0RUFBQ2pCLGtEQUFJQTtnQ0FDSHFCLEtBQUk7Z0NBQ0pDLE1BQUs7Z0NBQ0xMLFdBQVU7MENBRVYsNEVBQUNYLHNEQUFVQTtvQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNROzRCQUFHUixXQUFVO3NDQUNaLDRFQUFDakIsa0RBQUlBO2dDQUNIcUIsS0FBSTtnQ0FDSkMsTUFBSztnQ0FDTEwsV0FBVTtnQ0FDVlMsUUFBTzswQ0FFUCw0RUFBQ25CLHdEQUFZQTtvQ0FBQ1UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUNROzRCQUFHUixXQUFVO3NDQUNaLDRFQUFDakIsa0RBQUlBO2dDQUNIcUIsS0FBSTtnQ0FDSkMsTUFBSztnQ0FDTEwsV0FBVTtnQ0FDVlMsUUFBTzswQ0FDUjs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNEOzRCQUFHUixXQUFVO3NDQUNaLDRFQUFDakIsa0RBQUlBO2dDQUNIcUIsS0FBSTtnQ0FDSkMsTUFBSztnQ0FDTEwsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBdkZTVDs7UUFDa0NQLGlEQUFRQTs7O0tBRDFDTztBQXlGVCxTQUFTbUIsU0FBUztJQUNoQixxQkFDRSw4REFBQ0M7UUFBT1gsV0FBVTtrQkFDaEIsNEVBQUNHO1lBQUlILFdBQVU7c0JBQXdDOzs7Ozs7Ozs7OztBQUs3RDtNQVJTVTtBQVVULFNBQVNFLE9BQU8sS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7SUFDZCxxQkFDRSw4REFBQ1Y7UUFBSUgsV0FBVTs7MEJBQ2IsOERBQUNUOzs7OzswQkFDRCw4REFBQ3VCO2dCQUFLZCxXQUFVOzBCQUE0QmE7Ozs7OzswQkFDNUMsOERBQUNIOzs7Ozs7Ozs7OztBQUdQO01BUlNFO0FBVVQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzeD80MWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgU3VuTG9nbyBmcm9tIFwiLi9sb2dvSWNvbnMvU3VuTG9nb1wiXG5pbXBvcnQgTW9vbkxvZ28gZnJvbSBcIi4vbG9nb0ljb25zL01vb25Mb2dvXCJcbmltcG9ydCB7IEFpRmlsbEhvbWUsIEFpRmlsbEdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyBzeXN0ZW1UaGVtZSwgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKVxuICB9LCBbXSlcblxuICBjb25zdCByZW5kZXJUaGVtZUNoYW5nZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IHRoZW1lID09PSBcInN5c3RlbVwiID8gc3lzdGVtVGhlbWUgOiB0aGVtZVxuICAgIGlmIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIGJvcmRlci1ub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImxpZ2h0XCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPFN1bkxvZ28gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmVcIiBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImRhcmtcIil9PlxuICAgICAgICAgIDxNb29uTG9nbyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZGFyazpiZy1kYXJrLTQgZGFyazp0ZXh0LWdyYXktMTAwIGJnLWxpZ2h0LTEgcC0yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG0tYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhY2sgdG8gaG9tZXBhZ2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dGV4dC00eGwgZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtMnhsIGZvbnQtYm9sZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRy5TLkxhYnNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge3JlbmRlclRoZW1lQ2hhbmdlcigpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWlGaWxsSG9tZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3VudmFudDgwMDhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ndW52YW50LXNoYXJtYS0wMDYwNTdiMi9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMaW5rZWRJblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBocmVmPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIiBkYXJrOmJnLWRhcmstNCBiZy1saWdodC0xIHB5LTQgbXQtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvXCI+XG4gICAgICAgICZjb3B5OyAyMDIzIEcuUy5MYWJzXG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4LTEgbXgtYXV0b1wiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdW5Mb2dvIiwiTW9vbkxvZ28iLCJBaUZpbGxIb21lIiwiQWlGaWxsR2l0aHViIiwiSGVhZGVyIiwic3lzdGVtVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJyZW5kZXJUaGVtZUNoYW5nZXIiLCJjdXJyZW50VGhlbWUiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaGVhZGVyIiwiZGl2IiwicmVsIiwiaHJlZiIsImFyaWEtbGFiZWwiLCJ1bCIsImxpIiwidGFyZ2V0IiwiRm9vdGVyIiwiZm9vdGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.jsx\n"));

/***/ })

});