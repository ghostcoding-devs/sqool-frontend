import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import * as firebase from "firebase/app"
import "firebase/auth"

import config from '@/config'
Vue.config.productionTip = false
const firebaseApp = firebase.initializeApp(config.firebaseConfig)
let app
firebaseApp.auth().onAuthStateChanged(async (firebaseUser) => {
  console.log(firebaseUser.providerData)
  if (firebaseUser) {
    console.log(JSON.stringify(firebaseUser, null, 1))
    const user = await store.dispatch('user/getCurrentUser', firebaseUser.email || firebaseUser.providerData[0].email, { root: true })
    if (user) {
      store.commit('user/setCurrentUser', getUser)
    }
  }
  
  if (!app) {
    app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
    }).$mount('#app')
  } 
})
export default firebaseApp