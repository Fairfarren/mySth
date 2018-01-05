<style lang="scss" scoped>
@mixin fontSize($size, $color) {
  font-size: $size;
  color: $color;
}
.title {
  h3 {
    @include fontSize(1.88rem, #333333);
    border: {
      left: 0.44rem solid #3399FF;
    }
    padding: {
      left: 1.2rem;
    }
  }
}
.content {
  >div {
    margin: {
      top: 2rem;
    }
    .box {
      // margin: {
      //   top: 1.3rem;
      // }
    }
  }
}
</style>

<template>
  <div>
    <div class="title">
      <h3>{{ recommend.category }}</h3>
    </div>
    <div class="content">
      <van-row gutter="20">

        <van-col
          span="12"
          class="box"
          v-for="(value, index) in recommend.course"
          :key="index"
        >
          <ClassList :value="value" />
        </van-col>

      </van-row>
    </div>
  </div>
</template>

<script>
import ClassList from '@/components/classList'
export default {
  components: {
    ClassList
  },
  props: ['recommend'],
  mounted () {
  }
}
</script>
