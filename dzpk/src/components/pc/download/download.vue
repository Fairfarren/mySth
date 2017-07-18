<template>
	<div id="download">
		<div class="pageHeader" :style="{backgroundImage:'url('+ img.header +')'}">
			<PcHeader class="headerPos"></PcHeader>
			<div class="section pcSectionHeader" v-bind:style="{backgroundImage: 'url(' + img.header + ')'}">
				<div class="section1_bottom" >
					<div class="section1_bottom_left animated">
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
					<div class="section1_bottom_right animated">
						<p>
							<img src="../../../../static/thePc/home/1_banner/iphone_1.png" alt="">
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="down">
			<ul>
				<li>
					<p>IOS</p>
					<p>扫码下载</p>
					<p>
						<img src="../../../../static/thePc/download/download_code.png" alt="">
					</p>
				</li>
				<li>
					<p>IOS</p>
					<p>扫码下载</p>
					<p>
						<img src="../../../../static/thePc/download/download_code.png" alt="">
					</p>
				</li>
			</ul>
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
	name:'download',
	data (){
		return {
			title:'download',
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
	#download .pageFooter{
		width:100%;
		height:355px;
		background-position:center;
		background-size:1920px 355px;
	}

	#download .pageHeader{
		width: 100%;
		height:498px;
		background-position:center;
		background-repeat:no-repeat;
		background-size:1920px 500px;
		display:table;
	}
	#download .pcPageHeaderText{
		width:100%;
		max-width:1000px;
		display:table-cell;
		vertical-align:middle;
	}
	#download .pcPageHeaderText>li{
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
	#download .pcSectionFooter{
		height:355px;
	}

	/*第一页*/
	/**/
	
	#download .section1_bottom{
		max-width: 1000px;
		margin: 0 auto;
		overflow: hidden;
		display:table;
		width:100%;
		height:915px;
	}
	#download .section1_bottom>div{
		/*float:left;*/
		width:50%;
		display:table-cell;
		vertical-align:middle;
	}
	#download .section1_bottom>div img{
		max-width:calc(100% - 0%);
      	padding-bottom: 0%;
	}
	#download .section1_bottom_left{
		text-align:center;
	}
	#download .section1_bottom_right{
		text-align:right;
	}
	#download .section1_bottom>.section1_bottom_right img{
		max-width:calc(100% - 16.4%);

	}

	.down{
		padding-bottom:105px;
		background-color:#0d0b0a;
		color:#fff;
		text-align:center;
	}
	.down>ul{
		display:table;
		max-width:1000px;
		width:100%;
		margin:0 auto;
	}
	.down>ul>li{
		display:table-cell;
		vertical-align:middle;

	}
	.down>ul>li>p:nth-child(1){
		font-size:30px;
	}
	.down>ul>li>p:nth-child(2){
		font-size:24px;
		margin:15px 0;
	}
</style>