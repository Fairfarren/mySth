<template>
	<div id="phoneIndex">
		<router-view></router-view>
	</div>
</template>

<script>


export default {
	name: 'phoneIndex',
	data () {
		return {
			title: 'this is phoneIndex'
		}
	},
	mounted (){
		console.log(123);
		var fontSize = window.innerWidth / 750 * 16;
    	document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'
	}
}
</script>

<style>
	.phoneHeader {
		position:fixed;
		width:100%;
		left:0;
		top:0;
		z-index:10;
	}
</style>