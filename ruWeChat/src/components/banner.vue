<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  #banner {
    padding: {
      top: 5.3rem;
    }
    img {
      width: 100%;
      // height: 18.06 / 47 * 100vw;
      height: 18.06rem;
      object-fit: cover;
    }
  }
  .van-swipe__indicator--active {
    background: {
      color: #fff;
    }
  }
</style>

<template>
  <div id="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banner" :key="index">
        <router-link :to="`/recording/${image.course_id}`">
          <img v-lazy="image.banner_img" listenEvents="qwe"/>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['banner']
}
</script>
