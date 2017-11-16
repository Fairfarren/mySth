<style lang="scss">
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
    /* margin-top: 56px; */
  }
  .el-input-group__append, .el-input-group__prepend {
    padding: 0 10px;
    background: {
      color: #fff;
    }
  } 
  // 进度条
  .el-pager li.active {
    color: #fff;
    border-radius: 4px;
    background: {
      color: #3399ff;
    }
  }
  .el-dialog, .el-pager li {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 22px;
    font-weight: normal;
    color: #fff;
    border-radius: 4px;
    margin: 0 5px;
    background: {
      color: #e5e5e5;
    }
  }
  .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
    color: #fff;
    line-height: 40px;
  }
  //过度
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>

<template>
  <div id="app">
    
    <div id="theHeader" v-if="$store.state.DETAILED_SHOW">
      <keep-alive>
        <theHeader></theHeader>
      </keep-alive>
    </div>
    
    <div id="body" :style="{marginTop: $store.state.DETAILED_SHOW_MARGIN}">
      <router-view></router-view>
      <transition name="fade">
        <!-- <keep-alive> -->
          <popup v-if="$store.state.POPUP_SHOW.show"></popup>
        <!-- </keep-alive> -->
      </transition>
    </div>

    <div id="theFooter" v-if="$store.state.DETAILED_SHOW">
      <keep-alive>
        <theFooter></theFooter>
      </keep-alive>
    </div>

    <div id="rightPhone" v-if="$store.state.DETAILED_SHOW">
      <keep-alive>
        <rightPhone></rightPhone>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// import TheHeader from '';
// import TheFooter from '@/views/theFooter/theFooter'
// import RightPhone from '@/components/rightPhone'
// import Popup from '@/views/popup/index'


export default {
  name: 'app',
  data () {
    return {
      value: [20, 50],
      marginTop: {
        margin: '56px 0 0 0'
      }
    }
  },
  components: {
    TheHeader: resolve => require(['@/views/theHeader/theHeader'], resolve), 
    TheFooter: resolve => require(['@/views/theFooter/theFooter'],resolve), 
    RightPhone: resolve => require(['@/components/rightPhone'], resolve), 
    Popup: resolve => require(['@/views/popup/index'], resolve)
  },
  methods: {
    watchDetailedShow () {
      const url = this.$route.path.split('/');
      if(url.length >= 2) {
        if(url[1] == 'class' && url[2] == 'detailed') {
          this.$store.commit('WATCH_DETAILED_SHOW_FALSE')
        }else {
          this.$store.commit('WATCH_DETAILED_SHOW_TRUE')
        }
      }
    }
  },
  mounted () {
    
  },
  watch: {
    '$route':'watchDetailedShow'
  }
}
</script>


