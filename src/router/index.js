import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import * as fb from 'firebase/app'
import 'firebase/auth'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  // const currentUser = fb.auth().currentUser
  // const isAuthPage = to.name === 'login'

  // if (requiresAuth && !currentUser && !isAuthPage) next({ name: 'login' })
  // // else if (!requiresAuth && currentUser) next('/')
  // // else if (!requiresAuth && !currentUser) next()
  // else next()
   next()
})


export default router
