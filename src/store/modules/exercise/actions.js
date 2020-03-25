import { getRequest, postRequest } from '../../../utils/axios'
import config from '../../../config'

const exerciseRoute = config.backendUrl + 'exercises'

export default {
  getExercises: async () => {
    try {
      return getRequest(exerciseRoute)
    } catch (error) {
      console.log(error)
    }
  },
  createExercise: async (_, payload) => {
    try {
      const formData = new FormData()
      formData.append('title', payload.title)
      formData.append('description', payload.description)
      formData.append('subject', payload.subject)
      if (payload.file) formData.append('uploadFile', payload.file)
      await postRequest(exerciseRoute, formData, {
        'Content-Type': 'multipart/form-data'
      })
    } catch (error) {
      console.log(error)
    }
  },
  getExercise: async (_, payload) => {
    try {
      return getRequest(exerciseRoute + '/' + payload)
    } catch (error) {
      console.log(error)
    }
  }
}
