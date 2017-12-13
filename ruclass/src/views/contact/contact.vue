<style lang="scss" scoped>
    @mixin fontSize($size, $color) {
        font-size: $size - 2;
        color: $color;
    }
    #contact {
        padding: 50px 0;
        background: {
            color: #f5f5f5
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
        >h3 {
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
        >.content {
            img {
                width: 100%;
            }
            ul {
                >li {
                    p {
                        @include fontSize(16px, #666666);
                        margin: {
                            bottom: 10px;
                        }
                    }
                    p:nth-child(1) {
                        @include fontSize(20px, #666666);
                    }

                }
                >li:nth-child(2) {
                    margin: {
                        top: 75px;
                    }
                }
            }
            .map {
                height: 287px;
            }
        }  
    } 
</style>

<template>
    <div id="contact">
        <div class="box">
            <h3>
                <img src="static/images/26.png" alt="">
                关于我们
            </h3>
            <el-row class="content" :gutter="20">
                <el-col :span="12">
                    <ul>
                        <li>
                            <p>商户合作：</p>
                            <p>联系电话：400-990-6556</p>
                            <p>邮箱：rkt@rulaimedia.com</p>
                        </li>
                        <li>
                            <p>联系我们：</p>
                            <p>司地址：成都市武侯区天府三街新希望国际b座2113</p>
                            <p>邮政编码：610041</p>
                        </li>
                    </ul>
                </el-col>
                <el-col :span="12">
                    <div class="map" id="container"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data () {
        return {

        }
    },
    methods: {
        maps:function(){
			var map = new AMap.Map('container', {
		        // mapStyle: 'amap://styles/dark',
		        resizeEnable: true,
			    zoom:11,
			    center: [104.067292,30.54609],
			    // scrollWheel:false,
		    });
		    var toolBar = new AMap.ToolBar({
		        visible: false
		    })
		    map.addControl(toolBar);
		    
		   	AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {

		        var marker = new AMap.Marker({
		            map: map,
		            zIndex: 9,
		            position: map.getCenter(),
					
		        });
		        openInfoWin();
		    });
	    	
		}
    },
    mounted () {
        setTimeout(()=>{
			this.maps();
		},1000)
    }
}
</script>