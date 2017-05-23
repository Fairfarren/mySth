import Vue from 'vue'
import Router from 'vue-router'
//pc首页
import PcHome from '@/components/pc/home/home'
//规则
import PcRule from '@/components/pc/rule/rule'

Vue.use(Router)

export default new Router({
    // mode:'history',
    // scrollBehavior:() => {
    //     return {y:0}
    // },
  routes: [
    //pc首页
    {
        path: '/',
        redirect: '/home'
    },
    {
    	path: '/home',
    	name: 'PcHome',
    	component: PcHome,
    },
    //规则
    {
    	path: '/rule',
    	name: 'PcRule',
    	component: PcRule
    }
  ]
})
