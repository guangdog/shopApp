import Vue from 'vue'
import Router from 'vue-router'
import forgetPwd from '@/components/login/forgetPwd.vue'
import signRegister from '@/components/login/signRegister.vue'
import startPage from '@/components/login/startPage.vue'
import shopping from '@/components/shopping/shopping.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'login'},
    {path: '/login', component: startPage},
    {path: '/signRegister/:type', component: signRegister},
    {path: '/forgetPwd/:id', component: forgetPwd},
    {path: '/shopping', component: shopping}
  ]
})
