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
        align-items: center;
        >h3 {
          @include fontSize(2.25rem, #333333);
        }
      }
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
      >ul {
        >li {
          padding: 0 20px;
          >.van-row {
            padding: 1.875rem 0;
            border: {
              bottom: 1px solid #ededed;
            }
            >.left {
              img {
                width: 100%;
                height: 5.93rem;
                object-fit: cover;
              }
            }
            >.right {
              height: 5.93rem;
              display: flex;
              align-content: space-between;
              flex-wrap: wrap;
              >div {
                width: 100%;
                h3 {
                  display: flex;
                  justify-content: space-between;
                  @include fontSize(1.75rem, #333333);
                  >span:last-child {
                    color: #0099fa;
                  }
                }
                p {
                  display: flex;
                  justify-content: space-between;
                  img {
                    width: 1.25rem;
                    height: 1.25rem;
                    vertical-align: middle;
                  }
                  span:nth-child(1) {
                    @include fontSize(1.25rem, #22b37b);
                  }
                  span:last-child {
                    @include fontSize(1.5rem, #999999);
                  }
                }
              }
            }
          }
        }
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
    <div class="top">
      <van-row gutter="20">
        <van-col span="6" class="userImg">
          <img src="https://i.loli.net/2018/01/08/5a531d4876673.png" alt="">
        </van-col>
        <van-col span="18" class="userName">
          <div>
            <h3>
              天道忧伤
            </h3>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="chiose">
      <van-row gutter="20">
        <van-col span="8">
          <span :class="{chioseCard: chioseSpan === 0}"
            @click="changeCard(0)"
          >待学习</span>
        </van-col>
        <van-col span="8">
          <span :class="{chioseCard: chioseSpan === 1}"
            @click="changeCard(1)">学习中</span>
        </van-col>
        <van-col span="8">
          <span :class="{chioseCard: chioseSpan === 2}"
            @click="changeCard(2)">已完成</span>
        </van-col>
      </van-row>
    </div>
    <div class="card">
      <transition name="fadeLeft">
        <div v-if="chioseSpan === 0">
          <ul v-if="noStatr.length > 0">
            <li v-for="(value, index) in noStatr" :key="index">
              <van-row gutter="20">
                <van-col span="7" class="left">
                  <img v-lazy="value.img" alt="">
                </van-col>
                <van-col span="17" class="right">
                  <div>
                    <h3>
                      <span>{{ value.name.length > 15 ? `${value.name.slice(0, 15)}......` : value.name }}</span>
                      <span>开始学习</span>
                    </h3>
                  </div>
                  <div>
                    <p>
                      <span>
                        <img src="static/images/icon4_02.png" alt="">
                        录播
                      </span>
                      <span>
                        ({{ value.schedule.split('/')[0] }}/{{ value.schedule.split('/')[1] }})
                      </span>
                    </p>
                  </div>
                </van-col>
              </van-row>
            </li>
          </ul>
          <NoList v-else noTitle="呀，还没有课程呢！" />
        </div>
      </transition>
      <transition :name="fadeLR">
        <div v-if="chioseSpan === 1">
          <ul v-if="startIng.lengt > 0">
            <li v-for="(value, index) in startIng" :key="index">
              <van-row gutter="20">
                <van-col span="7" class="left">
                  <img v-lazy="value.img" alt="">
                </van-col>
                <van-col span="17" class="right">
                  <div>
                    <h3>
                      <span>{{ value.name.length > 15 ? `${value.name.slice(0, 15)}......` : value.name }}</span>
                      <span>继续学习</span>
                    </h3>
                  </div>
                  <div>
                    <p>
                      <span>
                        <img src="static/images/icon4_02.png" alt="">
                        录播
                      </span>
                      <span>
                        ({{ value.schedule.split('/')[0] }}/{{ value.schedule.split('/')[1] }})
                      </span>
                    </p>
                  </div>
                </van-col>
              </van-row>
            </li>
          </ul>
          <NoList v-else noTitle="呀，还没有课程呢！" />
        </div>
      </transition>
      <transition name="fadeRight">
        <div v-if="chioseSpan === 2">
          <ul v-if="finish.length > 0">
            <li v-for="(value, index) in finish" :key="index">
              <van-row gutter="20">
                <van-col span="7" class="left">
                  <img v-lazy="value.img" alt="">
                </van-col>
                <van-col span="17" class="right">
                  <div>
                    <h3>
                      <span>{{ value.name.length > 15 ? `${value.name.slice(0, 15)}......` : value.name }}</span>
                      <span>再次学习</span>
                    </h3>
                  </div>
                  <div>
                    <p>
                      <span>
                        <img src="static/images/icon4_02.png" alt="">
                        录播
                      </span>
                      <span>
                        ({{ value.schedule.split('/')[0] }}/{{ value.schedule.split('/')[1] }})
                      </span>
                    </p>
                  </div>
                </van-col>
              </van-row>
            </li>
          </ul>
          <NoList v-else noTitle="呀，还没有课程呢！" />
        </div>
      </transition>
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
      page: 1,
      noStatr: [],
      startIng: [],
      finish: []
    }
  },
  methods: {
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
    // 获取我的课程
    getMyClass () {
      this.axios.get(`/wx/people/course?page=${this.page}`).then((res) => {
        if (res.data.status_code === 200) {
          res.data.course_list.forEach((value, index) => {
            let start = value.schedule.split('/')[0]
            let end = value.schedule.split('/')[1]
            if (start === '0') {
              this.noStatr.push(value)
            } else if (start === end) {
              this.finish.push(value)
            } else {
              this.startIng.push(value)
            }
          })
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getMyClass()
  }
}
</script>
