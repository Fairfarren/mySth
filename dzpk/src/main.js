// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//fullPage
import '../static/js/jquery-1.8.3.min.js'
import '../static/js/jquery.fullPage.js'
import '../static/css/jquery.fullPage.css'
//animate
import '../static/css/animate.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { 
		App
	},
	methods: {
		qwe: function (){
			console.log(1)
		}
	},
	watch: {
		$route (to){
			location.reload([false])   
		}
	}
})
