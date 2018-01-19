<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
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
</style>

<template>
  <div>
    <div class="problem"
      v-waterfall-lower="loadMore"
      waterfall-disabled="disabled"
      waterfall-offset="20"
    >
      <router-link
        tag="ul"
        :to="`/recording/${value.course_id}`"
        v-if="problem.length > 0"
        v-for="(value, index) in problem"
        :key="index"
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
      </router-link>
      <NoList noTitle="没有提问" v-if="problem.length === 0"/>
      <p style="text-align: center;">
        <img src="static/loading-bars.svg" alt="" v-if="!disabled">
      </p>
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
      page: 1,
      problem: [],
      disabled: false
    }
  },
  methods: {
    // 获取我的评论
    getMyCommentAjax () {
      this.disabled = true
      this.axios.get(`/wx/question/page/${this.page}`).then(res => {
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
    // 翻页
    loadMore () {
      this.disabled = true
      setTimeout(() => {
        this.page += 1
        this.getMyCommentAjax()
      }, 500)
    }
  },
  mounted () {
    this.getMyCommentAjax()
  }
}
</script>
