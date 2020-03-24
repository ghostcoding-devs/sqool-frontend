import { getRequest, putRequest } from './baseRequests'

export const listUsers = async () => await getRequest('/users')
export const resetPassword = async (payload) => await putRequest('/users/resetPassword', payload)