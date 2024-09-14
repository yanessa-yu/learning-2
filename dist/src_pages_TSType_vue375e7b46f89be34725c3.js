"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkts_animates_webpack_demo"] = self["webpackChunkts_animates_webpack_demo"] || []).push([["src_pages_TSType_vue"],{

/***/ "./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/TSType.vue?vue&type=script&setup=true&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/TSType.vue?vue&type=script&setup=true&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/.pnpm/vue@3.4.25_typescript@5.4.5/node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nvar Direction;\n(function (Direction) {\n    Direction[Direction[\"Up\"] = 0] = \"Up\";\n    Direction[Direction[\"Down\"] = 1] = \"Down\";\n    Direction[Direction[\"Left\"] = 2] = \"Left\";\n    Direction[Direction[\"Right\"] = 3] = \"Right\";\n})(Direction || (Direction = {}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    __name: 'TSType',\n    setup(__props, { expose: __expose }) {\n        __expose();\n        function getName(n) {\n            if (typeof n === \"string\") {\n                return n;\n            }\n            else {\n                return n();\n            }\n        }\n        getName(\"abc\");\n        //  类型别名作用于元组\n        let x = [\"a\", 1];\n        console.log(x);\n        let d = Direction.Up;\n        console.log(d);\n        let p = {\n            name: \"jason\",\n            age: 11,\n        };\n        console.log(p);\n        const woman = {\n            name: \"lily\",\n            age: 18,\n            childBearing: true,\n        };\n        console.log(woman);\n        const point = {\n            x: 0,\n            y: 0,\n        };\n        console.log(point);\n        const foo = {\n            add(num) {\n                this.result = num;\n                return this;\n            },\n        };\n        console.log(foo.add(12));\n        const __returned__ = { getName, get x() { return x; }, set x(v) { x = v; }, Direction, get d() { return d; }, set d(v) { d = v; }, get p() { return p; }, set p(v) { p = v; }, woman, point, foo };\n        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });\n        return __returned__;\n    }\n}));\n\n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/TSType.vue?./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B0%5D");

/***/ }),

/***/ "./src/pages/TSType.vue":
/*!******************************!*\
  !*** ./src/pages/TSType.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TSType_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TSType.vue?vue&type=script&setup=true&lang=ts */ \"./src/pages/TSType.vue?vue&type=script&setup=true&lang=ts\");\n/* harmony import */ var _node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_TSType_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"], [['__file',\"src/pages/TSType.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/TSType.vue?");

/***/ }),

/***/ "./src/pages/TSType.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************!*\
  !*** ./src/pages/TSType.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_pnpm_ts_loader_9_5_1_typescript_5_4_5_webpack_5_91_0_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_TSType_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_ts_loader_9_5_1_typescript_5_4_5_webpack_5_91_0_node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_TSType_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1!../../node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./TSType.vue?vue&type=script&setup=true&lang=ts */ \"./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/TSType.vue?vue&type=script&setup=true&lang=ts\");\n \n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/TSType.vue?");

/***/ })

}]);