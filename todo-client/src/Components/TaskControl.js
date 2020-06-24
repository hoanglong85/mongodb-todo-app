import React, { Component } from 'react';
import TaskControlSearch from '../container/TaskControlSeachContainer';
import TaskControlSort from '../container/TaskControlSortContainer';

class TaskControl extends Component {
    render() {
        return (
            <div className="AppHeaderControl card-body bg-secondary- mb-0 pb-0 d-flex justify-content-between">
                {/* Search */}
                <TaskControlSearch {...this.props} />
                <TaskControlSort {...this.props} />
            </div>
        );
    }
}

export default TaskControl;