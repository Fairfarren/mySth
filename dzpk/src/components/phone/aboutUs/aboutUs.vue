<template>
	<div id="aboutUs">
		<div class="phoneHeader">
			<phoneHeader></phoneHeader>
		</div>

		<div class="homeBody" >
			<div class="page1" style="padding-bottom:0;" :style="{backgroundImage:'url('+ bgImg.bg1 +')'}">
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
			<p>
				 我们致力于建立一个德州扑克爱好者的兴趣社区，让德州扑克的粉丝在德扑圈中切磋牌局，提高技术。 业内首创的朋友棋牌模式，快速局模式，得到众多德扑爱好者的首肯。
      德扑圈为成为一个公平，值得信任的平台感到自豪。我们的洗牌算法，以及随机数生成器(RNG)通过了业内最严格的独立认证机构Gaming Laboratories International(GLI)的测试，符合扑克游戏对于随机性的的要求。 
			</p>  
			<p>
				对于一个棋牌运动，公平性是最关键的，随机数生成器决定了洗牌，发牌的顺序，德扑圈经过GLI认证的随机数生成器保证了发牌顺序是足够随机的， 并且不会受到其他条件的影响。
			</p>   
			<p>
				Pokermaster Pty Ltd致力于德州扑克全球社区的建立和运营, 公平正直, 一直是公司核心价值观的首位。 “德扑圈”总部设在墨尔本,  位于新加坡的数据中心面向亚太地区,  在各个区域同时建立有接入中心, 保证各个区域玩家的游戏速度和隐私保护。
			</p> 
		</div>
	</div>
</template>

<script>
import PhoneHeader from '../header'
import PhoneFooter from '../footer'
export default {
	name:'aboutUs',
	data (){
		return {
			title:'aboutUs',
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
	.PhoneFooterBg>p{
		color:#fff;
		font-size:1.625rem;
		padding:0 2.06rem;
		text-indent:3.25em;
	}
</style>