<style scoped lang="scss">
	@mixin transition($time) {
		transition: all $time;
		-webkit-transition: all $time;
		-o-transition: all $time;
		-moz-transition: all $time;
	}
	@mixin animation($name, $time) {
		animation: $name $time;
		-moz-animation: $name $time;	
		-webkit-animation: $name $time;	
		-o-animation: $name $time;	
	}
	#banner {
		width: 100%;
		cursor: pointer;
	}
	.box {
		width: 100%;
		height: 380px;
		position: relative;
		z-index: 2;
		// &::before {
		// 	content: '';
		// 	display: inline-block;
		// 	position: absolute;
		// 	left: 0;
		// 	top: 0;
		// 	width: 50%;
		// 	height: 380px;
		// 	background: {
		// 		color: #1FDC98;
		// 	}
		// 	z-index: 0;
		// }
		// &::after {
		// 	content: '';
		// 	display: inline-block;
		// 	position: absolute;
		// 	right: 0;
		// 	top: 0;
		// 	width: 50%;
		// 	height: 380px;
		// 	background: {
		// 		color: #1A93CA;
		// 	}
		// 	z-index: 0;
		// }
	}
	.boxImg {
		position: absolute;
		width: 100%;
		height: 380px;
		top: 0;
		left: 0;
		background: {
			position: center center;
			repeat: no-repeat;
		}
		z-index: 2;
		@include transition(0.3s);
	}
	.drawer {
		position: relative;
		width: 1200px;
		height: 380px;
		margin: 0 auto;
		overflow: hidden;
		z-index: 3;
	}
	.drawer {
		>div {
			position: absolute;
		}
		>.left, >.right {
			top: 50%;
			cursor: pointer;
			margin: {
				top: - 54 / 2 + px;
			}
		}
		>.left {
			left: 35px;
		}
		>.right {
			right: 35px;
		}
		>.dot {
			position: absolute;
			width: 100%;
			bottom: 30px;
			left: 0;
			text-align: center;
			>li {
				display: inline-block;
				padding: 8px;
				background: {
					color: rgba(0, 0, 0, 0.5);
				}
				border-radius: 16px;
				>span {
					display: inline-block;
					width: 8px;
					height: 8px;
					background: {
						color: #ffffff;
					}
					border-radius: 4px;
					margin: 0 6px;
					@include transition(0.3s);
				}
				>.dotIndex {
					width:	16px;
				}
			}
		}
	}
	@keyframes dotSpan {
		form {
			width: 16px;
		}
		to {
			width: 8px;
		}
	}
	@-moz-keyframes dotSpan {
		form {
			width: 16px;
		}
		to {
			width: 8px;
		}
	}
	@-webkit-keyframes dotSpan {
		form {
			width: 16px;
		}
		to {
			width: 8px;
		}
	}
	@-o-keyframes dotSpan {
		form {
			width: 16px;
		}
		to {
			width: 8px;
		}
	}
</style>

<template>
	<div id="banner" @click="goToPath">
		<div class="box"
			@mouseenter="stopInterval"
			@mouseleave="timeInterval"
		>
			<div class="boxImg"
				:style="{ backgroundImage: 'url(' + bg.img[index] + ')' }"
			></div>
			<div class="drawer">
				<div class="left" @click.stop="clickButton(-1)">
					<img src="../../static/images/1.png" alt="">
				</div>
				<div class="right" @click.stop="clickButton(+1)">
					<img src="../../static/images/2.png" alt="">
				</div>
				<ul class="dot">
					<li>
						<span 
							v-for="(dotSpan,spanIndex) in bg.img" 
							:key="dotSpan" 
							:class="{dotIndex: index == spanIndex}"
						></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "banner",
	props: ['bg'],
	data () {
		return {
			// bg: {
			// 	img: [
			// 		require('../../static/images/WechatIMG5.jpeg'),
			// 		require('../../static/images/WechatIMG5.jpeg'),
			// 		require('../../static/images/WechatIMG5.jpeg')
			// 	],
			// 	url: [
			// 		'','',''
			// 	]
			// },
			index: 0,
			time: ''
		}
	},
	methods: {
		clickButton (num) {
			this.index += num;
			if(this.index > this.bg.img.length-1) {
				this.index = 0;
			}else if(this.index < 0){
				this.index = this.bg.img.length-1;
			}
		},
		timeInterval () {
			clearInterval(this.time);
			this.time = setInterval( () => {
				this.clickButton(1);
			}, 3000)
		},
		stopInterval() {
			clearInterval(this.time);
		},
		goToPath () {
			this.$router.push(this.bg.url[this.index])
		}
	},
	mounted () {
		this.timeInterval();
	}
};
</script>