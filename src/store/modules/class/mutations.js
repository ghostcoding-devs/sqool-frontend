export default {
    addToClassList: (state, payload) => {
        state.inviteList.push(payload)
    },
    addClass: (state, payload) => {
        state.classes.push(payload)
    },
    removeClass: (state, payload) => {
        state.classes = state.classes.filter(cl => cl.id !== payload)
    },
    setClasses: (state, payload) => {
        state.classes = payload
    },
    setClass: (state, payload) => {
        state.currentClass = payload
    },
    setParents: (state, payload) => {
        console.log(state.currentClass)
        state.currentClass.parents = payload
        console.log(state.currentClass)
    }
}