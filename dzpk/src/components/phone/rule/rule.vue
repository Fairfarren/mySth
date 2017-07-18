<template>
	<div id="rule">
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
				</div>
			</div>
			<div class="rulePage2" :style="{backgroundImage:'url('+ bgImg.bg3 +')'}">
				<div class="topImg">
					<img src="static/thePhone/rule/iPhone_1.png" alt="">
				</div>
				<div class="bottomTitle" >
					<ul>
						<li>
							<img src="static/thePhone/rule/num1.png" alt="">
						</li>
						<li>
							<p><span>创建</span><span>账号</span></p>
							<p>通过手机号注册和登录</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="rulePage2" :style="{backgroundImage:'url('+ bgImg.bg3 +')'}">
				<div class="topImg">
					<img src="static/thePhone/rule/iPhone_2.png" alt="">
				</div>
				<div class="bottomTitle" >
					<ul>
						<li>
							<img src="static/thePhone/rule/num2.png" alt="">
						</li>
						<li>
							<p><span>创建</span><span>牌桌</span></p>
							<p>通过手机号注册和登录</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="rulePage2" :style="{backgroundImage:'url('+ bgImg.bg3 +')'}">
				<div class="topImg">
					<img src="static/thePhone/rule/iPhone_3.png" alt="">
				</div>
				<div class="bottomTitle" >
					<ul>
						<li>
							<img src="static/thePhone/rule/num3.png" alt="">
						</li>
						<li>
							<p><span>邀请</span><span>好友</span></p>
							<p>通过手机号注册和登录</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="rulePage2" :style="{backgroundImage:'url('+ bgImg.bg3 +')'}">
				<div class="topImg">
					<img src="static/thePhone/rule/iPhone_4.png" alt="">
				</div>
				<div class="bottomTitle" >
					<ul>
						<li>
							<img src="static/thePhone/rule/num4.png" alt="">
						</li>
						<li>
							<p><span>加入</span><span>俱乐部</span></p>
							<p>通过手机号注册和登录</p>
						</li>
					</ul>
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
	name: 'rule',
	data () {
		return {
			title: 'this is pc rule',
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
	methods: {
		
	},
	mounted () {
										
	},
	components: {
		PhoneHeader,PhoneFooter
	}
}
</script>

<style>
	.rulePage2{
		background:no-repeat center;
		background-size:100% 100%;
		padding:5rem 0;
	}
	.topImg{
		width:28.0125rem;
		margin:0 auto;
	}
	.topImg img{
		width:100%;
	}
	.bottomTitle{
		margin-top:2rem;
	}
	.bottomTitle>ul{
		display:table;
		width:100%;

	}
	.bottomTitle>ul>li{
		display:table-cell;
		vertical-align:middle;
		/*text-align:center;*/
	}
	.bottomTitle>ul>li:nth-child(1){
		text-align:right;
		width:35%;
	}
	.bottomTitle>ul>li img{
		width:7.93rem;
	}
	.bottomTitle>ul>li>p:nth-child(1){
		font-size:2.95rem;
		color:#e6c458;
		font-weight:bold;
	}
	.bottomTitle>ul>li>p:nth-child(1)>span:nth-child(1){
		color:#fff;
		margin-left:12px;
	}
	.bottomTitle>ul>li>p:nth-child(2){
		color:#fff;
		font-size:2.075rem;
	}
</style>