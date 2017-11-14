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
            bottom: 20px;
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
                    <el-form-item label="" prop="phonePsw">
                        <el-input type="password" placeholder="请输入密码" v-model.trim="ruleForm.phonePsw" auto-complete="off">
                            <template slot="prepend">
                                <img src="static/images/17.png" alt="">
                            </template>
                        </el-input>
                    </el-form-item>
                </el-form>
            </li>   
        </ul>
    </div>
</template>

<script>
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
        //密码验证
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
        return {
            choose: {
                LR: {
                    left: '0'
                },
                index: 0
            },
            ruleForm: {
            phoneNumber: '',
            phonePsw: ''
            },
            rules: {
                phoneNumber: [
                    { validator: validateNumber, trigger: 'blur' }
                ],
                phonePsw: [
                    { validator: validatePsw, trigger: 'blur' }
                ]
            }
        };
    }
}
</script>
