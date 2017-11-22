<style lang="scss" scoped>
    @mixin fontSize($size, $color) {
        font-size: $size - 2;
        color: $color;
    }
    .homeList {
        width: 100%;
        background: {
            color: #fff;
        }
        >div {
            width: 1200px;
            margin: 0 auto;
            padding: 50px 0 25px;
            >h3 {
                @include fontSize(28px, #444444);
                margin: {
                    bottom: 25px;
                }
            }
        }
    }
    .chose {
        margin: {
            bottom: 25px;
        }
        >ul {
            display: table;
            margin: {
                bottom: 25px;
            }
            >li {
                display: inline-table;
                vertical-align: bottom;
            }
            >li:nth-child(1) {
                @include fontSize(22px, #666666);
                margin: {
                    right: 20px;
                }
            }
            >li:nth-child(2) {
                @include fontSize(20px, #999999);
                margin: {
                    right: 10px;
                }
                >span {
                    margin: 0 20px;
                    cursor: pointer;
                }
            }
            >li:nth-child(3) {
                @include fontSize(20px, #666666);
                input {
                    display: none;
                }
                label {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background: {
                        image: url('../../../static/images/4.png')
                    }
                }
                input:checked+label {
                    background: {
                        image: url('../../../static/images/3.png')
                    }
                }
            }
            .colorSpan {
                color: #3399ff;
                font-weight: bold;
            }
        }
    }
    .allHomeList {
        .chose {
            >ul {
                >li:nth-child(1) {
                    @include fontSize(24px, #333333);
                    line-height: 40px;
                }
                >li:nth-child(2) {
                    @include fontSize(20px, #666666);
                    >span {
                        margin: 0 5px;
                        display: inline-block;
                        min-width: 70px;
                        padding: 0 10px;
                        box-sizing: border-box;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                        text-align: center;
                    }
                }
                .colorSpan {
                    color: #fff;
                    background: {
                        color: #3399ff;
                    }
                    border-radius: 4px;
                    font-weight: normal;
                }
            }
        }
    }
</style>

<template>
    <div id="all">
        <!-- 全部课程 -->
        <div class="homeList allHomeList" style="background-color: #fff;">
            <div>
                <h3>全部课程</h3>
                <div class="chose">
                    <ul>
                        <li>
                            <span>{{category.title1}}：</span>
                        </li>
                        <li>
                            <span 
                                :class="{colorSpan: upLoadData.classification == -1}"
                                @click="upLoadData.classification = -1"
                            >全部</span>
                            <span
                                v-for="(data, index) in category.title1_list" :key="data.name"
                                :class="{colorSpan: upLoadData.classification == index}"
                                @click="upLoadData.classification = index"
                            >{{data}}</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>{{category.title2}}：</span>
                        </li>
                        <li>
                            <span 
                                :class="{colorSpan: upLoadData.category == -1}"
                                @click="upLoadData.category = -1"
                            >全部</span>
                            <span
                                v-for="(data, index) in category.title2_list" :key="data.name"
                                :class="{colorSpan: upLoadData.category == index}"
                                @click="upLoadData.category = index"
                            >{{data}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 视频内容 -->
        <div class="homeList" style="background-color: #f5f5f5;">
            <div>
                <!-- <h3>全部课程</h3> -->
                <div class="chose">
                    <ul>
                        <li>
                            <span>视频内容：</span>
                        </li>
                        <li>
                            <span 
                                :class="{colorSpan: upLoadData.giveMoney == 0}"
                                @click="upLoadData.giveMoney = 0"
                            >全部</span>
                            <span 
                                :class="{colorSpan: upLoadData.giveMoney == 1}"
                                @click="upLoadData.giveMoney = 1"
                            >免费</span>
                            <span 
                                :class="{colorSpan: upLoadData.giveMoney == 2}"
                                @click="upLoadData.giveMoney = 2"
                            >付费</span>
                        </li>
                        <li>
                            <input id="recording-1" value="0" type="checkbox" v-model="upLoadData.broadcast[0]">
                            <label for="recording-1"></label>
                            录播
                            <input id="broadcast-1" value="1" type="checkbox" v-model="upLoadData.broadcast[1]">
                            <label for="broadcast-1"></label>
                            直播
                        </li>
                    </ul>
                </div>
                <div class="cardList">
                    <el-row :gutter="20" id="card">
                        <cardMore v-for="data in recommendData" :key="data.classname" :data="data"></cardMore>
                    </el-row>
                </div>
                <div>
                    <el-pagination
                        layout="->, pager "
                        :total="category.count"
                        :page-size="category.per_page"
                        @current-change="getPage"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'all',
    components: {
        CardMore: resolve => require(['@/components/cardMore'], resolve)
    },
    data () {
        return {
            upLoadData: {
                //分类
                classification: -1,
                //类别
                category: -1,
                //付费
                giveMoney: 0,
                //直播录播
                broadcast: []
            },
            recommendData:[
                // {
                //     className: '课程1',
                //     money: '0',
                //     publishing: '我1',
                //     img: '',
                //     url: '/home'
                // },
            ],
            category: {
                title1: '分类',
                title2: '类别',
                title1_list: [
                   
                ],
                title2_list: [
                    
                ],
                page: 1,
                count: 2,
                per_page: 10
            }
        }
    },
    methods: {
        //第一次进来初始化数据
        ajaxAll () {
            //全部课程
            this.axios.get(`/api/course`).then( (res) => {
                if( res.data.status_code == 200 ) {
                    res.data.course_list.map(  (value, index) => {
                        this.recommendData.splice(index, 1, {
                            className: value.name,
                            money: value.price,
                            publishing: value.publisher,
                            img: value.img,
                            url: `/class/recording/${value.id}`
                        })
                    })
                    this.category.count = res.data.page_info.count;
                    this.category.per_page = res.data.page_info.per_page;
                    // console.log();
                }else {
                    this.$alert(res.data.msg,'错误',{
                        type: 'warning'
                    })
                }
            }).catch( (error) => {
                console.log(erroe);
                this.$alert('网络连接超时或网络错误','错误',{
                    type: 'warning'
                })
            })
            //获取分类
            this.axios.get('/api/category').then( (res) => {
                if(res.data.status_code == 200) {
                    res.data.category_list.map( (value, index) => {
                        this.category[`title${index+1}`] = value.name;
                        value.small_list.map( (text, ind) => {
                            this.category[`title${index+1}_list`][ind] = text;
                        })
                    })
                }else {
                    this.$alert(res.data.msg,'错误',{
                        type: 'warning'
                    })
                }
            }).catch( (error) => {
                console.log(error);
                this.$alert('网络连接超时或网络错误','错误',{
                    type: 'warning'
                })
            })
        },
        //改变页数
        getPage (num) {
            this.category.page = num;
        }
    },
    mounted () {
        this.ajaxAll();
    }
}
</script>