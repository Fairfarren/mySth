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
          类别：
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
            课时：{{ classHour }}
          </p>
          <h4>
            ￥{{ this.$store.state.CLASS.price }}
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
// const wx = window.wx
export default {
  computed: {
    ...mapGetters(['USERPHONEPSW']),
    classHour () {
      const theLessonList = this.$store.state.CLASS.lesson_list
      let num = 0
      theLessonList.forEach((value, index) => {
        value.lesson[0].forEach((text, ind) => {
          num++
        })
      })
      return num
    }
  },
  data () {
    return {
      jssdk: {}
    }
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
      this.axios.post('/wx/buy/course', {
        course_id: this.$route.params.id,
        url: window.location.href
      }).then(res => {
        if (res.data.status_code === 201) {
          // 免费已经购买了
          if (res.data.data.pay_type === 0) {
            this.Toast.loading({
              duration: 0,
              forbidClick: true,
              message: '正在为您免费购买课程'
            })
            let num = 3
            const timer = setInterval(() => {
              num--
              if (!num) {
                this.Toast.clear()
                clearInterval(timer)
                history.go(-1)
              }
            }, 1000)
          } else {
            this.jssdk = res.data.data
            setTimeout(() => {
              this.weChatJSSDK()
            }, 100)
          }
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch(error => {
        console.log(error)
        this.Toast.fail('网络连接错误')
      })
    },
    // 调微信支付接口
    weChatJSSDK () {
      this.wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: this.jssdk.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
        timestamp: this.jssdk.timeStamp, // 必填，生成签名的时间戳
        nonceStr: this.jssdk.nonceStr, // 必填，生成签名的随机串
        signature: this.jssdk.sign, // 必填，签名，见附录1
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      const that = this
      this.wx.ready(res => {
        this.wx.chooseWXPay({
          timestamp: this.jssdk.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: this.jssdk.nonceStr, // 支付签名随机串，不长于 32 位
          package: this.jssdk.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: this.jssdk.sign, // 支付签名
          success: function (res) {
            // 支付成功后的回调函数
            that.Toast.success({
              duration: 0,
              forbidClick: true,
              message: '付款成功'
            })
            setTimeout(() => {
              that.Toast.clear()
              history.go(-1)
            }, 2000)
          }
        })
      })
    }
  },
  mounted () {
    const name = this.$store.state.CLASS.name
    !name && this.getClassAjax()
  }
}
</script>
