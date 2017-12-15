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
import { setTimeout } from 'core-js/library/web/timers';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

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

class ChangeClass extends Component {
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
        lecturer: [{
            id: '-1',
            name: '暂无数据'
        }],
        isLecturer_list: [{
            id: '-1',
            name: '暂无数据'
        }],
        isPersonal: false,
        //end合作机构，讲师
        classImgSrc: '',//课程图片
        time: null,//改变时间
        day: null,
        //课程内容获取到的一些
        name: '',
        publisherChange: '',
        lecturerChange: '',
        lecturerChange_id: '',
        date: '',
        categoryChange: '',
        smallChange: '',
        smallChange_id: '',
        price: '',
        target: '',
        crowd: '',
        desc: ''

    }
    componentDidMount() {
        const { axios } = this.props;
        axios.all([this.getCategoryAjax(), this.getPublisherAjax(), this.getPersonalAjax()])
            .then(axios.spread((res01, res02, res03) => {

            }));
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
    //获取课程详情
    getClassDetailed = () => {
        const { axios } = this.props;
        axios({
            url: `/admin/course/${this.props.classId}`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                this.setState({
                    name: res.data.data.name,
                    publisherChange: res.data.data.publisher,
                    lecturerChange: res.data.data.lecturer,
                    lecturerChange_id: res.data.data.lecturer_id + '',
                    date: res.data.data.date,
                    categoryChange: res.data.data.category,
                    smallChange: res.data.data.small,
                    smallChange_id: res.data.data.small_id + '',
                    price: res.data.data.price,
                    target: res.data.data.target,
                    crowd: res.data.data.crowd,
                    desc: res.data.data.desc,
                    classImgSrc: res.data.data.img,
                    isPersonal: res.data.data.publisher ? false : true
                })
                let arrLectuer = this.state.lecturer;
                arrLectuer.unshift({
                    id: res.data.data.lecturer_id + '',
                    name: res.data.data.lecturer
                })
                let arrSmall = this.state.small;
                arrSmall.unshift({
                    id: res.data.data.small_id + '',
                    name: res.data.data.small
                })
                setTimeout(() => {
                    this.setState({
                        small: arrSmall,
                        lecturer: arrLectuer
                    })
                    this.props.form.setFieldsValue({
                        lecturer: this.state.lecturer[0].id,
                        small: this.state.small[0].id
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
            if (res.data.status_code === 200) {
                let arr = [];
                res.data.data.forEach((value, index) => {
                    arr.push({
                        date: value.data,
                        desc: value.desc,
                        id: value.id + '',
                        name: value.name
                    })
                })
                setTimeout(() => {
                    this.setState({
                        publisher: arr
                    })
                    this.getLecturerAjax(this.state.publisher[0].id);
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
    //获取讲师
    getLecturerAjax = (value) => {
        if (this.state.publisher[0].id < 0) {
            return;
        }
        const { axios } = this.props;
        let index = '';
        if (!value) {
            index = this.state.publisher[0].id;
        } else {
            index = value;
        }
        axios({
            url: `/admin/lecturer?publisher_id=${index}`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = [];
                if (res.data.lecturer_list.length > 0) {
                    res.data.lecturer_list.forEach((value, index) => {
                        arr.push({
                            avatar: value.avatar,
                            date: value.date,
                            desc: value.desc,
                            id: value.id + '',
                            name: value.name
                        })
                    })
                } else {
                    arr = [{
                        id: '-1',
                        name: '暂无数据'
                    }]
                }
                setTimeout(() => {
                    this.setState({
                        lecturer: arr
                    })
                    this.props.form.setFieldsValue({
                        lecturer: this.state.lecturer[0].id
                    })
                    //没有lecturerChange说明没有获取过详情
                    if (!this.state.lecturerChange) {
                        this.getClassDetailed();
                    }
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
    //获取讲师，全部列表
    getPersonalAjax = () => {
        const { axios } = this.props;
        axios({
            url: `/admin/lecturer`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = [];
                if (res.data.lecturer_list.length > 0) {
                    res.data.lecturer_list.forEach((value, index) => {
                        arr.push({
                            avatar: value.avatar,
                            date: value.date,
                            desc: value.desc,
                            id: value.id + '',
                            name: value.name
                        })
                    })
                } else {
                    arr = [{
                        id: '-1',
                        name: '暂无数据'
                    }]
                }
                setTimeout(() => {
                    this.setState({
                        isLecturer_list: arr
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
                    this.props.form.setFieldsValue({
                        small: this.state.small[0].id
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
                let formData = new FormData();
                formData.append('name', values.name);
                let time = state.day ? `${state.day} ${state.time}` : state.date
                formData.append('time', time);
                formData.append('target', values.target);
                formData.append('crowd', values.crowd);
                if (values.price > 0) {
                    // isToll = true;
                    formData.append('is_toll', true);
                    formData.append('price', values.price);
                } else {
                    // isToll = false;
                    formData.append('is_toll', false);
                }
                
                formData.append('desc', values.desc);
                if (state.isPersonal) {
                    formData.append('lecturer_id', values.isPersonal);
                } else {
                    formData.append('lecturer_id', values.lecturer);
                }
                // formData.append('is_selection', values.is_selection);//是否推荐
                formData.append('small_id', values.small);
                // formData.append('publisher_id', values.publisher_id);
                let imgFile = this.refs.classimgFile;
                if (imgFile.files[0]) {
                    formData.append('img', imgFile.files[0]);
                }
                axios({
                    url: `/admin/course/${this.props.classId}`,
                    method: 'put',
                    headers: {
                        'Authorization': sessionStorage.token,
                        'Content-Type': 'multipart/form-data'
                    },
                    data: formData
                }).then((res) => {
                    if (res.data.status_code === 201) {
                        const that = this;
                        Modal.success({
                            title: '成功',
                            content: '修改成功',
                            onOk() {
                                that.setState({
                                    visible: false,
                                });
                                that.props.closeModal();
                                that.props.upDataList();
                            }
                        })
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
            } else {
                this.setState({
                    submitLoging: false
                })
            }
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
        const lecturer = this.state.lecturer.map((value, index) => {
            return (
                <Option key={value.id} value={value.id}>{value.name}</Option>
            )
        })
        const isLecturer_list = this.state.isLecturer_list.map((value, index) => {
            return (
                <Option key={value.id} value={value.id}>{value.name}</Option>
            )
        })
        return (
            <div>
                <Modal
                    title="修改课程"
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
                                }],
                                initialValue: this.state.name
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
                                initialValue: this.state.publisherChange ? '0' : '1'
                            })(
                                <Radio.Group onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === '0') {
                                        this.setState({
                                            isPersonal: false
                                        })
                                    } else {
                                        this.setState({
                                            isPersonal: true
                                        })
                                    }
                                }}>
                                    <Radio key="0" value="0">机构</Radio>
                                    <Radio key="1" value="1">个人讲师</Radio>
                                </Radio.Group>
                                )}
                        </FormItem>
                        {
                            this.state.isPersonal ?
                                <FormItem
                                    {...formItemLayout}
                                    label="个人讲师"
                                >
                                    {getFieldDecorator('isPersonal', {
                                        initialValue: this.state.lecturerChange_id,
                                    })(
                                        <Select>
                                            {isLecturer_list}
                                        </Select>
                                        )}
                                </FormItem> :
                                <div>
                                    <FormItem
                                        {...formItemLayout}
                                        label="合作机构"
                                    >
                                        {getFieldDecorator('publisher', {
                                            initialValue: this.state.publisherChange,
                                        })(
                                            <Select onChange={this.getLecturerAjax}>
                                                {publisher}
                                            </Select>
                                            )}
                                    </FormItem>

                                    <FormItem
                                        {...formItemLayout}
                                        label="合作讲师"
                                    >
                                        {getFieldDecorator('lecturer', {
                                            initialValue: this.state.lecturer[0].id,
                                        })(
                                            <Select>
                                                {lecturer}
                                            </Select>
                                            )}
                                    </FormItem>
                                </div>
                        }


                        {/* <FormItem
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
                        </FormItem> */}

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
                            {
                                this.state.date.length > 0 &&
                                <div>
                                    <DatePicker
                                        defaultValue={moment(this.state.date.split(' ')[0], 'YYYY-MM-DD')}
                                        onChange={this.dayChange}
                                    />
                                    <TimePicker
                                        defaultValue={moment(this.state.date.split(' ')[1], 'HH:mm:ss')}
                                        TimePicker
                                        onChange={this.timeChange}
                                    />
                                </div>
                            }
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="选择大类"
                        >
                            {getFieldDecorator('category', {
                                initialValue: this.state.categoryChange,
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
                                }],
                                initialValue: this.state.price
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
                                }],
                                initialValue: this.state.target
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
                                }],
                                initialValue: this.state.crowd
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
                                }],
                                initialValue: this.state.desc
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


export default Form.create()(ChangeClass);