import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Chat from '@/components/Chat/Chat.vue'
import * as fb from 'firebase/app'
import 'firebase/auth'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
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
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
   {
    path: '/class/:classId',
    name: 'Class',
    component: () => import(/* webpackChunkName: "about" */ '../views/Class.vue'),
      meta: {
        requiresAuth: true
    }
  },
  {
    path: '/classes',
    name: 'Classoverview',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClassOverview.vue'),
    meta: {
      requiresAuth: true
    }
  }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser
  const isAuthPage = to.name === 'login'

  try {
    if (requiresAuth && !currentUser && !isAuthPage) next({ name: 'login' })
    // else if (!requiresAuth && currentUser) next('/')
    else if (!requiresAuth && !currentUser) next()
    else next()
  } catch (err) {
    console.log('error in router', err)
    next({ name: 'login' })
  }
})


export default router
