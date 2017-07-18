<template>
	<div id="phoneFooter">
		<ul>
			<li>
				<a href="">
					<img src="static/thePhone/home/btn_Android.png" alt="">
				</a>
			</li>
			<li>
				<a href="">
					<img src="static/thePhone/home/btn_ios.png" alt="">
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'phoneFooter',
	data (){
		return {
			title: 'this is phone footer'
		}
	}
}
</script>

<style>
	#phoneFooter{
		padding:2.125rem 0;
		/*background-color:black;*/
	}
	#phoneFooter li{
		width:21.875rem;
		margin:0 auto 2.7rem;
	}
	#phoneFooter li img{
		width:100%;
	}
</style>