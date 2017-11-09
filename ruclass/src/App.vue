<style>
  *{
    margin: 0;
    padding: 0;
  }
  html, body {
    font-size: 16px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", "Helvetica", "Arial"; */
    min-width: 1200px;
  }
  #body {
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  #theHeader {
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    position: fixed;
    background-color: #fff;
    transition: all 0.3s;
    /* box-shadow: 0 -5px 10px #888888; */
    border-bottom: 1px solid #3399ff;
  }
  #body {
    margin-top: 56px;
  }
</style>

<template>
  <div id="app">
    <div id="theHeader">
      <theHeader></theHeader>
    </div>
    <div id="body">
      <router-view></router-view>
    </div>
    <div id="theFooter">
      <theFooter></theFooter>
    </div>
    <div id="rightPhone">
      <rightPhone></rightPhone>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/views/theHeader/theHeader';
import TheFooter from '@/views/theFooter/theFooter'
import rightPhone from '@/components/rightPhone'

export default {
  name: 'app',
  data () {
    return {
      value: [20, 50]
    }
  },
  components: {
    TheHeader, TheFooter, rightPhone
  },
  methods: {
    
  },
  mounted () {
    // window.addEventListener("scroll", (event) => {
    //     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //     if(scrollTop > 56) {
    //       this.navFixed.position = 'fixed';
    //     }else{
    //       this.navFixed.position = '';
    //     }
    //     // console.log(scrollTop);            
    // });
  }
}
</script>


