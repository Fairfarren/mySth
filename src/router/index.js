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
      path: '/class',
      component: resolve => require(['@/views/class/all'], resolve)
    },
    {
      path: '/class/recording/:id',
      component: resolve => require(['@/views/class/recording'], resolve)
    },
    {
      path: '/class/detailed/:id',
      component: resolve => require(['@/views/class/detailed'], resolve)
    },
    {
      path: '/about',
      component: resolve => require(['@/views/about/about'], resolve)
    },
    {
      path: '/contact',
      component: resolve => require(['@/views/contact/contact'], resolve)
    },
    {
      path: '/myClassAndOrder/:page',
      component:  resolve => require(['@/views/myClassAndOrder/myClassAndOrder'], resolve)
    }
  ]
})
