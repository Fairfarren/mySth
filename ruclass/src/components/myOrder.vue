<style lang="scss" scoped>
    @mixin fontSize($size, $color) {
        font-size: $size - 2;
        color: $color;
    }
    #myOrder {
        min-height: 600px;
        position: relative;
        box-sizing: border-box;
        padding:0 0 20px 0;
    }
    .noSth {
        width: 255px;
        height: 255px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        text-align: center;
        >p:nth-child(2) {
            @include fontSize(18px, #333333);
            margin: {
                top: 10px;
            }
        }
    }
    .haveSth {
        >ul:nth-child(1) {
            >li {
                display: table;
                width: 100%;
                box-sizing: border-box;
                vertical-align: bottom;
                padding: 0 30px;
                background: {
                    color: #eeeeee;
                }
                >div {
                    display: inline-table;
                    width: 152px;
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    @include fontSize(20px, #666666);
                }
                >div:nth-child(1) {
                    width: 322px;
                }
            }
        }
        >ul:nth-child(2) {
            padding: 20px 30px;
            >li {
                border: 1px solid #e5e5e5;
                display: table;
                margin: {
                    bottom: 20px;
                }
                >div {
                    width: 152px;
                    height: 160px;
                    @include fontSize(16px, #444444);
                    text-align: center;
                    float: left;
                    box-sizing: border-box;
                    display: table-cell;
                    vertical-align: middle;
                    padding: 50px 0;
                    border-right: 1px solid #e5e5e5;
                }
                >div:nth-child(1) {
                    width: 322px;
                    text-align: left;
                    padding: {
                        left: 20px;
                    }
                }
                div:last-child {
                    border: 0;
                }
                
            }
        }
    }
</style>

<template>
    <div id="myOrder">
        <!-- 没有信息 -->
        <div class="noSth" v-show="list.length == 0">
            <p>
                <img src="static/images/23.png" alt="">
            </p>
            <p>
                你还没有学习任何课程
            </p>
        </div>
        <!-- 有信息 -->
        <div class="haveSth" v-show="list.length > 0">
            <ul>
                <li>
                    <div>
                        订单信息
                    </div>
                    <div>
                        单价 
                        <span>（元）</span>
                    </div>
                    <div>
                        实付金额
                        <span>（元）</span>
                    </div>
                    <div>
                        订单状态
                    </div>
                    <div>
                        交易操作
                    </div>
                </li>
            </ul>
            <ul>
                <li v-for="value in [1,2,3,4]" :key="value">
                    <div>
                        <div>
                            <p>
                                Exce数据分析实战
                            </p>
                            <p>
                                订单编号：10012321123
                            </p>
                            <p>
                                下单时间：2019-10-10
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>399.00</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>399.00</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>支付成功</p>
                            <p>待支付</p>
                            <p>订单失效</p>
                        </div>
                        
                    </div>
                    <div>
                        <!-- <el-button type="primary">继续支付</el-button> -->
                        <p>
                            <el-button type="primary">重新购买</el-button>
                        </p>
                        <p>
                            <el-button type="text">取消订单</el-button>
                        </p>
                    </div>
                </li>
            </ul>
            <div>
                <el-pagination
                    layout="->, pager "
                    :total="500"
                    @current-change="getPage"
                >
                </el-pagination>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'myOrder',
    data () {
        return {
            list: [1],
        }
    },
    methods: {
        getPage (page) {
            console.log(page)
        }
    }
}
</script>
