<style lang="scss" scoped>
  @mixin fontSize($size, $color) {
    font-size: $size;
    color: $color;
  }
  .videoBox {
    width: 100%;
    height: 18.06rem;
    >div {
      height: 100%;
    }
  }
  .lesson {
    padding: {
      top: 1rem;
      // bottom: 2.8rem;
      left: 1.25rem;
      right: 1.25rem;
    }
    background: {
      color: #fff;
    }
    // margin: {
    //   bottom: 2.25rem;
    // }
    border: {
      bottom: 2.25rem solid #f2f1f6;
    }
    h3 {
      @include fontSize(1.75rem, #333333);
      margin: {
        top: 1.5rem;
      }
    }
    p {
      @include fontSize(1.375rem, #999999);
      margin: {
        top: 0.5rem;
      }
    }
    ul {
      margin: {
        bottom: 2rem;
      }
      padding: 0 1.25rem;
      >li{
        @include fontSize(1.375rem, #999999);
        padding: 1rem 0;
        padding: {
          left: 1rem;
          right: 1rem;
        }
        img {
          width: 1.875rem;
          vertical-align: middle;
          margin: {
            right: 1rem;
          }
        }
      }
      >li:nth-child(1) {
        @include fontSize(1.75rem, #333333);
        padding: 1rem 0;
      }
    }
  }
</style>

<template>
  <div>
    <div class="videoBox">
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
    </div>
    <div class="lesson">
      <ul v-for="(value, index) in lesson_list" :key="index">
        <li>
          {{ value.chapter }}
        </li>
        <li
          v-for="(text, ind) in value.lesson[0]"
          :key="ind"
          @click="chioseVideoUrl(text.id)"
        >
          <img src="static/images/icon4_02.png" alt="">
          {{ text.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
require('videojs-flash')
export default {
  data () {
    return {
      player: {},
      playerOptions: {
        // videojs options
        autoplay: false, // 自动播放
        muted: false, // 静音播放
        controls: true, // 是否显示控制栏
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        techOrder: ['html5', 'flash'], // 兼容顺序
        language: 'en',
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: 'video/mp4',
            src: ''
          },
          {
            type: 'video/webm',
            src: ''
          },
          {
            type: 'video/ogg',
            src: ''
          },
          {
            type: 'rtmp/mp4',
            src: ''
          },
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: ''
          }
        ]
        // poster: "static/images/43393846_p0.jpg",
        // controlBar: {
        //     timeDivider: true, // 时间分割线
        //     durationDisplay: true, // 总时间
        //     progressControl: true, // 进度条
        //     customControlSpacer: true, // 未知
        //     fullscreenToggle: true // 全屏
        // },
      },
      lesson_list: []
    }
  },
  methods: {
    // 获取播放信息
    getVideo () {
      this.axios.get(`/wx/lessons/${this.$route.params.id}`).then(res => {
        if (res.data.status_code === 200) {
          this.lesson_list = res.data.data
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 后去播放地址
    getVideoUrl (id) {
      let lessonID = id || this.$route.query.lessonId
      this.axios.get(`/wx/lesson_info?lesson_id=${lessonID}`).then(res => {
        if (res.data.status_code === 200) {
          this.playerOptions.sources.forEach((value, index) => {
            value.src = res.data.data.detail.video
          })
        } else if (res.data.status_code === 401) {
          this.$store.commit('NOW401')
        } else {
          this.Toast.fail(res.data.msg)
        }
      }).catch(error => {
        console.log(error)
        this.Toast.fail('网络连接错误')
      })
    },
    // 选择播放
    chioseVideoUrl (id) {
      this.$router.push({
        query: {
          lessonId: id
        }
      })
      this.getVideoUrl(id)
    },
    // 播放器
    playerReadied (player) {
      this.player = player
    },
    // 播放
    play () {
      // if (!this.playerStatus.ready) {
      //   return
      // }
      // this.player.play()
    },
    // 加载完成，可以播放
    onPlayerCanplaythrough (event) {
      // console.log('onPlayerCanplaythrough');
      // 当前时间
      // const allTime = parseInt(this.player.duration())
      // let allTimeStaus = {
      //   s: allTime % 60,
      //   m: parseInt(allTime / 60),
      //   h: parseInt(allTime / 60 / 60)
      // }
      // this.playerStatus.allTime = `${allTimeStaus.h}:${allTimeStaus.m}:${allTimeStaus.s}`
      // 设置音量
      this.player.volume(1)
      // console.log(event);
    },
    onPlayerWaiting () {
      console.log('选择时间')
    },
    onPlayerPlaying () {
      // console.log('正在播放')
    },
    onPlayerLoadeddata () {
      // console.log('onPlayerLoadeddata');
    },
    onPlayerTimeupdate () {
      // console.log('onPlayerTimeupdate');
      // 播放时间
      // const time = parseInt(this.player.currentTime())
      // const timeStatus = {
      //   s: time % 60 < 10 ? `0${time % 60}` : time % 60,
      //   m: parseInt(time / 60),
      //   h: parseInt(time / 60 / 60)
      // }
      // this.playerStatus.nowTime = `${timeStatus.h}:${timeStatus.m}:${timeStatus.s}`
    },
    onPlayerCanplay () {
        // console.log('onPlayerCanplay');
    }
  },
  mounted () {
    this.getVideo()
    this.getVideoUrl()
  }
}
</script>
