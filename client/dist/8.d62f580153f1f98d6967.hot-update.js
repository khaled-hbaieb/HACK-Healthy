webpackHotUpdate(8,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/post/Post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import { butter } from \"buttercms\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"post\",\n  data: function data() {\n    return {\n      post: \"\",\n      comment: \"\",\n      ready: false,\n      comments: []\n    };\n  },\n  beforeMount: function () {\n    var _beforeMount = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var post;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/posts/findPost\", {\n                _id: window.location.pathname.slice(14)\n              });\n\n            case 2:\n              post = _context.sent;\n              this.post = post.data[0];\n              this.ready = true;\n              axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"/api/posts/updatePost\", {\n                filter: {\n                  _id: this.post._id\n                },\n                payload: {\n                  views: (Number(this.post.views) + 1).toString()\n                }\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function beforeMount() {\n      return _beforeMount.apply(this, arguments);\n    }\n\n    return beforeMount;\n  }(),\n  methods: {\n    addComment: function addComment() {\n      console.log(this.comment);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2RvY3Rvci9jb21wb25lbnRzL3Bvc3QvUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Bvc3QudnVlPzRjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cInJlYWR5XCI+XHJcbiAgICA8dnMtcm93PlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1jYXJkPlxyXG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT57eyBwb3N0LnRpdGxlIH19PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc2xvdD1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvaW1hZ2VzL2xvZ28vZm9ydW0uanBlZ1wiIGlkPVwiaW1nc2V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cInBvc3QuY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8dnMtcm93PlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiOVwiPlxyXG4gICAgICAgICAgICAgIDxoND57eyBwb3N0Lm5hbWVPZlBvc3RlciB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvdnMtY29sPlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxoND57eyBwb3N0LnZpZXdzIH19PC9oND5cclxuICAgICAgICAgICAgPC92cy1jb2w+XHJcbiAgICAgICAgICA8L3ZzLXJvdz5cclxuICAgICAgICA8L3ZzLWNhcmQ+XHJcbiAgICAgIDwvdnMtY29sPlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1jYXJkPlxyXG4gICAgICAgICAgPHZzLXRleHRhcmVhXHJcbiAgICAgICAgICAgIGxhYmVsPVwiXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTUwcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBpZD1cImNvbW1lbnRUb1wiXHJcbiAgICAgICAgICAvPjxiciAvPlxyXG4gICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJhZGRDb21tZW50XCI+QWRkPC92cy1idXR0b24+XHJcbiAgICAgICAgPC92cy1jYXJkPlxyXG4gICAgICA8L3ZzLWNvbD5cclxuICAgIDwvdnMtcm93PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgeyBidXR0ZXIgfSBmcm9tIFwiYnV0dGVyY21zXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwb3N0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3Q6IFwiXCIsXHJcbiAgICAgIGNvbW1lbnQ6IFwiXCIsXHJcbiAgICAgIHJlYWR5OiBmYWxzZSxcclxuICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGFzeW5jIGJlZm9yZU1vdW50KCkge1xyXG4gICAgbGV0IHBvc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wb3N0cy9maW5kUG9zdFwiLCB7XHJcbiAgICAgIF9pZDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDE0KSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wb3N0ID0gcG9zdC5kYXRhWzBdO1xyXG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XHJcbiAgICBheGlvcy5wdXQoXCIvYXBpL3Bvc3RzL3VwZGF0ZVBvc3RcIiwge1xyXG4gICAgICBmaWx0ZXI6IHsgX2lkOiB0aGlzLnBvc3QuX2lkIH0sXHJcbiAgICAgIHBheWxvYWQ6IHsgdmlld3M6IChOdW1iZXIodGhpcy5wb3N0LnZpZXdzKSArIDEpLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYWRkQ29tbWVudCgpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnQpXHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuI3JlcGx5IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFEQTtBQUNBO0FBWkE7QUFXQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBckJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&\n");

/***/ })

})