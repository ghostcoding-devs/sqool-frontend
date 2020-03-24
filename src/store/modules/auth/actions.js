import firebaseApp from '@/main'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from '@/router'
import * as userManagement from '@/api/userManagement'

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
          try {
            const { user, credential } = await firebaseApp.auth().signInWithPopup(provider)
            const { accessToken } = credential
            router.push({ name: 'dashboard' })
          } catch (err) {
            console.log(err)
          }
        } catch (err) {
          console.log(err)
        }
      default: 
      break;
    }
  },
   signup: ({ commit }, payload) => {
    switch (payload.provider) {
      case 'basic':
        firebaseApp.auth().createUserWithEmailAndPassword(payload.signUpDetails.email, payload.signUpDetails.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
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
      const { users } = (await userManagement.listUsers()).data
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
