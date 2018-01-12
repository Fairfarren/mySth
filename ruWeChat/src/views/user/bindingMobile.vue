<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .box {
    padding: 2.5rem 2.25rem;
    .van-row {
      display: flex;
      align-items: center;
    }
    .van-col-6 {
      font-size: 1.5rem;
    }
    .van-field--nolabel {
      border: 0;
    }
  }
</style>

<template>
  <div class="box">
    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field
            v-model="mobile"
            label="手机号："
            icon="clear"
            placeholder="请输入手机号"
            @click-icon="mobile = ''"
          />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="17">
        <van-cell-group>
          <van-field
            v-model="code"
            label="验证码："
            placeholder="输入验证码"
          />
        </van-cell-group>
      </van-col>
      <van-col span="7">
        <van-button type="default">获取验证码</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '',
      code: ''
    }
  }
}
</script>
