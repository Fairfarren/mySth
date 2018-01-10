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
    },
    {
      path: '/myclass',
      component: resolve => require(['@/views/class/myClass'], resolve)
    },
    {
      path: '/user',
      component: resolve => require(['@/views/user/user'], resolve)
    }
  ]
})
