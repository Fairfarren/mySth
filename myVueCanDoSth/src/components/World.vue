<template>
	<div id="world">
		{{count}}
	</div>
</template>

<script>
export default{
	name: 'world',
	data (){
		return {
			title: 'world'
		}
	},
	computed:{
	    count () {
	      return this.$store.state.text
	    }
	}
}
</script>