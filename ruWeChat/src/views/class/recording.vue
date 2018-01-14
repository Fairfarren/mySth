<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  @mixin transition($time) {
    transition: all $time;
    -webkit-transition: all $time;
    -o-transition: all $time;
    -moz-transition: all $time;
  }
  .classImg {
    width: 100%;
    img {
      width: 100%;
      height: 26.375rem;
      object-fit: cover;
    }
  }
  .chiose {
    padding: 0 10px;
    text-align: center;
    .van-col {
      span {
        display: block;
        width: 8.875rem;
        height: 4.375rem;
        margin: 0 auto;
        line-height: 4.375rem;
        @include fontSize(1.75rem, #666666);
        @include transition(0.3s);
      }
      .chioseCard {
        color: #0099fa;
        border: {
          bottom: 1px solid #0099fa;
        }
      }
    }
  }
  .card {
    position: relative;
    >div {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      // background: {
      //   color: #f2f1f6;
      // }
      padding: {
        bottom: 6.125rem;
      }
    }
    .box {
      padding: {
        top: 1rem;
        bottom: 2.8rem;
        left: 1.25rem;
        right: 1.25rem;
      }
      background: {
        color: #fff;
      }
      // margin: {
      //   bottom: 2.25rem;
      // }
      border: {
        bottom: 2.25rem solid #f2f1f6;
      }
      h3 {
        @include fontSize(1.75rem, #333333);
        margin: {
          top: 1.5rem;
        }
      }
      p {
        @include fontSize(1.375rem, #999999);
        margin: {
          top: 0.5rem;
        }
      }
      ul {
        margin: {
          bottom: 2rem;
        }
        padding: 0 1.25rem;
        >li{
          @include fontSize(1.375rem, #999999);
          padding: 1rem 0;
          padding: {
            left: 1rem;
            right: 1rem;
          }
          img {
            width: 1.875rem;
            vertical-align: middle;
            margin: {
              right: 1rem;
            }
          }
        }
        >li:nth-child(1) {
          @include fontSize(1.75rem, #333333);
          padding: 1rem 0;
        }
      }
    }
    .problem {
      background: {
        color: #fff;
      }
      padding: {
        left: 1.25rem;
        right: 1.25rem;
      }
      >ul {
        display: flex;
        border: {
          bottom: 1px solid #e6e6e6;
        }
        padding: {
          top: 3.43rem;
          bottom: 2.18rem;
        }
        >.left {
          text-align: center;
          margin: {
            right: 1.25rem;
          }
          img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
          }
        }
        >.right {
          width: 100%;
          >div:nth-child(1) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            >span:nth-child(1) {
              @include fontSize(1.75rem, #0099fa);
              font-weight: bold;
            }
            >span:nth-child(2) {
              @include fontSize(1.25rem, #999999);
            }
            margin: {
              bottom: 1.56rem;
            }
          }
          >p:nth-child(2) {
            @include fontSize(1.625rem, #333333);
            margin: {
              bottom: 1.56rem;
            }
          }
          >p:nth-child(3) {
            @include fontSize(1.625rem, #666666);
            padding: 1.875rem;
            background: {
              color: #f3f3f5;
            }
          }
        }
      }
    }
  }
  .bottomBut {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6.125rem;
    >.goToPay {
      background: {
        color: #ef6e0e;
      }
      >p {
        line-height: 6.125rem;
        text-align: center;
        @include fontSize(1.875rem, #fff);
      }
    }
    >.pay {
      background: {
        color: #0099fa;
      }
      >p {
        line-height: 6.125rem;
        text-align: center;
        @include fontSize(1.875rem, #fff);
      }
    }
  }
  .fadeRight-enter-active, .fadeRight-leave-active {
    @include transition(0.5s);
  }
  .fadeRight-enter, .fadeRight-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }

  .fadeLeft-enter-active, .fadeLeft-leave-active {
    @include transition(0.5s);
  }
  .fadeLeft-enter, .fadeLeft-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }
</style>

<template>
  <div>
    <div class="classImg">
      <router-link to="">
        <img v-lazy="theClass.img" alt="">
      </router-link>
    </div>
    <div class="chiose">
      <van-row gutter="20">
        <van-col span="8">
          <span :class="{chioseCard: chioseSpan === 0}"
            @click="changeCard(0)"
          >介绍</span>
        </van-col>
        <van-col span="8">
          <span :class="{chioseCard: chioseSpan === 1}"
            @click="changeCard(1)">目录</span>
        </van-col>
        <van-col span="8">
          <span :class="{chioseCard: chioseSpan === 2}"
            @click="changeCard(2)">提问</span>
        </van-col>
      </van-row>
    </div>
    <div class="card">
      <transition name="fadeLeft">
        <div v-if="chioseSpan === 0">
          <div class="box">
            <h3>
              {{ theClass.name }}
            </h3>
            <p>
              {{ theClass.count }}人已经参加学习
            </p>
          </div>
          <div class="box">
            <h3>机构</h3>
            <p>
              {{ theClass.category }}
            </p>
            <h3>讲师</h3>
            <p>
              {{ theClass.lecturer }}
            </p>
          </div>
          <div class="box">
            <h3>课程目标</h3>
            <p>
              {{ theClass.desc }}
            </p>
            <h3>适合人群</h3>
            <p>
              {{ theClass.crowd }}
            </p>
          </div>
        </div>
      </transition>
      <transition :name="fadeLR">
        <div v-if="chioseSpan === 1">
          <div class="box">
            <h3>
              {{ theClass.name }}
            </h3>
            <p>
              {{ theClass.count }}人已学习
            </p>
          </div>
          <div class="box">
            <ul
              v-for="(value, index) in theClass.lesson_list"
              :key="index"
            >
              <li>
                {{ value.chapter }}
              </li>
              <li v-for="(text, ind) in value.lesson[0]" :key="ind">
                <img src="static/images/icon4_02.png" alt="">
                {{ text.name }}
              </li>
            </ul>
          </div>
        </div>
      </transition>
      <transition name="fadeRight">
        <div v-if="chioseSpan === 2">
          <div class="problem">
            <ul v-if="problem.length > 0"
              v-for="(value, index) in problem"
              :key="index"
              v-waterfall-lower="loadMore"
              waterfall-disabled="disabled"
              waterfall-offset="20"
            >
              <li class="left">
                <img :src="value.user_info.avatar" alt="">
              </li>
              <li class="right">
                <div>
                  <span>
                    {{ value.user_info.username }}
                  </span>
                  <span>
                    {{ value.date.split(' ')[0] }}
                  </span>
                </div>
                <p>
                  {{ value.title }}
                </p>
                <p v-for="(text, ind) in value.answer_list"
                  :key="ind"
                >
                  {{ text.content }}
                </p>
              </li>
            </ul>
            <NoList noTitle="没有提问" v-if="problem.length === 0"/>
            <p style="text-align: center;">
              <img src="static/loading-bars.svg" alt="" v-if="!disabled">
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div class="bottomBut">
      <div class="goToPay"
        v-if="theClass.is_buy"
        @click="payClass"
      >
        <p>加入学习</p>
      </div>
      <div class="pay"
        v-else
        @click="startStudy"
      >
        <p>开始学习</p>
      </div>
    </div>
  </div>
</template>

<script>
import NoList from '@/components/noList'

export default {
  components: {
    NoList
  },
  data () {
    return {
      chioseSpan: 0,
      number: 0,
      fadeLR: 'fadeRight',
      theClass: {},
      problem: [],
      page: 1,
      disabled: false
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
    changeCard (goTo) {
      this.number = this.chioseSpan
      if (goTo < 1) {
        this.fadeLR = 'fadeRight'
      } else if (goTo > 1) {
        this.fadeLR = 'fadeLeft'
      } else if (this.number > 1) {
        this.fadeLR = 'fadeLeft'
      } else if (this.number < 1) {
        this.fadeLR = 'fadeRight'
      }
      setTimeout(() => {
        this.chioseSpan = goTo
      }, 10)
    },
    // 翻页
    loadMore () {
      this.disabled = true
      setTimeout(() => {
        this.page += 1
        this.getProblem()
      }, 500)
    },
    // 获取提问
    getProblem () {
      this.axios.get(`/wx/course/${this.$route.params.id}/question/page/${this.page}`).then(res => {
        if (res.data.status_code === 200) {
          if (res.data.question_list.length > 0) {
            this.disabled = false
            res.data.question_list.forEach((value, index) => {
              this.problem.push(value)
            })
          } else if (this.page === 1) {
            this.problem = []
            this.disabled = true
          } else {
            this.disabled = true
          }
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
    // 购买课程
    payClass () {
      const mobile = this.$store.state.USER.mobile
      !mobile
        ? this.noMobile()
        : (
          this.$router.push(`/payClass/${this.$route.params.id}`)
        )
    },
    // 没有绑定手机先绑定
    noMobile () {
      const toast = this.Toast.fail({
        duration: 0,
        forbidClick: true,
        message: '你还没有绑定手机，快去绑定吧~3秒后跳转'
      })
      let num = 3
      const timer = setInterval(() => {
        num--
        if (!num) {
          this.Toast.clear()
          clearInterval(timer)
          this.$router.push('/bindingMobile')
        } else {
          toast.message = `你还没有绑定手机，快去绑定吧~${num}秒后跳转`
        }
      }, 1000)
    },
    // 开始学习
    startStudy () {
      this.$router.push(`/video/${this.$route.params.id}`)
    }
  },
  mounted () {
    this.getClassAjax()
    this.getProblem()
  }
}
</script>
