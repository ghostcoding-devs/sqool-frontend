import firebaseApp from '@/main'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from '@/router'
export default {
  signin: async ({ commit }, payload) => {
    let user
    switch (payload.provider) {
      case 'basic':
        try {
          user = await firebaseApp.auth().signInWithEmailAndPassword(payload.userInput.email, payload.userInput.password)
          console.log(user)
          router.push({ name: 'dashboard' })
        } catch (err) {
          console.log('error LOOOL')
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
        console.log(firebaseApp)
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
  signout: () => {
    firebaseApp.auth().signOut().then(function() {
      router.push('/login')
    }).catch(function(error) {
      console.log("error", error)
    })
  }
}
