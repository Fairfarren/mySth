<style lang="scss" scoped>

</style>

<template>
	<div id="parAndChi">
		<div>this is parent num == '{{num}}'</div>
		<div>
			this is parent's button
			<button @click="numPush">+</button>
			<button @click="numMinus">-</button>
		</div>
		<br>
		<!-- 父级把数据传过去，父级自定义一个触发事件，名字自己取，然后子级通过这个自定义事件去触发一个方法。 -->
		<children :num="num" @push="parentNumPush" @minus="parentNumMinus"></children>
	</div>
</template>

<script>
import Children from './children'

export default {
	name: 'parAndChi',
	data (){
		return {
			title: 'this is parAndChi',
			num: 0
		}
	},
	components:{
		Children
	},
	methods:{
		numPush:function(){
			this.num++;
		},
		numMinus:function(){
			this.num--;
		},
		//自定义触发事件，调用的方法
		parentNumPush:function(){
			this.num++;
		},
		parentNumMinus:function(){
			this.num--;
			if(ture){
				return 'hello world'
			}
		}
	}
}
</script>
