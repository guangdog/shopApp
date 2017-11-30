//引入vue.js文件
import Vue from 'vue'
//引入app.vue 组件的分离模式
import App from './App.vue'

//引入轮播文件
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//require('swiper/dist/css/swiper.css')
//Vue.use(VueAwesomeSwiper)

//引入vue-resource文件
import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入vue-router文件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入视图
import forgetPwd from './views/signRegisterView/forgetPwd.vue'
import signRegister from './views/signRegisterView/signRegister.vue'
import startPage from './views/signRegisterView/startPage.vue'

//配置路由
let vueRouter = new VueRouter({
	routes:[
		{path: '/',redirect: 'startPage'},
		{path: '/signRegister/:type',component: signRegister},
		{path: '/startPage',component: startPage},
		{path: '/forgetPwd/:id',component: forgetPwd}
	]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: vueRouter
})
