webpackJsonp([8],{A13V:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={components:{NoList:a("tYgY").a},data:function(){return{chioseSpan:0,number:0,fadeLR:"fadeRight",theClass:{},problem:[],page:1,disabled:!1,jssdk:{}}},methods:{getClassAjax:function(){var t=this;this.axios.get("/wx/course_info?course_id="+this.$route.params.id).then(function(s){200===s.data.status_code?(t.theClass=s.data.data,t.$store.commit("SETCLASS",s.data.data)):401===s.data.status_code?t.$store.commit("NOW401"):t.Toast.fail(s.data.msg)}).catch(function(s){console.log(s),t.Toast.fail("网络连接错误")})},changeCard:function(t){var s=this;this.number=this.chioseSpan,t<1?this.fadeLR="fadeRight":t>1?this.fadeLR="fadeLeft":this.number>1?this.fadeLR="fadeLeft":this.number<1&&(this.fadeLR="fadeRight"),setTimeout(function(){s.chioseSpan=t},10)},loadMore:function(){var t=this;this.disabled=!0,setTimeout(function(){t.page+=1,t.getProblem()},500)},getProblem:function(){var t=this;this.axios.get("/wx/course/"+this.$route.params.id+"/question/page/"+this.page).then(function(s){200===s.data.status_code?s.data.question_list.length>0?(t.disabled=!1,s.data.question_list.forEach(function(s,a){t.problem.push(s)})):1===t.page?(t.problem=[],t.disabled=!0):t.disabled=!0:401===s.data.status_code?t.$store.commit("NOW401"):t.Toast.fail(s.data.msg)}).catch(function(s){console.log(s),t.Toast.fail("网络连接错误")})},payClass:function(){this.$store.state.USER.mobile?this.$router.push("/payClass/"+this.$route.params.id):this.noMobile()},noMobile:function(){var t=this,s=this.Toast.fail({duration:0,forbidClick:!0,message:"你还没有绑定手机，快去绑定吧~3秒后跳转"}),a=3,e=setInterval(function(){--a?s.message="你还没有绑定手机，快去绑定吧~"+a+"秒后跳转":(t.Toast.clear(),clearInterval(e),t.$router.push("/bindingMobile"))},1e3)},startStudy:function(t){if(this.$store.state.USER.mobile){var s=t||this.theClass.lesson_list[0].lesson[0][0].id;this.$router.push({path:"/video/"+this.$route.params.id,query:{lessonId:s}})}else this.noMobile()},weChatShare:function(){var t=this;this.axios.get("/wx/share",{params:{url:window.location.href}}).then(function(s){201===s.data.status_code?(t.jssdk=s.data.data,t.weChatConfig()):t.Toast.fail(s.data.msg)}).catch(function(s){console.log(s),t.Toast.fail("网络连接错误")})},weChatConfig:function(){wx.config({debug:!0,appId:this.jssdk.appId,timestamp:this.jssdk.timestamp,nonceStr:this.jssdk.noncestr,signature:"MD5",jsApiList:["onMenuShareAppMessage","onMenuShareTimeline"]}),wx.onMenuShareTimeline({title:this.theClass.name,link:this.jssdk.url,imgUrl:"",success:function(){}}),wx.onMenuShareAppMessage({title:this.theClass.name,desc:this.theClass.desc,link:this.jssdk.url,imgUrl:"",type:"",dataUrl:"",success:function(){},cancel:function(){}})}},mounted:function(){this.getClassAjax(),this.getProblem(),this.weChatShare()}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"classImg"},[a("router-link",{attrs:{to:""}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.theClass.img,expression:"theClass.img"}],attrs:{alt:""}})])],1),t._v(" "),a("div",{staticClass:"chiose"},[a("van-row",{attrs:{gutter:"20"}},[a("van-col",{attrs:{span:"8"}},[a("span",{class:{chioseCard:0===t.chioseSpan},on:{click:function(s){t.changeCard(0)}}},[t._v("介绍")])]),t._v(" "),a("van-col",{attrs:{span:"8"}},[a("span",{class:{chioseCard:1===t.chioseSpan},on:{click:function(s){t.changeCard(1)}}},[t._v("目录")])]),t._v(" "),a("van-col",{attrs:{span:"8"}},[a("span",{class:{chioseCard:2===t.chioseSpan},on:{click:function(s){t.changeCard(2)}}},[t._v("提问")])])],1)],1),t._v(" "),a("div",{staticClass:"card"},[a("transition",{attrs:{name:"fadeLeft"}},[0===t.chioseSpan?a("div",[a("div",{staticClass:"box"},[a("h3",[t._v("\n            "+t._s(t.theClass.name)+"\n          ")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.theClass.count)+"人已经参加学习\n          ")])]),t._v(" "),a("div",{staticClass:"box"},[a("h3",[t._v("机构")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.theClass.category)+"\n          ")]),t._v(" "),a("h3",[t._v("讲师")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.theClass.lecturer)+"\n          ")])]),t._v(" "),a("div",{staticClass:"box"},[a("h3",[t._v("课程目标")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.theClass.desc)+"\n          ")]),t._v(" "),a("h3",[t._v("适合人群")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.theClass.crowd)+"\n          ")])])]):t._e()]),t._v(" "),a("transition",{attrs:{name:t.fadeLR}},[1===t.chioseSpan?a("div",[a("div",{staticClass:"box"},[a("h3",[t._v("\n            "+t._s(t.theClass.name)+"\n          ")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.theClass.count)+"人已学习\n          ")])]),t._v(" "),a("div",{staticClass:"box"},t._l(t.theClass.lesson_list,function(s,e){return a("ul",{key:e},[a("li",[t._v("\n              "+t._s(s.chapter)+"\n            ")]),t._v(" "),t._l(s.lesson[0],function(s,e){return a("li",{key:e,on:{click:function(a){t.startStudy(s.id)}}},[a("img",{attrs:{src:"static/images/icon4_02.png",alt:""}}),t._v("\n              "+t._s(s.name)+"\n            ")])})],2)}))]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fadeRight"}},[2===t.chioseSpan?a("div",[a("div",{staticClass:"problem"},[t._l(t.problem,function(s,e){return t.problem.length>0?a("ul",{directives:[{name:"waterfall-lower",rawName:"v-waterfall-lower",value:t.loadMore,expression:"loadMore"}],key:e,attrs:{"waterfall-disabled":"disabled","waterfall-offset":"20"}},[a("li",{staticClass:"left"},[a("img",{attrs:{src:s.user_info.avatar,alt:""}})]),t._v(" "),a("li",{staticClass:"right"},[a("div",[a("span",[t._v("\n                  "+t._s(s.user_info.username)+"\n                ")]),t._v(" "),a("span",[t._v("\n                  "+t._s(s.date.split(" ")[0])+"\n                ")])]),t._v(" "),a("p",[t._v("\n                "+t._s(s.title)+"\n              ")]),t._v(" "),t._l(s.answer_list,function(s,e){return a("p",{key:e},[t._v("\n                "+t._s(s.content)+"\n              ")])})],2)]):t._e()}),t._v(" "),0===t.problem.length?a("NoList",{attrs:{noTitle:"没有提问"}}):t._e(),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[t.disabled?t._e():a("img",{attrs:{src:"static/loading-bars.svg",alt:""}})])],2)]):t._e()])],1),t._v(" "),a("div",{staticClass:"bottomBut"},[t.theClass.is_buy?a("div",{staticClass:"pay",on:{click:function(s){t.startStudy()}}},[a("p",[t._v("开始学习")])]):a("div",{staticClass:"goToPay",on:{click:t.payClass}},[a("p",[t._v("加入学习")])])])])},staticRenderFns:[]};var n=a("X4nt")(e,i,!1,function(t){a("bXIb")},"data-v-4b411ff8",null);s.default=n.exports},bXIb:function(t,s){}});
//# sourceMappingURL=8.8bb8b9eb20c0895a4dd0.js.map