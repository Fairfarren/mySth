<!-- 这个页面划分pc的路由 -->
<template>
	<div id="pcIndex">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'pcIndex',
	data () {
		return {
			title: 'this is pcIndex'
		}
	},
	mounted (){
		// var fontSize = window.innerWidth / 750 * 16;
    	document.getElementsByTagName('html')[0].style.fontSize = 16 + 'px'
	}
}

</script>

<style>
	
</style>