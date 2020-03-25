import { postRequest } from '../../../utils/axios'
import config from '../../../config'

const classesRoute = config.backendUrl + 'students'

export default {
  getFreeStudents: async (_, payload) => {
    try {
      return postRequest(classesRoute + '/parents/free', {
        parents: payload
      })
    } catch (error) {
      console.log(error)
    }
  }
}
