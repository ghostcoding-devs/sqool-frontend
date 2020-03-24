import axios from 'axios'
import config from '@/config'
const BASEURL = config.backend.baseURL + '/' + config.backend.apiVersion

export const getRequest = (path) => axios.get(BASEURL + path)
export const putRequest = (path, payload) => axios.put(BASEURL + path, payload)