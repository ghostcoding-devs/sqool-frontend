import Vue from 'vue'
import Vuex from 'vuex'
import exerciseModule from './modules/boilerplate'
import classModule from './modules/class'
import userModule from './modules/user'
import notificationModule from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercise: exerciseModule,
    class: classModule,
    user: userModule,
    notification: notificationModule
  }
})
