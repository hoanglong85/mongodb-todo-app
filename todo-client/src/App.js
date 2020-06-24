import React, { Component } from 'react';
import TaskForm from './container/TaskFormContainer';
import TaskControl from './Components/TaskControl';
import TaskList from './container/TaskListContainer';
import loading from './loading.svg';
import UserLogin from './container/LoginContainer';

class App extends Component {

    componentDidMount = async () => {
        const { user } = this.props
        if (user) {
            this.props.onFetchTasks();
        }
    }

    onShowForm = () => {
        this.props.onClearForm();
        return this.props.onOpenForm();
    }
    render() {
        const { systemStatus, user } = this.props
        return (
            <div>
                {user ? <div className="AppContent">
                    {/* App Loading */}
                    {systemStatus && systemStatus.status === -1 && <div className="AppLoading">
                        <img src={loading} alt='loading' />
                        <span className="AppLoadingText">
                            Đang tải dữ liệu...
                    </span>
                    </div>}
                    {/* Modal */}
                    <div
                        className="modal fade "
                        data-backdrop="static"
                        id="modelId"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            {/* TaskForm */}
                            <TaskForm />
                        </div>
                    </div>
                    <div className="card">
                        <div className="AppHeader">
                            <div className="AppHeaderTop d-flex justify-content-between align-items-center bg-cover">
                                <div className="AppTitle align-middle d-flex flex-column">
                                    <span><i className="fa fa-pencil-ruler"></i> TODO APP</span>
                                    <span className="AppUserName">
                                        Chào <b>{user.name}</b>
                                        <button type='button' onClick={() => this.props.onLogout()} className="AppLogout btn btn-link" style={{ padding: 0 }}>Đăng xuất</button>
                                    </span>
                                </div>
                                <div className="AppTitle align-middle d-flex flex-column justify-content-end">
                                    <button
                                        className="btn btn-success btn-circle"
                                        data-toggle="modal"
                                        data-target="#modelId"
                                        onClick={this.onShowForm}
                                    >
                                        <i className="fa fa-plus" /> Thêm mới</button>
                                </div>
                            </div>
                            {/* Control */}
                            <TaskControl />
                        </div>
                        {/* TaskList */}
                        <TaskList />
                        <div className="card-footer text-center">
                            <small className="text-muted">Code by HoangLong85 on ReactJS + Redux</small>
                        </div>
                    </div>
                </div>
                    : <UserLogin />}
            </div>
        );
    }
}

export default App