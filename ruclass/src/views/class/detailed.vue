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
        margin: {
            bottom: 35px;
        }
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
        display: table;
        width: 100%;
        >div {
            display: table-cell;
            vertical-align: top;
            
        }
        .video {
            position: relative;
            padding: {
                right: 30px;
            }
            >div {
                height: 100%;
                position: relative;
                >div {
                    height: 100%;
                    
                }
            }
            .videoDoSth {
                width: 100%;
                height: 50px;
                position: absolute;
                bottom: 0;
                left: 0;
                background: {
                    // color: rgba(255, 255, 255, 0.6);
                }
                >div {
                    height: 50px;
                    line-height: 50px;
                    >span {
                        @include fontSize(20px, #cccccc);
                        margin: {
                            right: 20px;
                        }
                        >.nowTime {
                            color: #fff;
                        }
                    }
                    >span:last-child {
                        margin: {
                            right: 0;
                        }
                    }
                }
                >.left {
                    float: left;
                    margin: {
                        left: 5%;
                    }
                }
                >.right {
                    float: right;
                    margin: {
                        right: 5%;
                    }
                }
                img {
                    vertical-align: middle;
                    cursor: pointer;
                }
            }
        }
        >.list {
            width: 400px;
            >div:nth-child(1) {
                width: 100%;
                overflow: hidden;
                >span {
                    display: inline-block;
                    width: 50%;
                    height: 60px;
                    line-height: 60px;
                    box-sizing: border-box;
                    text-align: center;
                    cursor: pointer;
                    padding: 0;
                    border: 0;
                    float: left;
                    @include fontSize(24px, #7b7b8a);
                    @include transition(0.3s);
                    background: {
                        color: #444450;
                    }
                }
                >.colorSpan {
                    background: {
                        color: #26262b;
                    }
                }
            }
            >.catalog {
                overflow: auto;
                background: {
                    color: #26262b;
                }
                >ul {
                    margin: {
                        bottom: 50px;
                    }
                    >li {
                        @include fontSize(16px, #cccccc);
                        @include transition(0.3s);
                        line-height: 40px;
                        padding: 0 30px;
                        cursor: pointer;
                        box-sizing: border-box;
                        margin: 0 auto;
                        >img {
                            display: none;
                        }
                        >span:nth-child(2) {
                            display: inline-block;
                            width: 16rem;
                        }
                        >span:last-child {
                            float: right;
                        }
                        &:hover {
                            color: #3399ff;
                        }
                    }
                    >li:first-child {
                        @include fontSize(20px, #ffffff);
                    }
                    >.colorLi {
                        color: #3399ff;
                        box-shadow: 0 0 10px 0px #fff inset;
                        >img {
                            display: inline-block;
                            vertical-align: middle;
                            margin: {
                                right: 5px;
                                left: 20px;
                            }
                        }
                    }
                }
            }
            >.discuss {
                background: {
                    color: #26262b;
                }
                >.sayAll {
                    width: 100%;
                    overflow: auto;
                    box-sizing: border-box;
                    padding: {
                        top: 30px;
                    }
                    >li {
                        display: table;
                        width: 100%;
                        box-sizing: border-box;
                        padding: 0 30px;
                        margin: {
                            bottom: 20px;
                        }
                        >div {
                            display: table-cell;
                            vertical-align: top;
                        }
                        >div:first-child {
                            padding: {
                                right: 30px;
                            }
                            >img {
                                width: 48px;
                                height: 48px;
                            }
                        }
                        >div:last-child {
                            padding: {
                                bottom: 20px;
                            }
                            border-bottom: 1px solid #434343;
                            >p:nth-child(1) {
                                @include fontSize(24px, #ffffff);
                                line-height: 48px;
                                >span {
                                    @include fontSize(18px, #cccccc);
                                    margin: {
                                        left: 20px;
                                    }
                                }
                            }
                            >p {
                                @include fontSize(22px, #cccccc);
                            }
                        }
                    }
                }
                >.saySth {
                    box-sizing: border-box;
                    height: 150px;
                    padding: 20px;
                    border-top: 1px solid #434343;
                    >textarea {
                        width: 100%;
                        height: 100%;
                        resize: none;
                        border: 0;
                        outline: none;
                        @include fontSize(18px, #cccccc);
                        background: {
                            color: #26262b;
                        }
                    }
                }
            }
        }
    }
    
</style>

<template>
    <div id="detailed" :style="detailedStyle">
        <div class="title">
            <span>第一章</span>
            <span>课时4：{{ getVideoSth.name }}</span>
            <span>
                <router-link :to="goBack">
                    返回课程详情
                </router-link>
            </span>
        </div>
        <div class="content">
            <div class="video" :style="{height: videoStyle.height}">
                <div>
                    <video-player 
                        id="my_video_1" 
                        class="vjs-custom-skin" 
                        ref="videoPlayer" 
                        :options="playerOptions"
                        @ready="playerReadied"
                        @play="play"
                        @canplaythrough="onPlayerCanplaythrough($event)"
                        @waiting="onPlayerWaiting($event)"

                        @playing="onPlayerPlaying($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                    >
                    </video-player>
                    <!-- <div class="videoDoSth">
                        <div class="left">
                            <span class="play">
                                <img 
                                    src="static/images/stop.svg" 
                                    alt="" 
                                    v-if="playerStatus.play"
                                    @click="stop"
                                >
                                <img 
                                    src="static/images/play.svg" 
                                    alt="" 
                                    v-else
                                    @click="play"
                                >
                            </span>
                            <span class="time">
                                <span class="nowTime">{{ playerStatus.nowTime }}</span>
                                / {{ playerStatus.allTime }}
                            </span>
                        </div>
                        <div class="right">
                            <span class="listen">
                                <img 
                                    src="static/images/nolisten.svg" 
                                    alt="" 
                                    v-if="playerStatus.muted"
                                    @click="hasListen"
                                >
                                <img 
                                    src="static/images/listen.svg" 
                                    alt="" 
                                    v-else
                                    @click="noListen"
                                >
                            </span>
                            <span class="allWindow">
                                <img 
                                    src="static/images/smallWindow.svg" 
                                    alt="" 
                                    v-if="playerStatus.allWindow"
                                    @click="allWindow"
                                >
                                <img 
                                    src="static/images/allWinodw.svg" 
                                    alt="" 
                                    v-else
                                    @click="allWindow"
                                >
                            </span>
                        </div>
                        <div class="line">
                            <span class="nowLine"></span>
                        </div>
                    </div> -->
                </div>
           </div>
            <div class="list" :style="{height: videoStyle.height}">
                <div>
                    <span 
                        :class="{colorSpan: choose.index == 0}"
                        @click="choose.index = 0"
                    >目录</span>
                    <span
                        :class="{colorSpan: choose.index == 1}"
                        @click="choose.index = 1"
                    >讨论</span>
                </div>
                <div 
                    class="catalog" 
                    v-show="choose.index == 0"
                    :style="{height:listStyle.catalogHeight}"
                >
                    <ul v-for="(value, index) in getListSth" :key="value.chapter">
                        <li>
                            <h3>章节{{ index + 1 }}：{{ value.chapter }}</h3>
                        </li>
                        <li 
                            v-for="(val, ind) in value.lesson" 
                            :key="val.id"
                            :class="{colorLi: ind == 1}"
                        >
                            <img src="static/images/duibian1.png" alt="">
                            <span>[录播]课时{{ ind + 1 }}：{{ val.name }}</span>
                            <span>13:13</span>
                        </li>
                    </ul>
                </div>
                <div class="discuss" v-show="choose.index == 1">
                    <ul 
                        class="sayAll"
                        :style="{height: listStyle.sayAllHeight}"
                    >
                        <li
                            v-for="value in [1,2,3,4,5,6,7]" :key="value"
                        >
                            <div>
                                <img src="static/images/userImg.png" alt="">
                            </div>
                            <div>
                                <p>
                                    曼妥思
                                    <span>13分钟前</span>
                                </p>
                                <p>
                                    来看就按收到了；副科级卡萨丁分卡惊世毒妃
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="saySth">
                        <textarea name="" id="" placeholder="我想说..."></textarea>
                    </div>
                </div>
            </div>
        </div>
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
            videoStyle: {
                height: ''
            },
            listStyle: {
                catalogHeight: '',
                sayAllHeight: ''
            },
            choose: {
                index: 0,
            },
            form: {
                text: ''
            },
            player: {},
            getVideoSth: {},
            getListSth: [],
            playerStatus: {
                play: false,
                listen: 0.5,
                muted: false,
                allWindow: false,
                allTime: '00:00:00',
                nowTime: '00:00:00',
                ready: false,
                timer: ''
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
                    src: ''
                    }
                ],
                // poster: "static/images/43393846_p0.jpg",
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
    methods: {
        //获取播放信息
        getVideo () {
            this.axios({
                url: `/api/lesson_info?lesson_id=${this.$route.params.id}`,
                method: 'get',
                headers: {
                    'Authorization': sessionStorage.token,
                },
            }).then( (res) => {
                if(res.data.status_code == 200) {
                    this.getVideoSth = res.data.data.detail;
                    this.getListSth = res.data.data.lesson_list;
                    this.playerOptions.sources[0].src = res.data.data.detail.video
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
        //播放器
        playerReadied(player) {
            this.player = player;
            this.playerStatus.ready = true;
        },
        //播放
        play () {
            if( !this.playerStatus.ready ) {
                return
            }
            this.player.play();
            this.playerStatus.play = true;
        },
        //暂停
        stop () {
            this.player.pause();
            this.playerStatus.play = false;
            clearInterval(this.playerStatus.timer);
        },
        //静音
        noListen () {
            this.player.muted(true);
            this.playerStatus.muted = true;
        },
        //取消静音
        hasListen () {
            this.player.muted(false);
            this.playerStatus.muted = false;
        },
        //全屏
        allWindow () {
            this.player.requestFullscreen(true)
        },
        //关闭全屏
        smallWindow () {
            this.player.exitFullscreen();
        },
        //加载完成，可以播放
        onPlayerCanplaythrough (event) {
            console.log('onPlayerCanplaythrough');
            //当前时间
            const allTime = parseInt(this.player.duration());
            let allTimeStaus = {
                s: allTime % 60,
                m: parseInt(allTime / 60),
                h: parseInt(allTime / 60 / 60)
            }
            this.playerStatus.allTime = `${allTimeStaus.h}:${allTimeStaus.m}:${allTimeStaus.s}`
            //设置音量
            this.player.volume(1);
            console.log(event);
            
        },
        onPlayerPlaying () {
            console.log('正在播放')
        },
        onPlayerLoadeddata () {
            console.log('onPlayerLoadeddata');
        },
        onPlayerTimeupdate () {
            console.log('onPlayerTimeupdate');
            //播放时间
            const time = parseInt(this.player.currentTime());
            const timeStatus = {
                s: time % 60 < 10 ? `0${time % 60}` : time % 60,
                m: parseInt(time / 60),
                h: parseInt(time / 60 / 60)
            }
            this.playerStatus.nowTime = `${timeStatus.h}:${timeStatus.m}:${timeStatus.s}`;
        },
        onPlayerCanplay () {
            console.log('onPlayerCanplay');
        }
    },
    mounted () {
        this.detailedStyle.height = `${document.documentElement.clientHeight}px`;
        this.videoStyle.height = `${document.documentElement.clientHeight - 152}px`;
        this.listStyle.catalogHeight = `${document.documentElement.clientHeight - 152 - 60}px`
        this.listStyle.sayAllHeight = `${document.documentElement.clientHeight - 152 - 60 - 150}px`
        this.getVideo();
    }
}
</script>