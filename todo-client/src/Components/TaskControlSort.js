import React, { Component } from 'react';
class TaskControlSort extends Component {

    onSort = (by, value) => {
        this.props.onSort({
            by,
            value
        });
    }

    render() {
        var { sort } = this.props;
        return (
            <div className="d-lex flex-column justify-content-end p-0">
                <div className="dropdown open">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-sort"></i> Sắp xếp
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                        <button
                            className={'dropdown-item ' + (sort.by === 'name' && sort.value === 1 ? 'active' : '')}
                            onClick={() => this.onSort('name', 1)}
                        >Tên A-Z</button>
                        <button
                            className={'dropdown-item ' + (sort.by === 'name' && sort.value === -1 ? 'active' : '')}
                            onClick={() => this.onSort('name', -1)}
                        >Tên Z-A</button>
                        <div className="dropdown-divider"></div>
                        <button
                            className={'dropdown-item ' + (sort.by === 'status' && sort.value === 1 ? 'active' : '')}
                            onClick={() => this.onSort('status', 1)}
                        >Hoàn thành</button>
                        <button
                            className={'dropdown-item ' + (sort.by === 'status' && sort.value === -1 ? 'active' : '')}
                            onClick={() => this.onSort('status', -1)}
                        >Chưa hoàn thành</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default TaskControlSort