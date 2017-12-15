import React, { Component } from 'react'

import {
    withRouter
} from 'react-router-dom'

import {
    Modal,
    Form,
    Input,
    Button,
    Row,
    Col,
} from 'antd'

//表单方法
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 18 },
    },
};
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
//end表单方法

class AddCategory extends Component {
    state = {
        submitLoging: false,
        //弹窗
        visible: this.props.toggle,

    }
    componentDidMount() {

    }
    //弹窗
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        // console.log(e);
        this.addClassSubmitOk();
    }
    handleCancel = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
        this.props.closeModal();
    }

    //表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { axios } = this.props;
                axios({
                    url: `/admin/category`,
                    method: 'post',
                    headers: {
                        'Authorization': sessionStorage.token,
                    },
                    data: {
                        name: values.name,
                    }
                }).then((res) => {
                    if(res.data.status_code === 201) {
                        const that = this;
                        Modal.success({
                            title: '成功',
                            content: '添加成功',
                            onOk() {
                                that.handleCancel();
                                that.props.upDataList();
                            }
                        })
                    }else {
                        Modal.warning({
                            title: '提示',
                            content: res.data.msg,
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                    Modal.error({
                        title: '出错了！',
                        content: '网络连接错误或者服务器无响应',
                    });
                })
            } else {
                this.setState({
                    submitLoging: false
                })
            }
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;

        return (
            <div>
                <Modal
                    title="添加大类"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={false}
                >
                    <Form onSubmit={this.handleSubmit} id="classForm">
                        <FormItem
                            {...formItemLayout}
                            label="大类名字"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '请输入大类名字',
                                }]
                            })(
                                <Input placeholder="请输入大类名字" />
                                )}
                        </FormItem>

                        <FormItem>
                            <Row type="flex" justify="end">
                                <Col span={4}>
                                    <Button
                                        onClick={this.handleCancel}
                                    >
                                        取消
                                </Button>
                                </Col>
                                <Col span={4}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        disabled={hasErrors(getFieldsError())}
                                        loading={this.state.submitLoging}
                                    >
                                        确定
                                </Button>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}


export default withRouter(Form.create()(AddCategory));