<style scoped>
    .vjs-progress-control {
        top: -30px;
    }
</style>
<template>
    <div id="video">
        <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
        </video-player>
    </div>
</template>

<script>

export default {
    name: 'video',
    data () {
        return {
            initialized: false,
            playerOptions: {
                // videojs options
                autoplay: false,//自动播放
                muted: true,//静音播放
                controls: false,// 是否显示控制栏
                sourceOrder: true,
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                techOrder: [ 'html5','flash'],// 兼容顺序
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
                    type: 'rtmp/mp4',
                    src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
                    }, {
                    withCredentials: false,
                    type: 'application/x-mpegURL',
                    src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
                    }],
                poster: "static/62843266_p0.jpg",
                // controlBar: {
                    // timeDivider: false, // 时间分割线
                    // durationDisplay: false, // 总时间
                    // progressControl: false, // 进度条
                    // customControlSpacer: false, // 未知
                    // fullscreenToggle: true // 全屏
                // },
            }
        }
    },
    methods: {

    },
    mounted () {

    }
}
</script>
