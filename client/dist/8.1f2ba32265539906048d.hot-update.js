webpackHotUpdate(8,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/post/Post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import { butter } from \"buttercms\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"post\",\n  data: function data() {\n    return {\n      post: \"\",\n      comment: \"\",\n      ready: false,\n      comments: []\n    };\n  },\n  beforeMount: function () {\n    var _beforeMount = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var post;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/posts/findPost\", {\n                _id: window.location.pathname.slice(14)\n              });\n\n            case 2:\n              post = _context.sent;\n              this.post = post.data[0];\n              this.ready = true;\n              axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"/api/posts/updatePost\", {\n                filter: {\n                  _id: this.post._id\n                },\n                payload: {\n                  views: (Number(this.post.views) + 1).toString()\n                }\n              });\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function beforeMount() {\n      return _beforeMount.apply(this, arguments);\n    }\n\n    return beforeMount;\n  }(),\n  methods: {\n    addComment: function () {\n      var _addComment = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                console.log(this.comment);\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function addComment() {\n        return _addComment.apply(this, arguments);\n      }\n\n      return addComment;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2RvY3Rvci9jb21wb25lbnRzL3Bvc3QvUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Bvc3QudnVlPzRjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cInJlYWR5XCI+XHJcbiAgICA8dnMtcm93PlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1jYXJkPlxyXG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT57eyBwb3N0LnRpdGxlIH19PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc2xvdD1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvaW1hZ2VzL2xvZ28vZm9ydW0uanBlZ1wiIGlkPVwiaW1nc2V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cInBvc3QuY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8dnMtcm93PlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiOVwiPlxyXG4gICAgICAgICAgICAgIDxoND57eyBwb3N0Lm5hbWVPZlBvc3RlciB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvdnMtY29sPlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxoND57eyBwb3N0LnZpZXdzIH19PC9oND5cclxuICAgICAgICAgICAgPC92cy1jb2w+XHJcbiAgICAgICAgICA8L3ZzLXJvdz5cclxuICAgICAgICA8L3ZzLWNhcmQ+XHJcbiAgICAgIDwvdnMtY29sPlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1jYXJkPlxyXG4gICAgICAgICAgPHZzLXRleHRhcmVhXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJcIlxyXG4gICAgICAgICAgICBjb3VudGVyPVwiMjUwXCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjUwXCJcclxuICAgICAgICAgICAgY291bnRlci1kYW5nZXIuc3luY1xyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3NXB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgaWQ9XCJjb21tZW50VG9cIlxyXG4gICAgICAgICAgLz48YnIgLz5cclxuICAgICAgICAgIDx2cy1idXR0b24gQGNsaWNrPVwiYWRkQ29tbWVudFwiPkFkZDwvdnMtYnV0dG9uPlxyXG4gICAgICAgIDwvdnMtY2FyZD5cclxuICAgICAgPC92cy1jb2w+XHJcbiAgICA8L3ZzLXJvdz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IHsgYnV0dGVyIH0gZnJvbSBcImJ1dHRlcmNtc1wiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwicG9zdFwiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0OiBcIlwiLFxyXG4gICAgICBjb21tZW50OiBcIlwiLFxyXG4gICAgICByZWFkeTogZmFsc2UsXHJcbiAgICAgIGNvbW1lbnRzOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBhc3luYyBiZWZvcmVNb3VudCgpIHtcclxuICAgIGxldCBwb3N0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcG9zdHMvZmluZFBvc3RcIiwge1xyXG4gICAgICBfaWQ6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxNCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMucG9zdCA9IHBvc3QuZGF0YVswXTtcclxuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgYXhpb3MucHV0KFwiL2FwaS9wb3N0cy91cGRhdGVQb3N0XCIsIHtcclxuICAgICAgZmlsdGVyOiB7IF9pZDogdGhpcy5wb3N0Ll9pZCB9LFxyXG4gICAgICBwYXlsb2FkOiB7IHZpZXdzOiAoTnVtYmVyKHRoaXMucG9zdC52aWV3cykgKyAxKS50b1N0cmluZygpIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGFkZENvbW1lbnQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbiNyZXBseSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQURBO0FBQ0E7QUFaQTtBQVdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBcUJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXJCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&\n");

/***/ })

})