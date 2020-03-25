import { postRequest, getRequest, putRequest } from '../../../utils/axios'
import config from '../../../config'
import router from '../../../router'

const classesRoute = config.backendUrl + 'classes'

const createClass = async ({ commit }, payload) => {
    try {
        const response = await postRequest(classesRoute, payload)
        commit('addClass', response)
    } catch (error) {
        return {
            success: false
        }
    }
}

const getClass = async ({ commit }) => {
    try {
        const classId = router.currentRoute.params.id
        const response = await getRequest(classesRoute + '/' + classId)
        commit('setClass', {
            ...response,
            id: classId
        })
    } catch (error) {
        console.log(error)
    }
}

const getClasses = async ({ commit }) => {
    try {
        const response = await getRequest(classesRoute)
        commit('setClasses', response)
    } catch (error) {
        console.log(error)
    }
}

const addParentsToClass = async ({ commit, state }, payload) => {
    try {
        const currentClass = { ...state.currentClass }
        if (currentClass.parents) currentClass.parents.push(payload)
        else currentClass.parents = [payload]
        await putRequest(classesRoute + '/' + router.currentRoute.params.id, {
            name: currentClass.name,
            parents: currentClass.parents,
            teacherId: currentClass.teacherId
        })
        commit('setParents', currentClass.parents)
    } catch (error) {
        console.log(error)
    }
}

const sendEmailInvites = async ({ commit }, payload) => {
    try {
        const response = await postRequest('http://localhost:4000/api/v1/', payload)
        return {
            success: true,
            data: response
        }
    } catch (error) {
        return {
            success: false
        }
    }
}

export default {
    getClass,
    getClasses,
    createClass,
    sendEmailInvites,
    addParentsToClass
}

