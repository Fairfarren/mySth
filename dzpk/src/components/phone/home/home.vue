<template>
	<div id="home">
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
				<div class="downLogo" :style="{backgroundImage:'url('+ bgImg.bg2 +')'}">
					<a href="javascript:vido(0)">
						点击下载
					</a>
				</div>
			</div>

			<div class="phonePage2" :style="{backgroundImage:'url('+ bgImg.bg3 +')'}">
				<div class="title" :style="{backgroundImage:'url('+ bgImg.bg4 +')'}">
					风靡欧美的扑克游戏
				</div>
				<div class="img">
					<img src="static/thePhone/home/iPhone_2.png" alt="">
					<span :style="{backgroundImage:'url('+ bgImg.bg5[0] +')'}">专业<br>性强</span>
					<span :style="{backgroundImage:'url('+ bgImg.bg5[1] +')'}">全新<br>玩法</span>
					<span :style="{backgroundImage:'url('+ bgImg.bg5[2] +')'}">好友<br>互动</span>
					<span :style="{backgroundImage:'url('+ bgImg.bg5[3] +')'}">公平<br>公正</span>
				</div>
			</div>

			<div class="phonePage3" :style="{backgroundImage:'url('+ bgImg.bg6 +')'}">
				<div class="title" :style="{backgroundImage:'url('+ bgImg.bg4 +')'}">
					最贴心的游戏体验
				</div>
				<div class="content">
					<div class="phonePage3Left">
						<ul>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>精致优雅的界面</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>真实的国际赛制规则</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>丰富的游戏模式</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>全新的押牌玩法</span>
							</li>
						</ul>
					</div>
					<div class="phonePage3Right">
						<img src="static/thePhone/home/iPhone_3.png" alt="">
					</div>
				</div>
			</div>

			<div class="phonePage4" :style="{backgroundImage:'url('+ bgImg.bg7 +')'}">
				<div class="title" :style="{backgroundImage:'url('+ bgImg.bg4 +')'}">
					丰富的好友互动
				</div>
				<div class="content">
					<div class="phonePage4Left">
						<img src="static/thePhone/home/iPhone_4.png" alt="">
					</div>
					<div class="phonePage4Right">
						<ul>
							<li>
								<img src="static/thePhone/home/icon_club.png" alt="">
								<span>建立德州俱乐部</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_friend.png" alt="">
								<span>邀请好友一起玩</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_ranking.png" alt="">
								<span>全方位的排行榜</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="phonePage5" :style="{backgroundImage:'url('+ bgImg.bg7 +')'}">
				<div class="title" :style="{backgroundImage:'url('+ bgImg.bg4 +')'}">
					丰富的好友互动
				</div>
				<div class="content">
					<div class="phonePage5Left">
						<ul>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>资金管理</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>心理战术</span>
							</li>
						</ul>
					</div>
					<div class="phonePage5Content" :style="{backgroundImage:'url('+ bgImg.bg8 +')'}">
						<img src="static/thePhone/home/app_page.png" alt="">
					</div>
					<div class="phonePage5Right">
						<ul>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>数据分析</span>
							</li>
							<li>
								<img src="static/thePhone/home/icon_diamond.png" alt="">
								<span>变换打法</span>
							</li>
						</ul>
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
	name: 'home',
	data () {
		return {
			title: 'this is pc home',
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
	components: {
		PhoneHeader,PhoneFooter
	},
	mounted () {
		var img = document.getElementsByTagName('img');
		var img_start = 1;
		var img_length = img.length;
		for(var i=0;i<img.length;i++){
			img[i].onload = function(){
				img_start ++;
				if(img_start == img_length){
					// alert(1);
				}
			}
		}
	},
	watch: {
		
	}
}
</script>

<style>
	.PhoneFooterBg{
		background:no-repeat center;
		background-size:100% 100%;
		margin-top:-1px;
	}
	.homeBody{
		width:100%;
		/*height:77.3125rem;*/
		background-color:black;
	}
	.page1{
		margin-top:6.125rem;
		padding-bottom:11.625rem;
		background:no-repeat center;
		background-size:100% 100%;
	}
	.bigLogos img{
		width:100%;
		text-align:center;
	}
	.topLogo>li:nth-child(1){
		width:21.875rem;
	}
	.topLogo>li:nth-child(2){
		margin-top:-5rem;
	}
	.topLogo>li{
		margin:0 auto;
		text-align:center;
	}
	.topLogo>li>p{
		color:#fff;
		font-size:2.81875rem;
	}
	.topLogo>li>span{
		color:#e8cb71;
		font-size:1.3rem;
	}
	.bottomLogo{
		width:22.875rem;
		margin:8.375rem auto 0;
	}
	.downLogo{
		width:22.875rem;
		margin:0 auto;
		background:no-repeat center;
		background-size:100% 100%;
		height:5.5rem;
		line-height:5.5rem;
		text-align:center;
	}
	.downLogo a{
		color:#fff;
		font-size:2.6125rem;
	}

	.phonePage2{
		background:no-repeat center;
		background-size:100% 100%;
		padding:4.375rem 0;
	}
	.phonePage2>.title{
		font-size:2.5rem;
		color:#e6c458;
		text-align:center;
		line-height:4.375rem;
		background:no-repeat center;
		background-size:100% 100%;
		margin:0 auto;
		width:25.7875rem;
	}
	.phonePage2>.img{
		width:19.875rem;
		margin:5.8125rem auto 0;
		position:relative;
	}
	.phonePage2 img{
		width:100%;
	}
	.phonePage2>.img>span{
		display:block;
		position:absolute;
		color:#fff;
		background:no-repeat center;
		background-size:100% 100%;
		text-align:center;
	}
	.phonePage2>.img>span:nth-child(2){
		width:11.5125rem;
		height:11.5125rem;
		top:0;
		left:-35%;
		font-size:2.38rem;
		padding:2.81875rem 0;
		box-sizing:border-box;
		line-height:3.56rem;
	}
	.phonePage2>.img>span:nth-child(3){
		width:6.575rem;
		height:6.575rem;
		top:70%;
		left:-30%;
		font-size:1.36875rem;
		padding:1.76875rem 0;
		box-sizing:border-box;
		line-height:1.99rem;
	}
	.phonePage2>.img>span:nth-child(4){
		width:7.5125rem;
		height:7.5125rem;
		top:0;
		left:100%;
		font-size:1.5625rem;
		padding:1.93rem 0;
		box-sizing:border-box;
		line-height:2.39rem;
	}
	.phonePage2>.img>span:nth-child(5){
		width:9.0375rem;
		height:9.0375rem;
		top:60%;
		left:80%;
		font-size:1.88rem;
		padding:2.71rem 0;
		box-sizing:border-box;
		line-height:2.74rem;
	}

	.phonePage3 {
		background:no-repeat center;
		background-size:100% 100%;
		padding:4.375rem 0;
	}
	.phonePage3 img{
		width:100%;
	}
	.phonePage3>.title{
		font-size:2.5rem;
		color:#e6c458;
		text-align:center;
		line-height:4.375rem;
		background:no-repeat center;
		background-size:100% 100%;
		margin:0 auto;
		width:25.7875rem;
	}
	.phonePage3>.content{
		overflow:hidden;
	}
	.phonePage3>.content>div{
		width:50%;
		float:left;
	}
	.phonePage3Left{
		margin-top:6.18rem;
	}
	.phonePage3Left>ul>li{
		color:#fff;
		font-size:1.75rem;
		margin-left:3.6rem;
		margin-bottom:4.5rem;
		vertical-align:middle;
	}
	.phonePage3Left>ul>li>img{
		width:1.625rem;
		margin-right:13px;
	}
	.phonePage3Right{
		margin-top:3.36rem;
	}

	.phonePage4 {
		background:no-repeat center;
		background-size:100% 100%;
		padding:4.375rem 0;
	}
	.phonePage4>.title{
		font-size:2.5rem;
		color:#e6c458;
		text-align:center;
		line-height:4.375rem;
		background:no-repeat center;
		background-size:100% 100%;
		margin:0 auto;
		width:25.7875rem;
	}
	.phonePage4>.content{
		overflow:hidden;
		position:relative;
	}
	.phonePage4>.content>div{
		/*width:50%;*/
		float:left;
	}
	.phonePage4Left{
		text-align:center;
	}
	.phonePage4Left>img{
		width:24.1875rem;
		margin-left:1.81rem;
		margin-top:7.93rem;
	}
	.phonePage4Right{
		width:28.3125rem;
		position:absolute;
		top:10%;
		left:30%;
	}
	.phonePage4Right>ul>li{
		color:#ffffff;
		font-size:1.75rem;
		margin-bottom:5.6875rem;
		width:100%;
	}
	.phonePage4Right>ul>li>img{
		width:2.625rem;
		margin-right:13px;
		vertical-align: middle;
	}
	.phonePage4Right>ul>li:nth-child(2){
		margin-left:7.18rem;
	}
	.phonePage4Right>ul>li:nth-child(3){
		margin-left:13rem;
	}

	.phonePage5 {
		background:no-repeat center;
		background-size:100% 100%;
		padding:4.375rem 0;
	}
	.phonePage5>.title{
		font-size:2.5rem;
		color:#e6c458;
		text-align:center;
		line-height:4.375rem;
		background:no-repeat center;
		background-size:100% 100%;
		margin:0 auto;
		width:25.7875rem;
	}
	.phonePage5>.content{
		display:table;
		width:100%;
		text-align:center;
		margin-top:3.875rem;
	}
	.phonePage5>.content>div{
		display:table-cell;
		vertical-align:middle;
		color:#e6c458;
		font-size:1.75rem;
	}
	.phonePage5Left li:nth-child(1),.phonePage5Right li:nth-child(1){
		margin-bottom:8.625rem;
	}
	.phonePage5Left img,.phonePage5Right img{
		vertical-align:middle;
		width:1.625rem;
	}
	.phonePage5Content{
		background:no-repeat center;
		background-size:100% 100%;
		width:14.875rem;
		height:29.1875rem;
	}
	.phonePage5Content img{
		width:13rem;
	}
</style>