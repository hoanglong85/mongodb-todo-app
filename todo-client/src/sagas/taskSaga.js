/**
 * 
 */
import { call, put, select } from 'redux-saga/effects'
import callAPI from '../utils/callAPI'
import { systemStatus } from '../actions'

import {
    FETCH_TASKS_SUCCESS, SAVE_TASK_SUCCESS, DELETE_TASK_SUCCESS, TOGGLE_STATUS_SUCCESS
} from '../constant/actionsTypes'



export function* watchFetchData() {
    // Open loading
    yield put(systemStatus({ status: -1, message: 'Đang tải dữ liệu...' }))

    // Get user
    const user = yield select((state) => state.user)

    const res = yield call(() => callAPI('todos', 'POST', { userId: user._id }))
    if (res && res.status === 200) {
        const { data } = res
        if (data) {
            yield put({ type: FETCH_TASKS_SUCCESS, payload: data })
        }
    }

    yield put(systemStatus({ status: 1, message: '' }))
}


// Save task | Đang chưa dùng vì chưa biết wait server respon
export function* watchSaveTask(params) {
    const user = yield select((state) => state.user)
    const { task } = params
    task.userId = user._id
    const taskID = task.id || null

    const action = taskID ? 'edit' : 'add'

    const res = yield call(() => callAPI(action, 'POST', task))
    if (res && res.status === 200) {
        const { data } = res
        if (data) {
            yield put({ type: SAVE_TASK_SUCCESS, task: data.task, action })
        }
    }
}

export function* watchDeleteTask(params) {
    const user = yield select((state) => state.user)
    const id = params.id
    const res = yield call(() => callAPI('delete', 'POST', { id, userId: user._id }))
    if (res && res.status === 200) {
        const { data } = res
        if (data.status) {
            yield put({ type: DELETE_TASK_SUCCESS, id: id })
        }
    }

}

export function* watchToggleStatus(params) {
    const { id, newStatus } = params
    const res = yield call(() => callAPI('change-status', 'POST', { id, status: newStatus }))
    if (res && res.status === 200) {
        const { data } = res
        if (data.status) {
            yield put({ type: TOGGLE_STATUS_SUCCESS, id, newStatus })
        }
    }
}