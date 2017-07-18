import Vue from 'vue'
import Router from 'vue-router'

import PcPhone from '@/components/index'

//pc首页
import PcHome from '@/components/pc/home/home'
//规则
import PcRule from '@/components/pc/rule/rule'
//关于我们
import AboutUs from '@/components/pc/aboutUs/aboutUs'
//下载
import Download from '@/components/pc/download/download'

//pc首页
import PhoneHome from '@/components/phone/home/home'
//规则
import PhoneRule from '@/components/phone/rule/rule'
//关于我们
import PhoneAboutUs from '@/components/phone/aboutUs/aboutUs'
//下载
import PhoneDownload from '@/components/phone/download/download'

Vue.use(Router);
export default new Router({
    // mode:'history',
    // scrollBehavior:() => {
    //     return {y:0}
    // },
  routes: [
    
    {
        path: '/',
        redirect: '/pc/home'
    },

    {
        path: '/pc',
        component: PcPhone,
        children: [
            //pc首页
            {
                path: 'home',
                name: 'PcHome',
                component: PcHome,
            },
            //规则
            {
                path: 'rule',
                name: 'PcRule',
                component: PcRule
            },
            //关于我们
            {
                path: 'aboutUs',
                name: 'PcAboutUs',
                component: AboutUs
            },
            //下载
            {
                path: 'download',
                name: 'PcDownload',
                component: Download
            }
        ]
    },
    {
        path: '/phone',
        component: PcPhone,
        children: [
            //pc首页
            {
                path: 'home',
                component: PhoneHome,
            },
            //规则
            {
                path: 'rule',
                component: PhoneRule
            },
            //关于我们
            {
                path: 'aboutUs',
                component: PhoneAboutUs
            },
            //下载
            {
                path: 'download',
                component: PhoneDownload
            }
        ]
    },
    
  ]
})

