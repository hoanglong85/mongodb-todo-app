import * as types from '../constant/actionsTypes';
import { findIndex } from 'lodash';
// import uuid from 'react-uuid'

// var data = JSON.parse(localStorage.getItem('tasks'));

// var initialState = data || [];
var initialState = []
var index = -1;

/* const saveLocal = (data) => {
    return localStorage.setItem('tasks', JSON.stringify(data));
} */

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASKS_CLEAR:
            return []
        case types.FETCH_TASKS_SUCCESS:
            return action.payload;
        case types.TOGGLE_STATUS_SUCCESS:
            index = findIndex(state, (task) => {
                return task._id === action.id;
            });
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: action.newStatus
                }
            }
            // saveLocal(state);
            return [...state];
        case types.DELETE_TASK_SUCCESS:
            index = findIndex(state, (task) => {
                return task._id === action.id;
            });
            if (index !== -1) {
                state.splice(index, 1);
                // saveLocal(state);
            }
            return [...state];
        case types.SAVE_TASK_SUCCESS:
            if (action.action === 'add') {
                state.push(action.task);
            } else if (action.action === 'edit') {
                index = findIndex(state, (task) => {
                    return task._id === action.task._id
                })
                if (index !== -1) {
                    state[index] = action.task;
                }
            }
            // saveLocal(state);
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;