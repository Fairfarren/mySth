<style lang="scss" scoped>

</style>

<template>
	<div id="children">
		<div>
			<input type="number" name="" value="">
			this is num in children model == '{{num}}'
		</div>
		<div>
			this is children's button
			<button @click="childNumPush">+</button>
			<button @click="childNumMinus">-</button>
		</div>
	</div>
</template>

<script>
export default {
	props:[
		'num'
	],
	name: 'children',
	data (){
		return {
			title:'this is children in parAndChi'
		}
	},
	methods:{
		childNumPush:function(){
			//通过方法去触发父级的自定义事件
			this.$emit('push');
		},
		childNumMinus:function(){
			this.$emit('minus');
		}
	}
}
</script>
