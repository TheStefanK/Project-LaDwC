(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/score/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/story_01.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _score_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score/index */ "./resources/js/components/score/index.vue");
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
  name: "story_01",
  data: function data() {
    return {
      videoEnd: false,
      ProgressStatus: 1,
      VideoSource: '/video/1.mp4'
    };
  },
  components: {
    'app-score': _score_index__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      this.VideoSource = '/video/' + val + '.mp4';
      this.$refs.videoRef.load();
      this.videoEnd = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img[data-v-1bde279a] {\n  display: block;\n}\n.score-board[data-v-1bde279a] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-template-areas: \"infected statistics dead\";\n  color: white;\n  font-size: 40px;\n}\n.infected[data-v-1bde279a] {\n  grid-area: infected;\n  justify-self: start;\n  margin-left: 20px;\n}\n.statistics[data-v-1bde279a] {\n  align-self: end;\n  grid-area: statistics;\n  justify-self: center;\n}\n.dead[data-v-1bde279a] {\n  grid-area: dead;\n  justify-self: right;\n  margin-right: 20px;\n}\nspan[data-v-1bde279a] {\n  display: block;\n  background-color: #222;\n  padding: 5px 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-video[data-v-40d41c20] {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 auto;\n    position: relative;\n    overflow: hidden;\n}\n.decision-box[data-v-40d41c20] {\n}\n#Story-Line_Video[data-v-40d41c20] {\n    width: 100%;\n    height: 100%;\n}\n.grid-container[data-v-40d41c20] {\n    position: absolute;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    max-height: 100%;\n    background-color: rgba(0, 0, 0, 0.95);\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: repeat(3, 33%);\n    grid-template-areas: \"question question\" \"responseOne responseTwo\" \"score score\";\n}\n.question[data-v-40d41c20] {\n    grid-area: question;\n    color: #f2f2f2;\n    margin-top: 100px;\n    font-size: 28px;\n    text-align: center;\n    justify-self: center;\n    align-self: center;\n}\n.responseOne[data-v-40d41c20], .responseTwo[data-v-40d41c20] {\n    display: inline-block;\n    margin: 0 auto;\n    justify-self: center;\n    align-self: center;\n}\n.responseOne[data-v-40d41c20] {\n    grid-area: responseOne;\n}\n.responseTwo[data-v-40d41c20] {\n    grid-area: responseTwo;\n}\n.score[data-v-40d41c20] {\n    grid-area: score;\n    align-self: end;\n    padding: 20px;\n}\n.responseBtn[data-v-40d41c20] {\n    background-color: rgb(0, 0, 0);\n    color: white;\n    font-size: 30px;\n    padding: 20px 40px;\n    border: white 1px solid;\n}\n.responseBtn[data-v-40d41c20]:hover {\n    border: #00dcff 1px solid;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=template&id=1bde279a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/score/index.vue?vue&type=template&id=1bde279a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/story/story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "grid-container" }, [
          _c("div", { staticClass: "question" }, [
            _c("p", [
              _vm._v(_vm._s(this.storyLine[this.ProgressStatus].question))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "responseOne" }, [
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
                      _vm.storyLine[this.ProgressStatus].firstOption.response
                    ) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "responseTwo" }, [
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
                      _vm.storyLine[this.ProgressStatus].SecandOption.response
                    ) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "score" }, [_c("app-score")], 1)
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/score/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/score/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1bde279a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1bde279a&scoped=true& */ "./resources/js/components/score/index.vue?vue&type=template&id=1bde279a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/score/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss& */ "./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1bde279a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1bde279a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1bde279a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/score/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/score/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/score/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=style&index=0&id=1bde279a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1bde279a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/score/index.vue?vue&type=template&id=1bde279a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/score/index.vue?vue&type=template&id=1bde279a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1bde279a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1bde279a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/score/index.vue?vue&type=template&id=1bde279a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1bde279a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1bde279a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/story/story_01.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/story/story_01.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _story_01_vue_vue_type_template_id_40d41c20_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& */ "./resources/js/components/story/story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&");
/* harmony import */ var _story_01_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story_01.vue?vue&type=script&lang=js& */ "./resources/js/components/story/story_01.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css& */ "./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _story_01_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _story_01_vue_vue_type_template_id_40d41c20_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["render"],
  _story_01_vue_vue_type_template_id_40d41c20_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40d41c20",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/story/story_01.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/story/story_01.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/story/story_01.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./story_01.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=style&index=0&id=40d41c20&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_style_index_0_id_40d41c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/story/story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/story/story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_template_id_40d41c20_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/story/story_01.vue?vue&type=template&id=40d41c20&scoped=true&xmlns=http%3A%2F%2Fwww.w3.org%2F1999%2Fhtml&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_template_id_40d41c20_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_story_01_vue_vue_type_template_id_40d41c20_scoped_true_xmlns_http_3A_2F_2Fwww_w3_org_2F1999_2Fhtml___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);