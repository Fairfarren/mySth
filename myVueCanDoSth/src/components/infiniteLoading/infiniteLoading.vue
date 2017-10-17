<style scoped>
	#infinitel li {
		width: 200px;
		height: 200px;
		border: 1px solid black;
		margin: 0 auto;
	}
</style>

<template>
	<div id="infinitel">
		bubbles,circles,default,spiral,waveDots
		<ul>
			<li v-for="(list,index) in lists">
				hello world {{index}}
			</li>
		</ul>
		<infinite-loading @infinite="infiniteHandler" spinner="bubbles">
			<span slot="no-results">根本就没有东西的</span>
			<span slot="no-more">已经到最低了</span>
		</infinite-loading>
	</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
	components: {
		InfiniteLoading
	},
	name: 'infinitel',
	data() {
		return {
			lists: [],
			page: 0,
			flag: true
		}
	},
	methods: {
		addList() {
			for(let i=0;i<10;i++) {
				this.lists.push(i)
			}
			this.page++;
			this.flag = true;
		},
		infiniteHandler( $state) {
			//设置开关
			if(!this.flag) return;
			this.flag = false;
	      //$state包括3个方法，它们是loaded方法，complete方法和reset方法。
	      //$state.loaded()方法用于在每次数据加载后停止动画动画，然后该组件将准备好进行下一次触发。
	      if(this.page >= 5) {
	      	$state.complete();
	      }else {
	      	$state.loaded();
	      	setTimeout( ()=>{
	      		this.addList();
	      		$state.loaded();
	      	},1500)

	      }
	    }
	},
	mounted() {
		this.addList()
	}
}
</script>