import { connect } from 'react-redux'
import * as actions from '../actions'

import UserLogin from '../Components/UserLogin'

const mapDispatchToProps = (dispatch, props) => ({
    onLoginSuccess: (user, remember) => {
        dispatch(actions.userAct.loginSuccess(user, remember))
    },
    onFetchTasks: () => {
        return dispatch(actions.fetchTasks())
    },
})

const LoginContainer = connect(null, mapDispatchToProps)(UserLogin)

export default LoginContainer