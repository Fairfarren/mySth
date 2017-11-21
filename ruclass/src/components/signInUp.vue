<style lang="scss" scoped>
@mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
}
@mixin transition($time) {
    transition: all $time;
    -webkit-transition: all $time;
    -o-transition: all $time;
    -moz-transition: all $time;
}
.signBox {
    width: 500px;
    height: 500px;
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
    // position: relative;
    >.close {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
    >.choose {
        display: table;
        vertical-align: middle;
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        padding: {
            bottom: 10px;
        }
        margin: {
            bottom: 40px;
        }
        >span, >i {
            display: inline-table;
        }
        >i {
            width: 1px;
            height: 10px;
            background: {
                color: #e5e5e5;
            }
        }
        >span {
            text-align: center;
            width: 208px;
            @include fontSize(24px, #999999);
            @include transition(0.3s);
            cursor: pointer;
        }
        .chooseColor {
            color: #3399ff;
        }
        >i:last-child {
            position: absolute;
            bottom: -2px;
            width: 210px;
            height: 2px;
            background: {
                color: #3399ff;
            }
            @include transition(0.3s);
        }
    }
}
.sginForm {
    .FGRM {
        overflow: hidden;
        margin: {
            bottom: 20px;
        }
        >span:nth-child(1) {
            float:left;
            @include fontSize(18px, #999999);
            input {
                display:none;
            }
            label {
                display: inline-block;
                width: 14px;
                height: 14px;
                vertical-align: middle;
                margin: {
                    right: 5px;
                }
                background: {
                    image: url('../../static/images/4.png')
                }
            }
            input:checked+label {
                background: {
                    image: url('../../static/images/3.png')
                }
            }
        }
        >span:nth-child(2) {
            float:right;
            a {
                @include fontSize(18px, #999999);
            }
        }
    }
    .line {
        text-align: center;
        margin: {
            bottom: 20px;
        }
        >span {
            display: inline-block;
            position: relative;
            width: 100%;
            @include fontSize(18px, #999999);
            &::after {
                content: '';
                display: inline-block;
                position: absolute;
                width: 130px;
                height: 1px;
                left: 0;
                top: 11px;
                background: {
                    color: #999999;
                }
            }
            &::before {
                content: '';
                display: inline-block;
                position: absolute;
                width: 130px;
                height: 1px;
                right: 0;
                top: 11px;
                background: {
                    color: #999999;
                }
            }
        }
    }
    .othersSign {
        text-align: center;
        >span {
            margin: 0 5px;
        }
    }
}

</style>

<template>
    <div id="SignInUp" class="signBox">
        <div class="close" @click="$store.commit('CLOSE_PUPUP')">
            <img src="static/images/19.png" alt="">
        </div>
        <div class="choose">
            <span 
                :class="{chooseColor: choose.index == 0}" 
                @click="choose.index = 0;choose.LR = {left:'0'}"
            >
                登录
            </span>
            <i></i>
            <span 
                :class="{chooseColor: choose.index == 1}" 
                @click="choose.index = 1;choose.LR = {left:'210px'}"
            >
                注册
            </span>
            <i :style="choose.LR"></i>
        </div>

        <ul class="sginForm" v-show="choose.index == 0">
            <li>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item label="" prop="phoneNumber">
                        <el-input type="number" placeholder="请输入您的手机号" v-model.number="ruleForm.phoneNumber" auto-complete="off">
                            <template slot="prepend">
                                <img src="static/images/15.png" alt="">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="phonePsw">
                        <el-input type="password" placeholder="请输入密码" v-model.trim="ruleForm.phonePsw" auto-complete="off">
                            <template slot="prepend">
                                <img src="static/images/17.png" alt="">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;height:48px;font-size:24px;">登录</el-button>
                    </el-form-item>
                </el-form>
            </li>   
            <li>
                <div class="FGRM">
                    <span>
                        <input id="rememberPsw" value="0" type="checkbox" v-model="ruleForm.remeberPws">
                        <label for="rememberPsw"></label>
                        记住密码
                    </span>
                    <span @click="$emit('forGet')">
                        <router-link to="">
                            忘记密码？
                        </router-link>
                    </span>
                </div>
            </li>
            <li class="line">
                <span>第三方登录</span>
            </li>
            <li class="othersSign">
                <span>
                    <router-link to="">
                        <img src="static/images/20logo.png" alt="">
                    </router-link>
                </span>
            </li>
        </ul>
        <ul v-show="choose.index == 1">
            <li>
                <el-form :model="ruleForm02" status-icon :rules="rules02" ref="ruleForm02" class="demo-ruleForm">
                    <el-form-item label="" prop="phoneNumber">
                        <el-input type="number" placeholder="请输入您的手机号" v-model.number="ruleForm02.phoneNumber" auto-complete="off">
                            <template slot="prepend">
                                <img src="static/images/15.png" alt="">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="code">
                        <el-row :gutter="20">
                            <el-col :span="17">
                                <el-input type="text" placeholder="请输入验证码" v-model="ruleForm02.code" auto-complete="off">
                                    <template slot="prepend">
                                        <img src="static/images/16.png" alt="">
                                    </template>
                                </el-input>
                            </el-col>
                            <el-col :span="7">
                                <el-button :disabled="ruleForm02.codeTF" @click="codeAjax">{{ruleForm02.codeText}}</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="" prop="phonePsw">
                        <el-input type="password" placeholder="请输入密码" v-model.trim="ruleForm02.phonePsw" auto-complete="off">
                            <template slot="prepend">
                                <img src="static/images/17.png" alt="">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="phonePsw02">
                        <el-input type="password" placeholder="请重复密码" v-model.trim="ruleForm02.phonePsw02" auto-complete="off">
                            <template slot="prepend">
                                <img src="static/images/17.png" alt="">
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm02('ruleForm02')" style="width:100%;height:48px;font-size:24px;">注册</el-button>
                    </el-form-item>
                </el-form>
            </li>
        </ul>

    </div>
</template>

<script>
import md5 from 'md5'

export default {
    name: 'SignInUp',
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
        //密码验证，登录
        const validatePsw = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入密码'));
            }else {
                // if( (/\s/).test(value) ) {
                //     callback(new Error('密码不能有空格'));
                // }
                // if( value.length < 6 ) {
                //     callback(new Error('密码最少为6位'))
                // }
                callback();
            }
        }
        //验证码
        const validateCode = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入验证码'))
            }else {
                callback();
            }
        }
        //输入密码，注册
        const validatePsw02 = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请输入密码'));
            }else if( (/\s/).test(value) ) {
                callback(new Error('密码不能有空格'));
            }else if( value.length < 6 ) {
                callback(new Error('密码最少为6位'))
            }else {
                if (this.ruleForm02.phonePsw !== '') {
                    this.$refs.ruleForm02.validateField('phonePsw02');
                }
                callback();
            }
        }
        //再次输入密码
        const validatePsw02Agin = (rule, value, callback) => {
            if(value === '') {
                callback(new Error('请重复密码'));
            }else if (value !== this.ruleForm02.phonePsw) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            choose: {
                LR: {
                    left: '0'
                },
                index: 0
            },
            ruleForm: {
                phoneNumber: '',
                phonePsw: '',
                remeberPws: false
            },
            rules: {
                phoneNumber: [
                    { validator: validateNumber, trigger: 'blur' }
                ],
                phonePsw: [
                    { validator: validatePsw, trigger: 'blur' }
                ]
            },
            ruleForm02: {
                phoneNumber: '',
                code: '',
                phonePsw: '',
                phonePsw02: '',
                codeTF: false,
                codeText: '发送验证码'
            },
            rules02: {
                phoneNumber: [
                    { validator: validateNumber, trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ],
                phonePsw: [
                    { validator: validatePsw02, trigger: 'blur' }
                ],
                phonePsw02: [
                    { validator: validatePsw02Agin, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        //登录
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.sginIn();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //注册
        submitForm02(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.sginUp();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //发送验证码
        codeAjax () {
            if( !(/^1[34578]\d{9}$/.test(this.ruleForm02.phoneNumber)) ) {
                this.$alert('请输入正确的手机号','提示',{
                    type: 'warning'
                })
                return;
            }
            const phoneNumber = md5(`${this.ruleForm02.phoneNumber}jet_cloud2020`).toUpperCase();
            this.axios.get('/api/send_sms',{
                params: {
                    sign: `${phoneNumber}`,
                    mobile: this.ruleForm02.phoneNumber
                }
            }).then( (res)=> {
                if(res.data.status_code == '200') {
                    this.codeCallBack();
                }else {
                    this.$alert(res.data.msg,'错误',{
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
            console.log(1);
            this.ruleForm02.codeTF = true;
            this.ruleForm02.codeText = '60秒后可重发送';
            let num = 60;
            const timer = setInterval( () => {
                num--;
                this.ruleForm02.codeText = `${num}秒后可重发`;
                if(num <= 0) {
                    clearInterval(timer);
                    this.ruleForm02.codeTF = false;
                    this.ruleForm02.codeText = ' 发送验证码';
                }
            },1000)
        },
        //注册
        sginUp () {
            this.axios.post('/api/register',{
                "mobile": this.ruleForm02.phoneNumber,
                "code": this.ruleForm02.code,
                "password": this.ruleForm02.phonePsw02
            }).then( (res) => {
                if(res.data.status_code == '201' || res.data.status_code == '200') {
                    this.choose.LR = 'left: 0'
                    this.choose.index = 0;
                }else {
                    this.$alert(res.data.msg,'错误',{
                        type: 'warning'
                    })
                }
            }).catch( (error) => {
                this.$alert('网络连接超时或网络错误','错误',{
                    type: 'warning'
                })
            })
        },
        //登录
        sginIn () {
            const phoneNumber = this.ruleForm.phoneNumber + '';
            const phonePsw = this.ruleForm.phonePsw + '';
            this.axios.post('/api/login', {
                "mobile": phoneNumber,
                "password": phonePsw
            }).then( (res) => {
                if(res.data.status_code == '200') {
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    this.$store.commit('CLOSE_PUPUP');
                    this.$store.commit('LOGIN_SUCCESS', res.data.data);
                }else {
                    this.$alert(res.data.msg,'错误',{
                        type: 'warning'
                    })
                }
            }).catch( (error) => {
                console.log(error)
                this.$alert('网络连接超时或网络错误','错误',{
                    type: 'warning'
                })
            })
        }
    }
}
</script>
