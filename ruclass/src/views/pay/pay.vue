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
                        <span>2018高考数学秋季系统拔高班</span>
                    </p>
                    <p>
                        订单编号：
                        <span>171102160046992256</span> 
                    </p>
                    <p>
                        购买时间：
                        <span>2017年11月02日  17:02:29</span> 
                    </p>
                </li>
                <li>
                    <hr>
                </li>
                <li>
                    应付金额：<b>¥399.00</b>
                </li>
            </ul>
            <ul class="howToPay">
                <li>
                    <h3>付款方式</h3>
                </li>
                <li>
                    <span 
                        :class="{choosePay: howToPay.index == 'aliPay'}"
                        @click="howToPay.index = 'aliPay'"
                    >
                        <i><img src="static/images/20.png" alt=""></i>
                        <img src="static/images/22.png" alt="">
                    </span>
                    <span
                        :class="{choosePay: howToPay.index == 'weChatPay'}"
                        @click="howToPay.index = 'weChatPay'"
                    >
                        <i><img src="static/images/20.png" alt=""></i>
                        <img src="static/images/21.png" alt="">
                    </span>
                </li>
                <li>
                    <img :src="howToPay.img[howToPay.index]" alt="">
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
                index: 'aliPay',
                img: {
                    aliPay: 'static/images/pay10.png',
                    weChatPay: 'static/images/pay9.png'
                }
            }
        }
    }
}
</script>
