import { connect } from 'react-redux'
import * as actions from '../actions'
import TaskFilterControl from '../Components/TaskFilterControl'

const mapStateToProps = state => {
    return {
        filter: state.filterTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filterTask) => {
            return dispatch(actions.filterTask(filterTask));
        }
    }
}

const TaskFilterControlContainer = connect(mapStateToProps, mapDispatchToProps)(TaskFilterControl)

export default TaskFilterControlContainer