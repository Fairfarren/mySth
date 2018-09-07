<style spoed>
.img {
  min-width: 200px;
  min-height: 200px;
  margin: 0 auto;
  border: 1px solid black;
}
.img img {
  max-width: 200px;
}
</style>

<template>
    <div id="uploadImg">
        <form id="formImg" @submit.prevent="upload($event)">
            <div class="img">
                <img v-for="image in img" :src="image" alt="没有图片" >
            </div>
            <p class="changeImg">
                <input type="file" multiple="true" id="thisImg" name="thisImg" @change="selectedImg($event)">
            </p>
            <p>
                <span @click="clear" style="cursor:pointer;">clear</span>
                <button >upload</button>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'uploadImg',
  data () {
    return {
      img: []
    }
  },
  methods: {
    clear () {
      this.img = [];
      const thisImg = document.getElementById('thisImg');
      thisImg.value = ''
    }
    ,
    selectedImg (e) {
      this.img = [];
      const file = e.target;
      //获取到图片对象
      const event = e.target.files || e.dataTransfer.files;
      //判断图片格式
      for (let i = 0; i < event.length; i++) {
        console.log(event[i].type);
        if (event[i].type != 'image/jpeg' && event[i].type != 'image/png' && event[i].type != 'image/jpg') {
          alert('选择的图片格式不正确，请选择“jpg，png，jpeg”格式');
          return;
        }
      }
      //图片格式转换
      for (let i = 0; i < event.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(event[i]);
        //加载函数时将64位格式的图片输入到img里面
        reader.onload = (evt) => {
          // console.log(evt.target.result)
          this.img.push(evt.target.result);
        }
      }

    },
    upload (event) {
      const formImg = document.getElementById('formImg');
      const thisImg = document.getElementById('thisImg');
      const formData = new FormData(event.target);
      axios.post('/img', { hello: this.img[0] })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }
}
</script>
