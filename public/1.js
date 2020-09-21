(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/gauge.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "gauge",
  mixins: [_utility_mixins__WEBPACK_IMPORTED_MODULE_0__["scoreMixins"]],
  props: {
    name: String,
    number: Number,
    degSkala: Array
  },
  data: function data() {
    return {
      style: ""
    };
  },
  methods: {},
  watch: {
    number: function number(newValue, oldValue) {
      console.log(this.degSkala[0]);
      console.log(newValue, oldValue);
      var RotateValue;

      if (newValue < 5) {
        RotateValue = -90;
      }

      if (newValue < this.degSkala[0]) {
        RotateValue = -90;
      }

      if (newValue >= this.degSkala[1]) {
        RotateValue = -45;
      }

      if (newValue >= this.degSkala[2]) {
        RotateValue = 0;
      }

      this.style = " transform: rotate(" + RotateValue + "deg);";
    }
  },
  created: function created() {
    if (this.number < 5) {
      this.style = " transform: rotate(" + -90 + "deg);";
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
/* harmony import */ var _gauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauge */ "./resources/js/components/game/gauge.vue");
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
    Dead: function Dead() {
      return this.$store.getters.getDead;
    }
  },
  components: {
    "v-gauge": _gauge__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {},
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Game/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_game_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/score */ "./resources/js/components/game/score.vue");
/* harmony import */ var _components_layout_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/header/index */ "./resources/js/components/layout/header/index.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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
      ProgressStatus: "1",
      VideoSource: '/video/1.mp4',
      InfectedInterval: null,
      DeadInterval: null,
      PlayerName: null
    };
  },
  components: {
    'app-score': _components_game_score__WEBPACK_IMPORTED_MODULE_1__["default"],
    'app-header': _components_layout_header_index__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    storyLine: 'getStoryLineList'
  }),
  created: function created() {
    this.startInfectionTimer();
    this.startDeadTimer();
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
    // Next Step Story Line
    nextProgress: function nextProgress(val) {
      var _this = this;

      if (this.storyLine[val].infectedMultiplier !== undefined && this.storyLine[val].deadMultiplier !== undefined) {
        console.log("multiplier Change");
        this.$store.dispatch("handleChangeInfectedMultiplier", this.storyLine[val].infectedMultiplier);
        this.$store.dispatch("handleChangeDeadMultiplier", this.storyLine[val].deadMultiplier);
        console.log(this.storyLine[val].infectedMultiplier);
      }

      if (this.storyLine[val].infectedInterval !== undefined && this.storyLine[val].deadInterval !== undefined) {
        console.log("multiplier Change");
        this.$store.dispatch("handleChangeInfectedInterval", this.storyLine[val].infectedInterval);
        this.$store.dispatch("handleChangeDeadInterval", this.storyLine[val].deadInterval);
        console.log(this.storyLine[val].infectedInterval);
      }

      setTimeout(function () {
        _this.ProgressStatus = val;
        _this.VideoSource = _this.storyLine[val].video;

        _this.$refs.videoRef.load();

        _this.videoEnd = false;
      }, 500);
    },
    //  Start Timer for Infection and Dead People
    startInfectionTimer: function startInfectionTimer() {
      var _this2 = this;

      var interval = this.$store.getters.getInfectedInterval; // Infected Interval Timer

      this.InfectedInterval = setInterval(function () {
        var inf = _this2.$store.getters.getInfected; // Summe of all Infected People during the Game

        var multi = _this2.$store.getters.getInfectedMultiplier; // Infected Multiplier

        var z = Math.round(inf * multi); // Summe of Infected People * Multiplier

        var OptionOne = inf + 1; // Option One if the Value is smaller than 1

        var OptionTwo = inf + z; // Option Two Value is 1 or more

        z < 1 ? _this2.$store.dispatch('handleChangeInfectedValue', OptionOne) : _this2.$store.dispatch('handleChangeInfectedValue', OptionTwo);
      }, interval);
    },
    startDeadTimer: function startDeadTimer() {
      var _this3 = this;

      var interval = this.$store.getters.getDeadInterval; // Dead Interval Timer

      console.log('Dead Interval ' + interval);
      this.DeadInterval = setInterval(function () {
        var inf = _this3.$store.getters.getInfected; // Summe of all Infected People during the Game

        var dead = _this3.$store.getters.getDead; // Summe of all Infected People during the Game

        var multi = _this3.$store.getters.getInfectedMultiplier; // Infected Multiplier

        var z = Math.round(inf * multi / 3); // Summe of Infected People * Multiplier

        var OptionOne = dead + 1; // Option One if the Value is smaller than 1

        var OptionTwo = dead + z; // Option Two Value is 1 or more

        console.log(OptionOne, ' <-1   2-> ', OptionTwo);
        z < 1 ? _this3.$store.dispatch('handleChangeDeadValue', OptionOne) : _this3.$store.dispatch('handleChangeDeadValue', OptionTwo);
      }, interval);
    },
    Submit_Player: function Submit_Player() {
      var _this4 = this;

      if (this.PlayerName !== null) {
        console.log("Name OK");
        var data = {
          "name": this.PlayerName,
          "infected": this.$store.getters.getInfected,
          "deceased": this.$store.getters.getDead
        };
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("api/score/create", data).then(function (response) {
          console.log(response);

          if (response.status === 200) {
            _this4.$router.push({
              name: "leaderboard"
            });
          }
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        console.error("Name not OK");
      }
    },
    Cheat: function Cheat() {
      this.videoEnd = true;
    }
  },
  destroyed: function destroyed() {
    //clear Game
    this.$store.dispatch('handleChangeInfectedValue', 0);
    this.$store.dispatch('handleChangeDeadValue', 0);
    clearInterval(this.InfectedInterval);
    clearInterval(this.DeadInterval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2& ***!
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
  return _c("div", [
    _c("div", { staticClass: "fuel" }, [
      _c("img", {
        staticClass: "fuel-scala",
        attrs: { src: "images/score/bg_fuel2.svg", alt: "Demo", width: "300px" }
      }),
      _vm._v(" "),
      _c("img", {
        staticClass: "fuel-needle",
        style: _vm.style,
        attrs: { src: "images/score/zeiger.svg", alt: "Demo", height: "130px" }
      })
    ]),
    _vm._v(" "),
    _c("span", [
      _vm._v(
        " " +
          _vm._s(_vm.name) +
          " " +
          _vm._s(_vm.numberWithDot(_vm.number)) +
          "\n    "
      )
    ]),
    _vm._v(" "),
    _c("p")
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
    _c(
      "div",
      { staticClass: "infected" },
      [
        _c("v-gauge", {
          attrs: {
            name: "Infizierte",
            number: _vm.Infected,
            degSkala: [5, 10, 20]
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "statistics" }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "dead" },
      [_c("v-gauge", { attrs: { name: "Tote:", number: _vm.Dead } })],
      1
    )
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
              attrs: { src: "/images/logo.png", alt: "Life and Death" }
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
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=template&id=14237854&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Game/index.vue?vue&type=template&id=14237854& ***!
  \********************************************************************************************************************************************************************************************************/
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
        attrs: { id: "Story-Line_Video", autoplay: "" },
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
        class: {
          "video-container-grid-end": _vm.videoEnd,
          "video-container-grid": !_vm.videoEnd
        }
      },
      [
        _c(
          "div",
          { staticClass: "top" },
          [
            _vm.videoEnd ? _c("app-header") : _vm._e(),
            _vm._v(" "),
            _c("button", { on: { click: _vm.Cheat } }, [_vm._v("Cheat")])
          ],
          1
        ),
        _vm._v(" "),
        _vm.videoEnd
          ? _c("div", { staticClass: "middle" }, [
              _vm.storyLine[_vm.ProgressStatus].type === "question"
                ? _c("div", { staticClass: "story-line_question" }, [
                    _c("div", [
                      _c("p", { staticClass: "question" }, [
                        _vm._v(
                          _vm._s(this.storyLine[this.ProgressStatus].question)
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "options" }, [
                        _c("div", { staticClass: "option_one" }, [
                          _c("div", [
                            this.storyLine[this.ProgressStatus].question !==
                            undefined
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "responseBtn",
                                    on: {
                                      click: function($event) {
                                        return _vm.nextProgress(
                                          _vm.storyLine[_vm.ProgressStatus]
                                            .firstOption.next
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.storyLine[this.ProgressStatus]
                                            .firstOption.response
                                        ) +
                                        "\n                                    "
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "option_two" }, [
                          _c("div", [
                            this.storyLine[this.ProgressStatus].question !==
                            undefined
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "responseBtn",
                                    on: {
                                      click: function($event) {
                                        return _vm.nextProgress(
                                          _vm.storyLine[_vm.ProgressStatus]
                                            .secondOption.next
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.storyLine[this.ProgressStatus]
                                            .secondOption.response
                                        ) +
                                        "\n                                    "
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
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.storyLine[_vm.ProgressStatus].type === "continue"
                ? _c("div", { staticClass: "story-line_continue" }, [
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass: "responseBtn",
                          on: {
                            click: function($event) {
                              return _vm.nextProgress(
                                _vm.storyLine[_vm.ProgressStatus].continueStory
                                  .next
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                _vm.storyLine[this.ProgressStatus].continueStory
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
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.storyLine[_vm.ProgressStatus].type === "end"
                ? _c("div", { staticClass: "story-line_end" }, [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.PlayerName,
                          expression: "PlayerName"
                        }
                      ],
                      staticClass: "input_end_name",
                      attrs: {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Dein Name"
                      },
                      domProps: { value: _vm.PlayerName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.PlayerName = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "responseBtn",
                        on: { click: _vm.Submit_Player }
                      },
                      [
                        _vm._v(
                          "\n                    Senden\n                    "
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
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "bottom" }, [_c("app-score")], 1)
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/game/gauge.vue":
/*!************************************************!*\
  !*** ./resources/js/components/game/gauge.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauge.vue?vue&type=template&id=67b751b2& */ "./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&");
/* harmony import */ var _gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gauge.vue?vue&type=script&lang=js& */ "./resources/js/components/game/gauge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/game/gauge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/game/gauge.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/game/gauge.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./gauge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gauge.vue?vue&type=template&id=67b751b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/game/gauge.vue?vue&type=template&id=67b751b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gauge_vue_vue_type_template_id_67b751b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    randomIntFromInterval: function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};

/***/ }),

/***/ "./resources/js/views/Game/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Game/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=14237854& */ "./resources/js/views/Game/index.vue?vue&type=template&id=14237854&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Game/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Game/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Game/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Game/index.vue?vue&type=template&id=14237854&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Game/index.vue?vue&type=template&id=14237854& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=14237854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Game/index.vue?vue&type=template&id=14237854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_14237854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);