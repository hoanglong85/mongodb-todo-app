import * as types from '../constant/actionsTypes';

import * as userAct from './user'

export const systemStatus = (payload) => ({ type: types.SYSTEM_STATUS, payload })

export const fetchTasks = () => ({ type: types.FETCH_TASKS })
export const clearTasks = () => ({ type: types.TASKS_CLEAR })
export const toggleStatus = (id, newStatus) => ({ type: types.TOGGLE_STATUS, id, newStatus })
export const deleteTask = (id) => ({ type: types.DELETE_TASK, id })
export const toggleForm = () => ({ type: types.TOGGLE_FORM })
export const closeForm = () => ({ type: types.CLOSE_FORM })
export const openForm = () => ({ type: types.OPEN_FORM })
export const saveForm = (task) => { return { type: types.SAVE_TASK, task } }
export const onEditTask = (task) => ({ type: types.EDIT_TASK, task })
export const editingStatus = (status) => ({ type: types.EDIT_STATUS, status })
export const searchTask = (searchKey) => ({ type: types.SEARCH_TASK, searchKey })
export const filterTask = (filterTask) => ({ type: types.FILTER_TASK, filterTask })
export const sortTasks = (sort) => ({ type: types.SORT_TASKS, sort })
export const clearForm = () => {
    return {
        type: types.EDIT_TASK,
        task: {
            id: '',
            name: '',
            status: false
        }
    }
}

export { userAct }