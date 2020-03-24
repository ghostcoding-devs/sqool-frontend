import userManagament from '@/api/userManagement'

export default {
  getCurrentUser: async ({ commit }, payload) => {
    try {
      const getCurrentUser =  await userManagament.getUserById(payload)
      if (getCurrentUser.success) {
        return getCurrentUser.data
      } else {
        return null
      }
    } catch (err) {
      return null
    }
  }
}
