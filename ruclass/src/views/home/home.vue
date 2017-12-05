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
  .homeList {
    width: 100%;
    background: {
      color: #fafafa;
    }
    >div {
      width: 1200px;
      margin: 0 auto;
      padding: 50px 0;
      >h3 {
        @include fontSize(28px, #444444);
        margin: {
          bottom: 25px;
        }
      }
    }
  }
  .chose {
    margin: {
      bottom: 25px;
    }
    >ul {
      display: table;
      >li {
        display: inline-table;
        vertical-align: bottom;
      }
      >li:nth-child(1) {
        @include fontSize(22px, #666666);
        margin: {
          right: 20px;
        }
      }
      >li:nth-child(2) {
        @include fontSize(20px, #999999);
        margin: {
          right: 10px;
        }
        >span {
          margin: 0 20px;
          cursor: pointer;
        }
        >.colorSpan {
          color: #3399ff;
          font-weight: bold;
        }
      }
      >li:nth-child(3) {
        @include fontSize(20px, #666666);
        input {
          display: none;
        }
        label {
          display: inline-block;
          width: 14px;
          height: 14px;
          background: {
            image: url('../../../static/images/4.png')
          }
        }
        input:checked+label {
          background: {
            image: url('../../../static/images/3.png')
          }
        }
      }
    }
  }
  // 合作
  .cooperation {
    width: 100%;
    background: {
      color: #ededed;
      // image: url('../../../static/images/wenliku.com-1087-pattern.gif')
    }
    padding: 50px 0;
    >ul {
      width: 1200px;
      margin: 0 auto;
      >li:nth-child(1) {
        @include fontSize(28px, #020202);
        margin: {
          bottom: 30px;
        }
      }
      >li:nth-child(2) {
        text-align: center;
        >div{
          >div {
            margin: {
              bottom: 20px;
            }
          }
        }
        a {
          @include fontSize(24px, #ffffff);
          @include transition(0.3s);
          &:hover {
            color: #020202;
          }
        }
      }
    }
  }

</style>

<template>
    <div id="home">
			<banner :bg="bg"></banner>
      <!-- 精选 -->
      <div class="homeList">
        <div>
          <h3>精选</h3>
          <div class="cardList">
            <el-row :gutter="20" id="card">
              <card v-for="data in selectedData" :key="data.classname" :data="data"></card>
            </el-row>
          </div>
        </div>
      </div>

      <!-- 课程推荐 -->
      <div class="homeList" style="background-color: #f4f4f4;">
        <div>
          <h3>{{ recommendChose.title }}</h3>
          <div class="chose">
            <ul>
              <li>
                <span>视频内容</span>
              </li>
              <li>
                <span 
                  :class="{colorSpan: recommendChose.allOrNote == 'all'}" 
                  @click="recommendChose.allOrNote = 'all'"
                >全部</span>
                <span 
                  :class="{colorSpan: recommendChose.allOrNote == 'free'}"
                  @click="recommendChose.allOrNote = 'free'"
                >免费</span>
                <span 
                  :class="{colorSpan: recommendChose.allOrNote == 'pay'}"
                  @click="recommendChose.allOrNote = 'pay'"
                >付费</span>
              </li>
              <li>
                <input id="recording-1" value="0" type="checkbox" v-model="recommendChose.checked">
                <label for="recording-1"></label>
                  录播
                <input id="broadcast-1" value="1" type="checkbox" v-model="recommendChose.checked">
                <label for="broadcast-1"></label>
                  直播
              </li>
            </ul>
          </div>
          <div class="cardList">
            <el-row :gutter="20" id="card">
              <cardMore v-for="data in recommendData" :key="data.classname" :data="data"></cardMore>
            </el-row>
          </div>
        </div>
      </div>

      <!-- 名师课堂 -->
      <div class="homeList">
        <div>
          <h3>{{ teacherChose.title }}</h3>
          <div class="chose">
            <ul>
              <li>
                <span>视频内容</span>
              </li>
              <li>
                <span 
                  :class="{colorSpan: teacherChose.allOrNote == 'all'}" 
                  @click="teacherChose.allOrNote = 'all'"
                >全部</span>
                <span 
                  :class="{colorSpan: teacherChose.allOrNote == 'free'}"
                  @click="teacherChose.allOrNote = 'free'"
                >免费</span>
                <span 
                  :class="{colorSpan: teacherChose.allOrNote == 'pay'}"
                  @click="teacherChose.allOrNote = 'pay'"
                >付费</span>
              </li>
              <li>
                <input id="recording-2" value="0" type="checkbox" v-model="teacherChose.checked">
                <label for="recording-2"></label>
                  录播
                <input id="broadcast-2" value="1" type="checkbox" v-model="teacherChose.checked">
                <label for="broadcast-2"></label>
                  直播
              </li>
            </ul>
          </div>
          <div class="cardList">
            <el-row :gutter="20" id="card">
              <cardMore v-for="data in teacherData" :key="data.classname" :data="data"></cardMore>
            </el-row>
          </div>
        </div>
      </div>

      <!-- 合作机构 -->
      <div class="cooperation">
        <ul>
          <li>
            <p>
              合作机构
            </p>
          </li>
          <li>
            <el-row>
              <el-col :span="3" v-for="value in cooperation" :key="value.url">
                <router-link :to="value.url">
                  {{value.text}}
                </router-link>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import Banner from '@/components/banner'
import Card from '@/components/card'
import CardMore from '@/components/cardMore'

export default {
  name: "home",
  components: {
    Banner, Card, CardMore
  },
  data () {
    return {
      bg: {
        img:[],
        url:[]
      },
      selectedData:[
        // {
        //   className: '课程1',
        //   money: '0',
        //   publishing: '我1',
        //   img: 'static/images/43393846_p0.jpg',
        //   url: '/class/recording/9980'
        // }
      ],
      recommendData:[
        // {
        //   className: '课程1',
        //   money: '0',
        //   publishing: '我1',
        //   img: 'static/images/43393846_p0.jpg',
        //   url: '/home'
        // }
      ],
      teacherData: [
        // {
        //   className: '课程1',
        //   money: '0',
        //   publishing: '我1',
        //   img: 'static/images/43393846_p0.jpg',
        //   url: '/home'
        // }
      ],
      recommendChose: {
        allOrNote: 'all',
        checked: [],
        title: '课程推荐'
      },
      teacherChose: {
        allOrNote: 'all',
        checked: [],
        title: '名师讲堂'
      },
      // 合作
      cooperation: [
        {
          text: '汝乐FM',
          url: '/home/123'
        },
        {
          text: '阿里云',
          url: '/home/123'
        },
        {
          text: '七牛',
          url: '/home/123'
        },
        {
          text: '腾讯视频',
          url: '/home/123'
        }
      ]
    }
  },
  methods: {
    //首页数据
    homeAjax () {
      this.axios.get('/api/index').then( (res) => {
        if(res.data.status_code == 200) {
          //banner
          res.data.banners_list.map( (value, index) => {
            this.bg.img.splice(index, 1, value.img);
            this.bg.url.splice(index, 1, `/class/recording/${value.course_id}`)
          })

          //精选
          res.data.selection_list.map( (value, index) => {
            this.selectedData[index] = {
              className: value.name,
              money: value.price,
              publishing: value.publisher,
              img: value.img,
              url: `/class/recording/${value.id}`
            }
          })

          //分类
          this.recommendChose.title = res.data.course_list[0].category;
          res.data.course_list[0].course.map( (value, index) => {
            this.recommendData[index] = {
              className: value.name,
              money: value.price,
              publishing: value.publisher,
              img: value.img,
              url: `/class/recording/${value.id}`
            }
          })
          
          this.teacherChose.title = res.data.course_list[1].category;
          res.data.course_list[1].course.map( (value, index) => {
            this.teacherData[index] = {
              className: value.name,
              money: value.price,
              publishing: value.publisher,
              img: value.img,
              url: `/class/recording/${value.id}`
            }
          })
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
    },
  },
  mounted () {
    this.homeAjax();
  }
};
</script>