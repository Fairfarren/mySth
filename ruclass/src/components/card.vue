<style scoped lang="scss">
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
    .cardContent {
        width: 282px;
        height: 226px;
        margin: {
            bottom: 20px;
        }
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        @include transition(0.3s);
        .cardImg {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .cardHover {
            position: absolute;
            width: 100%;
            box-sizing: border-box;
            padding:5px 10px;
            h4 {
                @include fontSize(20px - 2px, #333333);
                font-weight: inherit;
                margin: {
                    bottom: 2px;
                }
            }
            >li:nth-child(2){
                overflow: hidden;
                span:nth-child(1) {
                    float: left;
                    @include fontSize(18px - 2px, #ff786b);
                }
                span:nth-child(2) {
                    float: left;
                    @include fontSize(18px - 2px, #3399ff);
                }
                span:nth-child(3) {
                    float: right;
                    @include fontSize(18px - 2px, #999999)
                }
            }
            bottom: -100px;
            left: 0;
            background: {
                color: #ffffff;
            }
            @include transition(0.3s);
        }
    }
    .cardContent:hover>.cardHover {
        bottom: 0;
    }
    .cardContent:hover {
        box-shadow: 0 0 20px #888888;
    }
</style>

<template>
    <el-col :span="6" id="card">
        <router-link :to="data.url">
            <div class="cardContent">
                <div class="cardImg">
                    <img v-lazy="data.img" alt="">
                </div>
                <ul class="cardHover">
                    <li>
                        <h4>{{data.className}}</h4>
                    </li>
                    <li>
                        <span v-show="data.money > 0">
                            ￥{{data.money}}
                        </span>
                        <span v-show="data.money <= 0">
                            免费
                        </span>
                        <span>
                            {{data.publishing}}
                        </span>
                    </li>
                </ul>
            </div>
        </router-link>
    </el-col>
</template>

<script>

export default {
    name: 'card',
    props: ['data'],
    methods: {
    
    },
    mounted () {
        console.log();
    }
}
</script>
