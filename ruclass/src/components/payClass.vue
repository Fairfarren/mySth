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
                    <h3>如何好好说话金牌主持人</h3>
                </li>
                <li>
                    <p>出版方：妹妹婚礼</p>
                    <p>讲师：如故</p>
                    <p>直播时间：2017/11/11--2017/12/12</p>
                </li>
                <li>
                    课程价格：<span>￥339.00</span>
                </li>
                <li>
                    <el-button 
                        type="primary" 
                        style="width:100%;height:48px;font-size:24px;"
                        @click="goToPay"
                    >去支付</el-button>
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

        }
    },
    methods: {
        goToPay () {
            // console.log(this.$route)
            this.$store.commit('CLOSE_PUPUP');
            this.$router.push({ 
                path: `/paySth/${this.$route.params.id}`,
                query: {}
            })
        }
    }
}
</script>
