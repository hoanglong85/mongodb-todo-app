import { connect } from 'react-redux'
import App from '../App'
import * as actions from '../actions'

const mapStateToProps = state => ({
    user: state.user,
    systemStatus: state.systemStatus
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchTasks: () => {
            console.log('App container fetch task runed');
            
            return dispatch(actions.fetchTasks())
        },
        onOpenForm: () => {
            return dispatch(actions.openForm());
        },
        onClearForm: () => {
            return dispatch(actions.clearForm());
        },
        onLogout: () => {
            dispatch(actions.clearForm());
            dispatch(actions.clearTasks())
            return dispatch(actions.userAct.onLogout())
        }
    }
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default appContainer