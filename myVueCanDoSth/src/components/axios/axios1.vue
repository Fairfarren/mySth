<style lange="scss" scoped>

</style>


<template>
	<div id="axios1">
		<div>
			<button @click="get(1,4)">get1</button>
			<button @click="get(-1,4)">get-1</button>
			<button @click="post">post</button>
		</div>
		<div>
			<button @click="page++">page++</button>
			<button @click="page--">page--</button>
			<span>{{page}}</span>
		</div>
		<div class="list">
			<ul>
				<li v-for="(lists,index) in list">
					姓名：{{lists.name}}
					年龄：{{lists.age}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'axios1',
	data (){
		return {
			list : [],
			page : 1
		}
	},
	methods:{
		get(sort,pageSize){
			axios.get('/goods',{
				params : {
					sort : sort,//排序
					page : this.page,
					pageSize : pageSize
				}
			}).then((res)=>{
				this.list = res.data.result.list
				if(this.list.length <= 0){
					this.list = [{name:'没有了',age:'真的没有了'}]
				}
				console.log(res.data);
			})
		},
		post(){
			axios({
				 url:'/goods',
                  method: 'post',
                  data: {
                    type:1,
                    qwe:2,
                    33:"fuck"
				  },
				  //数据格式化
                  transformRequest: [function (data) {
                    var ret = ''
                    for (var it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                  }]
			}).then((res)=>{
				console.log(222);
			})
		}
	}
}
</script>