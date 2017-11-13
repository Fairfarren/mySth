import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//父级组件和子级组件的传值
import ParAndChi from '@/components/parAndChi/parAndChi'
//通过路由地址获取值
import First from '@/components/routersChange/first'
import Two from '@/components/routersChange/two'
//<router-view>的name属性
import RouterView from '@/components/routerView/index'
import Home1 from '@/components/routerView/home1'
import Home2 from '@/components/routerView/home2'
import Title1 from '@/components/routerView/title1'
import Title2 from '@/components/routerView/title2'
//<soft>标签的使用
import UseSlot from '@/components/useSoft/useSlot'
//axios的测试，并且做使用代理模式
import Axios1 from '@/components/axios/axios1'
//lazyLoad
import LazyLoad from '@/components/lazyLoad/lazyLoad'
//vueInfiniteScroll,检测滚动插件
import Scroll from '@/components/vueInfiniteScroll/vueInfiniteScroll'
//uploadImg,图片ajax上传和预览
import UploadImg from '@/components/uploadImg/uploadImg'
//vueInfiniteLoading，滚动加载
import InfiniteLoading from '@/components/infiniteLoading/infiniteLoading'
//axios，拦截器
import Axios2 from '@/components/axios2/axios2'
//vuex
import ModelVuex from '@/components/vuex/vuex'
//video
import Video from '@/components/video/video'
//md5
import Md5 from '@/components/md5/md5'
//location
import Location from '@/components/location/location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    //父级组件和子级组件的传值
    {
    	path: '/parAndChi',
    	component: ParAndChi
    },
    //通过路由地址获取值
    {
      path: '/routerChange',
      component: First,
      children:[
        {
          path: 'two/:id',
          component: Two
        }
      ]
    },
    //<router-view>的name属性
    {
      path: '/routerView',
      component: RouterView,
      children:[
        {
          path:'index1',
          components:{
            home:Home1,
            title:Title1
          }
        },
        {
          path: 'index2',
          components:{
            home:Home2,
            title:Title2
          }
        }
      ]
    },
    //<soft>标签的使用
    {
      path: '/useSlot',
      component: UseSlot
    },
    //axios的测试，并且做使用代理模式
    {
      path: '/axios',
      component: Axios1
    },
    //lazyLoad
    {
      path: '/lazyload',
      component: LazyLoad
    },
    //vue检测滚动
    {
      path: '/scroll',
      component: Scroll
    },
    //uploadImg,图片ajax上传和预览
    {
      path: '/uploadImg',
      component: UploadImg
    },
    ////vueInfinitelLoading，滚动加载
    {
      path: '/infiniteLoading',
      component: InfiniteLoading
    },
    //axios拦截器
    {
      path: '/axios2',
      component: Axios2
    },
    //vuex
    {
      path: '/vuex',
      component: ModelVuex
    },
    //video
    {
      path: '/video',
      component: Video
    },
    {
      path: '/md5',
      component: Md5
    },
    {
      path: '/location',
      component: Location
    }
  ]
})
