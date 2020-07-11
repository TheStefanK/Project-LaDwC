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
  created: function created() {
    this.startInfection();
  },
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
    },
    //  Start Timer for Infection and Dead People
    startInfection: function startInfection() {
      var _this = this;

      this.infectedInterval = setInterval(function () {
        var inf = _this.$store.getters.getInfected; // Summe of all Infected People during the Game

        var x = _this.$store.getters.getInfectedCalc; // Summe of Infected People - Dead People

        var y = _this.$store.getters.getInfectedMultiplier; // Infected Multiplier

        if (inf >= 9800000) {
          clearInterval(_this.infectedInterval);
          alert('GAME OVER');

          _this.$store.dispatch('handleChangeInfectedValue', 9800000);
        } else {
          var z = Math.round(x * y); // Summe of Infected People * Multiplier
          // console.log('inf:'+inf+' x:'+x+' y:'+y+' z:'+z);

          var OptionOne = inf + 1; // Option One if the Value is smaller than 1

          var OptionTwo = inf + z; // Option Two Value is 1 or more

          z < 1 ? _this.$store.dispatch('handleChangeInfectedValue', OptionOne) : _this.$store.dispatch('handleChangeInfectedValue', OptionTwo);
        }
      }, 100);
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
/* harmony import */ var _utility_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/mixins */ "./resources/js/utility/mixins.js");
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
  name: "score",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"]],
  computed: {
    Infected: function Infected() {
      return this.$store.getters.getInfected;
    },
    InfectedCalc: function InfectedCalc() {
      return this.$store.getters.getInfectedCalc;
    },
    Dead: function Dead() {
      return this.$store.getters.getDead;
    },
    // infected Pointer rotate
    infectedPointerStyle: function infectedPointerStyle() {
      return {
        transform: 'rotate(' + this.$store.getters.getInfectedPointer + 'grad) translate(-50%)'
      };
    },
    // dead Pointer rotate
    deadPointerStyle: function deadPointerStyle() {
      return {
        transform: 'rotate(' + this.$store.getters.getDeadPointer + 'grad) translate(-50%)'
      };
    }
  },
  watch: {
    InfectedCalc: function InfectedCalc() {
      var x = this.InfectedCalc;
      var pointerValue = _utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"].methods.indicatorPointer(x, 250);
      console.log(pointerValue + ' CHANGGEGGG');
      this.$store.dispatch('handleChangeInfectedPointer', pointerValue);
    },
    dead: function dead() {
      var pointerValue = _utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"].methods.indicatorPointer(this.Dead, 50);
      this.$store.dispatch('handleChangeDeadPointer', pointerValue);
    }
  },
  methods: {
    startTimer: function startTimer() {
      var _this = this;

      this.timer = setInterval(function () {
        _this.elapsedTime += 1000;
      }, 2000);
    },
    stopTimer: function stopTimer() {
      clearInterval(this.timer);
    },
    resetTimer: function resetTimer() {
      this.elapsedTime = 0;
    }
  },
  destroyed: function destroyed() {
    clearInterval(this.startInfection);
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fuel {\n    position: relative;\n    border-bottom: 10px solid black;\n}\n.test2 {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform-origin: left bottom;\n    transform: rotate(-90grad) translateX(-50%);\n    margin: 0;\n    padding: 0;\n    display: block;\n    transition: 3s;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./score.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00& ***!
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
  return _c("div", { staticClass: "container-video" }, [
    _c(
      "video",
      {
        ref: "videoRef",
        class: { "end-video": _vm.videoEnd },
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
      _c("div", { staticClass: "fuel" }, [
        _c("img", {
          staticClass: "test1",
          attrs: {
            src: "images/score/bg_fuel2.svg",
            alt: "Demo",
            width: "300px"
          }
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "test2",
          style: _vm.infectedPointerStyle,
          attrs: {
            src: "images/score/zeiger.svg",
            alt: "Demo",
            height: "130px"
          }
        })
      ]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.numberWithDot(_vm.InfectedCalc)))]),
      _vm._v(" "),
      _c("span", [_vm._v("Infizierte:")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "statistics" }, [
      _c("div", [
        _vm._v(
          "\n            " +
            _vm._s(_vm.helloWorld("hello World")) +
            "\n        "
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "dead" }, [
      _c("div", { staticClass: "fuel" }, [
        _c("img", {
          staticClass: "test1",
          attrs: {
            src: "images/score/bg_fuel2.svg",
            alt: "Demo",
            width: "300px"
          }
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "test2",
          style: _vm.deadPointerStyle,
          attrs: {
            src: "images/score/zeiger.svg",
            alt: "Demo",
            height: "130px"
          }
        })
      ]),
      _vm._v(" "),
      _c("span", [_vm._v("Tote: " + _vm._s(_vm.numberWithDot(_vm.Dead)))])
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
  return _c("header", { staticClass: "site-header" }, [
    _c(
      "div",
      { staticClass: "site-logo" },
      [
        _c(
          "router-link",
          { staticClass: "site-logo-link", attrs: { to: { name: "home" } } },
          [
            _c("img", {
              staticClass: "site-logo-img",
              attrs: { src: "/images/Logo.png", alt: "" }
            }),
            _vm._v(" "),
            _c("h1", [_vm._v("Life and Death with Corona")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "site-navigation" }, [
      _c("ul", { staticClass: "navigation-list" }, [
        _c(
          "li",
          { staticClass: "navigation-list-item" },
          [
            _c("router-link", { attrs: { to: { name: "home" } } }, [
              _vm._v("Home")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "navigation-list-item" },
          [
            _c("router-link", { attrs: { to: { name: "leaderboard" } } }, [
              _vm._v("Leaderboard")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "navigation-list-item" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Team")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "navigation-list-item" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Contact")])
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
/* harmony import */ var _index_vue_vue_type_template_id_9516cb00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9516cb00& */ "./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9516cb00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9516cb00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/game/index.vue?vue&type=template&id=9516cb00& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9516cb00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/index.vue?vue&type=template&id=9516cb00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9516cb00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* empty/unused harmony star reexport *//* harmony import */ var _score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./score.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/score.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_score_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ }),

/***/ "./resources/js/utility/mixins.js":
/*!****************************************!*\
  !*** ./resources/js/utility/mixins.js ***!
  \****************************************/
/*! exports provided: scoreMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreMixins", function() { return scoreMixins; });
// Score component Mixins
var scoreMixins = {
  methods: {
    helloWorld: function helloWorld(value) {
      return value;
    },
    numberWithDot: function numberWithDot(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // Time Formatter
    formattedElapsedTime: function formattedElapsedTime() {
      var date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      var utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    // indicator Pointer
    indicatorPointer: function indicatorPointer(value, multiplier) {
      switch (true) {
        case value < multiplier:
          //console.log(multiplier);
          return '-90';
          break;

        case value < multiplier * 2 && value >= multiplier:
          {
            //console.log(multiplier * 2);
            return '-70';
            break;
          }

        case value < multiplier * 3 && value >= multiplier * 2:
          {
            //console.log(multiplier * 3);
            return '-50';
            break;
          }

        case value < multiplier * 4 && value >= multiplier * 3:
          {
            return '-30';
            break;
          }

        case value < multiplier * 5 && value >= multiplier * 4:
          {
            return '-10';
            break;
          }

        case value < multiplier * 6 && value >= multiplier * 5:
          {
            return '0';
            break;
          }

        case value < multiplier * 7 && value >= multiplier * 6:
          {
            return '10';
            break;
          }

        case value < multiplier * 8 && value >= multiplier * 7:
          {
            return '30';
            break;
          }

        case value < multiplier * 9 && value >= multiplier * 8:
          {
            return '50';
            break;
          }

        case value < multiplier * 10 && value >= multiplier * 9:
          {
            return '70';
            break;
          }

        case value > multiplier * 10:
          {
            return '90';
            break;
          }
      }
    }
  }
};

/***/ })

}]);