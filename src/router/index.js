import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import cart from '@/components/cart/cart'
import classify from '@/components/classify/classify'
import mine from '@/components/mine/mine'
import stroll from '@/components/stroll/stroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'classify',
      // 重定向到home
      redirect: '/classify'
    },
    {
      path: '*',
      redirect: '/classify'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/stroll',
      name: 'stroll',
      component: stroll
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }

  ]
})
