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
                        购买时间：
                        <span>{{ $store.state.POPUP_PAY_CLASS.payTime }}</span> 
                    </p>
                    <p>
                        订单编号：
                        <span>{{ $store.state.POPUP_PAY_CLASS.dCode }}</span> 
                    </p>
                    <!-- <p>
                        支付编号：
                        <span>E-jklahdfh 83489127491823</span>
                    </p> -->
                    <p>
                        支付方式：
                        <span>{{ howToPayText }}</span>
                    </p>
                    <p>
                        支付金额：
                        <span>￥{{ $store.state.POPUP_PAY_CLASS.price }}</span>
                    </p>
                </li>
                <li>
                    <hr>
                </li>
                <li>
                    <el-button type="primary" @click="goBackToClass">返回课程</el-button>
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
            howToPay: '',
            classSth: {},
        }
    },
    computed: {
        //判断支付方式
        howToPayText () {
            let text = '';
            switch (this.howToPay) {
                case 'wx' : text = '微信支付';break;
                default: text = '支付宝支付';break;
            }
            return text;
        }
    },
    methods: {
        //返回课程
        goBackToClass () {
            if( this.$route.params.id ) {
                this.$router.push({
                    path: `/class/recording/${this.$route.params.id}`
                })
            }else {
                this.$router.push({
                    path: `/class/recording/${this.classSth.id}`
                })
            }

        },
        //判断是微信支付跳转还是支付宝支付完成跳转
        aiPayFromOrWeChatFrom () {
            if( sessionStorage.token ) {
                let data = {};
                //有id的为站内跳转的，没有id的为站外支付跳转
                if( this.$route.params.id ) {
                    this.ajaxRecording();
                }else {
                    //数据格式
                    //{"date": "2017-11-27 10:06:18","name": "哈哈哈哈","out_trade_no": "20171127100618725661","total_fee": 0.01}
                    let query = this.$route.query;
                    this.classSth = {
                        payTime: query.date.split(' ')[0],
                        name: query.name,
                        out_trade_no: query.out_trade_no,
                        price: query.total_fee,
                        id: query.id
                    }
                    console.log(query);
                    this.$store.commit('POPUP_PAY_CLASS_STH', this.classSth);
                    this.$store.commit('PAY_CLASS_INFORMATION', this.classSth);
                }
            }else {
                this.$alert('请先登录','错误',{
                    type: 'warning',
                    callback: () => {
                        this.$store.commit('PUPUP_SHOW_SIGNINUP');
                        this.$router.push({query: {
                            index: 0
                        }})
                    }
                })
            }
        },
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
                    this.$store.commit('POPUP_PAY_CLASS_STH', this.classSth);
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
        
    },
    mounted () {
        this.aiPayFromOrWeChatFrom();
    }
}
</script>
