import * as types from '../constant/actionsTypes';

var initialState = -1;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TASK:
            // console.log(action.filterTask);
            
            return action.filterTask
        default:
            return state;
    }
}

export default myReducer;