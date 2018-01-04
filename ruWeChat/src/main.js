// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {
  Tabbar,
  TabbarItem,
  Icon,
  Row,
  Col,
  Field,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Field)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload, {
  preLoad: 1.3,
  loading: 'static/loading-bars.svg',
  attempt: 1
})

axios.defaults.baseURL = 'http://www.ruketang.com'
// axios.defaults.baseURL = 'http://192.168.123.51:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
