const setNotification = (state, payload) => {
    state.notificationMessage = payload.message
    state.notificationType = payload.type // error or success
}

const removeNotification = (state) => {
    state.notificationMessage = null
    state.notificationType = null
}


export default {
    setNotification,
    removeNotification,

}