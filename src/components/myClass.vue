<style lang="scss" scoped>
    @mixin fontSize($size, $color) {
        font-size: $size - 2;
        color: $color;
    }
    #myClass {
        min-height: 600px;
        position: relative;
        box-sizing: border-box;
        padding: 20px 30px;
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
        >ul {
            >li {
                padding: 30px 25px;
                border: 1px solid #e5e5e5;
                overflow: hidden;
                margin: {
                    bottom: 20px;
                }
                >div {
                    float: left;
                }
                >div:nth-child(1) {
                    img {
                        width: 168px;
                        height: 94px;
                    }
                    margin: {
                        right: 25px;
                    }
                }
                >div:nth-child(2) {
                    width: 500px;
                    >h3 {
                        @include fontSize(24px, #444444);
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    >.line {
                        margin: {
                            top: 57px;
                        }
                    }
                }
                >div:nth-child(3) {
                    width: 142px;
                    text-align: right;
                    float: right;
                    >p:nth-child(2) {
                        @include fontSize(18px, #444444);
                        margin: {
                            top: 30px;
                        }
                    }
                }
            }
        }
        >.div {
           
        }
    }
</style>

<template>
    <div id="myClass">
        <!-- 没有信息 -->
        <div class="noSth" v-show="list.length > 0">
            <p>
                <img src="static/images/24.png" alt="">
            </p>
            <p>
                你还没有学习任何课程
            </p>
        </div>
        <!-- 有信息 -->
        <div class="haveSth">
            <ul>
                <li>
                    <div>
                        <img src="static/images/43393846_p0.jpg" alt="">
                    </div>
                    <div>
                        <h3>如何好好说话金牌145134513452152352153主持人</h3>
                        <el-progress class="line" :percentage="70" :show-text="false">123</el-progress>
                    </div>
                    <div>
                        <p>
                            <el-button type="primary">{{ goOnOrAgin(0,10) }}</el-button>
                        </p>
                        <p>
                            已经学习8/12课时
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
    name: 'myClass',
    data () {
        return {
            list: [],
            ajaxUpData: {
                page: 1
            }
        }
    },
    computed: {
        
    },
    methods: {
        getPage (page) {
            this.ajaxUpData.page = page;
        },
        goOnOrAgin (first, last) {
            if(first == 0) {
                return '开始学习'
            }else if(first < last){
                return '继续学习'
            }else {
                return '重新学习'
            }
        }
    }
}
</script>