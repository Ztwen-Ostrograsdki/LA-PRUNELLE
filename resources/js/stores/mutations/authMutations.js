const auth_mutations = {

    GET_USERS: (state, data) => {
        state.users = data.users
        state.addresses = data.addresses
    },
    LOGOUT: (state, msg) => {
        state.userSettings = false
        state.user = {}
        state.admin = false
        state.noUser = true
        state.logout = msg
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    USER_SETTINGS: (state, value) => {
        state.userSettings = value
    },
    RESET_LOGIN_NOTIF: (state, value) => {
        state.loginNotif = value
    }
}

export default auth_mutations