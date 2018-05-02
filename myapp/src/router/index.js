import Vue from 'vue'
import Router from 'vue-router'
import AppHeader  from '@/components/common/AppHeader'
import YTIndex    from '@/components/index/YTIndex'
import YtCategory from '@/components/category/YtCategory'
import ShoppingCart from '@/components/shoppingcart/ShoppingCart'
import AppLogin from '@/components/login/AppLogin'
import ManagerPage from  '@/components/manager/ManagerPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'YTIndex',
      component: YTIndex
    },
    {
      path: '/header',
      name: 'AppHeader',
      component: AppHeader
    },
    {
      path: '/category',
      name: 'YtCategory',
      component: YtCategory
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/manager',
      name: 'ManagerPage',
      component: ManagerPage
    }
  ]
})
