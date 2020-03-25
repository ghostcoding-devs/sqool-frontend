import { postRequest } from '../../../utils/axios'
import config from '../../../config'
import router from '../../../router'

const packageRoute = config.backendUrl + 'packages'

export default {
  createPackage: async ({ commit, rootState }, payload) => {
    try {
      const classId = rootState.class.currentClass.id
      await postRequest(packageRoute, {
        ...payload,
        classId
      })
    } catch (error) {
      console.log(error)
    }
  }
}
