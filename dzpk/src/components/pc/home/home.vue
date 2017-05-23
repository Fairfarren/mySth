<template>
	<div id="home" class="body">
		<transition v-if="headerShow" name="headerTran">
			<PcHeader class="headerFixed"></PcHeader>
		</transition>
		<div id="pcHome">
			<div class="section pcSectionHeader" v-bind:style="{backgroundImage: 'url(' + img.header + ')'}">
				<div class="section1_bottom" >
					<div class="section1_bottom_left animated" v-bind:class="animateName.section1_left">
						<p>
							<img src="../../../../static/thePc/home/1_banner/app_logo.png" alt="">
						</p>
						<p style="margin-top:-80px;font-size:40px;color:#fff;">
							德州圈
						</p>
						<p style="font-size:20px;color:#ddbd65;margin-top:10px;">
							你的专属德扑约局APP！
						</p>
						<p style="font-size:25px;line-height:58px;;">
							<a href="javascript:(0)" style="background:url('../../../../static/thePc/home/1_banner/btn_download.png') no-repeat center;color:#fff;display:block;width:225px;margin:10px auto 100px;">
								点击下载
							</a>
						</p>
					</div>
					<div class="section1_bottom_right animated" v-bind:class="animateName.section1_right">
						<p>
							<img src="../../../../static/thePc/home/1_banner/iphone_1.png" alt="">
						</p>
					</div>
				</div>
			</div>
			<div class="section section2" :style="{backgroundImage: 'url('+ img.bg2 +')'}">
				<div class="section2-top">
					<p style="color:#E6C459;font-size:30px;line-height:44px;vertical-align:middle;display:table-cell;">
						<img valign="middle" src="../../../../static/thePc/home/2/title_box.png" alt="">
						风靡欧美的扑克游戏
					</p>
				</div>
				<div class="section2-bottom" v-bind:style="{backgroundImage: 'url('+ img.bg2_1 +')'}">
					<div class="section2-bottom-po section2-bottom-po1 animated" style="bottom:0;left:50%;margin-left:-186px;" v-bind:class="animateName.section2_po1">
						<img src="../../../../static/thePc/home/2/iPhone_2.png" alt="">
					</div>
					<div class="section2-bottom-po section2-bottom-po2 animated" style="bottom:164px;left:-50px;" v-bind:class="animateName.section2_po2">
						<p style="font-size:28px;color:#848484;text-align:left;">全新玩儿法</p>
						<img style="margin-left:120px;" src="../../../../static/thePc/home/2/icon_new.png" alt="">
					</div>
					<div class="section2-bottom-po section2-bottom-po3 animated" style="bottom:438px;left:120px;" v-bind:class="animateName.section2_po3">
						<p style="font-size:28px;color:#848484;text-align:left;">专业性强</p>
						<img style="margin-left:120px;margin-top:-20px;" src="../../../../static/thePc/home/2/icon_profess.png" alt="">
					</div>
					<div class="section2-bottom-po section2-bottom-po4 animated" style="bottom:438px;right:120px;" v-bind:class="animateName.section2_po4">
						<p style="font-size:28px;color:#848484;text-align:right;">专业性强</p>
						<img style="margin-right:120px;margin-top:-20px;" src="../../../../static/thePc/home/2/icon_fair.png" alt="">
					</div>
					<div class="section2-bottom-po section2-bottom-po5 animated" style="bottom:164px;right:-50px;" v-bind:class="animateName.section2_po5">
						<p style="font-size:28px;color:#848484;text-align:right;">全新玩儿法</p>
						<img style="margin-right:120px;" src="../../../../static/thePc/home/2/icon_new.png" alt="">
					</div>
				</div>
			</div>
			<div class="section section3" v-bind:style="{backgroundImage: 'url('+ img.bg3 +')'}">
				<div class="section3-top">
					<p style="color:#E6C459;font-size:30px;line-height:44px;vertical-align:middle;display:table-cell;">
						<img valign="middle" src="../../../../static/thePc/home/3/title_flower.png" alt="">
						风靡欧美的扑克游戏
					</p>
				</div>
				<div class="section3-bottom">
					<ul class="section3-bottom-left">
						<li class="animated" v-bind:class="animateName.section3_po1">
							<span>
								<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
							</span>
							<span>
								<p>【精致优雅的界面】</p>
								<p>豪华赌场设计风格，那个你身临其境，真实体验赌场豪掷千金的快感</p>
							</span>
						</li>
						<li class="animated" v-bind:class="animateName.section3_po2">
							<span>
								<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
							</span>
							<span>
								<p>【真是的国际赛制规则】</p>
								<p>细心打磨的拟真玩牌体验，仿佛置身真实的德州桌牌比赛</p>
							</span>
						</li>
						<li class="animated" v-bind:class="animateName.section3_po3">
							<span>
								<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
							</span>
							<span>
								<p>【丰富的游戏模式】</p>
								<p>五人场，九人场，普通场，快感场，游戏场，淘汰赛</p>
							</span>
						</li>
						<li class="animated" v-bind:class="animateName.section3_po4">
							<span>
								<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
							</span>
							<span>
								<p>【全新的押牌玩法】</p>
								<p>新增押牌瓦法，比牌押牌两不误，帮您的好牌赢得更多惊喜！</p>
							</span>
						</li>
					</ul>
					<ul class="section3-bottom-right animated" v-bind:class="animateName.section3_po5">
						<li>
							<div>
								<img valign="middle" src="../../../../static/thePc/home/3/iPhone_3_1.png" alt="">
							</div>
							<div>
								<img valign="middle" src="../../../../static/thePc/home/3/iPhone_3_2.png" alt="">
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="section section4" v-bind:style="{backgroundImage: 'url('+ img.bg4 +')'}">
				<div class="section4-top">
					<p style="color:#E6C459;font-size:30px;line-height:44px;vertical-align:middle;display:table-cell;">
						<img valign="middle" src="../../../../static/thePc/home/4/title_love.png" alt="">
						丰富的好友互动
					</p>
				</div>
				<div class="section4-bottom">
					<ul class="section4-bottom-left animated" v-bind:class="animateName.section4_po4">
						<li>
							<img src="../../../../static/thePc/home/4/iPhone_4.png" alt="">
						</li>
					</ul>
					<ul class="section4-bottom-right">
						<li style="margin-left:-85px;margin-top:-150px;" class="animated" v-bind:class="animateName.section4_po1">
							<span>
								<img src="../../../../static/thePc/home/4/icon_club.png" alt="">
							</span>
							<span style="padding-left:20px;text-align:left;color:#676767;">
								<h2 style="margin-bottom:10px;">建立德州俱乐部</h2>
								<p>发展真是的德州扑克好友圈子。结识不同类型的新朋友，拓展人脉，找到志同道合的好友</p>
							</span>
						</li>
						<li style="margin-left:-35px;" class="animated" v-bind:class="animateName.section4_po2">
							<span>
								<img src="../../../../static/thePc/home/4/icon_club.png" alt="">
							</span>
							<span style="padding-left:20px;text-align:left;color:#676767;">
								<h2 style="margin-bottom:10px;">建立德州俱乐部</h2>
								<p>发展真是的德州扑克好友圈子。结识不同类型的新朋友，拓展人脉，找到志同道合的好友</p>
							</span>
						</li>
						<li class="animated" v-bind:class="animateName.section4_po3">
							<span>
								<img src="../../../../static/thePc/home/4/icon_club.png" alt="">
							</span>
							<span style="padding-left:20px;text-align:left;color:#676767;">
								<h2 style="margin-bottom:10px;">建立德州俱乐部</h2>
								<p>发展真是的德州扑克好友圈子。结识不同类型的新朋友，拓展人脉，找到志同道合的好友</p>
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="section section5" v-bind:style="{backgroundImage: 'url('+ img.bg5 +')'}">
				<div class="section5-top">
					<p style="color:#E6C459;font-size:30px;line-height:44px;vertical-align:middle;display:table-cell;">
						<img valign="middle" src="../../../../static/thePc/home/5/icon_spades.png" alt="">
						手把手教你玩德州
					</p>
				</div>
				<div class="section5-bottom">
					<ul class="section5-bottom-left">
						<li class="animated" v-bind:class="animateName.section5_po2">
							<ul>
								<li>
									<span style="padding-top:7px;">
									<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
									</span>
									<span style="font-size:20px;color:#fff;padding-left:10px;line-height:30px;">
										行动/叫注/说话(Action)：一个玩家的决定<br>
										押注(Bet)：押上筹码<br>
										跟注(Call)：跟随众人押上同等的注额
									</span>
								</li>
							</ul>
						</li>
						<li class="animated" v-bind:class="animateName.section5_po3">
							<ul>
								<li>
									<span style="padding-top:7px;vertical-align:top;">
										<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
									</span>
									<span style="font-size:20px;color:#fff;padding-left:10px;line-height:30px;">
										弃牌(Fold)：放弃继续牌局的机会<br>
										让牌(Check)：让无人下注的情况下选择把决定“让”给下一位<br>
										加注(raise)：把现有的注金抬高
									</span>
								</li>
							</ul>
							
						</li>
					</ul>
					<ul class="section5-bottom-center">
						<li style="position:relative;">
							<img src="../../../../static/thePc/home/5/iPhone_5.png" alt="">
							<div class="section5-bottom-centerMove">
								<ul v-bind:class="animateName.section5_po1">
									<li >
										<img src="../../../../static/thePc/home/5/img_app.png" alt="">
									</li>
									<li>
										<img src="../../../../static/thePc/home/5/1_03_1.png" alt="">
									</li>
								</ul>
							</div>
							<div style="position:absolute;bottom:0;left:30%;z-index:2;">
								<img src="../../../../static/thePc/home/5/hand.png" alt="">
							</div>
						</li>
						
					</ul>
					<ul class="section5-bottom-right">
						<li class="animated" v-bind:class="animateName.section5_po4">
							<ul>
								<li>
									<span style="padding-top:7px;vertical-align:top;">
										<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
									</span>
									<span style="font-size:20px;color:#fff;padding-left:10px;line-height:30px;">
										再加注(Re-raise)：在别人加注以后再加注<br>
										全押(All-in)：一次把手上的筹码全部押上<br>
										庄家/按钮(Button)：每一圈押注的顺序决定于庄家“按钮”的位置
									</span>
								</li>
							</ul>
							
						</li>
						<li class="animated" v-bind:class="animateName.section5_po5">
							<ul>
								<li>
									<span style="padding-top:7px;vertical-align:top;">
										<img src="../../../../static/thePc/home/3/icon_diamond.png" alt="">
									</span>
									<span style="font-size:20px;color:#fff;padding-left:10px;line-height:30px;">
									盲注(Blinds)：在得到牌之前下注<br>
									公共牌(Community cards)：桌面上的五张公共牌。<br>
									翻牌(Flop)：首三张公共牌
									</span>
								</li>
							</ul>
							
						</li>
					</ul>
				</div>
			</div>
			<div class="section pcSectionFooter" v-bind:style="{backgroundImage: 'url('+ img.footer +')'}">
				<pcFooter></pcFooter>
			</div>
		</div>
	</div>
