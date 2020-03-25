import Vue from 'vue'
import VueRouter from 'vue-router'
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
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
   {
    path: '/classes/:id',
    name: 'Class',
    component: () => import(/* webpackChunkName: "about" */ '../views/Class/Class.vue'),
      meta: {
        requiresAuth: true
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
    name: 'Exercise',
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

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser
//   const isAuthPage = to.name === 'login'

//   try {
//     if (requiresAuth && !currentUser && !isAuthPage) next({ name: 'login' })
//     // else if (!requiresAuth && currentUser) next('/')
//     else if (!requiresAuth && !currentUser) next()
//     else next()
//   } catch (err) {
//     console.log('error in router', err)
//     // next({ name: 'login' })
//   }
// })


export default router
