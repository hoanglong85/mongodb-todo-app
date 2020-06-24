import React, { Component } from 'react';

class TaskControlSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtKey: ''
        };
        this.onSubmit = this.onSubmit.bind(this)
    };

    onChange = (event) => {
        var target = event.target;
        var value = target.value;
        this.setState({
            txtKey: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        return this.props.searchTask(this.state.txtKey);
    }

    render() {
        var { txtKey } = this.state;
        return (
            <div className="d-flex flex-column col-8 p-0 m-0">
                <form method="POST"
                    className="form-horizontal p-0 m-0"
                    onSubmit={this.onSubmit}
                >
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-search" /></span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                name="txtKey"
                                placeholder="Nhập nội dung cần tìm"
                                value={txtKey}
                                onChange={this.onChange}
                            />
                            <span className="input-group-append">
                                <button className="btn btn-danger" type="submit">Tìm</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default TaskControlSearch