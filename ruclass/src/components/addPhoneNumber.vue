<style lang="scss" scoped>
@mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
}
.addPhoneNumber {
    width: 500px;
    height: 340px;
    border-radius: 12px;
    background: {
        color: #fff;
    }
    box-sizing: border-box;
    padding: 40px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .close {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
    .title {
        text-align: center;
        @include fontSize(24px, #3399ff);
        margin: {
            bottom: 50px;
        }
    }
}
</style>

<template>
    <div id="addPhoneNumber" class="addPhoneNumber">
        <div class="close" @click="$store.commit('CLOSE_PUPUP')">
            <img src="static/images/19.png" alt="">
        </div>
        <!-- 添加手机号码 -->
        <div>
            <div class="title">
                <p>添加手机号码</p>
            </div>
            <ul>
                <li>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="" prop="phoneNumber">
                            <el-input type="number" placeholder="请输入您的手机号" v-model.number="ruleForm.phoneNumber" auto-complete="off">
                                <template slot="prepend">
                                    <img src="static/images/15.png" alt="">
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="" prop="code">
                            <el-row :gutter="20">
                                <el-col :span="17">
                                    <el-input type="text" placeholder="请输入验证码" v-model="ruleForm.code" auto-complete="off">
                                        <template slot="prepend">
                                            <img src="static/images/16.png" alt="">
                                        </template>
                                    </el-input>
                                </el-col>
                                <el-col :span="7">
                                    <el-button :disabled="ruleForm.codeTF" @click="codeAjax">{{ruleForm.codeText}}</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;height:48px;font-size:24px;">添加</el-button>
                        </el-form-item>
                    </el-form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import md5 from 'md5';

export default {
    name: 'addPhoneNumber',
    data () {
        //手机号验证
        const validateNumber = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else {
                if( !(/^1[34578]\d{9}$/.test(value)) ) {
                    callback(new Error('手机号有误'));
                }
                callback();
            }
        };
        //验证码
        const validateCode = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入验证码'))
            }else {
                callback();
            }
        }
        return {
            show: 0,
            ruleForm: {
                phoneNumber: '',
                code: '',
                codeTF: false,
                codeText: '发送验证码'
            },
            rules: {
                phoneNumber: [
                    { validator: validateNumber, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
       submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.addPhoneNumber();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //发送验证码
        codeAjax () {
            if( !(/^1[34578]\d{9}$/.test(this.ruleForm.phoneNumber)) ) {
                this.$alert('请输入正确的手机号','提示', {
                    type: 'warning'
                })
                return;
            }
            const phoneNumber = md5(`${this.ruleForm.phoneNumber}jet_cloud2020`).toUpperCase();
            this.axios.get('/api/send_sms',{
                params: {
                    sign: `${phoneNumber}`,
                    mobile: this.ruleForm.phoneNumber
                }
            }).then( (res)=> {
                if(res.data.status_code == '200') {
                    this.codeCallBack();
                }else {
                    this.$alert(res.data.msg,'错误', {
                        type: 'warning'
                    })
                }
            }).catch( (error) => {
                this.$alert('网络连接超时或网络错误','错误',{
                    type: 'warning'
                })
            });
        },
        //验证码倒计时
        codeCallBack () {
            this.ruleForm.codeTF = true;
            this.ruleForm.codeText = '60秒后可重发送';
            let num = 60;
            const timer = setInterval( () => {
                num--;
                this.ruleForm.codeText = `${num}秒后可重发`;
                if(num <= 0) {
                    clearInterval(timer);
                    this.ruleForm.codeTF = false;
                    this.ruleForm.codeText = ' 发送验证码';
                }
            },1000)
        },
        //添加手机号
        addPhoneNumber () {
            this.axios({
                url: '/api/bind_mobile',
                method: 'put',
                headers: {
                    'Authorization': sessionStorage.token,
                },
                data: {
                    mobile: this.ruleForm.phoneNumber,
                    code: this.ruleForm.code
                }
            }).then( (res)=>{
                if(res.data.status_code == 201) {
                    this.$store.commit('USER_PHONE_NUMBER', this.ruleForm.phoneNumber);
                    this.$store.commit('CLOSE_PUPUP');
                }else {
                    this.$alert(res.data.msg,'错误',{
						type: 'warning'
					})
                }
            }).catch( (err)=>{
                console.log(err);
                this.$alert('网络连接超时或网络错误','错误',{
					type: 'warning'
				})
            })
        }
    }
}
</script>
