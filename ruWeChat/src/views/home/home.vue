<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  #home {
    background: {
      color: #f2f1f6;
    }
    padding: {
      bottom: 50px;
    }
  }
  .selected {
    background: {
      color: #fff;
    }
    padding: 0 1.56rem;
    padding: {
      top: 2.3rem;
      bottom: 2.3rem;
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
      >ul {
        >li {
          margin: {
            top: 1.56rem;
          }
        }
      }
    }
  }
  .recommend {
    padding: 0 1.56rem;
    padding: {
      top: 2.3rem;
      bottom: 2.3rem;
    }
    background: {
      color: #fff;
    }
    margin: {
      top: 1.06rem;
    }
  }
</style>

<template>
  <div id="home">
    <div class="divDFixedTop">
		  <Search />
    </div>
    <Banner :banner="banner"/>
    <!-- 精选 -->
    <div class="selected">
      <div class="title">
        <h3>精选好课</h3>
      </div>
      <div class="content">
        <ul>
          <li
            v-for="(value, index) in selectedData"
            :key="index">
            <SelectedModel :selectedData="value"/>
          </li>
        </ul>
      </div>
    </div>
    <!-- 推荐 -->
    <div
      class="recommend"
      v-for="(value, index) in recommend"
      :key="index"
    >
      <Recommed :recommend="value"/>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    Search: resolve => require(['@/components/search'], resolve),
    Banner: resolve => require(['@/components/banner'], resolve),
    SelectedModel: resolve => require(['@/components/selectedModel'], resolve),
    Recommed: resolve => require(['@/components/recommendModel'], resolve)
  },
  data () {
    return {
      banner: [],
      selectedData: [],
      recommend: []
    }
  },
  methods: {
    homeAjax () {
      this.axios.get('/wx/index').then((res) => {
        if (res.data.status_code === 200) {
          // banner
          this.banner = res.data.banners_list
          // 精选
          res.data.selection_list.forEach((value, index) => {
            this.selectedData.splice(index, 1, {
              className: value.name,
              money: value.price,
              publishing: value.lecturer,
              img: value.img,
              url: `/recording/${value.id}`
            })
          })
          // 推荐
          this.recommend = res.data.course_list
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch((error) => {
        console.log(error)
        this.Toast.fail('网络链接错误')
      })
    }
  },
  mounted () {
    this.homeAjax()
  }
}
</script>
