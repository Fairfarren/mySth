<style lang="scss">
    @mixin fontSize($size, $color) {
        font-size: $size - 2;
        color: $color;
    }
    #editData {
        padding: 20px;
        .img {
            .upImg {
                label {
                    display: inline-block;
                    width: 100px;
                    height: 36px;
                    color: #fff;
                    text-align: center;
                    line-height:36px;
                    border-radius: 4px;
                    cursor: pointer;
                    background: {
                        color: #33cc00;
                    }
                }
                input {
                    display: none;
                }
            }
        }
        .sex {
            @include fontSize(18px, #666666);
            input {
                display: none;
            }
            .chooseSex {
                display: inline-block;
                vertical-align: middle;
                width: 14px;
                height: 14px;
                margin: {
                    left: 25px;
                }
                background: {
                    image: url('../../static/images/4.png')
                }
            }
            .chooseSex:nth-child(2) {
                margin: {
                    left: 10px;
                }
            }
            input:checked+label {
                background: {
                    image: url('../../static/images/3.png')
                }
            }
        }
    }
</style>

<template>
    <div id="editData">
        <el-form :model="ruleForm01" status-icon :rules="rules01" ref="ruleForm01" id="formUser" label-width="80px">
            <el-form-item label="昵称" class="qwe name" prop="name">
                <el-row :gutter="20">
                    <el-col :span="7">
                        <el-input v-model="ruleForm01.name" auto-complete="off"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="头像" class="qwe img">
                <el-row :gutter="20">
                    <el-col :span="7">
                        <img :src="ruleForm01.img" width="100%" height="255px" alt="头像加载失败">
                    </el-col>
                    <el-col :span="14">    
                        <el-row>
                            <el-col :span="24">
                                支持jpg、gif、png或bmp格式的图片，建议文件小于20M
                            </el-col>
                            <el-col :span="24" class="upImg">
                                <label for="file">修改头像</label>
                                <input class="file" value="修改头像" type="file" name="avatar" id="file" @change="changeImg($event)">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="性别" class="qwe sex">
                <input id="sex01" value="0" type="radio" name="sex" v-model="ruleForm01.sex">
                <label class="chooseSex" for="sex01"></label>
                男
                <input id="sex02" value="1" type="radio" name="sex" v-model="ruleForm01.sex">
                <label class="chooseSex" for="sex02"></label>
                女
                <input id="sex03" value="2" type="radio" name="sex" checked v-model="ruleForm01.sex">
                <label class="chooseSex" for="sex03"></label>
                未知
            </el-form-item>
            <el-form-item label="生日" class="qwe birth">
                <el-row :gutter="20">
                    <el-col :span="4">
                        <el-select v-model="ruleForm01.time.year" placeholder="请选择年">
                            <el-option
                            v-for="item in time.year"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <el-select v-model="ruleForm01.time.moon" placeholder="请选择月">
                            <el-option
                            v-for="item in time.moon"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="4">
                        <el-select v-model="ruleForm01.time.day" placeholder="请选择日">
                            <el-option
                            v-for="item in time.day"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="手机" class="qwe birth">
                <el-row :gutter="20">
                    <el-col :span="5">
                        <el-input 
                            :disabled="true" 
                            v-model="this.$store.state.USER.phoneNumber"
                            type="number" 
                            placeholder="请添加手机"
                        ></el-input>
                    </el-col>
                    <el-col :span="2">
                        <el-button 
                            style="width: 100%;padding-left:10px;padding-right:10px;"
                            v-if="ruleForm01.addShow"
                            @click="openPopup"
                        >添加</el-button>
                        <el-button 
                            style="width: 100%;padding-left:10px;padding-right:10px;"
                            v-else
                            @click="openPopupChange"
                        >修改</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <div style="margin-left:30px;">
                <el-button type="primary" @click="submitForm01('ruleForm01')">保存</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'editData',
    data () {
        //昵称验证
        const validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入昵称'));
            } else {
                callback();
            }
        };
        //选择年
        const validateYear = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请选择年'));
            } else {
                callback();
            }
        };
        return {
            ruleForm01: {
                name: '',
                time: {
                    year: '',
                    moon: '',
                    day: ''
                },
                sex: '2',
                img: 'static/images/43393846_p0.jpg',
                addShow: true
            },
            rules01: {
                name: [
                    { validator: validateName, trigger: 'blur' }
                ],
                year: [
                    { validator: validateYear, trigger: 'blur' }
                ]
            },
            time: {
                year: [],
                moon: [],
                day: []
            }
        }
    },
    
    methods: {
        openPopup () {
            this.$router.push({ query: {
                index: 2
            } })
            this.$store.commit('PUPUP_SHOW_SIGNINUP')
        },
        openPopupChange () {
            this.$router.push({ query: {
                index: 4
            } })
            this.$store.commit('PUPUP_SHOW_SIGNINUP')
        },
        //添加年月日
        setYearMoon () {
            //年
            let date = new Date();
            date = date.getFullYear();
            for(let i=0; i<= date - 1949; i++) {
                this.time.year.push({
                    value: 1949 + i,
                    label: `${1949 + i}年`
                })
            }
            //月
            for(let i=1;i<=12;i++) {
                this.time.moon.push({
                    value: i,
                    label: `${i}月`
                })
            }
        },
        //添加日
        setDay () {
            const moon = this.ruleForm01.time.moon;
            const year = this.ruleForm01.time.year;
            let num = 31;
            this.time.day = [];
            if( moon == 1 || moon == 3 || moon == 5 || moon == 7 || moon == 8 || moon == 10 || moon == 12) {
                //判断31日
                num = 31;
            }else if( moon != 2) {
                num = 30;
            }else if( year % 4 == 0 && year ) {
                num = 29;
            }else {
                num = 28;
            }
            for(let i=1; i<=num; i++ ){
                this.time.day.push({
                    value: i,
                    label: `${i}号`
                })
            }
        },
        //改变头像
        changeImg (e) {
            const event = e || window.event;
            const file = e.target.files || e.dataTransfer.files;
            if(file[0].type != 'image/gif' && file[0].type != 'image/jpg' && file[0].type != 'image/png' && file[0].type != 'image/bmp' && file[0].type != 'image/jpeg') {
                this.$alert('请选择正确的图片格式','错误',{
                    type: 'warning'
                })
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file[0]);
            //加载函数时将64位格式的图片输入到img里面
            reader.onload = (evt)=>{
                // console.log(evt.target.result)
                this.ruleForm01.img = evt.target.result;
            }
        },
        //获取用户信息
        getUser () {
            this.axios({
                url: '/api/profile',
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                }
            }).then( (res)=>{
                if(res.data.status_code == 200) {
                    this.ruleForm01.img = res.data.data.avatar;
                    this.ruleForm01.name = res.data.data.username || this.$store.state.USER.name;
                    this.ruleForm01.sex = res.data.data.sex;

                    setTimeout( () => {
                        this.$store.state.USER.phoneNumber && ( () => {this.ruleForm01.addShow = false})();
                    },10)
                    

                    this.ruleForm01.time.year = res.data.data.birthday.split('-')[0];
                    setTimeout( () => {
                        this.ruleForm01.time.moon = res.data.data.birthday.split('-')[1];
                        setTimeout( () => {
                            this.ruleForm01.time.day = res.data.data.birthday.split('-')[2];
                        }, 10) 
                    }, 10)
                    
                    this.$store.commit('SET_USER_INFO', res.data.data);
                    this.$store.commit('USER_PHONE_NUMBER', res.data.data.mobile);
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
            }).catch( (err)=>{
                console.log(err);
                this.$alert('网络连接超时或网络错误','错误',{
					type: 'warning'
				})
            })
        },
        //点击提交
        submitForm01(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.setUser();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //修改用户信息
        setUser () {
            const form = document.getElementById('');
            const birthday = `${this.ruleForm01.time.year}-${this.ruleForm01.time.moon}-${this.ruleForm01.time.day}`
            let formData = new FormData(formUser);
            formData.append('username', this.ruleForm01.name);
            formData.append('birthday', birthday);
            //ajax
            this.axios({
                url: '/api/edit_profile',
                method: 'put',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': sessionStorage.token,
                },
                data: formData
            }).then( (res)=>{
                if(res.data.status_code == 201) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    //重新获取
                    this.getUser();
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
            }).catch( (err)=>{
                console.log(err);
                this.$alert('网络连接超时或网络错误','错误',{
					type: 'warning'
				})
            })
        }
    },
    mounted () {
        this.setYearMoon();
        this.$store.state.USER.name.length > 0 && this.getUser();
    },
    watch: {
        'ruleForm01.time.moon' (value) {
            this.ruleForm01.time.day = '';
            this.setDay();
        },
        'ruleForm01.time.year' (value) {
            this.ruleForm01.time.moon = this.ruleForm01.time.day = '';
            this.setDay();
        } 
    }
}
</script>
