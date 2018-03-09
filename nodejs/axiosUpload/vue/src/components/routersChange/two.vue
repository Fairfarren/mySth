<style lang="scss" scoped>

</style>

<template>
	<div id="two">
		<div>
			this is $route params id == '{{$route.params.id}}'
		</div>
		<br>
		<div>
			<p>
				this can get $route.query search
			</p>
			<p>
				search firstName == '{{$route.query.firstName}}'
			</p>
			<p>
				search lastName == '{{$route.query.lastName}}'
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'two',
	data (){
		return{
			title: ''
		}
	}
}
</script>
