/**
 * Action for user
 */

 import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constant/actionsTypes'

 export const loginSuccess = (user, remember) => ({ type: USER_LOGIN_SUCCESS, user, remember })
 export const onLogout = () => ({ type: USER_LOGOUT })