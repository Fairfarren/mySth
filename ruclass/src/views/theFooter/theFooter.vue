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
            <img src="static/images/0.png" alt="">
          </span>
          <span>
            
          </span>
          <span>
            “汝课堂”平台为广大职业教育老师、学生、企业员工和社会工作者提供丰富的教育资源和在线平台服务，力求拓展教学手段和途径，提升教与学效率。
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
                  <router-link to="/about">关于我们</router-link>
                </span>
                <span>
                  <router-link to="/contact">联系我们</router-link>
                </span>
                <span>
                  <router-link to="">服务协议</router-link>
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
          <img src="static/images/6.png" alt="">
          汝课堂公众号
        </p>
        <p>
          <img src="static/images/5.png" alt="">
        </p>
      </li>
    </ul>
    <div class="last">
      <p>
        Copyright © 2017 www.ruketang.com  成都汝来文化传媒有限公司
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