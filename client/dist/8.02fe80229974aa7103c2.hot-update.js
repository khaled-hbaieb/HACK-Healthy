webpackHotUpdate(8,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/post/Post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import { butter } from \"buttercms\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"post\",\n  data: function data() {\n    return {\n      post: \"\",\n      comment: \"\",\n      comments: []\n    };\n  },\n  beforeMount: function () {\n    var _beforeMount = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/posts/findPost');\n\n            case 2:\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(\"/api/posts/updatePost\", {\n                filter: {\n                  _id: window.location.pathname.slice(14)\n                },\n                payload: {\n                  views: this.post.views + 1\n                }\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function beforeMount() {\n      return _beforeMount.apply(this, arguments);\n    }\n\n    return beforeMount;\n  }(),\n  methods: {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2RvY3Rvci9jb21wb25lbnRzL3Bvc3QvUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Bvc3QudnVlPzRjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8IS0tIDx2cy1jYXJkIGlkPVwiYmxvZy1wb3N0XCI+IC0tPlxyXG4gICAgPCEtLSA8aDE+e3sgcG9zdC50aXRsZSB9fTwvaDE+XHJcbiAgICAgIDxoND57eyBwb3N0LmF1dGhvci5maXJzdF9uYW1lIH19IHt7IHBvc3QuYXV0aG9yLmxhc3RfbmFtZSB9fTwvaDQ+XHJcbiAgICAgIDxkaXYgdi1odG1sPVwicG9zdC5ib2R5XCI+PC9kaXY+IC0tPlxyXG4gICAgPCEtLSA8dnMtYnV0dG9uIEBjbGljaz1cImRyb3BcIj5SZXBseTwvdnMtYnV0dG9uPlxyXG4gICAgPC92cy1jYXJkPlxyXG4gICAgPHZzLWNhcmQgaWQ9XCJ0b2FkZFwiPiA8L3ZzLWNhcmQ+XHJcbiAgICA8dnMtY2FyZCBpZD1cInJlcGx5XCI+XHJcbiAgICAgIDx2cy10ZXh0YXJlYVxyXG4gICAgICAgIEBpbnB1dD1cImFkZENvbW1lbnRcIlxyXG4gICAgICAgIGxhYmVsPVwiXCJcclxuICAgICAgICBoZWlnaHQ9XCIxNTBweFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBpZD1cImNvbW1lbnRUb1wiXHJcbiAgICAgIC8+PGJyIC8+XHJcbiAgICAgIDx2cy1idXR0b24gQGNsaWNrPVwiYWRkQ1wiPkFkZDwvdnMtYnV0dG9uPlxyXG4gICAgPC92cy1jYXJkPiAtLT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IHsgYnV0dGVyIH0gZnJvbSBcImJ1dHRlcmNtc1wiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwicG9zdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0OiBcIlwiLFxyXG4gICAgICBjb21tZW50OiBcIlwiLFxyXG4gICAgICBjb21tZW50czogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgYXN5bmMgYmVmb3JlTW91bnQoKSB7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Bvc3RzL2ZpbmRQb3N0JylcclxuICAgIGF3YWl0IGF4aW9zLnB1dChcIi9hcGkvcG9zdHMvdXBkYXRlUG9zdFwiLCB7XHJcbiAgICAgIGZpbHRlcjogeyBfaWQ6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxNCkgfSxcclxuICAgICAgcGF5bG9hZDogeyB2aWV3czogdGhpcy5wb3N0LnZpZXdzICsgMSB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuI3JlcGx5IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZ0JBO0FBaEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&\n");

/***/ })

})