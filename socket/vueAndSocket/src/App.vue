<template>
  <div id="app">
    <div class="list">
      <ul>
        <li>
          <router-link to="/hello">hello</router-link>
        </li>
        <li>
          <router-link to="/world">world</router-link>
        </li>
      </ul>
    </div>
    <div class="talk">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 60px 0;
  display: flex;
  height: 100%;
  box-sizing: border-box;
}
.list {
  padding: 0 20px;
  flex-grow: 2;
  text-align: center;
}
.talk {
  flex-grow: 8;
}
</style>
