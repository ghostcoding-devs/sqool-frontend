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
firebaseApp.auth().onAuthStateChanged(user => {
  console.log('user in main.js')
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