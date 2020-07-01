(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ "./resources/js/components/game/score.vue");
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/header */ "./resources/js/components/layout/header/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Game",
  data: function data() {
    return {
      videoEnd: false,
      videoPause: false,
      ProgressStatus: 1,
      VideoSource: '/video/1.mp4'
    };
  },
  components: {
    'app-score': _score__WEBPACK_IMPORTED_MODULE_1__["default"],
    'app-header': _layout_header__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    storyLine: 'getStoryLineList'
  }),
  methods: {
    OnEnd: function OnEnd() {
      this.videoEnd = true;
    },
    OnPause: function OnPause() {
      this.videoEnd = true;
    },
    OnStart: function OnStart() {
      this.videoEnd = false;
    },
    nextProgress: function nextProgress(val) {
      this.ProgressStatus = val;
      this.VideoSource = this.storyLine[val].video;
      this.$refs.videoRef.load();
      this.videoEnd = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/score.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "score",
  data: function data() {
    return {
      Infizierte: 1,
      Tote: 0,
      elapsedTime: 0,
      timer: undefined
    };
  },
  mounted: function mounted() {
    this.startTimer();
    this.startInfection();
    this.startDeath();
  },
  computed: {
    formattedElapsedTime: function formattedElapsedTime() {
      var date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      var utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
  methods: {
    startInfection: function startInfection() {
      var _this = this;

      this.Infizierte = setInterval(function () {
        var x = Math.round(Math.random() * 10);
        console.log(x);
        _this.Infizierte += 1;
      }, 100);
    },
    startDeath: function startDeath() {
      var _this2 = this;

      this.Tote = setInterval(function () {
        _this2.Tote += 1;
      }, 3000);
    },
    startTimer: function startTimer() {
      var _this3 = this;

      this.timer = setInterval(function () {
        _this3.elapsedTime += 1000;
      }, 2000);
    },
    stopTimer: function stopTimer() {
      clearInterval(this.timer);
    },
    resetTimer: function resetTimer() {
      this.elapsedTime = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/header/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index"
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-container-grid[data-v-9516cb00] {\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 15% 1fr 1fr;\n  gap: 1px 1px;\n  grid-template-areas: \"top\" \"middle\" \"bottom\";\n  background-color: rgba(0, 0, 0, 0.99);\n}\n.top[data-v-9516cb00] {\n  grid-area: top;\n}\n.middle[data-v-9516cb00] {\n  grid-area: middle;\n  display: grid;\n}\n.middle .storyLineContinue[data-v-9516cb00] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n.middle .storyLineContinue .responseBtn[data-v-9516cb00] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  justify-self: center;\n}\n.middle .middle-container[data-v-9516cb00] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 1px;\n  grid-template-areas: \"question question\" \"responseOne responseTwo\";\n}\n.middle .question[data-v-9516cb00] {\n  grid-area: question;\n}\n.middle .responseOne[data-v-9516cb00] {\n  grid-area: responseOne;\n  justify-self: end;\n}\n.middle .responseTwo[data-v-9516cb00] {\n  justify-self: start;\n  grid-area: responseTwo;\n}\n.bottom[data-v-9516cb00] {\n  grid-area: bottom;\n  align-self: end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-video" }, [
    _c(
      "video",
      {
        ref: "videoRef",
        attrs: { id: "Story-Line_Video", controls: "controls", autoplay: "" },
        on: {
          ended: function($event) {
            return _vm.OnEnd()
          },
          pause: _vm.OnPause,
          play: _vm.OnStart
        }
      },
      [_c("source", { attrs: { src: _vm.VideoSource } })]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.ProgressStatus,
          expression: "ProgressStatus"
        }
      ],
      attrs: { type: "hidden" },
      domProps: { value: _vm.ProgressStatus },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.ProgressStatus = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _vm.videoEnd
      ? _c("div", { staticClass: "video-container-grid" }, [
          _c("div", { staticClass: "top" }, [_c("app-header")], 1),
          _vm._v(" "),
          _c("div", { staticClass: "middle" }, [
            this.storyLine[this.ProgressStatus].question
              ? _c("div", { staticClass: "middle-container" }, [
                  _c("div", { staticClass: "question" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(this.storyLine[this.ProgressStatus].question)
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "responseOne" }, [
                    this.storyLine[this.ProgressStatus].question !== undefined
                      ? _c(
                          "button",
                          {
                            staticClass: "responseBtn",
                            on: {
                              click: function($event) {
                                return _vm.nextProgress(
                                  _vm.storyLine[_vm.ProgressStatus].firstOption
                                    .next
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.storyLine[this.ProgressStatus].firstOption
                                    .response
                                ) +
                                "\n                        "
                            ),
                            _c("span", { staticClass: "line-1" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "line-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "line-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "line-4" })
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "responseTwo" }, [
                    this.storyLine[this.ProgressStatus].question !== undefined
                      ? _c(
                          "button",
                          {
                            staticClass: "responseBtn",
                            on: {
                              click: function($event) {
                                return _vm.nextProgress(
                                  _vm.storyLine[_vm.ProgressStatus].secondOption
                                    .next
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.storyLine[this.ProgressStatus]
                                    .secondOption.response
                                ) +
                                "\n                        "
                            ),
                            _c("span", { staticClass: "line-1" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "line-2" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "line-3" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "line-4" })
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            !this.storyLine[this.ProgressStatus].question
              ? _c("div", { staticClass: "storyLineContinue" }, [
                  _c("p", { staticClass: "info" }, [_vm._v("placeholder")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "responseBtn",
                      on: {
                        click: function($event) {
                          return _vm.nextProgress(
                            _vm.storyLine[_vm.ProgressStatus].continueStory.next
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.storyLine[this.ProgressStatus].continueStory
                              .response
                          ) +
                          "\n                    "
                      ),
                      _c("span", { staticClass: "line-1" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "line-2" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "line-3" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "line-4" })
                    ]
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bottom" }, [_c("app-score")], 1)
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=template&id=647bd040&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/score.vue?vue&type=template&id=647bd040& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "score-board" }, [
    _c("div", { staticClass: "infected" }, [
      _c("img", { attrs: { src: "images/demoMeter.png", alt: "Demo" } }),
      _vm._v(" "),
      _c("span", [_vm._v("Infizierte: " + _vm._s(_vm.Infizierte))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "statistics" }, [
      _c("span", [_vm._v("Zeit: " + _vm._s(_vm.formattedElapsedTime))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "dead" }, [
      _c("img", { attrs: { src: "images/demoMeter.png", alt: "Demo" } }),
      _vm._v(" "),
      _c("span", [_vm._v("Tote: " + _vm._s(_vm.Tote))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "site-header" }, [
      _c("div", { staticClass: "site-logo" }, [
        _c("a", { staticClass: "site-logo-link", attrs: { href: "#" } }, [
          _c("img", {
            staticClass: "site-logo-img",
            attrs: { src: "/images/Logo.png", alt: "" }
          }),
          _vm._v(" "),
          _c("h1", [_vm._v("Life and Death with Corona")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "site-navigation" }, [
        _c("ul", { staticClass: "navigation-list" }, [
          _c("li", { staticClass: "navigation-list-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "navigation-list-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Leaderboard")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "navigation-list-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Team")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "navigation-list-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Contact")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/game/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/game/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9516cb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9516cb00&scoped=true& */ "./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss& */ "./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9516cb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9516cb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9516cb00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/game/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/game/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/game/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=style&index=0&id=9516cb00&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9516cb00_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9516cb00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/game/score.vue":
/*!************************************************!*\
  !*** ./resources/js/components/game/score.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.vue?vue&type=template&id=647bd040& */ "./resources/js/components/game/score.vue?vue&type=template&id=647bd040&");
/* harmony import */ var _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score.vue?vue&type=script&lang=js& */ "./resources/js/components/game/score.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["render"],
  _score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/game/score.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/game/score.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/game/score.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./score.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/game/score.vue?vue&type=template&id=647bd040&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/game/score.vue?vue&type=template&id=647bd040& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./score.vue?vue&type=template&id=647bd040& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=template&id=647bd040&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_template_id_647bd040___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layout/header/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layout/header/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=05b05dcc& */ "./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/header/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layout/header/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=05b05dcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/header/index.vue?vue&type=template&id=05b05dcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05b05dcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);