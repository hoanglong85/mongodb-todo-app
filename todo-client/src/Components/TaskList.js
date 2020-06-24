import React, { Component } from 'react';
import TaskItem from '../container/TaskItemContainer';
import TaskFilterControl from '../container/TaskFilterControlContainer';

import { filter as LoFilter } from 'lodash';

class TaskList extends Component {

    componentWillMount = () => {
        var tasks = this.props.tasks;
        this.setState({
            tasks: tasks
        });
    };

    componentWillReceiveProps = (nextProps) => {
        var tasks = nextProps.tasks;
        this.setState({
            tasks: tasks
        });
    }

    render() {
        var { searchKey, filterTask, sortTasks, tasks } = this.props;

        if (sortTasks.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sortTasks.value;
                else if (a.name < b.name) return -sortTasks.value;
                else return 0;
            });
        }

        if (sortTasks.by === 'status') {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sortTasks.value;
                else if (a.status < b.status) return sortTasks.value;
                else return 0;
            });
        }

        // Search get searchKey from redux store
        if (searchKey !== '') {
            tasks = LoFilter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(searchKey) !== -1;
            });
        }

        // Filter
        if (filterTask !== -1) {
            tasks = LoFilter(tasks, (task) => {
                return (!task.status && filterTask === 0) || (task.status && filterTask);
            });
        }

        var tasksEl;
        if (tasks && tasks.length) {
            tasksEl = tasks.map((task, index) => {
                return <TaskItem
                    task={task}
                    key={index}
                // onEdit={this.props.onEdit}
                />
            });
        }

        const _renderTaskList = () => {
            if (!tasks || !tasks.length) {
                return <div className="task-item-not-found">
                <img src='https://cdn.dribbble.com/users/2387623/screenshots/7026223/media/b6d3d311773a99fc8515c591cd069909.jpg' alt='notfound' className='notfound-photo' />
                    Không tìm thấy dữ liệu
                </div>
            }
            return <ul className="list-group list-group-flush task-list">
                {tasksEl}
            </ul>
        }

        return (
            <div>
                <div className="card-body pb-0 border-bottom d-flex justify-content-between">
                    <h5 className="card-title">
                        Danh sách công việc <span className="badge badge-danger">{tasks.length}</span>
                    </h5>
                    {/* Filter */}
                    <TaskFilterControl onFilter={this.props.onFilter} />
                </div>
                <div className='taskList'>
                    {/* TaskItem */}
                    {_renderTaskList()}
                </div>
            </div>
        );
    }
}


export default TaskList