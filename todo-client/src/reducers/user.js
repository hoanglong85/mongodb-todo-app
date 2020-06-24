/**
 * State for user information
 */

import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constant/actionsTypes'


const user = JSON.parse(localStorage.getItem('user'));
const initialState = user || null

const saveLocal = (data) => {
    return localStorage.setItem('user', JSON.stringify(data));
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            if (action.remember)
                saveLocal(action.user)
            return action.user
        case USER_LOGOUT:
            localStorage.removeItem('user')
            return null
        default: return state
    }
}

export default userReducer