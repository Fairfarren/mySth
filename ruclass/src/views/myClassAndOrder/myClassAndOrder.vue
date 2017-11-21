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
    #myClassAndOrder {
        padding: 40px 0;
        background: {
            color: #f5f5f5;
        }
        >div {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            >div {
                float: left;
            }
        }
    }
    .left {
        >ul {
            >li {
                background: {
                    color: #fff;
                }
                width: 182px;
            }
            >li:nth-child(1) {
                text-align: center;
                padding: 20px 0;
                border-radius: 4px;
                @include transition(0.3s);
                >p {
                    @include fontSize(18px, #999999);
                    >span {
                        cursor: pointer;
                    }
                }
                @for $i from 1 through 3 {
                    @if $i < 3 {
                        >p:nth-child(#{$i}) {
                            margin: {
                                bottom: 10px;
                            }
                            @if $i == 1 {
                                img {
                                    width: 84px;
                                    height: 84px;
                                    border-radius: 50%;
                                }
                            }
                        }
                    }
                }
            }
            >li:nth-child(2) {
                margin: {
                    top: 20px;
                }
                >div {
                    @include fontSize(18px, #999999);
                    @include transition(0.3s);
                    border-radius: 4px;
                    text-align: center;
                    padding: 20px 0;
                    cursor: pointer;
                }
                >div:nth-child(1) {
                    border-bottom: 1px solid #f5f5f5;
                }
                >.colorSpan {
                    color: #fff;
                    background: {
                        color: #3399ff;
                    }
                }
            }
            .colorSpan:nth-child(1) {
                background: {
                    color: #3399ff;
                }
                >p {
                    @include fontSize(18px, #fff);
                }
            }
        }
    }
    .right {
        width: 996px;
        margin: {
            left: 20px;
        }
        background: {
            color: #fff;
        }
        >.title {
            border-bottom: 1px solid #eeeeee;
            padding: 25px 30px 20px;
            >h3 {
                @include fontSize(24px, #3399ff);
                font-weight: normal;
            }
        }
    }
</style>

<template>
    <div id="myClassAndOrder">
        <div>
            <div class="left">
                <ul>
                    <li :class="{colorSpan: show.index == 0}">
                        <p>
                            <img :src="$store.state.USER.img" alt="头像加载失败">
                        </p>
                        <p>
                            {{$store.state.USER.name}}
                        </p>
                        <p>
                            <span
                                @click="show.index = 0"
                            >编辑资料</span>
                        </p>
                    </li>
                    <li>
                        <div 
                            :class="{colorSpan: show.index == 1}"
                            @click="show.index = 1"
                        >我的课程</div>
                        <div 
                            :class="{colorSpan: show.index == 2}"
                            @click="show.index = 2"
                        >我的订单</div>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="title">
                    <h3>{{ show.title }}</h3>
                </div>
                <edit-data v-if="show.index == 0"></edit-data>
                <my-class v-if="show.index == 1"></my-class>
                <my-order v-if="show.index == 2"></my-order>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myClassAndOrder',
    components: {
        MyClass: resolve => require(['@/components/myClass'], resolve),
        MyOrder: resolve => require(['@/components/myOrder'], resolve),
        EditData: resolve => require(['@/components/editData'], resolve)
    },
    data () {
        return {
            show: {
                index: this.$route.params.page,
                title: '我的课程'
            }
        }
    },
    computed: {
        
    },
    methods: {
        //判断是否登录
        loginOrOut () {
            this.$store.state.USER.name.length <= 0 && ( () => {
                this.$alert('请先登录', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.push('/home')
                    }
                });
            })();
        },
    },
    mounted () {
        this.loginOrOut();
    },
    watch: {
        'show.index' (value) {
            switch (value) {
                case 0: this.show.title = '编辑资料';break;
                case 1: this.show.title = '我的课程';break;
                case 2: this.show.title = '我的订单';break;
            };
            this.$router.push({ params: {page: value} });
        },
        '$route' (value) {
            this.show.index = value.params.page;
        }
    }
}
</script>
