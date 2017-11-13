<template>
  <div class="hello">
    <div>
      <router-link to="/parAndChi">父级子级传值</router-link>
    </div>
    <div>
      <router-link to="/routerChange">路由地址传值</router-link>
    </div>
    <div>
      <router-link to="/routerView">routerView标签的name</router-link>
    </div>
    <div>
      <router-link to="/useSlot">< slot >标签的使用</router-link>
    </div>
    <div>
      <router-link to="/axios">axios测试并使用代理</router-link>
    </div>
    <div>
      <router-link to="/lazyload">lazyload</router-link>
    </div>
    <div>
      <router-link to="/scroll">scroll</router-link>
    </div>
    <div>
      <router-link to="/uploadImg">uploadImg</router-link>
    </div>
    <div>
      <router-link to="/infiniteLoading">infiniteLoading</router-link>
    </div>
    <div>
      <router-link to="/axios2">axios2，拦截器</router-link>
    </div>
    <div>
      <router-link to="/vuex">vuex</router-link>
    </div>
    <div>
      <router-link to="/video">video</router-link>
    </div>
    <div>
      <router-link to="/md5">md5</router-link>
    </div>
    <div>
      <router-link to="/location">location</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
