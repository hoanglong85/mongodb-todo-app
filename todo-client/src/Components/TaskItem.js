import React, { Component } from 'react';

class TaskItem extends Component {
    // Converted to redix
    onEdit = () => {
        var { task } = this.props;
        // this.props.onEdit(task);
        this.props.onOpenForm();
        this.props.onEditingTask(task);
    }

    // Converted to redux
    onDelete = () => {
        var { task } = this.props;
        this.props.onDeleteTask(task._id);
    }

    // Converted to redux
    onChangeStatus = () => {
        var { task } = this.props;
        this.props.onChangeStatus(task._id, !task.status)
    }

    render() {
        var { task } = this.props;
        return (
            <li className={'list-group-item ' + (task.status ? 'success' : '')}>
                <div className="row">
                    <div className="col-1 col-auto text-center">
                        <span
                            onClick={this.onChangeStatus}
                        >
                            {task.status ? <i className="fa fa-check-circle fa-lg text-success" /> : <i className="far fa-lg fa-circle" />}
                        </span>
                    </div>
                    <div className="col task-item-name">
                        <span
                            onClick={this.onChangeStatus}
                        >
                            {task.name}
                        </span>
                    </div>
                    <div className="col-auto text-center">
                        <div>
                            <button
                                className="btn btn-outline-success btn-sm task-item-edit"
                                onClick={this.onEdit}
                            >Sửa</button>&nbsp;
                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={this.onDelete}
                            >Xóa</button>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default TaskItem