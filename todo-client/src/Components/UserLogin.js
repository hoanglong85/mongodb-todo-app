import React, { Component } from 'react'
import callAPI from '../utils/callAPI'

export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logining: false,
            error: '',
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            register: false,
            remember: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange = (event) => {
        const { target } = event
        this.setState({
            error: '',
            [target.name]: target.value
        })
    }
    onSubmit = async (event) => {
        event.preventDefault()
        // Validate
        if (this.state.register) {
            if (this.state.password !== this.state.confirmPassword) {
                this.setState({
                    error: 'Xác nhận mật khẩu không khớp',
                    confirmPassword: '',
                    password: ''
                })
                return false
            }
        }
        this.setState({
            error: '',
            logining: true
        })
        // Login | Register
        const url = this.state.register ? 'register' : 'login'
        let inputData = { email: this.state.email, password: this.state.password }
        if (this.state.register)
            inputData.name = this.state.name

        await callAPI(url, 'POST', inputData)
            .then(res => {
                if (res && res.status === 200) {
                    const { data } = res
                    if (data.status) {
                        this.props.onLoginSuccess(data.user, this.state.remember)
                        setTimeout(() => {
                            this.props.onFetchTasks()
                        })
                    } else {
                        this.setState({
                            error: data.message
                        })
                    }
                }
                this.setState({
                    logining: false
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="login-body">
                <form className="form-signin" method="post" onSubmit={this.onSubmit}>
                    <span className="loginAppLogo">
                        <i className="fa fa-pencil-ruler"></i>
                    </span>
                    <h1 className="h3 mb-3 font-weight-normal">{this.state.register ? 'Tạo tài khoản mới' : 'Vui lòng đăng nhập'}</h1>
                    {this.state.error && <div className="alert alert-danger alert-sm">
                        {this.state.error}
                    </div>}

                    {this.state.register && <><label htmlFor="inputName" className="sr-only">Họ và tên</label>
                        <input
                            type="text"
                            name="name"
                            id="inputName"
                            className="form-control"
                            placeholder="Họ và tên"
                            value={this.state.name}
                            onChange={this.onChange}
                            required
                            disabled={this.state.logining}
                            style={{ borderRadius: 4, marginBottom: 6 }}
                        /></>}

                    <label htmlFor="inputEmail" className="sr-only">Địa chỉ Email</label>
                    <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Địa chỉ email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required autoFocus
                        disabled={this.state.logining}
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Mật khẩu"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        disabled={this.state.logining}
                        required
                    />

                    {this.state.register && <><label htmlFor="confirmPassword" className="sr-only"></label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Nhập lại mật khẩu"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.onChange}
                            disabled={this.state.logining}
                            required
                            style={{ borderRadius: 4 }}
                        /></>}

                    {!this.state.register && <div className="checkbox mb-3 clear">
                        <label className="pull-left">
                            <input
                                type="checkbox"
                                defaultValue="remember-me"
                                name='remember'
                                onChange={(event) => this.setState({ remember: event.target.checked })}
                            /> Tự động đăng nhập
                        </label>
                        <button type='button' onClick={() => this.setState({ register: true })} className="pull-right btn btn-link" style={{ padding: 0 }}>Đăng ký mới</button>
                    </div>}
                    {!this.state.register && <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={this.state.logining}>
                        {this.state.logining ? 'Đang đăng nhập...' : 'ĐĂNG NHẬP'}
                    </button>}
                    {this.state.register && <><button className="btn btn-lg btn-danger btn-block" type="submit" disabled={this.state.logining}>
                        {this.state.logining ? 'Đang xử lý...' : 'ĐĂNG KÝ'}
                    </button>
                        <button className="btn btn-link btn-block" type="button" onClick={() => this.setState({ register: false })}>
                            Quay lại đăng nhập
                        </button>
                    </>}
                    <p className="mt-5 mb-3 text-muted">© 2020</p>
                </form>
            </div>
        )
    }
}
