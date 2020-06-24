
import React, { Component } from 'react';
import callAPI from '../utils/callAPI'
import loading from '../loading.svg'

class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            slStatus: 1,
            txtNameErr: false,
            submiting: false,
            addmulti: false
        };
        this.closeModal = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentWillMount = () => {
        var { taskEditing } = this.props;
        if (taskEditing) {
            this.setState({
                id: taskEditing._id,
                txtName: taskEditing.name,
                slStatus: taskEditing.status
            });
        } else {
            this.onResetForm();
        }
    };


    componentWillReceiveProps = (nextProps) => {
        var { taskEditing } = nextProps;
        if (taskEditing) {
            this.setState({
                id: taskEditing._id,
                txtName: taskEditing.name,
                slStatus: taskEditing.status
            });
        } else {
            this.onResetForm();
        }
    }


    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'slStatus') {
            value = parseInt(value, 10);
        } else if (name === 'txtName') {
            if (value !== '') {
                this.setState({
                    txtNameErr: false
                });
            }
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = async (event) => {
        event.preventDefault();
        var { txtName, id, slStatus } = this.state;
        if (txtName === '') {
            this.setState({
                txtNameErr: 'Vui lòng nhập nội dung công việc'
            });
            return false;
        }
        // Sử dụng redux saga nhưng chưa dùng vì chưa tìm được cách bắt trả về hệ thống
        /* this.props.onSaveForm({
            id,
            name: txtName,
            status: slStatus
        });
        this.onResetForm();
        this.closeModal.current.click(); // Close modal */
        this.setState({
            submiting: true
        })

        const { user } = this.props
        const taskData = {
            id,
            name: txtName,
            status: slStatus,
            userId: user._id
        }

        const action = id ? 'edit' : 'add'

        await callAPI(action, 'POST', taskData)
            .then(res => {
                if (res && res.status === 200) {
                    const { data } = res
                    if (data) {
                        this.props.onSaveFormSuccess(data.task, action)
                        this.onResetForm();
                        // When add Multi
                        if (!id && this.state.addmulti) {
                            this.txtName.focus()
                        } else {
                            this.closeModal.current.click() // Close modal
                        }
                    } else {
                        alert('Xử lý dữ liệu không thành công')
                    }
                } else {
                    alert('Xử lý dữ liệu không thành công')
                }
                this.setState({
                    submiting: false
                })
            })
            .catch((err) => {
                this.setState({
                    submiting: false
                })
                alert(err);
            })

    }

    onResetForm = () => {
        this.setState({
            id: '',
            txtName: '',
            slStatus: false,
            txtNameErr: false
        });
    }

    onCloseForm = () => {
        this.onResetForm();
        this.props.onCloseForm();
    }

    render() {
        if (!this.props.isDisplayForm) return '';
        var { txtName, slStatus, id, txtNameErr } = this.state;
        slStatus = slStatus ? 1 : 0;
        return (
            <div className="modal-content">
                {this.state.submiting && <div className="form-loading">
                    <img src={loading} alt='loading' />
                    <span>Đang xử lý dữ liệu...</span>
                </div>}
                <form
                    method="POST"
                    onSubmit={this.onSubmit}
                >
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc mới'}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={this.onCloseForm}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="txtName">Nội dung</label>
                            <input
                                ref={input => this.txtName = input}
                                type="text"
                                className={"form-control" + (txtNameErr ? " is-invalid" : "")}
                                name="txtName"
                                id="txtName"
                                aria-describedby="helpId"
                                placeholder="Nhập nội dung công việc"
                                value={txtName}
                                onChange={this.onChange}
                            />
                            {txtNameErr ? <div className="invalid-feedback">{txtNameErr}</div> : <small className="form-text text-muted">Nội dung công việc</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="slStatus">Trạng thái</label>
                            <select
                                className="form-control"
                                name="slStatus"
                                id="slStatus"
                                value={slStatus}
                                onChange={this.onChange}
                            >
                                <option value={1}>Đã hoàn thành</option>
                                <option value={0}>Chưa hoàn thành</option>
                            </select>
                            <small className="form-text text-muted">Trạng thái của công việc</small>
                        </div>
                    </div>
                    <div className="modal-footer" style={{ justifyContent: 'space-between' }}>
                        {!this.state.id ? <label className="label">
                            <input
                                type="checkbox"
                                onChange={(event) => { this.setState({ addmulti: event.target.checked }) }}
                            /> Thêm nhiều
                        </label> : <span />}
                        <div>
                            <button
                                type="reset"
                                ref={this.closeModal}
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={this.onCloseForm}
                                style={{ marginRight: 15 }}
                            >
                                <i className="fa fa-times" /> Hủy
                            </button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                            >
                                <i className="fa fa-save" /> Lưu
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



export default TaskForm;