<template>
	<div id="aboutUs">
		<div class="pageHeader" :style="{backgroundImage:'url('+ img.header +')'}">
			<PcHeader class="headerPos"></PcHeader>
			<ul class="pcPageHeaderText">
				<li :style="{backgroundImage:'url('+ img.header_1 +')'}">
					<p style="padding-left:30px;">用心服务</p>
					<p style="padding-left:110px;margin-top:-35px;">值得信赖</p>
				</li>
			</ul>
		</div>
		<div class="ablutUsCenter" :style="{backgroundImage: 'url('+ img.aboutUsBg +')'}">
			<div>
				<div class="ablutUsCenterTop">我们致力于建立一个德州扑克爱好者的兴趣社区，让德州扑克的粉丝在德扑圈中切磋牌局，提高技术。 业内首创的朋友棋牌模式，快速局模式，得到众多德扑爱好者的首肯。</div>
				<div class="ablutUsCenterBottom">
					<div>
						<img src="../../../../static/thePc/aboutUs/img_aboutus.png" alt="">
					</div>
					<div>
						<div>
							<p>德扑圈为成为一个公平，值得信任的平台感到自豪。我们的洗牌算法，以及随机数生成器(RNG)通过了业内最严格的独立认证机构Gaming Laboratories International(GLI)的测试，符合扑克游戏对于随机性的的要求。 </p>
						</div>
						<div>
							<p>对于一个棋牌运动，公平性是最关键的，随机数生成器决定了洗牌，发牌的顺序，德扑圈经过GLI认证的随机数生成器保证了发牌顺序是足够随机的， 并且不会受到其他条件的影响。</p>
						</div>
						<div>
							<p>Pokermaster Pty Ltd致力于德州扑克全球社区的建立和运营, 公平正直, 一直是公司核心价值观的首位。 “德扑圈”总部设在墨尔本,  位于新加坡的数据中心面向亚太地区,  在各个区域同时建立有接入中心, 保证各个区域玩家的游戏速度和隐私保护。</p>
						</div>
					</div>
					
				</div>	
			</div>
		</div>
		<div class="section pcSectionFooter" v-bind:style="{backgroundImage: 'url('+ img.footer +')'}">
			<pcFooter></pcFooter>
		</div>
	</div>
</template>

<script>
import PcHeader from '../header'
import PcFooter from '../footer'
export default {
	name:'aboutUs',
	data (){
		return {
			title:'aboutUs',
			img: {
				header: require('../../../../static/thePc/home/1_banner/banner_bg.png'),
				header_1: require('../../../../static/thePc/rule/banner_text.png'),
				page2: require('../../../../static/thePc/home/4/bg4.png'),
				page2_1: require('../../../../static/thePc/rule/img_rec.png'),
				footer: require('../../../../static/thePc/home/6_footer/footer_bg.png'),
				aboutUsBg:require('../../../../static/thePc/home/2/bg2.png')
			}
		}
	},
	components: {
		PcHeader,PcFooter
	}  
}
</script>

<style>
	#aboutUs .pageFooter{
		width:100%;
		height:355px;
		background-position:center;
		background-size:1920px 355px;
	}

	#aboutUs .pageHeader{
		width: 100%;
		height:498px;
		background-position:center;
		background-repeat:no-repeat;
		background-size:1920px 500px;
		display:table;
	}
	#aboutUs .pcPageHeaderText{
		width:100%;
		max-width:1000px;
		display:table-cell;
		vertical-align:middle;
	}
	#aboutUs .pcPageHeaderText>li{
		width:251px;
		height:117px;
		margin:0 auto;
		background-size:251px 117px;
		background-position:center;
		background-repeat:no-repeat;
		color:#fff;
		font-size:30px;
		line-height:80px;
	}
	#aboutUs .pcSectionFooter{
		height:355px;
	}

	.ablutUsCenter{
		background:no-repeat center;
		background-size:1920px 100%;
		padding:130px 0 66px;
		
	}
	.ablutUsCenter>div{
		max-width:1000px;
		width:100%;
		margin:0 auto;
		color:#333333;
	}
	.ablutUsCenterTop{
		margin-bottom:20px;
		text-indent:36px;
		font-size:18px;
	}
	.ablutUsCenterBottom{
		display:table;
	}
	.ablutUsCenterBottom>div{
		display:table-cell;
		vertical-align:middle;
	}
	.ablutUsCenterBottom>div p{
		text-indent:36px;
		font-size:18px;
		padding-left:52px;
	}
	.ablutUsCenterBottom>div>div:nth-child(2){
		margin:35px 0;
	}
</style>