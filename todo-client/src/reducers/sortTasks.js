import * as types from '../constant/actionsTypes';

var initialState = {
    by: 'status',
    value: -1
}

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASKS:            
            return action.sort;
        default: return state;
    }
}

export default myReducer