</template>

<script>
import PcHeader from '../header'
import PcFooter from '../footer'

export default {
	name: 'home',
	data () {
		return {
			title: 'this is pc home',
			headerShow: true,
			currentIndex: 1,
			animateName:{
				section1_left: 'fadeInLeft',
				section1_right: 'fadeInRight',
				section2_po1: 'zoomOut',
				section2_po2: 'zoomOut',
				section2_po3: 'zoomOut',
				section2_po4: 'zoomOut',
				section2_po5: 'zoomOut',
				section3_po1: 'bounceOutLeft',
				section3_po2: 'bounceOutLeft',
				section3_po3: 'bounceOutLeft',
				section3_po4: 'bounceOutLeft',
				section3_po5: 'zoomOut',
				section4_po1: 'slideOutDown',
				section4_po2: 'slideOutDown',
				section4_po3: 'slideOutDown',
				section4_po4: 'zoomOut',
				section5_po1: 'section5-bottom-centerMoveOne',
				section5_po2: 'slideOutLeft',
				section5_po3: 'slideOutLeft',
				section5_po4: 'slideOutRight',
				section5_po5: 'slideOutRight',
			},
			img: {
				header: require('../../../../static/thePc/home/1_banner/banner_bg.png'),
				bg2: require('../../../../static/thePc/home/2/bg2.png'),
				bg2_1: require('../../../../static/thePc/home/2/13.png'),
				bg3: require('../../../../static/thePc/home/3/bg3.png'),
				bg4: require('../../../../static/thePc/home/4/bg4.png'),
				bg5: require('../../../../static/thePc/home/5/bg_5.png'),
				footer: require('../../../../static/thePc/home/6_footer/footer_bg.png')
			}
		}
	},
	methods: {
		windowOnlad: function (){
			const that = this;
			$('body, html').css({overflow:'hidden'})
			$('#pcHome').fullpage({
				// sectionsColor: ['pink','#fff', '#4BBFC3', '#7BAABE', '#f90','red','skyblue'],
				//到达本页执行动画，类似于wow.js
				afterLoad: (anchorLink, index) => {
					this.currentIndex = index;
					if(index == 1){
						this.headerShow = true;
						this.animateName.section1_left = 'fadeInLeft';
						this.animateName.section1_right = 'fadeInRight';
					}
					if(index == 2){
						this.animateName.section2_po1 = 'zoomIn';
						setTimeout(() => {
							this.animateName.section2_po2 = 'zoomIn';
						},300);
						setTimeout(() => {
							this.animateName.section2_po3 = 'zoomIn';
						},600);
						setTimeout(() => {
							this.animateName.section2_po4 = 'zoomIn';
						},900);
						setTimeout(() => {
							this.animateName.section2_po5 = 'zoomIn';
						},1200);
					}
					if(index == 3){
						this.animateName.section3_po1 = 'bounceInLeft';
						this.animateName.section3_po5 = 'zoomIn';
						setTimeout(() => {
							this.animateName.section3_po2 = 'bounceInLeft';
						},300);
						setTimeout(() => {
							this.animateName.section3_po3 = 'bounceInLeft';
						},600);
						setTimeout(() => {
							this.animateName.section3_po4 = 'bounceInLeft';
						},900);
					}
					if(index == 4){
						this.animateName.section4_po4 = 'zoomIn';
						this.animateName.section4_po1 = 'slideInDown';
						setTimeout(() => {
							this.animateName.section4_po2 = 'slideInDown';
						},300);
						setTimeout(() => {
							this.animateName.section4_po3 = 'slideInDown';
						},600);
					}
					if(index == 5){
						setTimeout(() => {
							this.animateName.section5_po1 = 'section5-bottom-centerMoveTwo'
						},1000)
						this.animateName.section5_po2 = 'slideInLeft';
						setTimeout(() => {
							this.animateName.section5_po3 = 'slideInLeft';
						},300)
						setTimeout(() => {
							this.animateName.section5_po4 = 'slideInRight';
						},600)
						setTimeout(() => {
							this.animateName.section5_po5 = 'slideInRight';
						},900)
					}
				},
				//离开页面执行动画
				onLeave: (index, direction) => {
					if(index == 1){
						this.headerShow = false;
						this.animateName.section1_left = 'fadeOutLeft';
						this.animateName.section1_right = 'fadeOutRight';
					}
					if(index == 2){
						this.animateName.section2_po1 = 'zoomOut';
						this.animateName.section2_po2 = 'zoomOut';
						this.animateName.section2_po3 = 'zoomOut';
						this.animateName.section2_po4 = 'zoomOut';
						this.animateName.section2_po5 = 'zoomOut';
					}
					if(index == 3){
						this.animateName.section3_po1 = 'bounceOutLeft';
						this.animateName.section3_po2 = 'bounceOutLeft';
						this.animateName.section3_po3 = 'bounceOutLeft';
						this.animateName.section3_po4 = 'bounceOutLeft';
						this.animateName.section3_po5 = 'zoomOut';
					}
					if(index == 4){
						this.animateName.section4_po1 = 'slideOutDown';
						this.animateName.section4_po2 = 'slideOutDown';
						this.animateName.section4_po3 = 'slideOutDown';
						this.animateName.section4_po4 = 'zoomOut';
					}
					if(index == 5){
						this.animateName.section5_po1 = 'section5-bottom-centerMoveOne';
						this.animateName.section5_po2 = 'slideOutLeft';
						this.animateName.section5_po3 = 'slideOutLeft';
						this.animateName.section5_po4 = 'slideOutRight';
						this.animateName.section5_po5 = 'slideOutRight';
					}
					if(direction == 6){
						// var lastHeight = parseInt($(window).height())*3+parseInt($('.section5').css('height'))
						// console.log(lastHeight)
						// $('#pcHome').css({
						// 	transform:"translate3d(0px, "+ lastHeight +", 0px)"
						// })
					}
				},
				'navigation': true
				// 'continuousVertical': true
				// 'scrollingSpeed': 5000
			});
			setTimeout(function(){
				$('.section5-bottom-centerMove').css({
					marginLeft:-parseInt($('.section5-bottom-centerMove').css('width'))/2,
					height:parseInt($('.section5-bottom-centerMove').parent().children('img').css('height'))*0.7931
				})
				//$.fn.fullpage.setAutoScrolling(true)
				// $('.section6').css({height:'200px'})
				// $('.section6>div').css({height:'200px'})
				// $('html, body').css({height:'3695px'})
			},10)
			
		}
	},
	components: {
		PcHeader,PcFooter
	},
	mounted () {
		const that = this;
		this.$nextTick(()=> {
			this.windowOnlad();

		})

	},
	watch: {
		
	}
}
</script>

