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
        <div class="noSth" v-show="order_list.length == 0">
            <p>
                <img src="static/images/23.png" alt="">
            </p>
            <p>
                你还没有学习任何课程
            </p>
        </div>
        <!-- 有信息 -->
        <div class="haveSth" v-show="order_list.length > 0">
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
                <li v-for="value in order_list" :key="value.course_name">
                    <div>
                        <div>
                            <p>
                                {{ value.course_name }}
                            </p>
                            <p>
                                订单编号：{{ value.out_trade_no }}
                            </p>
                            <p>
                                下单时间：{{ value.date.split(' ')[0] }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>￥{{ value.pay_type }}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>￥{{ value.total_fee }}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>支付成功</p>
                            <!-- <p>待支付</p>
                            <p>订单失效</p> -->
                        </div>
                        
                    </div>
                    <div>
                        <!-- <el-button type="primary">继续支付</el-button> -->
                        <!-- <p>
                            <el-button type="primary">重新购买</el-button>
                        </p>
                        <p>
                            <el-button type="text">取消订单</el-button>
                        </p> -->
                    </div>
                </li>
            </ul>
            <div>
                <el-pagination
                    layout="->, pager "
                    :total="ajaxUpData.count"
                    :page-size="ajaxUpData.per_page"
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
            ajaxUpData: {
                page: 1
            },
            order_list: []
        }
    },
    methods: {
        getPage (page) {
            this.ajaxUpData.page = page;
        },
        //获取订单
        getOrderAjax () {
            this.axios({
                url: `/api/people/order?page=${this.ajaxUpData.page}`,
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                }
            }).then( (res) => {
                if( res.data.status_code == 200) {
                    this.ajaxUpData.count = res.data.page_info.count;
                    this.ajaxUpData.per_page = res.data.page_info.per_page;
                    this.order_list = res.data.order_list;
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
        this.getOrderAjax();
    }
}
</script>
