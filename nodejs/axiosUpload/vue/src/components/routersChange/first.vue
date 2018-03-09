<style lang="scss">

</style>

<template>
	<div id="first">
		<div>{{title}}</div>
		<div>
			<router-link to="/routerChange/two/123?firstName=yanke&lastName=liu">跳转过去</router-link>
			<button @click="gotoPath">button跳转</button>
			<router-link to="/routerChange">返回</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'first',
	data (){
		return{
			title: 'this is first router no id'
		}
	},
	methods:{
		gotoPath(){
			this.$router.push({
				path: '/routerChange/two/001?firstName=lalala&lastName=hahaha'
			})
		}
	}
}
</script>
