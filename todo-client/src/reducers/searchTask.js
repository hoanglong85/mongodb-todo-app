import * as types from '../constant/actionsTypes';

var initialState = '';

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TASK:
            return action.searchKey.toLowerCase();
        default:
            return state;
    }
}

export default myReducer;