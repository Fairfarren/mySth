<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    // 获取用户信息
    getUserToken () {
      // this.axios.get('/wx/t_login').then(res => {
      //   this.$router.push('/home')
      //   if (res.data.status_code === 200) {
      //   } else if (res.status_code === 401) {
      //     this.$store.commit('NOW401')
      //   }
      // }).catch(error => {
      //   console.log(error)
      //   this.Toast.fail('网络链接错误')
      // })
    }
  },
  mounted () {
    this.getUserToken()
  }
}
</script>
