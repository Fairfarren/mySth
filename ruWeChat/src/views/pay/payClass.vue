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
            课时：{{ this.$store.state.CLASS.lesson_list.length }}
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
    }
  },
  mounted () {
    const { name } = this.$store.state.CLASS
    !name && this.getClassAjax()
  }
}
</script>
