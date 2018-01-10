<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .cellBox {
    border: {
      bottom: 1.25rem solid #f2f1f6;
    }
    .van-cell {
      @include fontSize(1.75rem, #333333);
    }
    img {
      width: 2.375rem;
      vertical-align: middle;
      margin: {
        right: 1rem;
      }
    }
  }
</style>

<template>
  <div>
    <div class="cellBox">
      <van-cell-group>
        <van-cell title="个人资料" is-link url="#/qwe">
          <img slot="icon" src="static/images/icon3_01.png" alt="">
        </van-cell>
      </van-cell-group>
    </div>
    <div class="cellBox">
      <van-cell-group>
        <van-cell title="我的订单" icon="location" is-link>
          <img slot="icon" src="static/images/icon3_05.png" alt="">
        </van-cell>
      </van-cell-group>
    </div>
    <div class="cellBox">
      <van-cell-group>
        <van-cell title="绑定手机号" icon="location" is-link>
          <img slot="icon" src="static/images/icon3_04.png" alt="">
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
