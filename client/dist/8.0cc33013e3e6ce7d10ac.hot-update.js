webpackHotUpdate(8,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/post/Post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import { butter } from \"buttercms\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"post\",\n  data: function data() {\n    return {\n      post: \"\",\n      comment: \"\",\n      ready: false,\n      comments: []\n    };\n  },\n  Upd: function () {\n    var _Upd = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var post;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/posts/findPost\", {\n                _id: window.location.pathname.slice(14)\n              });\n\n            case 2:\n              post = _context.sent;\n              this.post = post.data[0];\n              console.log(this.post.views);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function Upd() {\n      return _Upd.apply(this, arguments);\n    }\n\n    return Upd;\n  }(),\n  beforeMount: function () {\n    var _beforeMount = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      var post, comments;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/posts/findPost\", {\n                _id: window.location.pathname.slice(14)\n              });\n\n            case 2:\n              post = _context2.sent;\n              this.post = post.data[0];\n              _context2.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/comments/findComments\", {\n                idOfPost: this.post._id\n              });\n\n            case 6:\n              comments = _context2.sent;\n              axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"/api/posts/updatePost\", {\n                filter: {\n                  _id: this.post._id\n                },\n                payload: {\n                  views: (Number(this.post.views) + 1).toString()\n                }\n              });\n              this.comments = comments.data;\n              this.ready = true;\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    function beforeMount() {\n      return _beforeMount.apply(this, arguments);\n    }\n\n    return beforeMount;\n  }(),\n  methods: {\n    addComment: function () {\n      var _addComment = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        var comments;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/comments/createComment\", {\n                  idOfPost: this.post._id,\n                  nameOfCommenter: this.post.nameOfPoster,\n                  text: this.comment,\n                  roleOfSender: localStorage.role\n                });\n\n              case 2:\n                _context3.next = 4;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/comments/findComments\", {\n                  idOfPost: this.post._id\n                });\n\n              case 4:\n                comments = _context3.sent;\n                this.comments = comments.data;\n                this.comment = \"\";\n\n              case 7:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function addComment() {\n        return _addComment.apply(this, arguments);\n      }\n\n      return addComment;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2RvY3Rvci9jb21wb25lbnRzL3Bvc3QvUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Bvc3QudnVlPzRjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cInJlYWR5XCI+XHJcbiAgICA8dnMtcm93PlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1jYXJkPlxyXG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT57eyBwb3N0LnRpdGxlIH19PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc2xvdD1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvaW1hZ2VzL2xvZ28vZm9ydW0uanBlZ1wiIGlkPVwiaW1nc2V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cInBvc3QuY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8dnMtcm93PlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiOVwiPlxyXG4gICAgICAgICAgICAgIDxoND5Qb3N0ZXI6IHt7IHBvc3QubmFtZU9mUG9zdGVyIH19PC9oND5cclxuICAgICAgICAgICAgPC92cy1jb2w+XHJcbiAgICAgICAgICAgIDx2cy1jb2wgdnMtbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlZpZXdzOiB7eyBwb3N0LnZpZXdzIH19PC9oND5cclxuICAgICAgICAgICAgPC92cy1jb2w+XHJcbiAgICAgICAgICA8L3ZzLXJvdz5cclxuICAgICAgICA8L3ZzLWNhcmQ+XHJcbiAgICAgIDwvdnMtY29sPlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1yb3cgdi1pZj1cInRoaXMuY29tbWVudHMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgPHZzLWNhcmQ+XHJcbiAgICAgICAgICAgIDx2cy1jb2wgdi1mb3I9XCIoY29tbWVudCwgaW5kZXgpIGluIGNvbW1lbnRzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPGg2IHYtaWY9XCJjb21tZW50LnJvbGVPZlNlbmRlciA9PT0gJ2RvY3RvcidcIj5cclxuICAgICAgICAgICAgICAgIERvY3RvclxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57eyBjb21tZW50Lm5hbWVPZkNvbW1lbnRlciB9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGg2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgY29tbWVudC5uYW1lT2ZDb21tZW50ZXIgfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNj57eyBjb21tZW50LnRleHQgfX08L2g2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8L3ZzLWNvbD5cclxuICAgICAgICAgIDwvdnMtY2FyZD5cclxuICAgICAgICA8L3ZzLXJvdz5cclxuICAgICAgICA8dnMtcm93PlxyXG4gICAgICAgICAgPHZzLWNhcmQ+XHJcbiAgICAgICAgICAgIDx2cy10ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlwiXHJcbiAgICAgICAgICAgICAgY291bnRlcj1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjUwXCJcclxuICAgICAgICAgICAgICBjb3VudGVyLWRhbmdlci5zeW5jXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBpZD1cImNvbW1lbnRUb1wiXHJcbiAgICAgICAgICAgIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b24gQGNsaWNrPVwiYWRkQ29tbWVudFwiPkFkZDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgPC92cy1jYXJkPlxyXG4gICAgICAgIDwvdnMtcm93PlxyXG4gICAgICA8L3ZzLWNvbD5cclxuICAgIDwvdnMtcm93PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgeyBidXR0ZXIgfSBmcm9tIFwiYnV0dGVyY21zXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJwb3N0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3Q6IFwiXCIsXHJcbiAgICAgIGNvbW1lbnQ6IFwiXCIsXHJcbiAgICAgIHJlYWR5OiBmYWxzZSxcclxuICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGFzeW5jIFVwZCgpIHtcclxuICAgIGxldCBwb3N0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcG9zdHMvZmluZFBvc3RcIiwge1xyXG4gICAgICBfaWQ6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxNCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMucG9zdCA9IHBvc3QuZGF0YVswXTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdC52aWV3cyk7XHJcbiAgfSxcclxuICBhc3luYyBiZWZvcmVNb3VudCgpIHtcclxuICAgIGxldCBwb3N0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcG9zdHMvZmluZFBvc3RcIiwge1xyXG4gICAgICBfaWQ6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zbGljZSgxNCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMucG9zdCA9IHBvc3QuZGF0YVswXTtcclxuICAgIGxldCBjb21tZW50cyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvbW1lbnRzL2ZpbmRDb21tZW50c1wiLCB7XHJcbiAgICAgIGlkT2ZQb3N0OiB0aGlzLnBvc3QuX2lkLFxyXG4gICAgfSk7XHJcbiAgICBheGlvcy5wdXQoXCIvYXBpL3Bvc3RzL3VwZGF0ZVBvc3RcIiwge1xyXG4gICAgICBmaWx0ZXI6IHsgX2lkOiB0aGlzLnBvc3QuX2lkIH0sXHJcbiAgICAgIHBheWxvYWQ6IHsgdmlld3M6IChOdW1iZXIodGhpcy5wb3N0LnZpZXdzKSArIDEpLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzLmRhdGE7XHJcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGFkZENvbW1lbnQoKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvbW1lbnRzL2NyZWF0ZUNvbW1lbnRcIiwge1xyXG4gICAgICAgIGlkT2ZQb3N0OiB0aGlzLnBvc3QuX2lkLFxyXG4gICAgICAgIG5hbWVPZkNvbW1lbnRlcjogdGhpcy5wb3N0Lm5hbWVPZlBvc3RlcixcclxuICAgICAgICB0ZXh0OiB0aGlzLmNvbW1lbnQsXHJcbiAgICAgICAgcm9sZU9mU2VuZGVyOiBsb2NhbFN0b3JhZ2Uucm9sZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvbW1lbnRzL2ZpbmRDb21tZW50c1wiLCB7XHJcbiAgICAgICAgaWRPZlBvc3Q6IHRoaXMucG9zdC5faWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHMuZGF0YTtcclxuICAgICAgdGhpcy5jb21tZW50ID0gXCJcIjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuI3JlcGx5IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBREE7QUFDQTtBQVpBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBREE7QUFDQTtBQW5CQTtBQWtCQTtBQUdBO0FBckJBO0FBQUE7QUF1QkE7QUFEQTtBQUNBO0FBdkJBO0FBc0JBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZ0NBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBU0E7QUFEQTtBQUNBO0FBVEE7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWhDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&\n");

/***/ })

})