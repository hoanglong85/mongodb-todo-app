/**
 * root sagas
 */
import {
    FETCH_TASKS, SAVE_TASK, DELETE_TASK, TOGGLE_STATUS
} from '../constant/actionsTypes'
import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import { 
    watchFetchData, watchSaveTask, watchDeleteTask, watchToggleStatus
} from './taskSaga'

export default function* rootSagas() {
    yield all([
        takeEvery(FETCH_TASKS, watchFetchData),
        takeLatest(SAVE_TASK, watchSaveTask),
        takeLatest(DELETE_TASK, watchDeleteTask),
        takeLatest(TOGGLE_STATUS, watchToggleStatus),
    ])
}