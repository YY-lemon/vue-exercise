import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Navbar from '@/pages/Navbar'
import TableBar from '@/pages/TableBar'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: {
      path: 'navBar'
    },
    children: [{
      path: 'navBar',
      name: 'Navbar',
      component: Navbar,
    }, {
      path: 'tableBar',
      name: 'tableBar',
      component: TableBar,
    }]
  }, ]
})
