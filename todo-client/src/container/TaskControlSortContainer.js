import { connect } from 'react-redux'
import * as actions from '../actions'
import TaskControlSort from '../Components/TaskControlSort'

const mapStateToProps = state => {
    return {
        sort: state.sortTasks
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            return dispatch(actions.sortTasks(sort));
        }
    }
}

const TaskControlSortContainer = connect(mapStateToProps, mapDispatchToProps)(TaskControlSort)

export default TaskControlSortContainer