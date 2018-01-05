<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .van-tabbar-item--active {
    color: #333333;
  }
  .van-tabbar-item a {
    font-size: 1.25rem;
    color: #666666;
  }
  .van-tabbar-item__icon img, .van-tabbar-item__icon i {
    width: 2.75rem;
    font-size: 1.25rem;
    height: auto;
  }
  .van-tabbar--fixed {
  }
</style>

<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">
        <router-link to="/" tag="span">首页</router-link>
        <template slot="icon" slot-scope="props">
          <router-link to="/">
            <img :src="props.active ? 'static/images/icon_06.png' : 'static/images/icon_01.png'" />
          </router-link>
        </template>
      </van-tabbar-item>

      <van-tabbar-item icon="chat">
        <router-link to="/classification" tag="span">分类</router-link>
        <template slot="icon" slot-scope="props">
          <router-link to="/classification">
            <img :src="props.active ? 'static/images/icon_05.png' : 'static/images/icon_02.png'" />
          </router-link>
        </template>
      </van-tabbar-item>

      <van-tabbar-item icon="records">
        <router-link to="/class" tag="span">课程</router-link>
        <template slot="icon" slot-scope="props">
          <router-link to="/class">
            <img :src="props.active ? 'static/images/icon_07.png' : 'static/images/icon_03.png'" />
          </router-link>
        </template>
      </van-tabbar-item>

      <van-tabbar-item icon="records">
        <router-link to="user" tag="span">我的</router-link>
        <template slot="icon" slot-scope="props">
          <router-link to="user">
            <img :src="props.active ? 'static/images/icon_08.png' : 'static/images/icon_04.png'" />
          </router-link>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    const routePath = this.$route.path
    const urlName = routePath.split('/')[1]
    switch (urlName) {
      case 'classification' :
        this.active = 1
        break
      case 'class' :
        this.active = 2
        break
      case 'user' :
        this.active = 3
        break
      default:
        this.active = 0
    }
  },
  watch: {
    '$route.path' (value) {
      const urlName = value.split('/')[1]
      switch (urlName) {
        case 'classification' :
          this.active = 1
          break
        case 'class' :
          this.active = 2
          break
        case 'user' :
          this.active = 3
          break
        default:
          this.active = 0
      }
    },
    'active' (value) {
      const routePathLength = this.$route.path.split('/').length
      if (routePathLength > 2) return
      switch (value) {
        case 0 :
          this.$router.push('/')
          break
        case 1 :
          this.$router.push('/classification')
          break
        case 2 :
          this.$router.push('/class')
          break
        case 3 :
          this.$router.push('/user')
          break
        default :
          break
      }
    }
  }
}
</script>
