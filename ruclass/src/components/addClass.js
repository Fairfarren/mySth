import React, { Component } from 'react'
import {
    Modal,
    Form,
    Input,
    Button,
    Row,
    Col,
    Radio,
    Select,
    Icon,
    TimePicker,
    DatePicker
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
const Option = Select.Option;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
//end表单方法

class AddClass extends Component {
    state = {
        submitLoging: false,
        //弹窗
        visible: this.props.toggle,
        //类别选择
        category: this.props.category,
        small: [{
            id: '-1',
            name: '暂无数据'
        }],
        //end类别选择
        //合作机构，讲师
        publisher: [{
            id: '-1',
            name: '暂无数据'
        }],
        //end合作机构，讲师
        classImgSrc: '',//课程图片
        time: null,//改变时间
        day: null
    }
    componentDidMount() {
        this.getCategoryAjax();
        this.getPublisherAjax();
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
    }
    //获取机构列表
    getPublisherAjax = () => {
        const { axios } = this.props;
        axios({
            url: '/admin/publisher',
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.status_code === 200) {

            } else {
                Modal.warning({
                    title: '警告',
                    content: res.msg,
                });
            }
        }).catch((error) => {
            console.log(error);
            Modal.error({
                title: '出错了！',
                content: '网络连接错误或者服务器无响应',
            });
        })
    }
    //获取小类，大类直接从父级拿
    getCategoryAjax = (value) => {
        if (this.state.category[0].id < 0) {
            return;
        }
        const { axios } = this.props;
        let index = '';
        if (!value) {
            index = this.state.category[0].id
        } else {
            index = value;
        }
        axios({
            url: `/admin/category/${index}/small`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = [];
                if (res.data.small_list.length > 0) {
                    res.data.small_list.map((value, index) => {
                        arr.push({
                            id: value.id + '',
                            name: value.name
                        })
                        return value;
                    })
                } else {
                    arr = [{
                        id: '-1',
                        name: '暂无数据'
                    }]
                }
                setTimeout(() => {
                    this.setState({
                        small: arr
                    })
                }, 10)
            } else {
                Modal.warning({
                    title: '警告',
                    content: res.msg,
                });
            }
        }).catch((error) => {
            console.log(error);
            Modal.error({
                title: '出错了！',
                content: '网络连接错误或者服务器无响应',
            });
        })
    }
    //修改，添加课程图片
    fileClassImgFileChange = (e) => {
        const file = e.target.files || e.dataTransfer.files;
        if (!file[0]) {
            this.setState({
                classImgSrc: ''
            })
            return;
        }
        if (file[0].type !== 'image/gif' && file[0].type !== 'image/jpg' && file[0].type !== 'image/png' && file[0].type !== 'image/bmp' && file[0].type !== 'image/jpeg') {
            this.$alert('请选择正确的图片格式', '错误', {
                type: 'warning'
            })
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        //加载函数时将64位格式的图片输入到img里面
        reader.onload = (evt) => {
            // console.log(evt.target.result)
            this.setState({
                classImgSrc: evt.target.result
            })
        }
    }
    //改变时间
    timeChange = (date, dateString) => {
        this.setState({
            time: dateString
        });
        console.log(dateString);
    }
    dayChange = (date, dateString) => {
        this.setState({
            day: dateString
        })
        console.log(dateString)
    }

    //表单提交
    handleSubmit = (e) => {
        e.preventDefault();
        const { axios } = this.props;
        const { state } = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    submitLoging: true
                })
            } else {
                this.setState({
                    submitLoging: false
                })
            }
            let formData = new FormData();
            formData.append('name', values.name);
            let time = `${state.day} ${state.time}`
            formData.append('time', time);
            formData.append('target', values.target);
            formData.append('crowd', values.crowd);
            let isToll = '';
            if (values.price <= 0) {
                isToll = true;
            } else {
                isToll = false;
            }
            formData.append('is_toll', isToll);
            formData.append('desc', values.desc);
            formData.append('lecturer', values.lecturer);
            formData.append('is_selection', values.is_selection);
            formData.append('small_id', values.small);
            formData.append('publisher_id', values.publisher_id);
            let imgFile = this.refs.classimgFile;
            formData.append('img', imgFile.files[0]);
            axios({
                url: '/admin/course',
                method: 'post',
                headers: {
                    'Authorization': sessionStorage.token,
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            }).then((res) => {
                if (res.data.status_code === 200) {

                } else {
                    this.setState({
                        submitLoging: false
                    })
                    Modal.warning({
                        title: '警告',
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
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError } = this.props.form;
        const categoryList = this.state.category.map((value, index) => {
            return (
                <Option key={index} value={value.id}>{value.name}</Option>
            )
        })
        const smallList = this.state.small.map((value, index) => {
            return (
                <Option key={index} value={value.id}>{value.name}</Option>
            )
        })
        const publisher = this.state.publisher.map((value, index) => {
            return (
                <Option key={index} value={value.id}>{value.name}</Option>
            )
        })
        return (
            <div>
                <Modal
                    title="添加课程"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={false}
                >
                    <Form onSubmit={this.handleSubmit} id="classForm">
                        <FormItem
                            {...formItemLayout}
                            label="课程标题"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '请输入课程标题',
                                }]
                            })(
                                <Input placeholder="请输入课程标题" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="课程图片"
                            hasFeedback
                        >
                            {this.state.classImgSrc && <img id="classImg" src={this.state.classImgSrc} alt="课程图片" width="200px" height="200px" style={{ verticalAlign: 'top' }} />}
                            <input type="file" id="classImgFile" ref="classimgFile" onChange={this.fileClassImgFileChange} />
                            <label htmlFor="classImgFile" id="classImgFileLabel">
                                {!this.state.classImgSrc ?
                                    <Icon type="plus" className="avatar-uploader-trigger" /> :
                                    <Icon type="reload" className="avatar-uploader-trigger" />
                                }
                            </label>

                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="课程来源"
                        >
                            {getFieldDecorator('publisher_id', {
                                initialValue: '0'
                            })(
                                <Radio.Group>
                                    <Radio key="0" value="0">机构</Radio>
                                    <Radio key="1" value="1">个人讲师</Radio>
                                </Radio.Group>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="合作机构"
                        >
                            {getFieldDecorator('publisher', {
                                initialValue: this.state.publisher[0].id,
                            })(
                                <Select>
                                    {publisher}
                                </Select>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="合作讲师"
                        >
                            {getFieldDecorator('lecturer', {
                                initialValue: '0',
                            })(
                                <Select>
                                    <Option key="0" value="0">讲师</Option>
                                    <Option key="1" value="1">僵尸</Option>
                                </Select>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="是否推荐"
                        >
                            {getFieldDecorator('is_selection', {
                                initialValue: true,
                            })(
                                <Radio.Group>
                                    <Radio key="0" value={true}>推荐</Radio>
                                    <Radio key="1" value={false}>不推荐</Radio>
                                </Radio.Group>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="类型"
                        >
                            {getFieldDecorator('theType', {
                                initialValue: '0',
                            })(
                                <Radio.Group>
                                    <Radio value="0">直播</Radio>
                                    <Radio value="1">录播</Radio>
                                </Radio.Group>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="授课时间"
                            hasFeedback
                        >
                            <DatePicker onChange={this.dayChange} />
                            <TimePicker TimePicker onChange={this.timeChange} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="选择大类"
                        >
                            {getFieldDecorator('category', {
                                initialValue: this.state.category[0].id,
                            })(
                                <Select onChange={this.getCategoryAjax}>
                                    {categoryList}
                                </Select>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="选择小类"
                        >
                            {getFieldDecorator('small', {
                                initialValue: this.state.small[0].id,
                            })(
                                <Select>
                                    {smallList}
                                </Select>
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="价格(元)"
                            hasFeedback
                        >
                            {getFieldDecorator('price', {
                                rules: [{
                                    required: true, message: '输入价格',
                                }]
                            })(
                                <Input placeholder="输入价格" type="number" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="课程目标"
                            hasFeedback
                        >
                            {getFieldDecorator('target', {
                                rules: [{
                                    required: true, message: '输入课程目标',
                                }]
                            })(
                                <Input placeholder="输入课程目标" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="适合人群"
                            hasFeedback
                        >
                            {getFieldDecorator('crowd', {
                                rules: [{
                                    required: true, message: '输入适合人群',
                                }]
                            })(
                                <Input placeholder="输入适合人群" />
                                )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="课程简介"
                            hasFeedback
                        >
                            {getFieldDecorator('desc', {
                                rules: [{
                                    required: true, message: '请输入课程简介',
                                }]
                            })(
                                <Input type="textarea" style={{ resize: 'none' }} />
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


export default Form.create()(AddClass);