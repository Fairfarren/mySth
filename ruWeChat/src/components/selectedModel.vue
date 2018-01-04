<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .left {
    img {
      width: 100%;
    }
  }
  .right {
    h3 {
      width: 100%;
      line-height: 2.25rem;
      height: 5.25rem;
      box-sizing: border-box;
      padding: {
        top: 0.25rem;
      }
      @include fontSize(1.75rem, #333333);
    }
    p:nth-child(2) {
      width: 100%;
      @include fontSize(1.63rem, #808080);
      margin: {
        // top: 2rem;
      }
    }
    p:nth-child(3) {
      width: 100%;
      margin: {
        top: 0.51rem;
      }
      span {
        @include fontSize(1.5rem, #1284DD);
      }
      .freeColor {
        color: #ff2a2a;
      }
    }
    .space-around {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around
    }
  }
</style>

<template>
  <div>
    <router-link :to="selectedData.url">
      <van-row gutter="10">
        <van-col class="left" span="8">
          <img v-lazy="selectedData.img" alt="">
        </van-col>
        <van-col class="right" span="16">
          <div class="space-around">
            <h3>
              {{ selectedData.className | maxLength25 }}
            </h3>
            <p>
              {{ selectedData.publishing }}
            </p>
            <p>
              <span :class="{freeColor: selectedData.publishing > 0}">
                {{ selectedData.publishing > 0 ? `¥${selectedData.publishing}`: '免费' }}
              </span>
            </p>
          </div>
        </van-col>
      </van-row>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['selectedData'],
  computed: {
  },
  filters: {
    maxLength25 (value) {
      value = value.length >= 25 ? `${value.slice(0, 23)}......` : value
      return value
    }
  }
}
</script>
