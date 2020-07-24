webpackHotUpdate("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.module */ \"./src/store/auth.module.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  state: {\n    isSidebarActive: false,\n    themeColor: \"#2962ff\",\n    isAuthenticated: !!localStorage.token || false\n  },\n  mutations: {\n    IS_SIDEBAR_ACTIVE: function IS_SIDEBAR_ACTIVE(state, value) {\n      state.isSidebarActive = value;\n    }\n  },\n  actions: {},\n  getters: {},\n  modules: {\n    auth: _auth_module__WEBPACK_IMPORTED_MODULE_2__[\"auth\"]\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanM/MDdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IFZ1ZXggZnJvbSBcInZ1ZXhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vYXV0aC5tb2R1bGUnO1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgc3RhdGU6IHtcclxuICAgIGlzU2lkZWJhckFjdGl2ZTogZmFsc2UsXHJcbiAgICB0aGVtZUNvbG9yOiBcIiMyOTYyZmZcIixcclxuICAgIGlzQXV0aGVudGljYXRlZDogISFsb2NhbFN0b3JhZ2UudG9rZW4gfHwgZmFsc2UsXHJcbiAgfSxcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIElTX1NJREVCQVJfQUNUSVZFKHN0YXRlLCB2YWx1ZSkge1xyXG4gICAgICBzdGF0ZS5pc1NpZGViYXJBY3RpdmUgPSB2YWx1ZTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBcclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuXHJcbiAgfSxcclxuICBtb2R1bGVzOiB7XHJcbiAgICBhdXRoXHJcbiAgfSxcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBR0E7QUFDQTtBQURBO0FBakJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

})