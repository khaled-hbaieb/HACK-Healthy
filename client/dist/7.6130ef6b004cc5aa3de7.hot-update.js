webpackHotUpdate(7,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/forum/Forum.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/forum/Forum.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"forum\",\n  data: function data() {\n    return {\n      postsList: [],\n      ready: false\n    };\n  },\n  beforeMount: function () {\n    var _beforeMount = Object(C_Users_Administrateur_Desktop_HACK_Healthy_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var posts;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/api/posts\");\n\n            case 2:\n              posts = _context.sent;\n              this.postsList = posts.data;\n              this.ready = true;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function beforeMount() {\n      return _beforeMount.apply(this, arguments);\n    }\n\n    return beforeMount;\n  }(),\n  methods: {\n    renderPost: function renderPost(arg) {\n      this.$router.push(\"/doctor/forum/\".concat(arg));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2RvY3Rvci9jb21wb25lbnRzL2ZvcnVtL0ZvcnVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRm9ydW0udnVlPzMwNTIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cInJlYWR5XCI+XHJcbiAgICA8dnMtcm93IGNsYXNzPVwicm93IHBhZ2UtdGl0bGVzXCI+XHJcbiAgICAgIDx2cy1jb2xcclxuICAgICAgICB2cy1sZz1cIjNcIlxyXG4gICAgICAgIHZzLXNtPVwiNlwiXHJcbiAgICAgICAgdnMteHM9XCIxMlwiXHJcbiAgICAgICAgdi1mb3I9XCIocG9zdCwgaW5kZXgpIGluIHBvc3RzTGlzdFwiXHJcbiAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDx2cy1jYXJkIHZzLWxnPVwiMTJcIiBhY3Rpb25hYmxlPlxyXG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj57eyBwb3N0LnRpdGxlIH19PC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzbG90PVwibWVkaWFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9pbWFnZXMvbG9nby9mb3J1bS5qcGVnXCIgaWQ9XCJpbWdzZXRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAge3sgcG9zdC5jcmVhdGVkQXQgfX1cclxuICAgICAgICAgICAgICA8IS0tIDIzXHJcbiAgICAgICAgICAgICAgPHN1cD5yZDwvc3VwPiBvY3QgMjAyMCAtLT5cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJweS0yIGQtaW5saW5lXCI+e3sgcG9zdC5uYW1lT2ZQb3N0ZXIgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx2cy1yb3c+XHJcbiAgICAgICAgICAgIDx2cy1jb2wgdnMtbGc9XCI5XCI+XHJcbiAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicmVuZGVyUG9zdChwb3N0Ll9pZClcIlxyXG4gICAgICAgICAgICAgICAgPlJlYWQgTW9yZTwvdnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3ZzLWNvbD5cclxuICAgICAgICAgICAgPHZzLWNvbCB2cy1sZz1cIjNcIj4ge3sgcG9zdC52aWV3cyB9fSBWaWV3cyA8L3ZzLWNvbD5cclxuICAgICAgICAgIDwvdnMtcm93PlxyXG4gICAgICAgIDwvdnMtY2FyZD5cclxuICAgICAgPC92cy1jb2w+XHJcbiAgICA8L3ZzLXJvdz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJmb3J1bVwiLFxyXG4gIGRhdGE6ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc3RzTGlzdDogW10sXHJcbiAgICAgIHJlYWR5OiBmYWxzZSxcclxuICAgIH07XHJcbiAgfSxcclxuICBhc3luYyBiZWZvcmVNb3VudCgpIHtcclxuICAgIGxldCBwb3N0cyA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvcG9zdHNcIik7XHJcbiAgICB0aGlzLnBvc3RzTGlzdCA9IHBvc3RzLmRhdGE7XHJcbiAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHJlbmRlclBvc3QoYXJnKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGAvZG9jdG9yL2ZvcnVtLyR7YXJnfWApO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4vKiAjaW1nc2V0IHtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/forum/Forum.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dd872d10-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/forum/Forum.vue?vue&type=template&id=c89d8bfe&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dd872d10-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/forum/Forum.vue?vue&type=template&id=c89d8bfe& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.ready\n    ? _c(\n        \"div\",\n        [\n          _c(\n            \"vs-row\",\n            { staticClass: \"row page-titles\" },\n            _vm._l(_vm.postsList, function(post, index) {\n              return _c(\n                \"vs-col\",\n                {\n                  key: index,\n                  attrs: { \"vs-lg\": \"3\", \"vs-sm\": \"6\", \"vs-xs\": \"12\" }\n                },\n                [\n                  _c(\n                    \"vs-card\",\n                    { attrs: { \"vs-lg\": \"12\", actionable: \"\" } },\n                    [\n                      _c(\"div\", { attrs: { slot: \"header\" }, slot: \"header\" }, [\n                        _c(\"h5\", { staticClass: \"font-weight-bold\" }, [\n                          _vm._v(_vm._s(post.title))\n                        ])\n                      ]),\n                      _c(\"div\", { attrs: { slot: \"media\" }, slot: \"media\" }, [\n                        _c(\"img\", {\n                          attrs: {\n                            src: __webpack_require__(/*! @/assets/images/logo/forum.jpeg */ \"./src/assets/images/logo/forum.jpeg\"),\n                            id: \"imgset\"\n                          }\n                        })\n                      ]),\n                      _c(\"div\", { staticClass: \"mb-2\" }, [\n                        _c(\"h6\", { staticClass: \"mb-2\" }, [\n                          _vm._v(\n                            \"\\n            \" +\n                              _vm._s(post.createdAt) +\n                              \"\\n            \"\n                          )\n                        ]),\n                        _c(\"span\", { staticClass: \"py-2 d-inline\" }, [\n                          _vm._v(_vm._s(post.nameOfPoster))\n                        ])\n                      ]),\n                      _c(\n                        \"vs-row\",\n                        [\n                          _c(\n                            \"vs-col\",\n                            { attrs: { \"vs-lg\": \"9\" } },\n                            [\n                              _c(\n                                \"vs-button\",\n                                {\n                                  attrs: { color: \"primary\", type: \"border\" },\n                                  on: {\n                                    click: function($event) {\n                                      return _vm.renderPost(post._id)\n                                    }\n                                  }\n                                },\n                                [_vm._v(\"Read More\")]\n                              )\n                            ],\n                            1\n                          ),\n                          _c(\"vs-col\", { attrs: { \"vs-lg\": \"3\" } }, [\n                            _vm._v(\" \" + _vm._s(post.views) + \" Views \")\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            }),\n            1\n          )\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiZGQ4NzJkMTAtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9kb2N0b3IvY29tcG9uZW50cy9mb3J1bS9Gb3J1bS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yzg5ZDhiZmUmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3Rvci9jb21wb25lbnRzL2ZvcnVtL0ZvcnVtLnZ1ZT8wNDRkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnJlYWR5XG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2cy1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IHBhZ2UtdGl0bGVzXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucG9zdHNMaXN0LCBmdW5jdGlvbihwb3N0LCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJ2cy1sZ1wiOiBcIjNcIiwgXCJ2cy1zbVwiOiBcIjZcIiwgXCJ2cy14c1wiOiBcIjEyXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidnMtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwidnMtbGdcIjogXCIxMlwiLCBhY3Rpb25hYmxlOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgc2xvdDogXCJoZWFkZXJcIiB9LCBzbG90OiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibWVkaWFcIiB9LCBzbG90OiBcIm1lZGlhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2ltYWdlcy9sb2dvL2ZvcnVtLmpwZWdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW1nc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBvc3QuY3JlYXRlZEF0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMiBkLWlubGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwb3N0Lm5hbWVPZlBvc3RlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwidnMtbGdcIjogXCI5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCB0eXBlOiBcImJvcmRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW5kZXJQb3N0KHBvc3QuX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlYWQgTW9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1jb2xcIiwgeyBhdHRyczogeyBcInZzLWxnXCI6IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhwb3N0LnZpZXdzKSArIFwiIFZpZXdzIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"dd872d10-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/forum/Forum.vue?vue&type=template&id=c89d8bfe&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/forum/Forum.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/doctor/components/forum/Forum.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\r\\n/* #imgset {\\r\\n  align-content: center;\\r\\n  height: 90%;\\r\\n  width: 100%;\\r\\n} */\\r\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9kb2N0b3IvY29tcG9uZW50cy9mb3J1bS9Gb3J1bS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZG9jdG9yL2NvbXBvbmVudHMvZm9ydW0vRm9ydW0udnVlPzU5MDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG4vKiAjaW1nc2V0IHtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufSAqL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/doctor/components/forum/Forum.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})