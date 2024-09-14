"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkts_animates_webpack_demo"] = self["webpackChunkts_animates_webpack_demo"] || []).push([["src_pages_WebScoket_vue"],{

/***/ "./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/WebScoket.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/WebScoket.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/.pnpm/vue@3.4.25_typescript@5.4.5/node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst heartbeatTime = 5 * 1000;\nconst delayTime = 3 * 1000;\nconst reconnectTime = 10 * 1000;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n    __name: 'WebScoket',\n    setup(__props, { expose: __expose }) {\n        __expose();\n        let webSocket = null;\n        function connectWs() {\n            webSocket = new WebSocket(\"wss://www.example.com\");\n            webSocket.addEventListener(\"open\", function (event) {\n                webSocket.send(\"Hello Server\");\n                startHeartbeat();\n            });\n            webSocket.addEventListener(\"message\", function (event) {\n                isConnect = true;\n                console.log(\"Message from server\", event.data);\n            });\n            webSocket.addEventListener(\"close\", () => {\n                console.log(\"websocket close\");\n            });\n            webSocket.addEventListener(\"error\", function (event) {\n                console.log(\"Websocket connect error\", event);\n            });\n        }\n        let reconnectTimes = 3;\n        let isConnect = false; //状态是否链接中\n        function startHeartbeat() {\n            setTimeout(() => {\n                webSocket.send(JSON.stringify({ type: \"ping\" }));\n                waitingServer();\n            }, heartbeatTime);\n        }\n        function waitingServer() {\n            isConnect = false;\n            setTimeout(() => {\n                if (isConnect) {\n                    startHeartbeat();\n                    return;\n                }\n                // 三秒内没有回应\n                try {\n                    webSocket.close();\n                }\n                catch (error) {\n                    console.log(error);\n                }\n                reconnect();\n            }, delayTime);\n        }\n        function reconnect() {\n            console.log(\"reconnect websocket\", reconnectTimes);\n            connectWs();\n            if (reconnectTimes > 0) {\n                reconnectTimes -= 1;\n                if (isConnect === false) {\n                    setTimeout(() => {\n                        reconnect();\n                    }, reconnectTime);\n                }\n            }\n        }\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {\n            connectWs();\n        });\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {\n            webSocket.close();\n        });\n        const __returned__ = { get webSocket() { return webSocket; }, set webSocket(v) { webSocket = v; }, connectWs, heartbeatTime, delayTime, reconnectTime, get reconnectTimes() { return reconnectTimes; }, set reconnectTimes(v) { reconnectTimes = v; }, get isConnect() { return isConnect; }, set isConnect(v) { isConnect = v; }, startHeartbeat, waitingServer, reconnect };\n        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });\n        return __returned__;\n    }\n}));\n\n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/WebScoket.vue?./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use%5B0%5D!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/WebScoket.vue?vue&type=template&id=667e30db&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/WebScoket.vue?vue&type=template&id=667e30db&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/.pnpm/vue@3.4.25_typescript@5.4.5/node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, \"WebSocket Demo\"));\n}\n\n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/WebScoket.vue?./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use%5B0%5D!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B0%5D");

/***/ }),

/***/ "./src/pages/WebScoket.vue":
/*!*********************************!*\
  !*** ./src/pages/WebScoket.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _WebScoket_vue_vue_type_template_id_667e30db_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebScoket.vue?vue&type=template&id=667e30db&ts=true */ \"./src/pages/WebScoket.vue?vue&type=template&id=667e30db&ts=true\");\n/* harmony import */ var _WebScoket_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebScoket.vue?vue&type=script&setup=true&lang=ts */ \"./src/pages/WebScoket.vue?vue&type=script&setup=true&lang=ts\");\n/* harmony import */ var _node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_WebScoket_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_WebScoket_vue_vue_type_template_id_667e30db_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/pages/WebScoket.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/WebScoket.vue?");

/***/ }),

/***/ "./src/pages/WebScoket.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************!*\
  !*** ./src/pages/WebScoket.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_pnpm_ts_loader_9_5_1_typescript_5_4_5_webpack_5_91_0_node_modules_ts_loader_index_js_clonedRuleSet_1_use_0_loaders_test_loader_js_loaders_clean_log_loader_js_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_WebScoket_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_ts_loader_9_5_1_typescript_5_4_5_webpack_5_91_0_node_modules_ts_loader_index_js_clonedRuleSet_1_use_0_loaders_test_loader_js_loaders_clean_log_loader_js_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_WebScoket_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!../loaders/test-loader.js!../loaders/clean-log-loader.js!../../node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./WebScoket.vue?vue&type=script&setup=true&lang=ts */ \"./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/WebScoket.vue?vue&type=script&setup=true&lang=ts\");\n \n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/WebScoket.vue?");

/***/ }),

/***/ "./src/pages/WebScoket.vue?vue&type=template&id=667e30db&ts=true":
/*!***********************************************************************!*\
  !*** ./src/pages/WebScoket.vue?vue&type=template&id=667e30db&ts=true ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_ts_loader_9_5_1_typescript_5_4_5_webpack_5_91_0_node_modules_ts_loader_index_js_clonedRuleSet_1_use_0_loaders_test_loader_js_loaders_clean_log_loader_js_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_WebScoket_vue_vue_type_template_id_667e30db_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_ts_loader_9_5_1_typescript_5_4_5_webpack_5_91_0_node_modules_ts_loader_index_js_clonedRuleSet_1_use_0_loaders_test_loader_js_loaders_clean_log_loader_js_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_17_4_2_vue_3_4_25_webpack_5_91_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_WebScoket_vue_vue_type_template_id_667e30db_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!../loaders/test-loader.js!../loaders/clean-log-loader.js!../../node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./WebScoket.vue?vue&type=template&id=667e30db&ts=true */ \"./node_modules/.pnpm/ts-loader@9.5.1_typescript@5.4.5_webpack@5.91.0/node_modules/ts-loader/index.js??clonedRuleSet-1.use[0]!./src/loaders/test-loader.js!./src/loaders/clean-log-loader.js!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.4.25_webpack@5.91.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/pages/WebScoket.vue?vue&type=template&id=667e30db&ts=true\");\n\n\n//# sourceURL=webpack://ts-animates-webpack-demo/./src/pages/WebScoket.vue?");

/***/ })

}]);