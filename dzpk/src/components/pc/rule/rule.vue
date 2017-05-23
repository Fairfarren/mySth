<template>
	<div id="rule">
		<div class="pageHeader" :style="{backgroundImage:'url('+ img.header +')'}">
			<PcHeader class="headerPos"></PcHeader>
			<ul class="pcPageHeaderText">
				<li :style="{backgroundImage:'url('+ img.header_1 +')'}">
					<p style="padding-left:30px;">规则简单</p>
					<p style="padding-left:110px;margin-top:-35px;">上手容易</p>
				</li>
			</ul>
		</div>
		<div class="page2" :style="{backgroundImage:'url('+ img.page2 +')'}">
			<div>
				<ul class="page2Content">
					<li style="text-align:right;">
						<img src="../../../../static/thePc/rule/iPhone_1.png" alt="">
					</li>
					<li style="padding-left:60px;margin-top:-50px;">
						<p style="height:70px;text-align:center;background-repeat:no-repeat;line-height:70px;background-position:center;font-size:40px;color:#666666;margin-top:-100px;" :style="{backgroundImage:'url('+ img.page2_1 +')'}">
							<img style="margin-right:10px;" valign="middle" src="../../../../static/thePc/rule/icon_1.png" alt="">
							创建<span class="colorYellow">账号</span>
						</p>
						<p style="font-size:30px;color:#666666;text-align:center;">通过手机号注册和登录</p>
						<p style="font-size:20px;color:#666666;">创建一个能完全掌控的私人牌局，现在支持四种牌局类型：现金局  SNG  6+  奥马哈</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="page3">
			
		</div>
		<div class="pageFooter" :style="{backgroundImage:'url('+ img.footer +')'}">
			<pcFooter></pcFooter>
		</div>
	</div>
</template>

<script>
import PcHeader from '../header'
import PcFooter from '../footer'

export default {
	name: 'rule',
	data () {
		return {
			title: 'this is pc rule',
			headerShow: 'true',
			img: {
				header: require('../../../../static/thePc/home/1_banner/banner_bg.png'),
				header_1: require('../../../../static/thePc/rule/banner_text.png'),
				page2: require('../../../../static/thePc/home/4/bg4.png'),
				page2_1: require('../../../../static/thePc/rule/img_rec.png'),
				footer: require('../../../../static/thePc/home/6_footer/footer_bg.png')
			}
		}
	},
	methods: {
		
	},
	mounted () {
			
	},
	components: {
		PcHeader,PcFooter
	}
}
</script>

<style>
	.headerPos{
		width:100%;
		position:absolute;
		left:0;
		top:40px;
	}
	#rule .pageFooter{
		width:100%;
		height:355px;
		background-position:center;
		background-size:1920px 355px;
	}

	#rule .pageHeader{
		width: 100%;
		height:498px;
		background-position:center;
		background-repeat:no-repeat;
		background-size:1920px 500px;
		display:table;
	}
	#rule .pcPageHeaderText{
		width:100%;
		max-width:1000px;
		display:table-cell;
		vertical-align:middle;
		
	}
	#rule .pcPageHeaderText>li{
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
	#rule .page2{
		width:100%;
		background-position:top center;
		background-size:100% 100%;
		display:table;
		padding-top:145px;
	}
	#rule .page2>div{
		display:table-cell;
		width:100%;
		max-width:1000px;
		vertical-align:middle;
	}
	#rule .page2Content{
		display:table;
		width:100%;
	}
	#rule .page2Content>li{
		display:table-cell;
		vertical-align:middle;
		width:50%;
	}
	#rule .page2Content>li>p{
		width:352px;
		margin-bottom:10px;
	}
	#rule .colorYellow{
		color:#e9c564;
	}
</style>