<!-- 这个页面划分pc和移动 -->
<template>
  <div id="app">
    <pc v-if="pcOrPhone"></pc>
    <home v-else></home>
  </div>
</template>

<script>
// import Pc from './components/pc/index'
//import Home from './components/phone/index'

export default {
  name: 'app',
  data () {
    return {
      //控制pc还是phone
      pcOrPhone:true,
      //控制屏幕宽度
      screenWidth: document.documentElement.clientWidth
    }
  },
  mounted () {
    const that = this;
    //检测浏览器宽度
    // window.onresize = () => {
    //   return (() => {
    //       window.screenWidth = document.documentElement.clientWidth
    //       that.screenWidth = window.screenWidth
    //   })()
    // }
  },
  watch: {
    //检测浏览器宽度并作出相应的改变
    // screenWidth (val) {
    //   this.screenWidth = val;
    //   // console.log(this.screenWidth)
    //   if(this.screenWidth <= 768){
    //     this.pcOrPhone = false;
    //   }else{
    //     this.pcOrPhone = true;
    //   }
    // }
  },
  //页面加载后开始运行
  created () {
    if(this.screenWidth <= 768){
      this.pcOrPhone = false;
    }else{
      this.pcOrPhone = true;
    }
  },
  components: {
    Pc: resolve => require(['./components/pc/index'], resolve),
    Home: resolve => require(['./components/phone/index'], resolve)
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
  }
  #app{
    width:100%;
  }
</style>
