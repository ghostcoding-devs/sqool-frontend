import firebaseApp from '@/main'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from '@/router'
import userManagament from '@/api/userManagement'

export default {
  signin: async ({ commit }, payload) => {
    let user
    switch (payload.provider) {
      case 'basic':
        try {
          user = await firebaseApp.auth().signInWithEmailAndPassword(payload.userInput.email, payload.userInput.password)
          router.push({ name: 'dashboard' })
        } catch (err) {
          console.log('signin error', err)
        }
      break;
      case 'google':
        try {
          let provider = new firebase.auth.GoogleAuthProvider()
          firebaseApp.auth().languageCode = 'de'
          const { user, credential } = await firebaseApp.auth().signInWithPopup(provider)
          const { accessToken } = credential
        } catch (err) {
          console.log(err)
        }
      default: 
      break;
    }
  },
   signup: async ({ commit }, payload) => {
     let user
      switch (payload.provider) {
        case 'basic':
          try {
            const userData = await firebaseApp.auth().createUserWithEmailAndPassword(payload.signUpDetails.email, payload.signUpDetails.password)
            const user = await userManagament.createUser(user)
            // commit user
            commit('notification/setNotification', {
              type: 'success',
              message: `Willkommen ${userData.email}`
            }, { root: true })
            router.push({ name: 'dashboard' })
          } catch (err) {
            router.push({ name: 'login' })
            commit('notification/setNotification', {
              type: 'error',
              message: 'Du hast bereits ein Konto mit der E-Mail Addresse angelegt. Bitte logge dich damit ein.'
            }, { root: true })
          }
          break;
        case 'google':
          try {
            let provider = new firebase.auth.GoogleAuthProvider()
            firebaseApp.auth().languageCode = 'de'
            provider.addScope('email')
            const userData = await firebaseApp.auth().signInWithPopup(provider)
            const user = await userManagament.createUser(userData)
            // commit user
            router.push({ name: 'dashboard' })
            commit('notification/setNotification', {
              type: 'success',
              message: `Willkommen ${userData.user.displayName}`
            }, { root: true })
          } catch (err) {
            router.push({ name: 'login' })
            commit('notification/setNotification', {
              type: 'error',
              message: 'Du hast dein Konto bereits mit Google verknüpft. Bitte logge dich damit ein.'
            }, { root: true })
          }
          break;
        default:
          break;
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
  updateUser: async ({ commit }, payload) => {
    console.log(payload)
  },
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
