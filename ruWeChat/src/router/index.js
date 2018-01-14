import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: resolve => require(['@/views/index'], resolve)
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['@/views/home/home'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '汝课堂'
        next()
      }
    },
    {
      path: '/classification',
      component: resolve => require(['@/views/class/all'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '课程列表'
        next()
      }
    },
    {
      path: '/myclass',
      component: resolve => require(['@/views/class/myClass'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '我的课程'
        next()
      }
    },
    {
      path: '/user',
      component: resolve => require(['@/views/user/user'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '我的'
        next()
      }
    },
    {
      path: '/myself',
      component: resolve => require(['@/views/user/myself'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '个人资料'
        next()
      }
    },
    {
      path: '/recording/:id',
      component: resolve => require(['@/views/class/recording'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '课程详情'
        next()
      }
    },
    {
      path: '/order',
      component: resolve => require(['@/views/user/order'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '我的订单'
        next()
      }
    },
    {
      path: '/bindingMobile',
      component: resolve => require(['@/views/user/bindingMobile'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '绑定手机'
        next()
      }
    },
    {
      path: '/payClass/:id',
      component: resolve => require(['@/views/pay/payClass'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '确认订单'
        next()
      }
    },
    {
      path: '/video/:id',
      component: resolve => require(['@/views/class/video'], resolve),
      beforeEnter: (to, from, next) => {
        document.title = '汝课堂'
        next()
      }
    }
  ]
})
