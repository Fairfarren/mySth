import React, { Component } from 'react'

import {
    withRouter,
} from 'react-router-dom'

//ui框架
import {
    Table,
    Button,
    Modal,
    Popconfirm
} from 'antd';

//懒加载组件
import Bundle from '../../bundle'
import { setTimeout } from 'core-js/library/web/timers';

const AddClassHour = (props) => (
    <Bundle load={() => import('../../components/addClassHour')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

const ChangeClassHour = (props) => (
    <Bundle load={() => import('../../components/changeClassHour')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

class ClassHour extends Component {
    state = {
        //课程id和名称
        id: '',
        name: '',
        //表格格式
        columns: [{
            title: '顺序',
            dataIndex: 'number',
            key: 'number'
        }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '上传时间',
            dataIndex: 'date',
            key: 'date'
        }, {
            title: '编辑',
            key: 'change',
            render: (text, record) => {
                return (
                    <a onClick={() => {
                        this.setState({
                            changeClassHourVisible: true,
                            changeClassHourJson: JSON.stringify(record)
                        })
                    }}>编辑</a>
                )
            }
        }, {
            title: '查看视频',
            key: 'video',
            render: (text, record) => {
                return (
                    <a href={`${record['video']}`} target="_blank">查看</a>
                )
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <Popconfirm title="确定删除?"
                        onConfirm={() => {
                            this.deleteClassHourAjax(record['id']);
                        }}
                        onCancel={() => {

                        }}
                        okText="Yes" cancelText="No">
                        <Button type="danger">删除</Button>
                    </Popconfirm>
                )
            }
        }],
        data: [],//表格数据
        page: 1,
        total: 10,
        //列表等待
        tableListLoading: true,
        //弹窗
        addClassHourVisible: false,
        changeClasshourVisible: false,
        changeClassHourJson: ''
    }
    componentDidMount() {
        const { match } = this.props;
        this.setState({
            id: match.params.chapterId,
            name: match.params.chapterName
        })
        setTimeout(() => {
            this.getClassHourLishAjax();
        }, 10)
    }
    //删除课时
    deleteClassHourAjax = () => {

    }
    //获取课时列表
    getClassHourLishAjax = () => {
        const { axios } = this.props;
        axios({
            url: `/admin/chapter/${this.state.id}/lesson`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                if (res.data.data.length > 0) {
                    let arr = [];
                    res.data.data.forEach((value, index) => {
                        arr.push({
                            chapter: value.chapter,
                            date: value.date,
                            id: value.id + '',
                            name: value.name,
                            number: value.number,
                            video: value.video,
                            video_time: value.video_time
                        })
                    })
                    setTimeout(() => {
                        this.setState({
                            data: arr
                        })
                    }, 10)
                }
            } else {
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
    }
    render() {
        return (
            <div className="contentBox">
                <div className="contentHeader">
                    课时管理
                </div>
                <div className="contentHeaderButton">
                    <h3>
                        章节名称：{this.state.name}
                    </h3>
                </div>
                <div className="contentHeaderButton">
                    <Button icon="rollback" className="goBack" onClick={() => {
                        this.props.history.goBack(-1)
                    }}>
                        返回
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            addClassHourVisible: true
                        })
                    }}>
                        添加课时
                    </Button>
                </div>
                <div className="contentContent" id="classListTable">
                    {/* 表格 */}
                    <Table
                        rowKey="id"
                        columns={this.state.columns}
                        dataSource={this.state.data}
                        pagination={{
                            defaultCurrent: this.state.page,//当前页码
                            defaultPageSize: 10,//当前条数
                            total: this.state.total//总页数
                        }}
                        onChange={(tableList) => {
                            this.setState({
                                page: tableList.current
                            })
                        }} />
                </div>
                {/* 弹窗 */}
                {
                    this.state.addClassHourVisible &&
                    <AddClassHour
                        axios={this.props.axios}
                        toggle={this.state.addClassHourVisible}
                        closeModal={() => {
                            this.setState({
                                addClassHourVisible: false
                            })
                        }}
                        upDataList={this.getClassHourLishAjax}
                    />
                }
                {
                    this.state.changeClassHourVisible &&
                    <ChangeClassHour
                        axios={this.props.axios}
                        toggle={this.state.changeClassHourVisible}
                        closeModal={() => {
                            this.setState({
                                changeClassHourVisible: false
                            })
                        }}
                        changeClassHourJson={this.state.changeClassHourJson}
                        upDataList={this.getClassHourLishAjax}
                    />
                }
            </div>
        )
    }
}

export default withRouter(ClassHour)