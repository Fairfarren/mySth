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
    Icon,
    Progress
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

class ChangeClassHour extends Component {
    state = {
        submitLoging: false,
        //弹窗
        visible: this.props.toggle,
        classId: '',
        chapterId: '',
        classHourId: '',
        videoName: '',
        upDataLine: 0,
        //详情
        name: '',
        time: '',
        number: '',
    }
    componentDidMount() {
        const { match } = this.props;
        const classJson = JSON.parse(this.props.changeClassHourJson);
        this.setState({
            classId: match.params.classId,
            chapterId: match.params.chapterId,
            name: classJson.name,
            time: classJson.video_time,
            number: classJson.number,
            videoName: classJson.video
        })
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
    //获取视频
    getVideo = (e) => {
        const file = e.target.files || e.dataTransfer.files;
        // const name = e.target.name;
        // console.log(name);
        if (file[0].type !== 'video/mp4' && file[0].type !== 'audio/mp4' && file[0].type !== 'video/mpeg' && file[0].type !== 'video/mpeg') {
            Modal.warning({
                title: '警告',
                content: '请选择正确的视频格式',
            });
            return;
        }
        this.setState({
            videoName: file[0].name
        })
    }

    //表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { axios, match } = this.props;
                let formData = new FormData();
                formData.append('name', values.name);
                formData.append('video_time', values.video_time);
                formData.append('number', values.number);
                formData.append('chapter_id', this.state.chapterId);
                const video = this.refs.upVideo;
                if(video.files[0]) {
                    formData.append('video', video.files[0]);
                    this.setState({
                        submitLoging: true
                    })
                }
                
                const classJson = JSON.parse(this.props.changeClassHourJson);
                axios({
                    url: `/admin/course/${match.params.classId}/lesson/${classJson.id}`,
                    method: 'put',
                    headers: {
                        'Authorization': sessionStorage.token,
                        'Content-Type': 'multipart/form-data'
                    },
                    data: formData,
                    onUploadProgress: (progressEvent) => {
                        // 对原生进度事件的处理
                        let timeLine = parseInt( progressEvent.loaded / progressEvent.total * 100, 10);
                        this.setState({
                            upDataLine: timeLine
                        })
                    },
                }).then((res) => {
                    if (res.data.status_code === 201) {
                        const that = this;
                        Modal.success({
                            title: '成功',
                            content: '添加成功',
                            onOk() {
                                that.handleCancel();
                                that.props.upDataList();
                            }
                        });
                    } else {
                        const that = this;
                        Modal.warning({
                            title: '提示',
                            content: res.data.msg,
                            onOk() {
                                that.setState({
                                    submitLoging: false
                                })
                            }
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
                    title="编辑课时"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={false}
                >
                    <Form onSubmit={this.handleSubmit} id="classForm">
                        <FormItem
                            {...formItemLayout}
                            label="课时名字"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '请输入课时名字',
                                }],
                                initialValue: this.state.name
                            })(
                                <Input placeholder="请输入课时名字" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="课时时间"
                            hasFeedback
                        >
                            {getFieldDecorator('video_time', {
                                rules: [{
                                    required: true, message: '请输入课时时间',
                                }],
                                initialValue: this.state.time
                            })(
                                <Input placeholder="请输入课时时间" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="课时顺序"
                            hasFeedback
                        >
                            {getFieldDecorator('number', {
                                rules: [{
                                    required: true, message: '请输入课时顺序',
                                }],
                                initialValue: this.state.number
                            })(
                                <Input placeholder="请输入课时顺序" type="number" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="选择视频"
                            hasFeedback
                        >
                            <div>
                                <Button
                                    loading={this.state.submitLoging}
                                >
                                    <label htmlFor="upVideo">
                                        <Icon type="upload" />
                                        上传
                                        </label>
                                </Button>
                                <input type="file" name="upVideo" id="upVideo" ref="upVideo" onChange={this.getVideo} />
                                {
                                    this.state.videoName &&
                                    <div>
                                        <p>
                                            {this.state.videoName}
                                        </p>
                                        <Progress percent={this.state.upDataLine} />
                                    </div>
                                }
                            </div>
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


export default withRouter(Form.create()(ChangeClassHour));