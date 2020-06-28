(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
      ProgressStatus: 1,
      VideoSource: '/video/1.mp4'
    };
  },
  components: {
    'app-score': _score__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      Tote: null,
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
        _this.Infizierte += x;
      }, 5000);
    },
    startDeath: function startDeath() {
      var _this2 = this;

      this.Tote = setInterval(function () {
        _this2.Tote += 1;
      }, 10000);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { id: "Story-Line_Video", controls: "", autoplay: "" },
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.videoEnd,
            expression: "videoEnd"
          }
        ],
        staticClass: "decision-box"
      },
      [
        this.storyLine[this.ProgressStatus].question !== undefined
          ? _c("div", { staticClass: "grid-container" }, [
              _c("div", { staticClass: "question" }, [
                _c("p", [
                  _vm._v(_vm._s(this.storyLine[this.ProgressStatus].question))
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
                              _vm.storyLine[_vm.ProgressStatus].firstOption.next
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.storyLine[this.ProgressStatus].firstOption
                                .response
                            ) +
                            "\n                "
                        )
                      ]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              this.storyLine[this.ProgressStatus].question !== undefined
                ? _c("div", [
                    _c(
                      "button",
                      {
                        staticClass: "responseBtn",
                        on: {
                          click: function($event) {
                            return _vm.nextProgress(
                              _vm.storyLine[_vm.ProgressStatus].firstOption.next
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.storyLine[this.ProgressStatus].SecandOption
                                .response
                            ) +
                            "\n                "
                        )
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "score" }, [_c("app-score")], 1)
            ])
          : _vm._e()
      ]
    )
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

/***/ "./resources/js/components/game/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/game/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9516cb00_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& */ "./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9516cb00_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9516cb00_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);