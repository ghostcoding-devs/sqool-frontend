import firebaseApp from '@/main'
import router from '@/router'
export default {
  signin: ({ commit }, payload) => {
    let user
    switch (payload.provider) {
      case 'basic':
        firebaseApp.auth().signInWithEmailAndPassword(payload.signUpDetails.email, payload.signUpDetails.password)
        .then((user) => {
          console.log(user)
        })
        .catch(function(error) {
          // Handle Errors here.
          console.log('error', error)
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // ...
        });
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
