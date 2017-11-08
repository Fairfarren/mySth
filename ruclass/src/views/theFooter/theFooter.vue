<style scoped lang="scss">
  @mixin fontSize($size, $color) {
    font-size: $size - 2;
    color: $color;
  }
  #theFooter {
    width: 100%;
    
    >ul {
      width: 1200px;
      margin: 0 auto;
      display: table;
      padding: 80px 0;
      >li {
        display: inline-table;
      }
    }
  }
  .left {
    vertical-align: middle;
    >div {
      display: table;
      >span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    span:nth-child(2) {
      @include fontSize(36px, #020202);
      padding: 0 20px;
    }
    span:nth-child(3) {
      width: 264px;
      display: inline-block;
      @include fontSize(16px, #666666);
    }
  }
  .center {
    width: 450px;
    
    >div {
      width: 100%;
      text-align: center;
      display: inline-table;
      vertical-align: middle;
      >ul {
        display: table;
        width: 100%;
        >li {
          display: inline-table;
          vertical-align: middle;
        }
        >li:first-child, >li:last-child {
          width: 2px;
          height: 100px;
          background: {
            color: #e5e5e5;
          }
        }
        >li:nth-child(2) {
          padding: 0 50px;
        }
      }
      p:nth-child(1) {
        padding: {
          bottom: 70px;
        }
        a {
          @include fontSize(18px, #666666);
          padding: 0 10px;
        }
      }
      p:nth-child(2) {
        @include fontSize(18px, #666666);
      }
    }
  }
  .right {
    vertical-align: middle;
    text-align: center;
    >p:nth-child(1) {
      @include fontSize(18px, #333333);
      margin: {
        bottom: 15px;
      }
    }
  }
  .last {
    padding: 25px 0;
    width: 100%;
    background: {
      color: #333333;
    }
    text-align: center;
    @include fontSize(14px, #ffffff);
  }
</style>

<template>
  <div id="theFooter">
    <ul>
      <li class="left">
        <div>
          <span>
            <img src="static/images/home/0.png" alt="">
          </span>
          <span>
            汝课堂
          </span>
          <span>
            汝课堂旗下实用技能学习平台。
            <br>
            与优秀讲师、专业机构、院校合作，为您提供海量优质课程，以及创新的在线学习体验，帮助您获得全新的个人发展和能力提升。
          </span>
        </div>
      </li>
      <li class="center">
        <div>
          <ul>
            <li></li>
            <li>
              <p>
                <span>
                  <router-link to="/aboutUs">关于我们</router-link>
                </span>
                <span>
                  <router-link to="/aboutUs">联系我们</router-link>
                </span>
                <span>
                  <router-link to="/aboutUs">服务协议</router-link>
                </span>
              </p>
              <p>
                <span>咨询电话：400-990-6556</span>
              </p>
            </li>
            <li></li>
          </ul>
        </div>
      </li>
      <li class="right">
        <p>
          <img src="static/images/home/6.png" alt="">
          汝课堂公众号
        </p>
        <p>
          <img src="static/images/home/5.png" alt="">
        </p>
      </li>
    </ul>
    <div class="last">
      <p>
        © 2015 ZHUANGXIAOMI.COM　  成都捷云智慧科技有限公司   京ICP备13026313号-3
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "theFooter",
  data() {
    return {
      title: "footer"
    };
  }
};
</script>