import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Register from '@/components/Register/Register'
import UserAgreement from '@/components/Register/UserAgreement'
import Login from '@/components/Login/Login'
import ChangeCity from '@/components/ChangeCity/ChangeCity'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // 以'/'开头会被以为是根目录
      path: '/register',
      name: Register,
      component: Register
    },
    {
      path: '/useragreement',
      name: UserAgreement,
      component: UserAgreement
    },
    {
      path: '/login',
      name: Login,
      component: Login
    },
    {
      path: '/changecity',
      name: ChangeCity,
      component: ChangeCity
    }
  ]
})
