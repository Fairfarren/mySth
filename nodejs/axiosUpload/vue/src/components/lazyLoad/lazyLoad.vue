<style scoped>
    img{
        max-width: 100%;
    }
    li{
        min-height: 500px;
    }
</style>


<template>
    <div id="lazyLoadImg">
        <ul>
            <li v-for="img in imgList">
                <img v-lazy="img.img" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'lazyLoadImg',
    data() {
        return {
            imgList : [
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
                {img : 'http://cimg.taohuaan.net/upload/201211/09/161159Wq7P8.jpg'},
            ]
        }
    }
}
</script>

