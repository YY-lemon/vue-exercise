import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Navbar from '@/pages/Navbar'
import TableBar from '@/pages/TableBar'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Index from '@/pages/Index'
import Lemon from '@/components/Lemon'
import UserList from '@/components/UserList'

Vue.use(Router)
let router = new Router({
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
    path: '/index',
    name: 'Index',
    component: Index,
    children: [{
      path: 'lemon',
      name: 'Lemon',
      component: Lemon
    }, {
      path: 'userList',
      name: 'UserList',
      component: UserList
    }, ]
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
  }]
})

// 路由全局守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('mytoken')
  if (token) {
    next()
  } else {
    if (to.path !== '/login') {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }

})
export default router
