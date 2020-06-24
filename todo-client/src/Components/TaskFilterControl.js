import React, { Component } from 'react';

class TaskFilterControl extends Component {
    onFilter = (filter) => {
        this.props.onFilter(filter);
    }

    render() {
        var { filter } = this.props;
        return (
            <div className="dropdown open">
                <button className="btn btn-default dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-filter"></i> Lọc
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                    <button
                        className={'dropdown-item ' + (filter === 1 ? 'active' : '')}
                        onClick={() => this.onFilter(1)}
                    >Đã hoàn thành</button>
                    <button
                        className={'dropdown-item ' + (filter === 0 ? 'active' : '')}
                        onClick={() => this.onFilter(0)}
                    >Chưa hoàn thành</button>
                    <div className="dropdown-divider"></div>
                    <button
                        className={'dropdown-item ' + (filter === -1 ? 'active' : '')}
                        onClick={() => this.onFilter(-1)}
                    >Hiển thị tất cả</button>
                </div>
            </div>
        );
    }
}

export default TaskFilterControl; 