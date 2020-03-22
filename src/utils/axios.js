import axios from 'axios'


export async function postRequest  (url, payload, headers) {
    try {
        const response = await axios.post(url, payload, { headers: { 'Authorization': headers ? headers : '' } })
        return response.data
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function putRequest (url, payload, headers) {
    try {
        const response = await axios.put(url, payload, { headers: { 'Authorization': headers ? headers : '' } })
        return response.data
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getRequest (url, headers) {
    try {
        const response = await axios.get(url, { headers: { 'Authorization': headers ? headers : '' } })
        return response.data
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function deleteRequest (url, headers) {
    try {
        const response = await axios.post(url, { headers: { 'Authorization': headers ? headers : '' } })
        return response.data
    } catch (error) {
        throw new Error(error.message)
    }
}


