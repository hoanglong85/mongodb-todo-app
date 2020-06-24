import { connect } from 'react-redux'
import * as actions from '../actions'
import { SAVE_TASK_SUCCESS } from '../constant/actionsTypes'
import TaskForm from '../Components/TaskForm'

const mapStateToProps = state => {
    return {
        isDisplayForm: state.showForm,
        taskEditing: state.editingTask,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveForm: (data) => {
            return dispatch(actions.saveForm(data));
        },
        onCloseForm: () => {
            return dispatch(actions.closeForm());
        },
        onSaveFormSuccess: (task, action) => {
            dispatch({ type: SAVE_TASK_SUCCESS, task, action })
        }
    }
}

const TaskFormContainer = connect(mapStateToProps, mapDispatchToProps)(TaskForm)

export default TaskFormContainer