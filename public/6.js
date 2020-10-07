(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Leaderboard",
  data: function data() {
    return {
      players: [],
      Rankstart: 0
    };
  },
  created: function created() {
    var _this = this;

    console.log("axios");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/score/index").then(function (response) {
      console.log(response.data);
      _this.players = response.data;
    })["catch"](function (error) {
      console.error(error);
    });
  },
  methods: {
    NextPage: function NextPage() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.players.next_page_url).then(function (response) {
        console.log(response.data);

        if (response.data.current_page === 1) {
          _this2.Rankstart = 0;
        } else {
          console.log("Test");
          var newRankstart = _this2.players.per_page * _this2.players.current_page;
          _this2.Rankstart = newRankstart;
          console.log(newRankstart);
        }

        _this2.players = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    PrevPage: function PrevPage() {
      var _this3 = this;

      if (this.players.prev_page_url != null) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.players.prev_page_url).then(function (response) {
          if (response.data.current_page === 1) {
            _this3.Rankstart = 0;
          } else {
            console.log("Test");
            var newRankstart = _this3.players.per_page * _this3.players.current_page;
            _this3.Rankstart = newRankstart;
            console.log(newRankstart);
          }

          console.log(response.data);
          _this3.players = response.data;
        })["catch"](function (error) {
          console.error(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=template&id=4de0236e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=template&id=4de0236e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "leaderboard-container" },
    [
      _c("h2", [_vm._v("Leaderboard")]),
      _vm._v(" "),
      _vm._l(_vm.players.data, function(x, index) {
        return _c("div", { staticClass: "leaderboard-player-box" }, [
          _c("div", { staticClass: "img" }, [
            index + 1 + _vm.Rankstart === 1
              ? _c("img", {
                  attrs: { src: "/images/icons/rank1.png", alt: "" }
                })
              : index + 1 + _vm.Rankstart === 2
              ? _c("img", {
                  attrs: { src: "/images/icons/rank2.png", alt: "" }
                })
              : index + 1 + _vm.Rankstart === 3
              ? _c("img", {
                  attrs: { src: "/images/icons/rank3.png", alt: "" }
                })
              : _c("img", {
                  attrs: { src: "/images/icons/rank4.png", alt: "" }
                })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "stats" }, [
            _c("div", { staticClass: "top-box" }, [
              _c("div", { staticClass: "name" }, [
                _c("span", [_vm._v(_vm._s(x.name))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "rang" }, [
                _c("span", [_vm._v("Rang: ")]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(index + 1 + _vm.Rankstart))])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "bottom-box" }, [
              _c("div", [
                _c("span", [_vm._v("Tote")]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(x.deceased))])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", [_vm._v("Zeit")]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(x.time))])
              ])
            ])
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "lb-paginate" }, [
        _c(
          "button",
          {
            attrs: { disabled: _vm.players.prev_page_url == null },
            on: { click: _vm.PrevPage }
          },
          [_vm._v(" <")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            attrs: { disabled: _vm.players.next_page_url == null },
            on: { click: _vm.NextPage }
          },
          [_vm._v(" >")]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Leaderboard/newLeaderboard.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/Leaderboard/newLeaderboard.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newLeaderboard_vue_vue_type_template_id_4de0236e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newLeaderboard.vue?vue&type=template&id=4de0236e& */ "./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=template&id=4de0236e&");
/* harmony import */ var _newLeaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newLeaderboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newLeaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newLeaderboard_vue_vue_type_template_id_4de0236e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newLeaderboard_vue_vue_type_template_id_4de0236e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Leaderboard/newLeaderboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newLeaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./newLeaderboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newLeaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=template&id=4de0236e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=template&id=4de0236e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newLeaderboard_vue_vue_type_template_id_4de0236e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./newLeaderboard.vue?vue&type=template&id=4de0236e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Leaderboard/newLeaderboard.vue?vue&type=template&id=4de0236e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newLeaderboard_vue_vue_type_template_id_4de0236e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newLeaderboard_vue_vue_type_template_id_4de0236e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);