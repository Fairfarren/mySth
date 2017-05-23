<template>
	<div id="header">
		<ul>
			<li class="logo">
				<router-link to="/home">
					<img src="../../../static/thePc/home/1_banner/logo.png" alt="">
				</router-link>
			</li>
			<li class="navigation">
				<span>
					<router-link to="/download">下载</router-link>
				</span>
				<span>
					<router-link to="/rule">规则</router-link>
				</span>
				<span>
					<router-link to="/">活动</router-link>
				</span>
				<span>
					<router-link to="/aboutUs">关于我们</router-link>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {
			title: 'this is pc header'
		}
	}
}
</script>

<style>
	#header>ul{
		width:100%;
		max-width:1000px;
		margin:0 auto;
		overflow:hidden;
	}
	.logo{
		float:left;
	}
	.navigation{
		float:right;
	}
	.navigation a{
		line-height:55px;
		color:#fff;
		margin:0 12px;
	}
</style>