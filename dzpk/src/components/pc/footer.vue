<template>
	<div id="footer">
		<ul class="footerTop">
			<li style="text-align:right;">
				<p style="margin-top:40px;">
					<a href="javascript:(0)"><img src="../../../static/thePc/home/6_footer/btn_Android.png" alt=""></a>
				</p>
				<p style="margin-top:20px">
					<a href="javascript:(0)"><img src="../../../static/thePc/home/6_footer/btn_ios.png" alt=""></a>
				</p>
			</li>
			<li>
				<p style="color:#D7B862;font-size:30px;margin-top:-30px;margin-bottom:20px;">德州圈</p>
				<p>
					<img src="../../../static/thePc/home/6_footer/icon_code.png" alt="">
				</p>
			</li>
			<li style="text-align:left;color:#fff;">
				<p style="margin-top:40px;">
					<img style="margin-right:10px;" valign="middle" src="../../../static/thePc/home/6_footer/icon_call.png" alt="">
					服务热线:400-800-300
				</p>
				<p style="margin-top:20px">
					<img style="margin-right:10px;" valign="middle" src="../../../static/thePc/home/6_footer/icon_email.png" alt="">
					商务合作: support@binfor.com
				</p>
			</li>
		</ul>
		<ul class="footerBottom">
			<li>版权所有©2014-2016 PokerLife.com</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'footer',
	data () {
		return {
			title: 'this is pc footer'
		}
	}
}
</script>

<style>
	#footer{
		width:100%;
		height:100%;
		text-align:center;
	}
	#footer>ul{
		display:table;
		width:100%;
		max-width:1000px;
		margin:0 auto;
	}
	#footer>ul>li{
		display:table-cell;
		vertical-align:middle;
		width:33.33%;
	}
	.footerTop{
		height:80%;
	}
	.footerBottom{
		height:20%;
		color:#7F7F7F;
	}
	#footer>.footerBottom>li{
		vertical-align:bottom;
	}
</style>