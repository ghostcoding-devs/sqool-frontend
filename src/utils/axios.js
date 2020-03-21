import axios from 'axios'

export default {

    postRequest: async (url, payload, headers) =>  {
        try {
            const response = await axios.post(url, payload, { headers: { 'Authorization' : headers ? headers : '' } })
            return response.data
        } catch (error) {
            throw new Error(error.message)
        }
    },

    putRequest: async (url, payload, headers) =>  {
        try {
            const response = await axios.put(url, payload, { headers: { 'Authorization' : headers ? headers : '' } })
            return response.data
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getRequest: async (url, headers) =>  {
        try {
            const response = await axios.get(url, { headers: { 'Authorization' : headers ? headers : '' } })
            return response.data
        } catch (error) {
            throw new Error(error.message)
        }
    },

    deleteRequest: async (url, headers) =>  {
        try {
            const response = await axios.post(url, { headers: { 'Authorization' : headers ? headers : '' } })
            return response.data
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
}