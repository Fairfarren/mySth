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
                <router-link to="/class">
                    >无人机培训
                </router-link>
            </span>
            <span>
                >课程详情
            </span>
        </div>
        <div class="overview">
            <div class="left">
                <router-link to="">
                    <img v-lazy="'static/images/43393846_p0.jpg'" alt="">
                    <img src="static/images/10.png" alt="">
                </router-link>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <h4>如何好好说话金牌主持人</h4>
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
                            美美婚礼
                        </span>
                        <span>
                            讲师：
                            <span>如故</span>
                        </span>
                    </li>
                    <li>
                        <span>
                            报名人数：3366人
                        </span>
                    </li>
                    <li>
                        <span>
                            上课时间：2010/11/11--2010/22/22
                        </span>
                    </li>
                    <li>
                        <span>免费</span>
                        <span>￥123.123</span>
                        <span>已购买</span>
                    </li>
                    <li>
                        <span>加入学习</span>
                        <router-link 
                            :to="`/class/detailed/${$route.params.id}`"
                            tag="span"
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
                            <p>帮助提高主持人的说话水平。</p>
                        </li>
                        <li>
                            <h4>适用人群</h4>
                            <p>零基础，主持小白，在校学生。</p>
                        </li>
                        <li>
                            <h4>课程简介</h4>
                            <p>
                                只要你有Python基础，就可以学习游戏开发！cocos2d是游戏界一款非常牛逼的游戏引擎，受众非常大，使用它开发游戏效率及其高效。本套课程从cocos2d最基本的概念开始讲解，并在每个知识点后都配合了代码实例讲解，让每一位想学习游戏开发的同学都能吸收到其中的知识点。课程知识体系完善，内容非常丰富，包含了cocos2d框架的方方面面：Director类、Layer层、Scene场景、Sprite精灵、根节点CococNode、动画（间隔动画、瞬时动画、关键帧动画）、Menu菜单、碰撞检测、EventDispatcher事件处理框架等等。学会了本套课程的知识点后，再去转C++版本的cocos2dx和JavaScript版本的cocos2d-js也都是轻车熟路的事情，相当于学一套课程掌握了整个游戏引擎。人生苦短，我用Python，再加上杀手级cocos2d游戏引擎，从此让你的游戏开发飞起来！
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="list" v-show="spanColor == 1">
                    <ul v-for="qwe in [1,2,3,4]" :key="qwe">
                        <li>
                            <h4>章节1：导读</h4>
                        </li>
                        <li v-for="value in [1,2,3,4]" :key="value" :class="{now: value == 2, not: value == 3}">
                            <span>[直播]</span>
                            <span>课时1：艺术的魅力</span>
                            <span>已结束</span>
                        </li>
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
                            美美婚礼
                        </div>
                    </li>
                    <li>
                        <p>
                            现在有人用“绘本”这种称呼来区分一部分图画书，它们多是由独立的绘画作者专门绘制、带有明显个人风格、以画面本身为主的图画书。我们常见一些有图有文的书，尽管这些书的图画画得十分有趣，但这些图画只是文字的补充，是一类具有文字系统功能的图画。这类书多见于教材和教辅类图书。书中的图画不具备“图画语言”功能。图画书与我国传统的连环画、连环漫画相比，后者好比是传统舞台剧，读者只能在一定角度用全中景去看，会产生极大的距离感。低幼图画书却好比是供低幼儿童看的一部电影，它既展示出宽广的视野，又有细节的特写，既有极其有趣的故事情节，又暗藏着起、承、转、合的节奏设计。 一些以图为主的卡通类幼儿图书与图画书也不同。这些图书绘制精美，画面是活动的卡通片的固化，形式上失去活动的魅力，画面情节已被“肢解”难以表达原著内容，书中的图画只是引起对卡通情节回忆的符号。”文字很简单：“狼进了小羊家……”。后面用一整版表现狼打开门进来，所有的小羊都很惊慌，有的藏在大钟里，有的藏在床下，有的藏在门后，还有的藏在沙发后……这画面极大地引起了小读者的兴趣。
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
            spanColor: 0
        }
    }
}
</script>
