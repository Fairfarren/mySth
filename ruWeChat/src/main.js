// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from '@/store/index'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import {
  Tabbar,
  TabbarItem,
  Icon,
  Row,
  Col,
  Field,
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
  Waterfall,
  Cell,
  CellGroup,
  Actionsheet,
  DatetimePicker,
  Button
} from 'vant'

Vue.use(VueVideoPlayer)

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Field)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Waterfall)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Actionsheet)
Vue.use(DatetimePicker)
Vue.use(Button)
Vue.use(Lazyload, {
  preLoad: 1.3,
  loading: 'static/loading-bars.svg',
  attempt: 1
})
Vue.use(Vuex)

// axios.defaults.baseURL = 'http://www.ruketang.com'
axios.defaults.baseURL = 'http://tao.liu:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.Toast = Toast

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
