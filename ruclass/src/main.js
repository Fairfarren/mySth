// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuex from 'vuex'
//引用vuex的配置
import store from './store/index'
//懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,//预加载高度的比例
  loading: '../static/loading/loading-bars.svg',//等待加载图片
  attempt: 1,//尝试次数
  listenEvents: [ 'scroll' ]//监听事件
})

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
