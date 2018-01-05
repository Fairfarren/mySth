import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/home/home'], resolve)
    },
    {
      path: '/classification',
      component: resolve => require(['@/views/class/all'], resolve)
    }
  ]
})
