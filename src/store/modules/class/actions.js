import postRequest from '@/utils/axios'

export default {
    createClass: async ( { commit }, payload ) => {
        try {
            const response = await postRequest('backenURL', classList, 'someHeaders')
        } catch (error) {
            
        }
    }
}