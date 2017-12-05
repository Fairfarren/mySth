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
#pay {
    padding: {
        top: 30px;
        bottom: 50px;
    }
    background: {
        color: #f4f4f4;
    }
}
.payBox {
    width: 1200px;
    margin: 0 auto;
}
.information {
    box-sizing: border-box;
    padding: 30px;
    background: {
        color: #fff;
    }
    margin: {
        bottom: 45px;
    }
    >li {
        @include fontSize(18px, #666666);
        >h3 {
            @include fontSize(24px, #444444);
            margin: {
                bottom: 35px;
            }
        }
        >p {
            @include fontSize(18px, #444444);
            line-height: 30px;
            >span {
                @include fontSize(18px, #666666);
            }
        }
        >hr {
            margin: 30px 0;
        }
        >b {
            @include fontSize(24px, #ff786b);
            font-weight: normal;
        }
    }
}
.howToPay {
    box-sizing: border-box;
    padding: 30px;
    background: {
        color: #fff;
    }
    >li:nth-child(1) {
        @include fontSize(24px, #444444);
        margin: {
            bottom: 30px;
        }
    }
    >li:nth-child(2) {
        margin: {
            bottom: 20px;
        }
        >span {
            display: inline-block;
            width: 140px;
            height: 40px;
            position: relative;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            margin: {
                right: 40px;
            }
            >i {
                position: absolute;
                right: 0;
                top: 0;
                display: none;
            }
            >img {
                margin: {
                    top: 4px;
                }
            }
        }
        >.choosePay {
            border: 1px solid #2db001;
            >i {
                display: block;
            }
        }
    }
}
</style>

<template>
    <div id="pay">
        <div class="payBox">
            <ul class="information">
                <li>
                    <h3>订单信息</h3>
                </li>
                <li>
                    <p>
                        课程名称：
                        <span>{{ $store.state.POPUP_PAY_CLASS.name }}</span>
                    </p>
                    <p>
                        订单编号：
                        <span>{{ $store.state.POPUP_PAY_CLASS.dCode }}</span> 
                    </p>
                    <p>
                        购买时间：
                        <span>{{ $store.state.POPUP_PAY_CLASS.payTime }}</span> 
                    </p>
                </li>
                <li>
                    <hr>
                </li>
                <li>
                    应付金额：<b>¥{{ $store.state.POPUP_PAY_CLASS.price }}</b>
                </li>
            </ul>
            <ul class="howToPay">
                <li>
                    <h3>付款方式</h3>
                </li>
                <li>
                    <span
                        :class="{choosePay: howToPay.index == 'wx'}"
                        v-if="howToPay.index == 'wx'"
                        @click="howToPay.index = 'wx'"
                    >
                        <i><img src="static/images/20.png" alt=""></i>
                        <img src="static/images/21.png" alt="">
                    </span>
                </li>
                <li>
                    <img width="200px" height="200px" :src="howToPay.img[howToPay.index]" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pay',
    data () {
        return {
            howToPay: {
                index: this.$route.query.how,
                img: {
                    wx: ''
                }
            },
            classSth: {},
            timer: ''
        }
    },
    methods: {
        //获取课程详情
        ajaxRecording () {
            this.axios({
                url: `/api/course_info?course_id=${this.$route.params.id}`,
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                }
            }).then( (res) => {
                if( res.data.status_code == 200) {
                    this.classSth = {
                        name: res.data.data.name,
                        img: res.data.data.img,
                        price: res.data.data.price,
                        is_toll: res.data.data.is_toll,
                        publisher: res.data.data.publisher,
                        time: res.data.data.time,
                        count: res.data.data.count,
                        is_buy: res.data.data.is_buy,
                        small: res.data.data.small,
                        desc: res.data.data.desc,
                        target: res.data.data.target,
                        crowd: res.data.data.crowd,
                        lecturer: res.data.data.lecturer,
                        publisher_desc: res.data.data.publisher_desc
                    }
                    this.lesson_list = res.data.data.lesson_list;
                    this.$store.commit('POPUP_PAY_CLASS_STH', this.classSth);
                    this.payAjax();
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
        //支付接口
        payAjax () {
            const how = this.$route.query.how;
            this.axios({
                url: '/api/buy/course',
                method: 'post',
                headers: {
                    'Authorization': sessionStorage.token,
                },
                data: {
                    course_id: this.$route.params.id,
                    pay_type: how
                }
            }).then( (res) => {
                if( res.data.status_code == 201 ) {
                    this.howToPay.img[how] = res.data.data.qr_code
                    let data = res.data.data;
                    data.payTime = data.out_trade_no.slice(0,8);
                    data.payTime = `${data.payTime.slice(0, 4)}-${data.payTime.slice(4, 6)}-${data.payTime.slice(5, 7)}`
                    data.howPay = this.$route.query.how;
                    // console.log(data);
                    this.$store.commit('PAY_CLASS_INFORMATION', data);
                    // this.timer = setInterval( () => {
                    //     this.wxPayOrNot()
                    // }, 3000);
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
        //微信判断是否支付
        wxPayOrNot () {
            this.axios({
                url: `/api/wx_order?out_trade_no=${this.$store.state.POPUP_PAY_CLASS.dCode}`,
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                }
            }).then( (res) => {
                if(res.data.status_code == 200) {
                    clearInterval(this.timer);
                    this.$alert('支付成功','提示',{
                        type: 'success',
                        callback: () => {
                            // this.$router.push(`okPay/${this.$route.params.id}`)
                            this.$router.push({
                                path: `/okPay/${this.$route.params.id}`,
                                // name: this.$store.state.POPUP_PAY_CLASS.name,
                                // time: 
                            })
                        }
                    })
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
        this.ajaxRecording();
    },
    beforeRouteLeave (to, from, next) {
        clearInterval(this.timer);
        next( () => {
            
        })
    }
}
</script>
