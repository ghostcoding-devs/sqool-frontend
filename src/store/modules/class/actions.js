import { postRequest } from '../../../utils/axios'

const createClass = async ({ commit }, payload) => {
    try {
        const response = await postRequest('http://localhost:4000/api/v1/classes', payload)
        return {
            success: true,
            data: response
        }
    } catch (error) {
        console.log(error)
        return {
            success: false
        }
    }
}

export default {
    createClass
}

