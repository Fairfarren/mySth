<style scoped lang="scss">
@mixin fontSize($size, $color) {
  font-size: $size - 2;
  color: $color;
}
//导航高度
$navHeight: 56px;
#theHeader {
  width: 100%;
}
.nav {
  bakcground: {
    color: #fafafa;
  }
  > ul {
    width: 1200px;
    height: $navHeight;
    margin: 0 auto;
    > li {
      height: 100%;
    }
    > .logoNav {
      float: left;
      display: table;
	  	height: 100%;
      > div {
				height:100%;
        display: inline-table;
        vertical-align: middle;
        a {
          height: $navHeight;
					display: inline-block;
          img {
            vertical-align: bottom;
          }
          b {
						line-height: $navHeight;
            @include fontSize(30px, #020202);
						font-family: 'FZZZHONGJW  GB1 0';
          }
        }
      }
	  >.navButton {
		  margin: {
			  left: 70px;
		  }
			height: 100%;
			>span {
				display: inline-block;
				height: 100%;
				padding: 0 20px;
				a {
					line-height: $navHeight;
					vertical-align: middle;
				}
			}
		}
    }
    > .userImg {
      float: right;
			height: $navHeight;
			overflow: hidden;
	  span {
			display: inline-block;
			height: $navHeight;
			span {
				height: $navHeight;
				line-height: $navHeight;
				cursor: pointer;
				img {
					width: 44px;
					height: 44px;
					border-radius: 50%;
					margin: {
						top: ($navHeight - 44) / 2 ;
					}
				}
			}
	  }
    }
  }
}
.navButton a {
  @include fontSize(18px, #666666);
}
.navButton .navColor {
  @include fontSize(18px, #3399ff);
}
</style>

<template>
    <div id="theHeader">
        <div class="nav">
            <ul>
                <li class="logoNav">
									<div>
										<router-link to="/home">
											<img src="../../../static/images/0.png" alt="">
											<b>汝课堂</b>
										</router-link>
									</div>
									<div class="navButton">
										<span class="navColorButton" >
											<router-link to="/home" active-class="navColor">首页</router-link>
										</span>
										<span class="navColorButton" >
											<router-link to="/class" active-class="navColor">课程</router-link>
										</span>
									</div>
								</li>
                <li class="userImg">
                    <span class="user">
											<el-dropdown @command="handleCommand">
												<span class="el-dropdown-link">
													<img src="../../../static/images/userImg.png" alt="" @click="signUpOrSignIn">
												</span>
												<el-dropdown-menu slot="dropdown" v-if="$store.state.USER.name">
													<el-dropdown-item command="myClass">我的课程</el-dropdown-item>
													<el-dropdown-item command="myOrder">我的订单</el-dropdown-item>
													<el-dropdown-item>退出</el-dropdown-item>
												</el-dropdown-menu >
												<el-dropdown-menu slot="dropdown" v-else>
													<el-dropdown-item command="0">登录</el-dropdown-item>
												</el-dropdown-menu>
											</el-dropdown>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
	name: "theHeader",
	data() {
		return {
			title: "header",
			routerName: {
				home: "",
				class: "",
			},
		};
	},
	methods: {
		//头像下拉点击事件
		handleCommand (command) {
			command == 0 && ( () => {
				this.$store.commit('PUPUP_SHOW_SIGNINUP');
			})()
			switch (command) {
				case 'myClass': this.$router.push('/myClassAndOrder/1');break;
				case 'myOrder': this.$router.push('/myClassAndOrder/2');break;
			}
		},
		//登陆或是打开编辑资料
		signUpOrSignIn () {
			this.$store.state.USER.name.length > 0 ? ( () => {
				this.$router.push('/myClassAndOrder/0');
			})() : ( () => {
				this.$store.commit('PUPUP_SHOW_SIGNINUP')
			})()
		}
	},
	mounted() {
		
	},
	watch: {
		
	},
};
</script>
