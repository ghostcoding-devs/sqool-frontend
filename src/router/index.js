import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Onboarding from '../views/Auth/Onboarding.vue'
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
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding
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
    path: '/classes/:id',
    name: 'Class',
    component: () => import(/* webpackChunkName: "about" */ '../views/Class/Class.vue')
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: () => import(/* webpackChunkName: "about" */ '../views/Admin/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    }
  },
  {
    path: '/classes',
    name: 'Classoverview',
    component: () => import(/* webpackChunkName: "about" */ '../views/Class/ClassOverview.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/exercises/create',
    name: 'CreateExercise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercise/CreateExercise.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/exercises/:id',
    name: 'Exercise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercise/Exercise.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/exercises/:id/:studentId',
    name: 'ExecuteExercise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercise/ExecExercise.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/exercises',
    name: 'ExerciseOverview',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercise/ExerciseOverview.vue'),
    meta: {
      requiresAuth: true
    }
  },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = store.getters['user/currentUser']
  const isAuthPage = to.name === 'login'
  const isRegisterPage = from.name === 'register'
    try {
      if (!isRegisterPage && requiresAuth && !currentUser && !isAuthPage) next({ name: 'login' })
      // else if (!requiresAuth && !currentUser) next()
      else next()
    } catch (err) {
      next({ name: 'login' })
    }
  })

export default router
