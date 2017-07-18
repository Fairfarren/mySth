<template>
	<div id="phoneHeader">
		<div class="phoneLogo">
			<router-link to="home">
				<img src="../../../static/thePhone/home/logo.png" alt="">	
			</router-link>
		</div>
		<div class="phoneNav">
			<span @click="nav = !nav">
				<img src="../../../static/thePhone/home/nav.png" alt="">
			</span>
			<transition name="navFil">
				<ul v-if="nav">
					<li :class="colorHeader.home">
						<router-link to="home">首页</router-link>
					</li>
					<li :class="colorHeader.download">
						<router-link to="download">下载</router-link>
					</li>
					<li :class="colorHeader.rule">
						<router-link to="rule">规则</router-link>
					</li>
					<li :class="colorHeader.aboutUs">
						<router-link to="aboutUs">关于我们</router-link>
					</li>
				</ul>
			</transition>	
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'phoneHeader',
	data (){
		return {
			title:'this is phone header',
			nav: false,
			colorHeader:{
				home:'',
				download:'',
				rule:'',
				aboutUs:''
			},
			hash:window.location.hash.split('/')[2]
		}
	},
	methods: {
		headerColor:function(){
			this.colorHeader = {
				home:'',
				download:'',
				rule:'',
				aboutUs:''
			}
			this.colorHeader[this.hash] = 'colorNav'
		}
	},
	mounted (){
		window.onscroll = () => {
			this.nav = false;
			// console.log(123);
		}
		this.headerColor();
	}
}
</script>

<style>
	#phoneHeader{
		padding:1.6875rem 1.875rem 1.875rem;
		background:#101415;
	}
	#phoneHeader:after{
		content:'';
		display:block;
		clear:both;
	}
	.phoneLogo{
		width:12.5rem;
		float:left;
	}
	.phoneLogo img{
		width:100%;
	}
	.phoneNav{
		float:right;
		width:3.5625rem;
		position:relative;
	}
	.phoneNav>span{
		display:block;
	}
	.phoneNav>span img{
		width:100%;
	}
	.phoneNav>ul{
		position:absolute;
		right:-1.875rem;
		/*top:176%;*/
		top:4.5625rem;
		font-size:1.875rem;
		width:13.125rem;
		background-color:#101415;
		box-sizing:border-box;
	}
	.phoneNav>ul>li{
		padding:1rem 0 1rem 3.4375rem;
	}
	.phoneNav a{
		color:#fff;
	}

	.navFil-enter-active, .navFil-leave-active {
	  transition: opacity .5s
	}
	.navFil-enter, .navFil-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}
	.colorNav a{
		color:#dabb5a;
	}
</style>