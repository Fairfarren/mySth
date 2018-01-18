<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .top {
    padding: 2.5rem 1.25rem;
    .userImg {
      text-align: center;
      img {
        width: 8.81rem;
        height: 8.81rem;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .userName {
      >div {
        height: 8.81rem;
        display: flex;
        // align-items: center;
        align-content: space-around;
        flex-wrap: wrap;
        >h3 {
          width: 100%;
          @include fontSize(2.25rem, #333333);
        }
        >p:nth-child(2) {
          width: 100%;
          @include fontSize(1.75rem, #b8b8b8);
          >span {
            color: #8bcc88;
          }
        }
        >p:nth-child(3) {
          a {
            width: 100%;
            @include fontSize(1.75rem, #009ef9);
          }
        }
      }
    }
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
      <div class="top">
        <van-row gutter="20">
          <van-col span="6" class="userImg">
            <router-link to="/myself">
              <img :src="this.$store.state.USER.avatar" alt="">
            </router-link>
          </van-col>
          <van-col span="18" class="userName">
            <div>
              <h3>
                {{ this.$store.state.USER.username }}
              </h3>
              <p v-show="this.$store.state.USER.mobile">
                {{ USERPHONEPSW }}
                <span>
                  已绑定
                </span>
              </p>
              <p v-show="!this.$store.state.USER.mobile">
                <router-link to="/bindingMobile">
                  去绑定手机号
                </router-link>
              </p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="cellBox">
      <van-cell-group>
        <van-cell title="我的订单" icon="location" to="/order" is-link>
          <img slot="icon" src="static/images/icon3_05.png" alt="">
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="我的评论" icon="location" to="/myComment" is-link>
          <img slot="icon" src="static/images/icon3_05.png" alt="">
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['USERPHONEPSW'])
  },
  data () {
    return {

    }
  },
  methods: {
    // 获取用户信息/wx/profile
    // getUserAjax () {
    //   this.axios.get('/wx/profile').then(res => {
    //     if (res.data.status_code === 200) {
    //       this.$store.commit('SETUSER', res.data.data)
    //     } else if (res.data.status_code === 401) {
    //       this.$store.commit('NOW401')
    //     } else {
    //       this.Toast.fail(res.data.msg)
    //     }
    //   }).catch(error => {
    //     console.log(error)
    //     this.Toast.fail('网络连接错误')
    //   })
    // }
  },
  mounted () {

  }
}
</script>
