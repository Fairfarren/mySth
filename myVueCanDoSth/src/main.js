// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
//引用vuex的配置
import store from './store/index' 

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'



import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,//预加载高度的比例
  loading: '/static/loading-svg/loading-balls.svg',//等待加载图片
  attempt: 1,//尝试次数
  listenEvents: [ 'scroll' ]//监听事件
})
//无限滚动
Vue.use(infiniteScroll)

Vue.use(VueVideoPlayer)

Vue.config.productionTip = false;

// Vue.use(axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
