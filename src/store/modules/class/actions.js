import postRequest from '@/utils/axios'

export default {
    inviteClass: async ( classList ) => {
        try {
            const response = await postRequest('backenURL', classList, 'someHeaders')
        } catch (error) {
            
        }
    }
}