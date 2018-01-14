<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  #payClass {

  }
  .box {
    padding: 2.18rem 1.25rem;
    border: {
      bottom: 0.625rem solid #f2f1f6;
    }
    line-height: 2.5rem;
    >.top {
      @include fontSize(1.5rem, #333333);
      border: {
        bottom: 1px solid #f2f1f6;
      }
      p {
         margin: {
          bottom: 2.18rem;
        }
      }
    }
    >.bottom {
      @include fontSize(1.375rem, #333333);
      margin: {
        top: 2.18rem;
      }
    }
  }
  .payBox {
    padding: 2.18rem 1.25rem;
    border: {
      bottom: 0.625rem solid #f2f1f6;
    }
    >p {
      @include fontSize(1.375rem, #333333);
      margin: {
        bottom: 1.25rem;
      }
    }
    >div:nth-child(2) {
      display: flex;
      $height: 5.625rem;
      >.left {
        padding: {
          right: 1.875rem;
        }
        img {
          width: 10.31rem;
          height: $height;
          object-fit: cover;
        }
      }
      >.right {
        display: flex;
        height: $height;
        flex-wrap: wrap;
        padding: {
          bottom: 1.875rem;
        }
        margin: {
          bottom: 1.875rem;
        }
        border: {
          bottom: 1px solid #f2f1f6;
        }
        * {
          width: 100%;
        }
        h3 {
          @include fontSize(1.75rem, #333333);
        }
        p {
          @include fontSize(1.25rem, #999999);
        }
        h4 {
          @include fontSize(1.75rem, #ff2a2a);
        }
      }
    }
    >.last {
      display: flex;
      justify-content: space-between;
      >span:nth-child(1) {
        @include fontSize(1.5rem, #fa0018);
      }
      >span:nth-child(2) {
        @include fontSize(1.5rem, #333333);
      }
    }
  }
  .bottomButton {
    width: 100%;
    border: {
      top: 1px solid #e5e5e5;
    }
    position: fixed;
    z-index: 10;
    left: 0;
    bottom: 0;
    background: {
      color: #fff;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    >.left {
      padding: {
        left: 1.25rem;
      }
      >span:nth-child(1) {
        @include fontSize(1.625rem, #333333);
      }
      >span:nth-child(2) {
        @include fontSize(1.625rem, #0099fa);
      }
    }
    >.right {
      >span {
        width: 12.5rem;
        height: 6.25rem;
        display: inline-block;
        text-align: center;
        line-height: 6.25rem;
        @include fontSize(1.875rem, #ffffff);
        font-weight: blod;
        background: {
          color: #0099fa;
        }
      }
    }
  }
</style>

<template>
  <div id="payClass">
    <div class="box">
      <div class="top">
        <p>
          购买账号：{{ $store.state.USER.username }}
        </p>
        <p>
          手机号：{{ USERPHONEPSW }}
        </p>
      </div>
      <div class="bottom">
        <p>
          购买后可使用已绑定的手机号登录学习。购买后不支持退款、转让，请确认开课时间或有效期后再提交订单。
        </p>
      </div>
    </div>
    <div class="payBox">
      <p>
        <span>
          机构：
        </span>
        <span>
          {{ this.$store.state.CLASS.category }}
        </span>
      </p>
      <div>
        <div class="left">
          <img v-lazy="this.$store.state.CLASS.img" alt="">
        </div>
        <div class="right">
          <h3>
            {{ this.$store.state.CLASS.name }}
          </h3>
          <p>
            课时：{{ this.$store.state.CLASS.lesson_list ? this.$store.state.CLASS.lesson_list.length : 0 }}
          </p>
          <h4>
            {{ this.$store.state.CLASS.price }}
          </h4>
        </div>
      </div>
      <div class="last">
        <span>
          限时优惠
        </span>
        <span>
          小计：{{ this.$store.state.CLASS.price }}
        </span>
      </div>
    </div>
    <!-- 底部fixed -->
    <div class="bottomButton">
      <div class="left">
        <span>实付金额：</span>
        <span>￥{{ this.$store.state.CLASS.price }}</span>
      </div>
      <div class="right">
        <span
          @click="weChatPay"
        >
          立即支付
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['USERPHONEPSW'])
  },
  methods: {
    // 获取课程详情
    getClassAjax () {
      this.axios.get(`/wx/course_info?course_id=${this.$route.params.id}`).then(res => {
        if (res.data.status_code === 200) {
          this.theClass = res.data.data
          this.$store.commit('SETCLASS', res.data.data)
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch(error => {
        console.log(error)
        this.Toast.fail('网络连接错误')
      })
    },
    // 去支付
    weChatPay () {
      this.Toast.loading('去支付')
    }
  },
  mounted () {
    const name = this.$store.state.CLASS.name
    !name && this.getClassAjax()
  }
}
</script>
