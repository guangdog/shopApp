import Vue from 'vue'
import Router from 'vue-router'
import startPage from '@/components/login/startPage.vue'
import signRegister from '@/components/login/signRegister.vue'
import forgetPwd from '@/components/login/forgetPwd.vue'
import shopping from '@/components/shopping/shopping.vue'
import homepage from '@/components/shopping/homepage.vue'
import ordermanage from '@/components/shopping/ordermanage.vue'
import personal from '@/components/shopping/personal.vue'
import shoppingcar from '@/components/shopping/shoppingcar.vue'
import shopinfo from '@/components/shopping/shopinfo/shopinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'login'},
    {path: '/login', component: startPage},
    {path: '/signRegister/:type', component: signRegister},
    {path: '/forgetPwd/:id', component: forgetPwd},
    {
      path: '/shopping',
      component: shopping,
      children: [// 这里就是二级路由的配置
        {
          path: '/',
          redirect: 'homepage'
        },
        {
          path: 'homepage',
          component: homepage
        }, {
          path: 'ordermanage',
          component: ordermanage
        }, {
          path: 'personal',
          component: personal
        }, {
          path: 'shoppingcar',
          component: shoppingcar
        }
      ]
    },
    {path: '/shopinfo/:id', component: shopinfo}
  ]
})
