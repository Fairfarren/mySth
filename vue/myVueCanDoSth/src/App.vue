<template>
  <div id="app">
    <div @click="helloSaySth">123</div>
    <router-link to="/">
      <img src="./assets/logo.png">
    </router-link>
    <nav>
      <span>1</span>
      <span>2</span>
    </nav>
    <router-view></router-view>
    <vueComponent hello="你好" world="世界"/>
  </div>
</template>

<script>
import hello from './mixins/hello'
export default {
  name: 'app',
  mixins: [hello],
  methods: {
    helloSaySth() {
      this.saySth(123)
      console.log(this.$data.say)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
