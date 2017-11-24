<style lang="scss" scoped>
@mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
}
.fGrMBox {
    width: 500px;
    height: 200px;
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
            bottom: 25px;
        }
    }
    .content {
        >li {
            text-align: center;
            >h3 {
                @include fontSize(22px, #444444);
            }
            margin: {
                bottom: 15px;
            }
            .getHowToPay {
                cursor: pointer;
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
    
}
</style>

<template>
    <div id="howToPay" class="fGrMBox">
        <div class="close" @click="$store.commit('CLOSE_PUPUP')">
            <img src="static/images/19.png" alt="">
        </div>
        <!-- 选择支付方式 -->
        <div>
            <div class="title">
                <p>选择支付方式</p>
            </div>
            <ul class="content">
                <li>
                    <el-row :gutter="20">
                        <el-col 
                            :span="12" 
                            class="getHowToPay"
                        >
                            <img src="static/images/22.png" alt="" @click="goToPayAjax('alipay')">
                        </el-col>
                        <el-col 
                            :span="12" 
                            class="getHowToPay"
                        >
                            <img src="static/images/21.png" alt="" @click="goToPayAjax('wx')">
                        </el-col>
                    </el-row>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'howToPay',
    data () {
        return {
            wxImg: {
                show: false,
                img: ''
            }
        }
    },
    methods: {
        //支付
        goToPayAjax (how) {
            console.log(123);
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
                    if( how == 'wx' ) {
                        this.$router.push(`/paySth/${this.$route.params.id}`)
                    }
                    if( how == 'alipay' ) {
                        window.location.href = res.data.data.pay_url;
                    }
                    
                }else {
                    this.$alert(res.data.msg,'错误',{
                        type: 'warning'
                    })
                }
            }).catch( (error) => {
                this.$alert(res.data.msg,'错误',{
                    type: 'warning'
                })
            })
        },
        //轮流刷新，判断微信支付是否完成
        wxPay (order) {
            this.axios({
                url: `/api/wx_order`,
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                }
            })
        }
    },
    
}
</script>
