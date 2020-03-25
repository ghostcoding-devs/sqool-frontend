import { getRequest } from '../../../utils/axios'
import config from '../../../config'

const exerciseRoute = config.backendUrl + 'exercises'

export default {
  getExercises: async () => {
    try {
      return getRequest(exerciseRoute)
    } catch (error) {
      console.log(error)
    }
  }
}
