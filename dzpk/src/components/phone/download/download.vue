<template>
	<div id="download">
		<div class="phoneHeader">
			<phoneHeader></phoneHeader>
		</div>

		<div class="homeBody" >
			<div class="page1" :style="{backgroundImage:'url('+ bgImg.bg1 +')'}">
				<div class="bigLogos">
					<ul class="topLogo">
						<li>
							<img src="static/thePhone/home/app_logo.png" alt="">
						</li>
						<li>
							<p>德州圈</p>
						</li>
						<li>
							<span>你的专属德扑约局APP！</span>
						</li>
					</ul>
					<div class="bottomLogo">
						<img src="static/thePhone/home/iPhone_1.png" alt="">
					</div>
				</div>
			</div>
		</div>

		<div class="PhoneFooterBg" :style="{backgroundImage:'url('+ bgImg.bg7 +')'}">
			<phoneFooter></phoneFooter>
		</div>
	</div>
</template>

<script>
import PhoneHeader from '../header'
import PhoneFooter from '../footer'
export default {
	name:'download',
	data (){
		return {
			title:'download',
			bgImg:{
				bg1:require('../../../../static/thePhone/home/bg_1.png'),
				bg2:require('../../../../static/thePhone/home/btn_download.png'),
				bg3:require('../../../../static/thePhone/home/bg_2.png'),
				bg4:require('../../../../static/thePhone/home/title_rect.png'),
				bg5:[
					require('../../../../static/thePhone/home/oval_1.png'),
					require('../../../../static/thePhone/home/oval_3.png'),
					require('../../../../static/thePhone/home/oval_2.png'),
					require('../../../../static/thePhone/home/oval_4.png'),
				],
				bg6:require('../../../../static/thePhone/home/bg_3.png'),
				bg7:require('../../../../static/thePhone/home/bg_4.png'),
				bg8:require('../../../../static/thePhone/home/iPhone_5.png')
			}
		}
	},
	components: {
		PhoneHeader,PhoneFooter
	},
}
</script>

<style>
	
</style>