import { connect } from 'react-redux'
import TaskList from '../Components/TaskList'

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        searchKey: state.searchKey,
        filterTask: state.filterTask,
        sortTasks: state.sortTasks
    }
}


const TaskListContainer = connect(mapStateToProps)(TaskList)

export default TaskListContainer