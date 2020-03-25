import Vue from 'vue'
import Vuex from 'vuex'

import exerciseModule from './modules/exercise'
import classModule from './modules/class'
import userModule from './modules/user'
import notificationModule from './modules/notification'
import authModule from './modules/auth'
import studentModule from './modules/student'
import packageModule from './modules/package'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    package: packageModule,
    exercise: exerciseModule,
    class: classModule,
    user: userModule,
    notification: notificationModule,
    auth: authModule,
    student: studentModule
  }
})
