<style lang="scss" scoped>
@mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
}
.fGrMBox {
    width: 500px;
    height: 400px;
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
            bottom: 15px;
        }
    }
    .content {
        >li {
            >h3 {
                @include fontSize(22px, #444444);
            }
            margin: {
                bottom: 15px;
            }
        }
        >li:nth-child(2) {
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            padding: 10px 25px;
            border-radius: 4px;
            >p {
                @include fontSize(18px, #666666);
            }
            >p {
                margin: 10px 0;
            }
        }
        li:nth-child(3) {
            @include fontSize(18px, #666666);
            >span {
                @include fontSize(24px, #ff786b);
            }
        }
    }
    .howToPay {
        position: absolute;
        width: 100px;
    }
}
</style>

<template>
    <div id="payClass" class="fGrMBox">
        <div class="close" @click="$store.commit('CLOSE_PUPUP')">
            <img src="static/images/19.png" alt="">
        </div>
        <!-- 购买课程 -->
        <div>
            <div class="title">
                <p>购买课程</p>
            </div>
            <ul class="content">
                <li>
                    <h3>{{ $store.state.POPUP_PAY_CLASS.name }}</h3>
                </li>
                <li>
                    <p>出版方：{{ $store.state.POPUP_PAY_CLASS.publisher }}</p>
                    <p>讲师：{{ $store.state.POPUP_PAY_CLASS.lecturer }}</p>
                    <p>直播时间：{{ $store.state.POPUP_PAY_CLASS.time }}</p>
                </li>
                <li>
                    课程价格：<span>{{ free }}</span>
                </li>
                <li>
                    <el-button 
                        type="primary" 
                        style="width:100%;height:48px;font-size:24px;"
                        @click="goToPay"
                    >{{ canStudy }}</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'payClass',
    data () {
        return {
            gridData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }],
        }
    },
    computed: {
        //是否免费
        free () {
            if( this.$store.state.POPUP_PAY_CLASS.price <= 0 ) {
                return '免费'
            }else {
                return `￥${this.$store.state.POPUP_PAY_CLASS.price}`
            }
        },
        //是否可以立即学习
        canStudy () {
            if( this.$store.state.POPUP_PAY_CLASS.price <= 0 ) {
                return '立即学习'
            }else {
                return '去支付'
            }
        }
    },
    methods: {
        goToPay () {
            if(this.canStudy == '去支付') {
                // this.$store.commit('CLOSE_PUPUP');
                // this.$router.push({ 
                //     path: `/paySth/${this.$route.params.id}`,
                //     query: {}
                // })
                this.$store.commit('CLOSE_PUPUP');
                this.$router.push({query: {
                    index: 5
                }})
                setTimeout( () => {
                    this.$store.commit('PUPUP_SHOW_SIGNINUP');
                }, 200)
            }else {
                this.goToStudy();
            }
        },
        //如果是免费，可以立即学习
        goToStudy () {
            this.axios({
                url: '/api/buy/course',
                method: 'post',
                headers: {
                    'Authorization': sessionStorage.token,
                },
                data: {
                    'course_id': this.$route.params.id
                }
            }).then( (res) => {
                if(res.data.status_code == 201) {
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
    },
    mounted () {
        
    }
}
</script>
