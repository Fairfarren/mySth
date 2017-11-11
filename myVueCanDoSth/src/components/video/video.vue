<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    .action {
        
    }
</style>
<template>
    <div id="video">
        <!-- <video-player id="my_video_1" class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions">
        </video-player> -->
        <video id="my_video_1" class="video-js vjs-sublime-skin vjs-big-play-centered" width="500px" height="300px"
            controls preload="none"
        >
        <div>阿斯蒂芬</div>
        </video>
        <div class="action">
            <ul>
                <li class="play">
                    <button @click="play">play</button>
                    <button @click="pause">pause</button>
                </li>
                <li class="time">
                    <span>{{thisVideo.nowTime}}</span>
                    /
                    <span>{{thisVideo.allTime}}</span>
                </li>
                <li>
                    <button @click="up">++</button>
                    <span>{{thisVideo.lisner}}</span>
                    <button @click="down">--</button>
                    <button @click="muted">muted</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'video',
    data () {
        return {
            thisVideo: {
                dom: '',
                nowTime: '',
                allTime: '',
                lisner: '1',
                muted: false
            },
            playerOptions: {
                // videojs options
                autoplay: false,//自动播放
                muted: false,//静音播放
                controls: false,// 是否显示控制栏
                sourceOrder: true,
                flash: { hls: { withCredentials: false } },
                html5: { hls: { withCredentials: false } },
                techOrder: ['html5','flash'],// 兼容顺序
                language: 'en',
                // playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
                    type: 'video/mp4',
                    src: 'static/big_buck_bunny1.mp4'
                    }, {
                    withCredentials: false,
                    type: 'application/x-mpegURL',
                    src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
                    }
                ],
                poster: "static/62843266_p0.jpg"
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
        play () {
            this.thisVideo.dom.play();
        },
        pause () {
            this.thisVideo.dom.pause();
        },
        up () {
            this.thisVideo.lisner = this.thisVideo.dom.volume();
            this.thisVideo.dom.volume(this.thisVideo.lisner + 0.1);
        },
        down () {
            this.thisVideo.lisner = this.thisVideo.dom.volume();
            this.thisVideo.dom.volume(this.thisVideo.lisner - 0.1);
        },
        muted () {
            this.thisVideo.muted = !this.thisVideo.muted;
            this.thisVideo.dom.muted(this.thisVideo.muted);
        }
    },
    mounted () {
        this.thisVideo.dom = videojs('my_video_1', this.playerOptions);
        this.thisVideo.dom.on('play', () => {
            this.thisVideo.nowTime = this.thisVideo.dom.currentTime();
            console.log(this.thisVideo.dom.bufferedPercent());
        })
        this.thisVideo.dom.on('ready', () => {
            this.thisVideo.allTime = this.thisVideo.dom.duration();
            
        })
    }
}
</script>
