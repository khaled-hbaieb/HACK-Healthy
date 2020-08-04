webpackHotUpdate(8,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/post/Post.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// import { butter } from \"buttercms\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"post\",\n  data: function data() {\n    return {\n      post: \"\",\n      comment: \"\",\n      ready: false,\n      comments: []\n    };\n  },\n  beforeMount: function () {\n    var _beforeMount = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var post, comments;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"/api/posts/updatePost\", {\n                filter: {\n                  _id: this.post._id\n                },\n                payload: {\n                  views: (Number(this.post.views) + 1).toString()\n                }\n              });\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/posts/findPost\", {\n                _id: window.location.pathname.slice(14)\n              });\n\n            case 3:\n              post = _context.sent;\n              this.post = post.data[0];\n              _context.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/comments/findComments\", {\n                idOfPost: this.post._id\n              });\n\n            case 7:\n              comments = _context.sent;\n              this.comments = comments.data;\n              console.log(this.comments);\n              this.ready = true;\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function beforeMount() {\n      return _beforeMount.apply(this, arguments);\n    }\n\n    return beforeMount;\n  }(),\n  methods: {\n    addComment: function () {\n      var _addComment = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var comments;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/comments/createComment\", {\n                  idOfPost: this.post._id,\n                  nameOfCommenter: this.post.nameOfPoster,\n                  text: this.comment,\n                  roleOfSender: localStorage.role\n                });\n\n              case 2:\n                _context2.next = 4;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"/api/comments/findComments\", {\n                  idOfPost: this.post._id\n                });\n\n              case 4:\n                comments = _context2.sent;\n                this.comments = comments.data;\n                this.comment = \"\";\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function addComment() {\n        return _addComment.apply(this, arguments);\n      }\n\n      return addComment;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2RvY3Rvci9jb21wb25lbnRzL3Bvc3QvUG9zdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Bvc3QudnVlPzRjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cInJlYWR5XCI+XHJcbiAgICA8dnMtcm93PlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1jYXJkPlxyXG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT57eyBwb3N0LnRpdGxlIH19PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc2xvdD1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvaW1hZ2VzL2xvZ28vZm9ydW0uanBlZ1wiIGlkPVwiaW1nc2V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHYtaHRtbD1cInBvc3QuY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8dnMtcm93PlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiOVwiPlxyXG4gICAgICAgICAgICAgIDxoND57eyBwb3N0Lm5hbWVPZlBvc3RlciB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvdnMtY29sPlxyXG4gICAgICAgICAgICA8dnMtY29sIHZzLWxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxoND57eyBwb3N0LnZpZXdzIH19PC9oND5cclxuICAgICAgICAgICAgPC92cy1jb2w+XHJcbiAgICAgICAgICA8L3ZzLXJvdz5cclxuICAgICAgICA8L3ZzLWNhcmQ+XHJcbiAgICAgIDwvdnMtY29sPlxyXG4gICAgICA8dnMtY29sIHZzLWxnPVwiNlwiPlxyXG4gICAgICAgIDx2cy1yb3cgdi1pZj1cInRoaXMuY29tbWVudHMubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgPHZzLWNhcmQ+XHJcbiAgICAgICAgICAgIDx2cy1jb2wgdi1mb3I9XCIoY29tbWVudCwgaW5kZXgpIGluIGNvbW1lbnRzXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPGg2IHYtaWY9XCJjb21tZW50LnJvbGVPZlNlbmRlciA9PT0gJ0RvY3RvcidcIj5cclxuICAgICAgICAgICAgICAgIHt7IGNvbW1lbnQucm9sZU9mU2VuZGVyIH19XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGNvbW1lbnQubmFtZU9mQ29tbWVudGVyIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8aDYgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57eyBjb21tZW50Lm5hbWVPZkNvbW1lbnRlciB9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGg2Pnt7IGNvbW1lbnQudGV4dCB9fTwvaDY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvdnMtY29sPlxyXG4gICAgICAgICAgPC92cy1jYXJkPlxyXG4gICAgICAgIDwvdnMtcm93PlxyXG4gICAgICAgIDx2cy1yb3c+XHJcbiAgICAgICAgICA8dnMtY2FyZD5cclxuICAgICAgICAgICAgPHZzLXRleHRhcmVhXHJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiXCJcclxuICAgICAgICAgICAgICBjb3VudGVyPVwiMjUwXCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTBcIlxyXG4gICAgICAgICAgICAgIGNvdW50ZXItZGFuZ2VyLnN5bmNcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI3NXB4XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGlkPVwiY29tbWVudFRvXCJcclxuICAgICAgICAgICAgLz48YnIgLz5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJhZGRDb21tZW50XCI+QWRkPC92cy1idXR0b24+XHJcbiAgICAgICAgICA8L3ZzLWNhcmQ+XHJcbiAgICAgICAgPC92cy1yb3c+XHJcbiAgICAgIDwvdnMtY29sPlxyXG4gICAgPC92cy1yb3c+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCB7IGJ1dHRlciB9IGZyb20gXCJidXR0ZXJjbXNcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInBvc3RcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdDogXCJcIixcclxuICAgICAgY29tbWVudDogXCJcIixcclxuICAgICAgcmVhZHk6IGZhbHNlLFxyXG4gICAgICBjb21tZW50czogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgYXN5bmMgYmVmb3JlTW91bnQoKSB7XHJcbiAgICBheGlvcy5wdXQoXCIvYXBpL3Bvc3RzL3VwZGF0ZVBvc3RcIiwge1xyXG4gICAgICBmaWx0ZXI6IHsgX2lkOiB0aGlzLnBvc3QuX2lkIH0sXHJcbiAgICAgIHBheWxvYWQ6IHsgdmlld3M6IChOdW1iZXIodGhpcy5wb3N0LnZpZXdzKSArIDEpLnRvU3RyaW5nKCkgfSxcclxuICAgIH0pO1xyXG4gICAgbGV0IHBvc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wb3N0cy9maW5kUG9zdFwiLCB7XHJcbiAgICAgIF9pZDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDE0KSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wb3N0ID0gcG9zdC5kYXRhWzBdO1xyXG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvY29tbWVudHMvZmluZENvbW1lbnRzXCIsIHtcclxuICAgICAgaWRPZlBvc3Q6IHRoaXMucG9zdC5faWQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cy5kYXRhO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5jb21tZW50cyk7XHJcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGFkZENvbW1lbnQoKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvbW1lbnRzL2NyZWF0ZUNvbW1lbnRcIiwge1xyXG4gICAgICAgIGlkT2ZQb3N0OiB0aGlzLnBvc3QuX2lkLFxyXG4gICAgICAgIG5hbWVPZkNvbW1lbnRlcjogdGhpcy5wb3N0Lm5hbWVPZlBvc3RlcixcclxuICAgICAgICB0ZXh0OiB0aGlzLmNvbW1lbnQsXHJcbiAgICAgICAgcm9sZU9mU2VuZGVyOiBsb2NhbFN0b3JhZ2Uucm9sZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBjb21tZW50cyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2NvbW1lbnRzL2ZpbmRDb21tZW50c1wiLCB7XHJcbiAgICAgICAgaWRPZlBvc3Q6IHRoaXMucG9zdC5faWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHMuZGF0YTtcclxuICAgICAgdGhpcy5jb21tZW50ID0gXCJcIjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuI3JlcGx5IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVhBO0FBQUE7QUFnQkE7QUFEQTtBQUNBO0FBaEJBO0FBZUE7QUFHQTtBQWxCQTtBQUFBO0FBb0JBO0FBREE7QUFDQTtBQXBCQTtBQW1CQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUEwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFTQTtBQURBO0FBQ0E7QUFUQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBMUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/post/Post.vue?vue&type=script&lang=js&\n");

/***/ })

})