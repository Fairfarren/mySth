webpackJsonp([6],{"7uhI":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{ClassList:e("Xhie").a},props:["recommend"],mounted:function(){}},a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"title"},[s("h3",[this._v(this._s(this.recommend.category))])]),this._v(" "),s("div",{staticClass:"content"},[s("van-row",{attrs:{gutter:"20"}},this._l(this.recommend.course,function(t,e){return s("van-col",{key:e,staticClass:"box",attrs:{span:"12"}},[s("ClassList",{attrs:{value:t}})],1)}))],1)])},staticRenderFns:[]},n=e("8AGX")(i,a,!1,function(t){e("O9K4")},"data-v-4a7370a8",null);s.default=n.exports},FSBq:function(t,s){},O9K4:function(t,s){},Xhie:function(t,s,e){"use strict";var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("router-link",{attrs:{to:"/class/"+this.value.id}},[s("div",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.value.img,expression:"value.img"}],attrs:{alt:""}})]),this._v(" "),s("h3",[this._v("\n    "+this._s(this.value.name)+"\n  ")]),this._v(" "),s("p",[s("span",[this._v(this._s(this.value.lecturer))]),this._v(" "),s("span",[s("img",{attrs:{src:"static/images/icon4_02.png",alt:""}}),this._v("\n      录播\n    ")]),this._v(" "),s("span",{class:{freeColor:this.value.price>0}},[this._v("\n      "+this._s(this.value.price>0?"¥"+this.value.price:"免费")+"\n    ")])])])},staticRenderFns:[]},a=e("8AGX")({props:["value"]},i,!1,function(t){e("FSBq")},"data-v-16ccb00c",null);s.a=a.exports}});
//# sourceMappingURL=6.d146474bef222a953b6a.js.map