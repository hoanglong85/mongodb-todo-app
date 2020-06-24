import { combineReducers } from 'redux';
import tasks from './tasks';
import showForm from './showform';
import editingTask from './editingTask';
import searchKey from './searchTask';
import filterTask from './filterTask';
import sortTasks from './sortTasks';
import systemStatus from './systemStatus'
import user from './user'

var myReducer = combineReducers({
    tasks,
    showForm,
    editingTask,
    searchKey,
    filterTask,
    sortTasks,
    systemStatus,
    user
});

export default myReducer