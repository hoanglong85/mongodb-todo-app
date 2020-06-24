/**
 * State for app status
 */

import { SYSTEM_STATUS } from '../constant/actionsTypes'

const inititalState = {
    status: null,  // 1: success | 0: error | -1: loading
    message: ''
}

const systemStatus = (state = inititalState, action) => {
    switch (action.type) {
        case SYSTEM_STATUS:
            const _status = typeof action.payload.status !== 'undefined' ? action.payload.status : null
            return {
                status: _status,
                message: action.payload.message || ''
            }
        default: return state
    }
}

export default systemStatus