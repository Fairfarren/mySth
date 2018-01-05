<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  a {
    display: block;
    margin: {
      top: 1.3rem;
    }
    >div:nth-child(1) {
      img {
        width: 100%;
      }
    }
    >h3:nth-child(2) {
      @include fontSize(1.75rem, #333333);
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    p:nth-child(3) {
      span:nth-child(1) {
        @include fontSize(1.63rem, #808080);
        margin: {
          right: 0.5rem;
        }
      }
      span:nth-child(2) {
        @include fontSize(1.25rem, #22B37B);
        img {
          width: 1.4rem;
          vertical-align: middle;
        }
      }

      span:nth-child(3) {
        @include fontSize(1.5rem, #1284DD);
        float: right;
        margin: {
          top: 0.1rem;
        }
      }
      .freeColor:nth-child(3) {
        color: #ff2a2a;
      }
    }
  }
</style>

<template>
  <router-link :to="`/class/${value.id}`">
    <div>
      <img v-lazy="value.img" alt="">
    </div>
    <h3>
      {{ value.name }}
    </h3>
    <p>
      <span>{{ value.lecturer }}</span>
      <span>
        <img src="static/images/icon4_02.png" alt="">
        录播
      </span>
      <span :class="{freeColor: value.price > 0}">
        {{ value.price > 0 ? `¥${value.price}`: '免费' }}
      </span>
    </p>
  </router-link>
</template>

<script>
export default {
  props: ['value']
}
</script>
