<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .noListBox {
    position: relative;
    >div {
      width: 100vw;
      position: absolute;
      top: 10.625rem;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      img {
        width: 24.93rem;
      }
      p {
        @include fontSize(1.5rem, #333333);
        margin: {
          top: 2.18rem;
        }
      }
    }
  }
</style>

<template>
  <div class="noListBox">
    <div>
      <img src="static/images/nosth.png" alt="">
      <p>
        {{ noTitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['noTitle']
}
</script>
