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
    #detailed {
        background: {
            color: #2e2e36;
        }
        box-sizing: border-box;
        padding: 40px;
    }
    .title {
        >span:nth-child(1) {
            @include fontSize(28px, #ffffff);
            margin: {
                right: 30px;
            }
        }
        >span:nth-child(2) {
            @include fontSize(24px, #ffffff);
        }
        >span:last-child {
            float: right;
            margin: {
                top: 12px;
            }
            a {
                @include fontSize(18px, #ffffff);
            }
        }
    }
    .content {
        $height: 790px;
        >.list {
            width: 400px;
        }
    }
</style>

<template>
    <div id="detailed" :style="detailedStyle">
        <div class="title">
            <span>第一章</span>
            <span>课时4：计算机基础学习</span>
            <span>
                <router-link :to="goBack">
                    返回课程详情
                </router-link>
            </span>
        </div>
        <el-row class="content" :gutter="20">
            <el-col class="video" :span="16">
                <video-player id="my_video_1" class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions"
                
                >
                </video-player>
            </el-col>
            <el-col class="list">
                <div>
                    <span>目录</span>
                    <span>讨论</span>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'detailed',
    data () {
        return {
            detailedStyle: {
                height: ''
            },
            goBack: '/class/recording/'+ this.$route.params.id +'',
            playerOptions: {
                // videojs options
                autoplay: false,//自动播放
                muted: false,//静音播放
                controls: true,// 是否显示控制栏
                sourceOrder: true,
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                techOrder: ['html5','flash'],// 兼容顺序
                language: 'en',
                // playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
                    type: 'video/mp4',
                    src: 'https://cdn.iruyue.tv/v/big_buck_bunny1.mp4'
                    }, {
                    withCredentials: false,
                    type: 'application/x-mpegURL',
                    src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
                    }
                ],
                poster: "static/images/43393846_p0.jpg",
                // controlBar: {
                //     timeDivider: true, // 时间分割线
                //     durationDisplay: true, // 总时间
                //     progressControl: true, // 进度条
                //     customControlSpacer: true, // 未知
                //     fullscreenToggle: true // 全屏
                // },
            }
        }
    },
    mounted () {
        this.detailedStyle.height = `${document.documentElement.clientHeight}px`;
    }
}
</script>