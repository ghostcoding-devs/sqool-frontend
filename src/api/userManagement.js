import { getRequest, putRequest, postRequest } from './baseRequests'

const createUser = async (userData) => await postRequest('/users/parents', userData)
const getUserById = async (email) => await getRequest(`/users/${email}`)
const listUsers = async () => await getRequest('/users')
const resetPassword = async (payload) => await putRequest('/users/resetPassword', payload)

export default {
  getUserById,
  createUser,
  listUsers,
  resetPassword
}
