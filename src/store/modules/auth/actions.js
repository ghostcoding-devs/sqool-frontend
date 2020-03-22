import firebaseApp from '@/main'
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
          console.log('error')
        }
      break;
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
