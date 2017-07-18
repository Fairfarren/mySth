webpackJsonp([0],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(136)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'phoneIndex',
	data() {
		return {
			title: 'this is phoneIndex'
		};
	},
	mounted() {
		console.log(123);
		var fontSize = window.innerWidth / 750 * 16;
		document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
	}
});

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(127)(true);
// imports


// module
exports.push([module.i, ".phoneHeader{position:fixed;width:100%;left:0;top:0;z-index:10}", "", {"version":3,"sources":["/Users/fairfarren/work/myvue/dzpk/src/components/phone/index.vue"],"names":[],"mappings":"AACA,aACC,eAAe,AACf,WAAW,AACX,OAAO,AACP,MAAM,AACN,UAAW,CACX","file":"index.vue","sourcesContent":["\n.phoneHeader {\n\tposition:fixed;\n\twidth:100%;\n\tleft:0;\n\ttop:0;\n\tz-index:10;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(128)("534b161e", content, true);

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "phoneIndex"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })

});