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

  .chiose {
    width: 100%;
    line-height: 5.3rem;
    height: 5.3rem;
    text-align: center;
    @include fontSize(1.75rem, #333333);
    border: {
      bottom: 1px solid #eeeeee;
    }
    span {
      @include transition(0.3s);
      position: relative;
      i {
        position: absolute;
        top: 0.1rem;
        right: -2rem;
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg);
        -moz-transform:rotate(-90deg);
        -webkit-transform:rotate(-90deg);
        -o-transform:rotate(-90deg);
        @include transition(0.3s);
      }
    }
    .chioseNow {
      color: #009cff;
      i {
        color: #009cff;
        transform:rotate(90deg);
        -ms-transform:rotate(90deg);
        -moz-transform:rotate(90deg);
        -webkit-transform:rotate(90deg);
        -o-transform:rotate(90deg);
      }

    }
  }
  .chioseConten {
    background: {
      color: #fff;
    }
    .chioseClassification {
      display: flex;
      height: 100%;
      >.left {
        flex-grow: 0;
        width: 9.375rem;
        text-align: center;
        background: {
          color: #f2f1f6;
        }
        overflow-y: auto;
        >ul {
          >li {
            height: 5.5rem;
            line-height: 5.5rem;
            @include fontSize(1.5rem, #666666);
            div {
              text-align: center;
            }
          }
          >.chioseLi {
            color: #3399ff;
            background: {
              color: #fff;
            }
          }
        }
      }
      >.right {
        flex-grow: 1;
        overflow-y: auto;
        padding: 0 2.18rem;
        @include fontSize(1.375rem, #333333);
        >.van-row {
          >.van-col {
            margin: {
              top: 1rem;
            }
            span {
              display: block;
              height: 3.75rem;
              line-height: 3.75rem;
              text-align: center;
            }
            .chioseSpan {
              border-radius: 4px;
              color: #fff;
              background: {
                color: #3399ff;
              }
            }
          }
        }
      }
    }

    .screen {
      padding: 0 1.56rem;
      >.screenChiose {
        margin: {
          padding: 1rem;
        }
        h3 {
          @include fontSize(1.75rem, #333333);
          padding: {
            top: 2.18rem;
          }
        }
        .van-row {
          margin: {
            top: 2.62rem;
          }
          >.van-col {
            span {
              @include fontSize(1.5rem, #333333);
              display: block;
              border-radius: 4px;
              line-height: 3.75rem;
              text-align: center;
              background: {
                color: #ededed;
              }
            }
            .chioseSpan {
              color: #fff;
              background: {
                color: #3399ff;
              }
            }
          }
        }
      }
      >.submit {
        margin: {
          top: 2.18rem;
        }
        >ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          >.clear {
            @include fontSize(1.62rem, #666666);
          }
          >.ascertain {
            @include fontSize(1.75rem, #fff);
            padding: 0.5rem 2.5rem;
            border-radius: 2rem;
            background: {
              color: #3399ff;
            }
          }
        }
      }
    }
  }

  .classList {
    padding: {
      bottom: 50px;
    }
    >.listBox {
      padding: {
        left: 1.56rem;
        right: 1.56rem;
        bottom: 2.3rem;
      }
    }
  }

  .chiose-enter-active, .chiose-leave-active {
    // transition: opacity .5s
    // transform: translateY(-2rem);
    // opacity: 0;
    @include transition(0.3s);
  }
  .chiose-enter, .chiose-leave-to {
    transform: translateY(-2rem);
    opacity: 0;
    @include transition(0.3s);
  }
</style>

<template>
  <div id="classAll">
    <div class="divDFixedTop">
      <Search />
      <div class="chiose">
        <van-row gutter="20">
          <van-col span="8">
            <span :class="{chioseNow: chioseWho === 0}"
              @click="chioseWho = 0; chioseWhoIs = false; page = 1; smallChiose = 'all'; categoryChiose = 'all'; smallIndex = -1; ajaxAll()"
            >
              综合排序
              <van-icon name="arrow" />
            </span>
          </van-col>
          <van-col span="8">
            <span :class="{chioseNow: chioseWho === 1}"
              @click="chioseWho = 1; chioseWhoIs = true"
            >
              {{ smallChiose === 'all' ? categoryChiose === 'all' ? '分类' : categoryChiose : smallChiose }}
              <van-icon name="arrow" />
            </span>
          </van-col>
          <van-col span="8">
            <span :class="{chioseNow: chioseWho === 2}"
              @click="chioseWho = 2; chioseWhoIs = true"
            >
              筛选
              <van-icon name="arrow" />
            </span>
          </van-col>
        </van-row>
      </div>
      <!-- 内容 -->
      <transition name="chiose" mode="out-in">
      <div class="chioseConten" :style="{height: chioseBoxHeight}" v-if="chioseWhoIs">
        <!-- 分类选择 -->
        <transition name="chiose" mode="out-in">
          <div
            class="chioseClassification"
            v-if="chioseWho === 1"
            key="chioseClassification"
          >
            <div class="left">
              <ul>
                <li :class="{chioseLi: categoryChiose == 'all'}"
                  @click="categoryChiose = 'all'; smallIndex = -1"
                >
                  全部
                </li>
                <li v-for="(value, index) in category"
                  :key="index"
                  :class="{chioseLi: categoryChiose == value}"
                  @click="categoryChiose = value; smallIndex = index;"
                >
                  {{ value }}
                </li>
              </ul>
            </div>
            <div class="right">
              <van-row gutter="20">
                <van-col span="24">
                  <van-row gutter="20">
                    <van-col span="8">
                      <span :class="{chioseSpan: smallChiose === 'all'}"
                        @click=" chioseWhoIs = false; page = 1; smallChiose = 'all'; ajaxAll('new')"
                      >
                        全部
                      </span>
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="8"
                  v-if="smallIndex !== -1"
                  v-for="(value, index) in small[smallIndex]"
                  :key="index"
                >
                  <span :class="{chioseSpan: smallChiose === value}"
                    @click="smallChiose = value; chioseWhoIs = false; page = 1; ajaxAll('new')"
                  >
                    {{ value }}
                  </span>
                </van-col>
              </van-row>
            </div>
          </div>

          <div
            class="screen"
            v-if="chioseWho === 2"
            key="screen"
          >
            <div class="screenChiose">
              <h3>课程类型</h3>
              <van-row gutter="20">
                <van-col span="6">
                  <span :class="{chioseSpan: screen === 0}"
                    @click="screen = 0"
                  >
                    直播
                  </span>
                </van-col>
                <van-col span="6">
                  <span :class="{chioseSpan: screen === 1}"
                    @click="screen = 1"
                  >
                    录播
                  </span>
                </van-col>
              </van-row>
            </div>
            <div class="screenChiose">
              <h3>费用</h3>
              <van-row gutter="20">
                <van-col span="6">
                  <span :class="{chioseSpan: money === 0}"
                    @click="money = 0"
                  >
                    付费
                  </span>
                </van-col>
                <van-col span="6">
                  <span :class="{chioseSpan: money === 1}"
                    @click="money = 1"
                  >
                    免费
                  </span>
                </van-col>
              </van-row>
            </div>
            <div class="submit">
              <ul>
                <li class="clear"
                  @click="money = -1; screen = -1; chioseWhoIs = false; chioseWho = 0; page = 1; categoryChiose = 'all'; smallChiose = 'all'; ajaxAll()"
                >
                  清空筛选
                </li>
                <li class="ascertain"
                  @click="chioseWhoIs = false"
                >
                  确定
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      </transition>
    </div>
    <!-- 列表 -->
    <div class="classList"
      :style="{paddingTop: contentMarTop}"
    >
      <div class="listBox">
        <van-row gutter="20"
          v-waterfall-lower="loadMore"
          waterfall-disabled="disabled"
          waterfall-offset="50"
        >
          <van-col
            span="12"
            class="box"
            v-for="(value, index) in classList"
            :key="index"
          >
            <ClassList :value="value" />
          </van-col>
          <van-col span="24" style="text-align: center;margin-top: 2rem;">
            <img src="static/loading-bars.svg" alt="" v-if="!disabledText">
            <span style="font-size: 1.3rem; color #666666;" v-else>
              没有更多了
            </span>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import ClassList from '@/components/classList'

export default {
  components: {
    Search: resolve => require(['@/components/search'], resolve),
    ClassList
  },
  data () {
    return {
      chioseWho: 0,
      chioseWhoIs: false,
      top: 0,
      chioseBoxHeight: '',
      contentMarTop: '',
      classList: [],
      category: [],
      categoryChiose: 'all',
      small: [],
      smallIndex: -1,
      smallChiose: 'all',
      page: 1,
      screen: -1,
      money: -1,
      disabled: false,
      disabledText: false
    }
  },
  methods: {
    // 获取数据
    ajaxAll (_new) {
      this.disabled = true
      let category = this.categoryChiose === 'all' ? '' : `&category=${this.categoryChiose}`
      let small = this.smallChiose === 'all' ? '' : `&small=${this.smallChiose}`
      this.axios.get(`/wx/course?per_page=12&page=${this.page}${category}${small}`).then((res) => {
        if (res.data.status_code === 200) {
          if (_new) {
            this.classList = res.data.course_list
          } else {
            res.data.course_list.length > 0
              ? (_ => {
                this.disabled = false
                if (this.page === 1) {
                  this.classList = res.data.course_list
                } else {
                  this.classList.push(...res.data.course_list)
                }
              })()
              : (_ => {
                // 不可上拉刷新
                this.disabled = true
                this.disabledText = true
              })()
          }
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch((error) => {
        console.log(error)
        this.Toast.fail('网络连接错误')
      })
    },
    // 获取分类
    getCategory () {
      this.axios.get('/wx/category').then((res) => {
        if (res.data.status_code === 200) {
          this.category = []
          this.small = []
          res.data.category_list.forEach((value, index) => {
            this.category.splice(index, 1, value.name)
            this.small[index] = []
            value.small_list.forEach((text, ind) => {
              this.small[index].splice(ind, 1, text)
            })
          })
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 上拉加载更多
    loadMore () {
      this.disabled = true
      setTimeout(() => {
        this.page += 1
        this.ajaxAll()
      }, 500)
    }
  },
  mounted () {
    this.ajaxAll()
    this.getCategory()
    setTimeout(() => {
      const windowHeight = window.innerHeight
      const fixedHeight = document.querySelector('.divDFixedTop')
      this.chioseBoxHeight = `${windowHeight - fixedHeight.clientHeight - 50}px`
      this.contentMarTop = `${fixedHeight.clientHeight}px`
    }, 300)
  },
  watch: {
    'chioseWhoIs' (value) {
      // this.top = document.documentElement.scrollTop || document.body.scrollTop
      let top = window.scrollY
      if (value) {
        // const html = document.getElementsByTagName('html')[0]
        // const body = document.getElementsByTagName('body')[0]
        // document.onmousewheel = function (e) {
        //   const event = e || window.event;
        //   event.preventDefault();
        // }
        // document.ontouchmove = (e) => {
        //   // console.log(this.top)
        //   // document.documentElement.scrollTop = this.top
        //   const event = e || window.event
        //   event.preventDefault()
        // }
        // html.style.overflow = 'hidden'
        // body.style.overflow = 'hidden'
        window.onscroll = function () {
          window.scrollTo(0, top)
        }
      } else {
        // const html = document.getElementsByTagName('html')[0]
        // const body = document.getElementsByTagName('body')[0]
        // html.style.overflowY = ''
        // body.style.overflowY = ''
        window.onscroll = function (e) {

        }
      }
    }
  }
}
</script>
