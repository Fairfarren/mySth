<template>
  <div id="app">
    <div id="bodyDiv">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div id="footerDiv">
      <the-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    TheFooter: resolve => require(['@/views/footer/footer'], resolve)
  },
  methods: {
    // 登录
    loginAjax () {
      this.axios.get('/wx/t_login').then(res => {

      }).catch(error => {
        console.log(error)
        this.Toast.fail('网络链接错误')
      })
    }
  },
  mounted () {
    var fontSize = 16
    fontSize = window.innerWidth / 750 * 16 > 16 ? 16 : window.innerWidth / 750 * 16
    document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'
    this.loginAjax()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
html, body {
  font-family: Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  min-height: 100vh;
}
body {
  max-width: 750px;
  margin: 0 auto;
}
.divDFixedTop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
  /* -webkit-transition: all 0.5;
  -o-transition: all 0.5;
  -moz-transition: all 0.5; */
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
