<template>
  <div id="app">
    <div id="bodyDiv">
      <router-view />
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
  mounted () {
    var fontSize = 16
    if ('ontouchstart' in window) {
      fontSize = window.innerWidth / 750 * 16
    } else {
      document.getElementsByTagName('body')[0].style.maxWidth = '750px'
    }
    document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'
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
</style>
