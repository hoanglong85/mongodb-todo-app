import { connect } from 'react-redux'
import TaskControlSearch from '../Components/TaskControlSearch'

import * as actions from '../actions'

const mapStateToProps = state => {
    return {
        searchKey: state.searchKey
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        searchTask: (searchKey) => {
            return dispatch(actions.searchTask(searchKey));
        }
    }
}

const TaskControlSearchContainer = connect(mapStateToProps, mapDispatchToProps)(TaskControlSearch)

export default TaskControlSearchContainer