<style>
	#home{
		/*height:auto !important;*/
	}
	.headerFixed{
		position:fixed;
		top:39px;
		left:0;
		width:100%;
		z-index:2;
	}
	.pcSectionHeader{
		background-size:1920px 100%;
		background-repeat: no-repeat;
		background-position:center;
	}
	.headerTran-enter-active, .headerTran-leave-active {
	  	transition: opacity .5s;
	  	-webkit-transition: opacity .5s;
	  	-o-transition: opacity .5s;
	  	-moz-transition: opacity .5s;
	  	-ms-transition: opacity .5s;
	}
	.headerTran-enter, .headerTran-leave-active {
	  	opacity: 0;
	}
	/*第一页*/
	/**/
	#home .section1>div{
		vertical-align:bottom;
	}
	#home .section1_bottom{
		max-width: 1000px;
		margin: 0 auto;
		overflow: hidden;
		display:table;
		width:100%;
	}
	#home .section1_bottom>div{
		/*float:left;*/
		width:50%;
		display:table-cell;
	}
	#home .section1_bottom>div img{
		max-width:calc(100% - 0%);
      	padding-bottom: 0%;
	}
	#home .section1_bottom_left{
		text-align:center;
	}
	#home .section1_bottom_right{
		text-align:right;
		vertical-align:bottom;
	}
	#home .section1_bottom>.section1_bottom_right img{
		max-width:calc(100% - 16.4%);

	}

	#home .section2{
		background-repeat: no-repeat;
		background-position:center;
		background-size:1920px 100%;
		text-align:center;
	}
	#home .section2>div{
		vertical-align:bottom;
	}
	#home .section2-top{
		height:20%;
		display:table;
		/*table-layout:fixed;*/
		text-align:center;
		width:100%;
	}
	#home .section2-bottom{
		width:100%;
		height:80%;
		max-width:1000px;
		background-repeat: no-repeat;
		background-position:center bottom;
		background-size:744px 547px;
		position:relative;
		margin:0 auto;
	}
	#home .section2-bottom img{
		max-width:calc(100% - 0%);
      	padding-bottom: 0%;
	}
	#home .section2-bottom-po{
		position:absolute;
	}

	#home .section3{
		background-repeat: no-repeat;
		background-position:center;
		background-size:1920px 100%;
		text-align:center;
	}
	#home .section3-top{
		height:20%;
		display:table;
		table-layout:fixed;
		text-align:center;
		width:100%;
	}
	#home .section3-bottom{
		height:80%;
		max-width:1000px;
		width:100%;
		margin:0 auto;
		display:table;
	}
	#home .section3-bottom>ul{
		display:table-cell;
		width:50%;
		vertical-align:middle;
	}
	/*#home .section3-bottom-left{
		vertical-align:top;
	}
	#home .section3-bottom-right{
		vertical-align:bottom;
	}*/
	#home .section3-bottom-left>li{
		display:table;
		text-align:left;
		padding:0 40px;
		margin-top:20px;
	}
	#home .section3-bottom-left>li>span{
		display:table-cell;
		color:#fff;
	}
	#home .section3-bottom-left>li>span>p{
		padding-left:10px;
		line-height:35px;
	}
	#home .section3-bottom-right>li{
		display:table;
		text-align:center;
	}
	#home .section3-bottom-right>li>div{
		display:table-cell;
		width:50%;
		vertical-align:middle;
	}
	#home .section3-bottom-right>li>div img{
		max-width:calc(100% - 0%);
      	padding-bottom: 0%;
	}

	#home .section4{
		background-repeat: no-repeat;
		background-position:center;
		background-size:1920px 100%;
		text-align:center;
	}
	#home .section4-top{
		height:20%;
		display:table;
		table-layout:fixed;
		text-align:center;
		width:100%;
	}
	#home .section4-bottom{
		height:80%;
		max-width:1000px;
		width:100%;
		margin:0 auto;
		display:table;
	}
	#home .section4-bottom>ul{
		display:table-cell;
		width:50%;
		vertical-align:middle;
	}
	#home .section4-bottom-left{
		/*vertical-align:bottom;*/
		text-align:right;
	}
	/*#home .section4-bottom-right{
		
	}*/
	#home .section4-bottom-left img{
		max-width:calc(100% - 0%);
      	padding-bottom: 0%;
	}
	#home .section4-bottom-right>li{
		display:table;
		margin-bottom:58px;
	}
	#home .section4-bottom-right>li>span{
		display:table-cell;
		vertical-align:middle;
	}

	#home .section5{
		background-repeat: no-repeat;
		background-position:center;
		background-size:1920px 100%;
		text-align:center;
	}
	#home .section5-top{
		height:20%;
		display:table;
		table-layout:fixed;
		text-align:center;
		width:100%;
	}
	#home .section5-bottom{
		height:80%;
		max-width:1000px;
		width:100%;
		margin:0 auto;
		display:table;
	}
	#home .section5-bottom>ul{
		vertical-align:middle;
		display:table-cell;
		width:33.33%;
		/*height:819px;*/
	}
	#home .section5-bottom-left>li,.section5-bottom-right>li{
		height:50%;
		display:table;
		padding-left:20px;
	}
	#home .section5-bottom-left>li>ul,#home .section5-bottom-right>li>ul{
		display:table-cell;
		vertical-align:middle;
		text-align:left;
	}
	#home .section5-bottom-left>li>ul>li,.section5-bottom-right>li>ul>li{
		display:table;
	}
	#home .section5-bottom-left>li>ul>li>span,.section5-bottom-right>li>ul>li>span{
		display:table-cell;
		vertical-align:top;
	}
	/*#home .section5-bottom-left>li>span,.section5-bottom-right>li>span{
		
	}*/
	#home .section5-bottom>.section5-bottom-center{
		position:relative;
		vertical-align:middle;
	}
	#home .section5-bottom-center img{
		max-width:calc(100% - 0%);
      	padding-bottom: 0%;
	}
	#home .section5-bottom-centerMove{
		position:absolute;
		max-width:236px;
		width:87.77%;
		background:red;
		left:50%;
		top:12%;
		overflow:hidden;
	}
	#home .section5-bottom-centerMove>ul{
		width:200%;
		height:100%;
		overflow:hidden;
		position:relative;
		transition: all .7s;
		-webkit-transition: all .7s;
		-o-transition: all .7s;
		-moz-transition: all .7s;
		-transition: all .7s;
	}
	#home .section5-bottom-centerMove>ul>li{
		width:50%;
		float:left;
		top:0;
		height:100%;
	}
	#home .section5-bottom-centerMove>.section5-bottom-centerMoveOne{
		left:0;
	}
	#home .section5-bottom-centerMove>.section5-bottom-centerMoveTwo{
		left:-100%;
	}

	/*尾部*/
	.pcSectionFooter{
		background-position: center;
		background-size:1920px 355px;
	}
	.pcSectionFooter>div{
		
	}
</style>