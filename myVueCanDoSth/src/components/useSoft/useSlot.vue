<style>
	
</style>

<template>
  <div id="useSlot">
    <div>
    	{{title}}
    </div>
    <addSlot>
    	<span slot="span">span in</span>
    	<p slot="p">p in</p>
    </addSlot>
  </div>
</template>

<script>
import AddSlot from './addSlot'
export default {
	name: 'useSlot',
	data (){
		return {
			title: 'add<span></span> and <p></p>'
		}
	},
	components:{
		AddSlot
	}
}
</script>
