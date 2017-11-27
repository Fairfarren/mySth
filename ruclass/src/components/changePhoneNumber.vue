<style lang="scss" scoped>
@mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
}
.changePhoneNumber {
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
    <div id="changePhoneNumber" class="changePhoneNumber">
        <div class="close" @click="$store.commit('CLOSE_PUPUP')">
            <img src="static/images/19.png" alt="">
        </div>
        <!-- 修改手机号码 -->
        <div>
            <div class="title">
                <p>修改手机号码</p>
            </div>
            <ul>
                <li v-show="show == 0">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="" prop="phoneNumber">
                            <el-input type="number" :disabled="true" placeholder="请输入您的手机号" v-model.number="this.$store.state.USER.phoneNumber" auto-complete="off">
                                <template slot="prepend">
                                    <img src="static/images/15.png" alt="">
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="" prop="code">
                            <el-row :gutter="20">
                                <el-col :span="14">
                                    <el-input type="text" placeholder="请输入验证码" v-model="ruleForm.code" auto-complete="off">
                                        <template slot="prepend">
                                            <img src="static/images/16.png" alt="">
                                        </template>
                                    </el-input>
                                </el-col>
                                <el-col :span="10">
                                    <el-button :disabled="ruleForm.codeTF" @click="codeAjax">{{ruleForm.codeText}}</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;height:48px;font-size:24px;">下一步</el-button>
                        </el-form-item>
                    </el-form>
                </li>
                <li v-show="show == 1">
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
                                    <el-button :disabled="ruleForm.codeTF" @click="codeAjax02">{{ruleForm02.codeText}}</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm02('ruleForm02')" style="width:100%;height:48px;font-size:24px;">添加</el-button>
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
    name: 'changePhoneNumber',
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
            token: '',
            ruleForm: {
                phoneNumber: '',
                code: '',
                codeTF: false,
                codeText: '给旧手机发送验证码'
            },
            rules: {
                phoneNumber: [
                    { validator: 'validateNumber', trigger: 'blur' }
                ],
                code: [
                    { validator: validateCode, trigger: 'blur' }
                ]
            },
            ruleForm02: {
                phoneNumber: '',
                code: '',
                codeTF: false,
                codeText: '发送验证码'
            },
            rules02: {
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
                    this.show = 1;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        submitForm02(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.addPhoneNumber();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //发送验证码，旧手机
        codeAjax () {
            const phoneNumber = md5(`${this.$store.state.USER.phoneNumber}jet_cloud2020`).toUpperCase();
            this.axios.get('/api/send_sms',{
                params: {
                    sign: phoneNumber,
                    mobile: this.$store.state.USER.phoneNumber
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
        //验证码倒计时，旧手机
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
                    this.ruleForm.codeText = '给旧手机发送验证码';
                }
            },1000)
        },
        //发送验证码
        codeAjax02 () {
            if( !(/^1[34578]\d{9}$/.test(this.ruleForm02.phoneNumber)) ) {
                this.$alert('请输入正确的手机号','提示', {
                    type: 'warning'
                })
                return;
            }
            const phoneNumber = md5(`${this.ruleForm02.phoneNumber}jet_cloud2020`).toUpperCase();
            this.axios.get('/api/send_sms',{
                params: {
                    sign: phoneNumber,
                    mobile: this.ruleForm02.phoneNumber
                }
            }).then( (res)=> {
                if(res.data.status_code == '200') {
                    this.codeCallBack02();
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
        codeCallBack02 () {
            this.ruleForm02.codeTF = true;
            this.ruleForm02.codeText = '60秒后可重发送';
            let num = 60;
            const timer = setInterval( () => {
                num--;
                this.ruleForm02.codeText = `${num}秒后可重发`;
                if(num <= 0) {
                    clearInterval(timer);
                    this.ruleForm02.codeTF = false;
                    this.ruleForm02.codeText = '发送验证码';
                }
            },1000)
        },
        //修改手机号
        addPhoneNumber () {
            this.axios({
                url: '/api/mobile_required',
                method: 'post',
                headers: {
                    'Authorization': sessionStorage.token,
                },
                data: {
                    code: this.ruleForm.code
                }
            }).then( (res) => {
                if( res.data.status_code == 200 ) {
                    this.changePhoneNumber(res.data.xsrf_token);
                }else {
                    if(res.data.msg == 'invalid token') {
                        this.$alert('请先登录','错误',{
                            type: 'warning',
                            callback: () => {
                                this.$store.commit('PUPUP_SHOW_SIGNINUP');
                                this.$router.push({query: {
                                    index: 0
                                }})
                            }
                        })
                    }else {
                        this.$alert(res.data.msg,'错误',{
                            type: 'warning'
                        })
                    }
                }
            }).catch( (error) => {
                console.log(error);
                this.$alert('网络连接超时或网络错误','错误',{
					type: 'warning'
				})
            })
        },
        changePhoneNumber ( token ) {
            this.axios({
                url: '/api/edit_mobile',
                method: 'put',
                headers: {
                    'Authorization': sessionStorage.token,
                },
                data: {
                    code: this.ruleForm02.code,
                    mobile: this.ruleForm02.phoneNumber,
                    xsrf_token: token
                }
            }).then( (res) => {
                if( res.data.status_code == 201 ) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    })
                    this.$store.commit('USER_PHONE_NUMBER', this.ruleForm02.phoneNumber);
                    this.$store.commit('CLOSE_PUPUP');
                }else {
                    if(res.data.msg == 'invalid token') {
                        this.$alert('请先登录','错误',{
                            type: 'warning',
                            callback: () => {
                                this.$store.commit('PUPUP_SHOW_SIGNINUP');
                                this.$router.push({query: {
                                    index: 0
                                }})
                            }
                        })
                    }else {
                        this.$alert(res.data.msg,'错误',{
                            type: 'warning'
                        })
                    }
                }
            }).catch( (error) => {
                console.log(error);
                this.$alert('网络连接超时或网络错误','错误',{
					type: 'warning'
				})
            })
        }
    }
}
</script>
