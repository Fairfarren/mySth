<style lang="scss" scoped>
	@mixin transition($sth,$time){
		transition:$sth $time;
		-webkit-transition:$sth $time;
		-ms-transition:$sth $time;
		-moz-transition:$sth $time;
		-o-transition:$sth $time;
	}
</style>

<template>
	<div id="index">
		<div>
			<router-link to="/routerView/index1">index1</router-link>
			<router-link to="/routerView/index2">index2</router-link>
		</div>
		<router-view name="home"></router-view>
		<router-view name="title"></router-view>
	</div>
</template>

<script>
export default {
	name: 'index',
	data(){
		return{
			title: '<router-view> add "name"'
		}
	},

}
</script>
