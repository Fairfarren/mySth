<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .top {
    text-align: center;
    padding: {
      top: 3.125rem ;
      bottom: 2.18rem;
    }
    background: {
      color: #37383b;
    }
    p {
      @include fontSize(1.75rem, #ffffff);
      font-weight: bold;
      position: relative;
      >input {
        opacity: 0;
        position: absolute;
        display: block;
        width: 11.625rem;
        height: 11.625rem;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
    p:nth-child(2) {
      margin: {
        top: 1rem;
      }
    }
    img {
      width: 11.625rem;
      height: 11.625rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .bottom {
    >ul {
      padding: 0 1.56rem;
      >li {
        padding: 2.18rem;
        @include fontSize(1.75rem, #333333);
        border: {
          bottom: 1px solid #ededed;
        }
        span:nth-child(2) {
          color: #999999;
        }
      }
    }
  }
  .van-actionsheet {
    border-radius: 1rem;
    width: 90%;
    margin: auto;
  }
  .van-actionsheet__content {
    p {
      @include fontSize(2.25rem, #0078ff);
      text-align: center;
      padding: 0.5rem 0;
      border: {
        bottom: 1px solid #ededed;
      }
    }
  }
</style>

<template>
  <div>
    <div class="top">
      <p>
        <img :src="this.$store.state.USER.avatar" alt="">
        <input type="file" ref="img" @change="changeImg($event)">
      </p>
      <p>
        {{ this.$store.state.USER.username }}
      </p>
    </div>
    <div class="bottom">
      <ul>
        <li @click="changeName">
          <span>
            昵称：
          </span>
          <span>
            {{ formData.name }}
          </span>
        </li>
        <li @click="showSex = true">
          <span>
            性别：
          </span>
          <span>
            {{ USERSEX }}
          </span>
        </li>
        <li @click="showTime = true">
          <span>
            生日：
          </span>
          <span>
            {{ formData.birthday }}
          </span>
        </li>
      </ul>
    </div>
    <!-- 弹出 -->
    <div>
      <van-actionsheet class="popp" v-model="showName">
        <van-field
          v-model="formData.name"
          placeholder="请输入用户名"
          label="昵称："
          id="changeUserName"
          @keyup.enter="showName = false"
        />
      </van-actionsheet>
      <van-actionsheet class="popp" v-model="showSex">
        <p
          @click="formData.sex = 1; setUserSth()"
        >男</p>
        <p
          @click="formData.sex = 0; setUserSth()"
        >女</p>
        <p
          @click="formData.sex = 2; setUserSth()"
        >未知</p>
      </van-actionsheet>
      <van-actionsheet class="popp" v-model="showTime">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-hour="minHour"
          :max-hour="maxHour"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="changeBirthday"
        />
      </van-actionsheet>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showName: false,
      showSex: false,
      showTime: false,
      formData: {
        name: '',
        sex: '',
        birthday: ''
      },
      minHour: 10,
      maxHour: 20,
      minDate: new Date(1919, 1, 1),
      maxDate: new Date(2018, 0, 1),
      currentDate: new Date(2018, 0, 1)
    }
  },
  computed: {
    ...mapGetters(['USERSEX'])
  },
  methods: {
    // 初始化数据
    getUserSth () {
      this.formData.name = this.$store.state.USER.username
      this.formData.sex = this.$store.state.USER.sex
      this.formData.birthday = this.$store.state.USER.birthday
      const [year, moon, day] = this.formData.birthday.split('-')
      this.currentDate = new Date(year, moon - 1, day)
    },
    // 改变头像
    changeImg (e) {
      // const event = e || window.event
      const file = e.target.files || e.dataTransfer.files
      console.log(file)
      if (file[0].type !== 'image/jpg' && file[0].type !== 'image/png' && file[0].type !== 'image/bmp' && file[0].type !== 'image/jpeg') {
        this.Toast.fail('图片格式错误')
      } else if (file.size > 4194304) {
        this.Toast.fail('图片最大4M')
      } else {
        this.setUserSth()
      }
      // const reader = new FileReader()
      // reader.readAsDataURL(file[0])
      // // 加载函数时将64位格式的图片输入到img里面
      // reader.onload = (evt) => {
      //   // console.log(evt.target.result)
      //   this.ruleForm01.img = evt.target.result
      // }
    },
    // 改名字
    changeName () {
      this.showName = true
      setTimeout(() => {
        const userNameInput = document.querySelector('#changeUserName')
        userNameInput.focus()
      }, 300)
    },
    // 改变生日
    changeBirthday (value) {
      this.showTime = false
      this.formData.birthday = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
      this.setUserSth()
    },
    // 改变用户信息
    setUserSth () {
      let formData = new FormData()
      formData.append('username', this.formData.name)
      formData.append('birthday', this.formData.birthday)
      formData.append('sex', this.formData.sex)
      const userImg = this.$refs.img.files[0]
      if (userImg) {
        formData.append('avatar', userImg)
      }
      this.axios({
        url: '/wx/edit_profile',
        method: 'put',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      }).then(res => {
        this.showSex = false
        if (res.data.status_code === 201) {
          this.Toast.success(res.data.msg)
          this.$store.dispatch('GET_USER_INFO') // 获取用户信息
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
    setTimeout(() => {
      this.getUserSth()
    }, 1000)
    const date = new Date()
    this.maxDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )
  },
  watch: {
    showName (value) {
      !value && this.formData.name !== this.$store.state.USER.username && this.setUserSth()
    }
  }
}
</script>
