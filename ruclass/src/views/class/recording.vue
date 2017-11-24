<style scrped lang="scss">
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
    #recording {
        background: {
            color: #f4f4f4;
        }
        padding: 60px 0;
    }
    .navigation {
        width: 1200px;
        margin: 0 auto;
        @include fontSize(18px, #444444);
        margin: {
            bottom: 25px;
        }
        a {
            @include fontSize(18px, #444444);
        }
    }

    .overview {
        width: 1200px;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        overflow: hidden;
        margin: {
            bottom: 35px;
        }
        background: {
            color: #ffffff;
        }
        >div {
            float: left;
            box-sizing: border-box;
        }
        >.left {
            $width: 455px;
            $height: 248px;
            width: $width;
            height: $height;
            position: relative;
            img:first-child {
                width: $width;
                height: $height;
            }
            img:last-child {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                z-index: 2;
            }
        }
        >.right {
            width: 630px;
            margin: {
                left: 40px;
            }
            >ul {
                >li {
                    margin: {
                        bottom: 18.5px;
                    }
                }
                >li:nth-child(1) {
                    // overflow: hidden;
                    height: 30px;
                    // margin: {
                    //     bottom: 20px;
                    // }
                    >h4 {
                        float: left;
                        width: 535px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        @include fontSize(24px, #444444);
                    }
                    >span {
                        float: right;
                        position: relative;
                        margin: 0 10px;
                        // width: 42px;
                        cursor: pointer;
                        >span {
                            position: absolute;
                            // opacity: 0;
                            left: -7px;
                            top: 24px;
                            width: 42px;
                            text-align: center;
                            @include fontSize(14px, #a8a8a8);
                        }
                    }
                }
                >li:nth-child(2) {
                    // margin: {
                    //     bottom: 20px;
                    // }
                    >span:nth-child(1) {
                        @include fontSize(20px, #ff8783);
                        margin: {
                            right: 20px;
                        }
                    }
                    >span:nth-child(2) {
                        @include fontSize(18px, #666666);
                        >span {
                            @include fontSize(18px, #3399ff);
                        }
                    }
                }
                >li:nth-child(3) {
                    // margin: {
                    //     bottom: 20px;
                    // }
                    >span {
                        @include fontSize(18px, #666666);
                    }
                }
                >li:nth-child(4) {
                    // margin: {
                    //     bottom: 20px;
                    // }
                    >span {
                        @include fontSize(18px, #666666);
                    }
                }
                >li:nth-child(5) {
                    // margin: {
                    //     bottom: 15px;
                    // }
                    >span:nth-child(1) {
                        @include fontSize(18px, #3399ff);
                    }
                    >span:nth-child(2) {
                        @include fontSize(18px, #FE847A);
                    }
                    >span:nth-child(3) {
                        @include fontSize(18px, #00CC4C);
                    }
                }
                >li:nth-child(6) {
                    margin: 0;
                    >span {
                        display: inline-block;
                        width: 94px;
                        height: 32px;
                        border: 1px solid #3399ff;
                        border-radius: 4px;
                        text-align: center;
                        line-height: 32px;
                        cursor: pointer;
                        @include fontSize(18px, #3399ff);
                    }
                }
            }
        }
    }

    .details {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        >.left {
            width: 898px;
            float: left;
            >.choice {
                $height: 60px;
                height: $height;
                background: {
                    color: #ffffff;
                }
                >span {
                    float: left;
                    cursor: pointer;
                    line-height: $height;
                    width: 182px;
                    text-align: center;
                    @include fontSize(24px, #999999);
                    @include transition(0.3s);
                }
                >.spanColor {
                    background: {
                        color: #3399ff;
                    }
                    @include fontSize(24px, #ffffff);
                }
            }
            >.introduction {
                >ul {
                    >li {
                        padding: 30px 45px;
                        >h4 {
                            @include fontSize(20px, #444444);
                            margin: {
                                bottom: 10px;
                            }
                        }
                        >p {
                            @include fontSize(16px, #999999);
                        }
                    }
                    @for $i from 1 through 3 {
                        @if $i % 2 == 0 {
                             >li:nth-child(#{$i}) { 
                                background: {
                                    color: #fff;
                                }
                            }
                        }@else {
                            >li:nth-child(#{$i}) {
                                background: {
                                    color: #fafafa;
                                }
                            }
                        }
                    }
                }
            }
            >.list {
                >ul {
                    padding: 40px;
                    >li {
                        border: 1px solid #999999;
                        border-radius: 4px;
                        padding: 10px;
                        @include fontSize(16px, #999999);
                        margin: {
                            bottom: 20px;
                        }
                        >span:last-child {
                            float: right;
                        }
                    }
                    >li:nth-child(1) {
                        border: 0;
                        padding: 0;
                        @include fontSize(20px, #444444);
                    }
                    >.now {
                        border: 1px solid #3399ff;
                        @include fontSize(16px, #3399ff);
                    }
                    >.not {
                        border: 1px solid #666666;
                        @include fontSize(16px, #666666);
                    }
                }
                @for $i from 1 through 20 {
                    @if $i % 2 == 0 {
                        >ul:nth-child(#{$i}) {
                            background: {
                                color: #ffffff;
                            }
                        }
                    }@else {
                        background: {
                            color: #fafafa;
                        }
                    }
                    
                }
            }
        }
        >.right {
            float: right;
            >ul {
                width: 282px;
                padding: 30px;
                box-sizing: border-box;
                background: {
                    color: #ffffff;
                }
                margin: {
                    bottom: 25px;
                }
                >li:nth-child(1) {
                    display: table;
                    width: 100%;
                    margin: {
                        bottom: 15px;
                    }
                    >div {
                        display: inline-table;
                        vertical-align: middle;
                    }
                    >div:first-child {
                        img: {
                            width: 54px;
                            height: 54px;
                            border-redius: 50%;
                        }
                    }
                    >div:last-child {
                        padding: {
                            left:25px;
                        }
                        @include fontSize(24px, #444444);
                    }
                }
                >li:nth-child(2) {
                    @include fontSize(14px, #666666);
                    text-indent: 28px;
                }
            }
            >ul:nth-child(2) {
                >li {
                    >div {
                        >p:first-child {
                            text-align: center;
                            @include fontSize(20px, #444444);
                            margin: {
                                bottom: 10px;
                            }
                        }
                        >p:last-child {
                            text-align: center;
                            @include fontSize(20px, #4ab4cf);
                        }
                    }
                    >div:nth-child(2) {
                        width: 140px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="recording">
        <div class="navigation">
            <span>
                <router-link to="/class">
                    全部课程
                </router-link>
            </span>
            <span>
                <router-link :to="`/class?small=${classSth.small}`">
                    >{{ classSth.small }}
                </router-link>
            </span>
            <span>
                >课程详情
            </span>
        </div>
        <div class="overview">
            <div class="left">
                <router-link to="">
                    <img v-lazy="classSth.img" alt="">
                    <img src="static/images/10.png" alt="">
                </router-link>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <h4>{{ classSth.name }}</h4>
                        <span>
                            <img src="static/images/13.png" alt="">
                            <span>已分享</span>
                        </span>
                        <span>
                            <img src="static/images/12.png" alt="">
                            <span>已收藏</span>
                        </span>
                    </li>
                    <li>
                        <span>
                            {{ classSth.publisher }}
                        </span>
                        <span>
                            讲师：
                            <span>{{ classSth.lecturer }}</span>
                        </span>
                    </li>
                    <li>
                        <span>
                            报名人数：{{ classSth.count }}人
                        </span>
                    </li>
                    <li>
                        <span>
                            上课时间：{{ classSth.time }}
                        </span>
                    </li>
                    <li>
                        <span v-show="classSth.id_buy ? false : classSth.is_toll ? false : true">免费</span>
                        <span v-show="classSth.price != 0 && classSth.is_toll">￥{{ classSth.price }}</span>
                        <span v-show="classSth.is_buy">已购买</span>
                    </li>
                    <li>
                        <span 
                            @click="openPopup"
                            v-if="!classSth.is_buy"
                        >加入学习</span>
                        <router-link 
                            :to="`/class/detailed/${$route.params.id}`"
                            tag="span"
                            v-else
                        >
                            立即学习
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="details">
            <div class="left">
                <div class="choice">
                    <span 
                        :class="{spanColor: spanColor == 0}"
                        @click="spanColor = 0"
                    >课程简介</span>
                    <span 
                        :class="{spanColor: spanColor == 1}"
                        @click="spanColor = 1"
                    >课程大纲</span>
                </div>
                <div class="introduction" v-show="spanColor == 0">
                    <ul>
                        <li>
                            <h4>课程目标</h4>
                            <p>{{ classSth.target }}</p>
                        </li>
                        <li>
                            <h4>适用人群</h4>
                            <p>{{ classSth.crowd }}</p>
                        </li>
                        <li>
                            <h4>课程简介</h4>
                            <p>
                                {{ classSth.desc }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="list" v-show="spanColor == 1">
                    <ul v-for="lessons in lesson_list" :key="lessons.chapter">
                        <li>
                            <h4> {{ lessons.chapter }} </h4>
                        </li>
                        <!-- <li v-for="value in lesson_list" :key="value" :class="{now: value == 2, not: value == 3}">
                            <span>[直播]</span>
                            <span>课时1：艺术的魅力</span>
                            <span>已结束</span>
                        </li> -->
                        <router-link to="" tag="li" v-for="value in lessons.lesson" :key="value.id">
                            <span>[直播]</span>
                            <span>{{ value.name }}</span>
                            <span>已结束</span>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <div>
                            <img src="static/images/14.png" alt="">
                        </div>
                        <div>
                            {{ classSth.publisher }}
                        </div>
                    </li>
                    <li>
                        <p>
                            {{ classSth.publisher_desc }}
                        </p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div>
                            <img src="static/images/14.png" alt="">
                        </div>
                        <div>
                            <p>加群沟通：</p>
                            <p>64373733</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recording',
    data () {
        return {

            spanColor: 0,
            classSth: {
                desc: '',
                name: '',
                img: '',
                price: '',
                is_toll: '',
                publisher: '',
                time: '',
                count: '',
                is_buy: '',
                small: '',
                target: '',//课程目标
                crowd: '',//使用人群
                desc: '',//课程简介
                publisher_desc: ''//旁边一大段
            },
            lesson_list: []
        }
    },
    methods: {
        openPopup () {
            //判断是否登录
            if( sessionStorage.token.length <= 0 || !sessionStorage.token) {
                this.$alert('请先登录','提示',{
                    type: 'warning',
                    callback: action => {
                        this.$router.push({query: {
                            index: 0
                        }})
                        this.$store.commit('PUPUP_SHOW_SIGNINUP');
                    }
                })
            }else {
                this.$router.push({query: {
                    index: 3
                }})
                this.$store.commit('PUPUP_SHOW_SIGNINUP');
            }
            
        },
        //获取课程详情信息
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
                    this.lesson_list = res.data.data.lesson_list;
                    this.$store.commit('POPUP_PAY_CLASS_STH', this.classSth);
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
        }
    },
    mounted () {
        this.ajaxRecording();
    }
}
</script>
