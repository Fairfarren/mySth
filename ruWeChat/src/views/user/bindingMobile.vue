<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .box {
    padding: 2.5rem 2.25rem;
    .van-row {
      display: flex;
      align-items: center;
    }
    .van-col-6 {
      font-size: 1.5rem;
    }
    .van-field--nolabel {
      border: 0;
    }
  }
</style>

<template>
  <div class="box">
    <van-row>
      <van-col span="24">
        <van-cell-group>
          <van-field
            v-model="mobile"
            label="手机号："
            icon="clear"
            placeholder="请输入手机号"
            @click-icon="mobile = ''"
            :error-message="errorText.mobile"
            :error="errorText.mobileTF"

          />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="15">
        <van-cell-group>
          <van-field
            v-model="code"
            label="验证码："
            placeholder="输入验证码"
            :error="codeText.codeTF"
            :error-message="errorText.code"
            @change="codeFc"
          />
        </van-cell-group>
      </van-col>
      <van-col span="9">
        <van-button
          type="default"
          @click="getCode"
          :disabled="diabled"
        >
          {{ codeText }}
        </van-button>
      </van-col>
    </van-row>
    <van-row style="margin-top: 2rem;">
      <van-col span="24">
        <van-button
          type="primary"
          size="large"
          @click="submit"
        >
          提交
        </van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  data () {
    return {
      mobile: '',
      code: '',
      codeText: '获取验证码',
      errorText: {
        mobile: '请输入手机号',
        mobileTF: true,
        code: '请输入验证码',
        codeTF: true
      },
      diabled: false,
      timer: null
    }
  },
  methods: {
    // 获取验证码
    getCode () {
      if (this.errorText.mobileTF) {
        this.Toast.fail('请输入正确手机号')
      } else {
        this.diabled = true
        this.codeText = '60秒后重新获取'
        let number = 60
        this.getCodeAjax()
        this.timer = setInterval(() => {
          number--
          if (number === 0) {
            this.diabled = false
            this.codeText = '获取验证码'
            clearInterval(this.timer)
            return
          }
          this.codeText = `${number}秒后重新获取`
        }, 1000)
      }
    },
    // 获取验证码ajax
    getCodeAjax () {
      const mobile = md5(this.mobile)
      this.axios.get(`/wx/send_sms?sign=${mobile}&mobile=${this.mobile}`).then(res => {
        if (res.data.status_code === 200) {

        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch(error => {
        console.log(error)
        this.Toast.fail('网络连接错误')
      })
    },
    // 提交
    submit () {
      if (!this.errorText.mobileTF && !this.errorText.codeTF) {
        this.axios.put('/wx/bind_mobile', {
          mobile: this.mobile,
          code: this.code
        }).then(res => {
          if (res.data.status_code === 200) {
            const toast = this.Toast.success({
              duration: 0,
              forbidClick: true,
              message: '绑定成功！3秒后返回'
            })
            let second = 3
            const timer = setInterval(() => {
              second--
              if (second) {
                toast.message = `绑定成功！${second}秒后返回`
              } else {
                clearInterval(timer)
                this.Toast.clear()
                history.go(-1)
              }
            }, 1000)
          } else {
            this.Toast.fail(res.data.msg)
          }
        }).catch(error => {
          console.log(error)
          this.Toast.fail('网络连接错误')
        })
      }
    },
    // 手机号验证
    mobileFc () {
      if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
        this.errorText.mobile = '请输出正确手机号'
        this.errorText.mobileTF = true
      } else {
        this.errorText.mobile = ''
        this.errorText.mobileTF = false
      }
    },
    // 验证码验证
    codeFc () {
      if (!this.code.trim()) {
        this.errorText.code = '请输入验证码'
        this.errorText.codeTF = true
      } else {
        this.errorText.code = ''
        this.errorText.codeTF = false
      }
    }
  },
  watch: {
    mobile (value) {
      this.mobileFc()
    },
    code () {
      this.codeFc()
    }
  }
}
</script>
