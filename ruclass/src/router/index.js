import Vue from 'vue'
import Router from 'vue-router'


//模块
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['@/views/home/home'], resolve)
    },
    {
      path: '/class/recording/:id',
      component: resolve => require(['@/views/class/recording'], resolve)
    },
    {
      path: '/class/detailed/:id',
      component: resolve => require(['@/views/class/detailed'], resolve)
    }
  ]
})
