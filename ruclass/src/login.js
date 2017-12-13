import React, { Component } from 'react'
import {
    Row,
    Input,
    Icon,
    Button,
    Form,
    Modal
} from 'antd';

const FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends Component {
    componentDidMount() {
        // 起始判定按钮状态
        this.props.form.validateFields();
    }
    //提交表单
    handleSubmit = (e) => {
        e.preventDefault();
        const { axios, store } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/admin/login', {
                    email: values.userName,
                    password: values.password
                }).then(function (res) {
                    if (res.data.status_code === 200) {
                        sessionStorage.setItem('token', res.data.token);
                        store.user.token = res.data.token;
                    } else {
                        Modal.warning({
                            title: '提示',
                            content: res.data.msg,
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                    Modal.error({
                        title: '警告',
                        content: '网络连接错误或超时',
                    });
                });
            }
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, isFieldTouched, getFieldError } = this.props.form;

        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div id="login">
                <Row type="flex" justify="space-around" align="middle" className="box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <h3>
                            汝课堂后台管理
                        </h3>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ fontSize: 16 }} />}
                                    placeholder="输入用户名" />
                                )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock"
                                        style={{ fontSize: 16 }} />}
                                    type="password"
                                    placeholder="输入密码" />
                                )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                disabled={hasErrors(getFieldsError())}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </Row>
            </div>
        )
    }
}

const LoginView = Form.create()(LoginForm);

export default LoginView;