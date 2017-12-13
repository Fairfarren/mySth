<style lang="scss" scoped>
@mixin fontSize($size, $color) {
  font-size: $size - 2;
  color: $color;
}
#about {
  padding: 50px 0;
  background: {
    color: #f5f5f5;
  }
}
.box {
  width: 1200px;
  box-sizing: border-box;
  padding: 70px 90px;
  margin: 0 auto;
  background: {
    color: #fff;
  }
  > h3 {
    @include fontSize(24px, #444444);
    margin: {
      bottom: 35px;
    }
    img {
      vertical-align: middle;
      margin: {
        right: 5px;
      }
    }
  }
  > .content {
    img {
      width: 100%;
    }
    p {
      @include fontSize(18px, #666666);
      line-height: 30px;
    }
  }
}
</style>

<template>
    <div id="about">
        <div class="box">
            <h3>
                <img src="static/images/25.png" alt="">
                关于我们
            </h3>
            <el-row class="content" :gutter="20">
                <el-col :span="15">
                    <p>“汝课堂”互联网职业教育平台是汝来传媒旗下专注于职业教育的线上交流学习平台。</p>
                    <p>“汝课堂”平台为广大职业教育老师、学生、企业员工和社会工作者提供丰富的教育资源和在线平台服务，力求拓展教学手段和途径，提升教与学效率。</p>
                    <p>海量的在线课程，囊括各种职业技能需求；优质的教师团队，解答各种疑难问题；简洁合理的网站设计，大大提高学习效率。成为专业的职业教育平台，通过网络向注重自我提升的所有人提供高质量的职业教育是我们的美好愿景。</p>
                    <p>我们致力于打造一个共享、公开、活跃的全民线上学习平台，更加高效、快捷地传播广泛知识与职业实用技能，打造全新便捷的职业教育模式。</p>
                </el-col>
                <el-col :span="9">
                    <img src="static/images/43393846_p0.jpg" alt="">
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>