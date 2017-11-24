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
        <div class="noSth" v-show="course_list.length == 0">
            <p>
                <img src="static/images/24.png" alt="">
            </p>
            <p>
                你还没有学习任何课程
            </p>
        </div>
        <!-- 有信息 -->
        <div class="haveSth" v-show="course_list.length > 0">
            <ul>
                <li v-for="value in course_list" :key="value.id">
                    <div>
                        <img v-lazy="value.img" alt="">
                    </div>
                    <div>
                        <h3>{{ value.name }}</h3>
                        <el-progress class="line" :percentage=" value.schedule.split('/')[0] / value.schedule.split('\/')[1] * 100 " :show-text="false">123</el-progress>
                    </div>
                    <div>
                        <p>
                            <el-button 
                                type="primary"
                                @click="goAgin(value.id)"
                            >
                                {{ goOnOrAgin(value.schedule.split('/')[0], value.schedule.split('\/')[1]) }}
                            </el-button>
                        </p>
                        <p>
                            已经学习{{ value.schedule }}课时
                        </p>
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
    name: 'myClass',
    data () {
        return {
            ajaxUpData: {
                page: 1,
                count: 0,
                per_page: 0
            },
            course_list: []
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
        },
        //获取数据
        getMyClassAjax () {
            this.axios({
                url: `/api/people/course?page=${this.ajaxUpData.page}`,
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                }
            }).then( (res) => {
                if( res.data.status_code == 200) {
                    this.ajaxUpData.count = res.data.page_info.count;
                    this.ajaxUpData.per_page = res.data.page_info.per_page;
                    this.course_list = res.data.course_list;
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
        //继续学习
        goAgin (id) {
            this.$router.push({
                path: `/class/detailed/${id}`
            })
        }
    },
    mounted () {
        this.getMyClassAjax();
    }
}
</script>