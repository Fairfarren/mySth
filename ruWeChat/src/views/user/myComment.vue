<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
</style>

<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  methods: {
    // 获取我的评论
    getMyCommentAjax () {
      this.axios.get(`/wx/question/page/${this.page}`).then(res => {
        if (res.data.status_code === 200) {

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
    this.getMyCommentAjax()
  }
}
</script>
