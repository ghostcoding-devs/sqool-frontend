import userManagament from '@/api/userManagement'
import router from '@/router'

export default {
  getCurrentUser: async ({ commit }, payload) => {
    try {
      const getCurrentUser = await userManagament.getUserById(payload)
      if (getCurrentUser.data.success) {
        return getCurrentUser.data
      } else {
        return null
      }
    } catch (err) {
      return null
    }
  },
  onboarding: async ({ state, commit }, payload) => {
    try {
      const user = { ...state.currentUser }
      user.settings.onboardingCompleted = true
      user.kids = payload.kids
      user.displayName = `${payload.parents.firstName} ${payload.parents.lastName}`
      user.firstName = payload.parents.firstName
      user.lastName = payload.parents.lastName
      const updatedUser = await userManagament.updateUser(user.id, user)
      commit('user/setCurrentUser', updatedUser, { root: true })
      router.push({ name: 'dashboard' })
    } catch (err) {
      console.log('onboardingError', err)
    }
  }
 }
