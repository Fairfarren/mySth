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
                        <span>2018高考数学秋季系统拔高班</span>
                    </p>
                    <p>
                        购买时间：
                        <span>2017年11月11日</span> 
                    </p>
                    <p>
                        订单编号：
                        <span>E-892764619103747199</span> 
                    </p>
                    <p>
                        支付编号：
                        <span>E-jklahdfh 83489127491823</span>
                    </p>
                    <p>
                        支付方式：
                        <span>微信支付</span>
                    </p>
                    <p>
                        支付金额：
                        <span>￥399.00</span>
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
            
        }
    },
    methods: {
        goBackToClass () {
            this.$router.push({
                path: `/class/recording/${this.$route.params.id}`
            })
        }
    }
}
</script>
