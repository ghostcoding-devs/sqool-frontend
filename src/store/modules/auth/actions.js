import firebaseApp from '@/main'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from '@/router'
import userManagament from '@/api/userManagement'

export default {
  signin: async ({ commit, dispatch }, payload) => {
    try {
      const firebaseUser = await firebaseApp.auth().signInWithEmailAndPassword(payload.email, payload.password)
      const user = await dispatch('user/getCurrentUser', firebaseUser.user.uid, { root: true})
      commit('user/setCurrentUser', user, { root: true })
      router.push({ name: 'dashboard' })
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        commit('notification/setNotification', {
          type: 'error',
          message: 'Es wurde kein Benutzer mit der Email Adresse gefunden. Wolltest du dich registrieren?'
        }, { root: true })
        router.push({ name: 'register' })
      }
      console.log('signin error', err)
    }
  },
   signup: async ({ commit }, payload) => {
     try {
       const userDataFromFb = await firebaseApp.auth().createUserWithEmailAndPassword(payload.email, payload.password)
       const result = await userManagament.createUser(userDataFromFb)
       if (result.error) {

       } else {
        commit('user/setCurrentUser', result, { root: true })
        commit('notification/setNotification', {
          type: 'success',
          message: `Willkommen ${userDataFromFb.user.email}`
        }, { root: true })
        router.push({ name: 'onboarding' })
       }
     } catch (err) {
       if (err.code === 'auth/email-already-in-use') {
        commit('notification/setNotification', {
          type: 'error',
          message: 'Diese E-Mail Addresse wird bereits verwendet. Wolltest du dich damit einloggen?'
        }, { root: true })
        router.push({ name: 'login' })
       }
      console.log('signup error', err)
     }
  },
  signout: async ({ commit }, payload) => {
    try {
      await firebaseApp.auth().signOut()
      router.push({ name: 'login' })
    } catch (err) {
      console.log('signOut Error', error)
    }
  },
  getUsers: async ({ commit }, payload) => {
    try {
      const { users } = (await userManagament.listUsers()).data
      return users
    } catch (err) {
      console.log(err)
    }
  },
  // updateUser: async ({ commit }, payload) => {
  //   console.log(payload)
  // },
  deleteUser: async ({ commit }, payload) => {
    console.log(payload)
    console.log('action delteUser')
    return "lol"
  },
  resetPassword: async ({ commit }, payload) => {
    try {
      if(!payload) {
        payload = firebase.auth().currentUser.email
      }
      const actionCodeSettings = {
        url: 'http://localhost:8080/login'
      }
      await firebase.auth().sendPasswordResetEmail(payload, actionCodeSettings)
    } catch (err) {
      console.log('resetPasswordError', err)
    }
  }
}
