webpackJsonp([6],{KLjC:function(t,a){},Usvx:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"footer"}},[s("van-tabbar",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[s("van-tabbar-item",{attrs:{icon:"wap-home"},scopedSlots:t._u([{key:"icon",fn:function(t){return[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:t.active?"static/images/icon_06.png":"static/images/icon_01.png"}})])]}}])},[s("router-link",{attrs:{to:"/home",tag:"span"}},[t._v("首页")])],1),t._v(" "),s("van-tabbar-item",{attrs:{icon:"chat"},scopedSlots:t._u([{key:"icon",fn:function(t){return[s("router-link",{attrs:{to:"/classification"}},[s("img",{attrs:{src:t.active?"static/images/icon_05.png":"static/images/icon_02.png"}})])]}}])},[s("router-link",{attrs:{to:"/classification",tag:"span"}},[t._v("分类")])],1),t._v(" "),s("van-tabbar-item",{attrs:{icon:"records"},scopedSlots:t._u([{key:"icon",fn:function(t){return[s("router-link",{attrs:{to:"/myclass"}},[s("img",{attrs:{src:t.active?"static/images/icon_07.png":"static/images/icon_03.png"}})])]}}])},[s("router-link",{attrs:{to:"/myclass",tag:"span"}},[t._v("课程")])],1),t._v(" "),s("van-tabbar-item",{attrs:{icon:"records"},scopedSlots:t._u([{key:"icon",fn:function(t){return[s("router-link",{attrs:{to:"user"}},[s("img",{attrs:{src:t.active?"static/images/icon_08.png":"static/images/icon_04.png"}})])]}}])},[s("router-link",{attrs:{to:"user",tag:"span"}},[t._v("我的")])],1)],1)],1)},staticRenderFns:[]};var e=s("X4nt")({data:function(){return{active:0}},mounted:function(){switch(this.$route.path.split("/")[1]){case"classification":this.active=1;break;case"myclass":this.active=2;break;case"user":this.active=3;break;default:this.active=0}},watch:{"$route.path":function(t){switch(t.split("/")[1]){case"home":this.active=0;break;case"classification":this.active=1;break;case"myclass":this.active=2;break;case"user":this.active=3}},active:function(t){if(!(this.$route.path.split("/").length>2))switch(t){case 0:this.$router.push("/home");break;case 1:this.$router.push("/classification");break;case 2:this.$router.push("/myclass");break;case 3:this.$router.push("/user")}}}},i,!1,function(t){s("KLjC")},"data-v-a99551be",null);a.default=e.exports}});
//# sourceMappingURL=6.f2b3e8abb79f41d81df7.js.map