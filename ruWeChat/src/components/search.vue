<style lang="scss" scoped>
@mixin fontSize($size, $color) {
  font-size: $size;
  color: $color;
}
#search {
  width: 100%;
  // position: fixed;
  // top: 0;
  // left: 0;
  text-align: center;
  border: {
    bottom: 1px solid #eeeeee;
  }
  background: {
    color: #fff;
  }
  z-index: 10;
  >div {
    padding: {
      top: 1.13rem;
      right: 1.15rem;
      bottom: 1.13rem;
    }
  }
}
.searchBox {
  background: {
    color: #F2F2F2;
  }
  input {
    border: 0;
    outline: none;
    height: 2.94rem;
    @include fontSize(1.5rem, #B3B3B3);
    background: {
      color: #F2F2F2;
    }
  }
  i {
    @include fontSize(1.5rem, #B3B3B3);
    float: right;
    margin: {
      top: 0.8rem;
      right: 0.8rem;
    }
  }
}
</style>

<template>
  <div id="search">
    <van-row >
      <van-col span="7">
        <router-link to="/">
          <img style="width: 8rem;vertical-align: middle;" src="static/images/logo.png" alt="">
        </router-link>
      </van-col>
      <van-col span="17">
        <div class="searchBox">
          <input type="text" placeholder="职业教育、花艺、无人机">
          <van-icon name="search"/>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
