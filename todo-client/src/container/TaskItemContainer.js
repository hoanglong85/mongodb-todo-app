import { connect } from 'react-redux'
import * as actions from '../actions'
import TaskItem from '../Components/TaskItem'


const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: (id, newStatus) => {
            return dispatch(actions.toggleStatus(id, newStatus));
        },
        onDeleteTask: (id) => {
            return dispatch(actions.deleteTask(id));
        },
        onEditingTask: (task) => {
            return dispatch(actions.onEditTask(task));
        },
        onOpenForm: () => {
            return dispatch(actions.openForm());
        }
    }
}

const TaskItemContainer = connect(null, mapDispatchToProps)(TaskItem)

export default TaskItemContainer