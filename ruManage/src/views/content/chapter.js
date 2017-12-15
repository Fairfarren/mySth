import React, { Component } from 'react'

import {
    withRouter,
    NavLink
} from 'react-router-dom'

//ui框架
import {
    Table,
    Button,
    Modal,
    Popconfirm,
} from 'antd';

//懒加载组件
import Bundle from '../../bundle'
const AddChapter = (props) => (
    <Bundle load={() => import('../../components/addChapter')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)
const ChangeChapter = (props) => (
    <Bundle load={() => import('../../components/changeChapter')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

class Chapter extends Component {
    state = {
        //课程id和名称
        id: '',
        chapterId: '',
        name: '',
        //表格格式
        columns: [{
            title: '顺序',
            dataIndex: 'number',
            key: 'number'
        }, {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '编辑',
            key: 'changeName',
            render: (text, record) => {
                return (
                    <a onClick={() => {
                        this.setState({
                            chapterId: record['id'],
                            changeChapterVisible: true,
                            changeChapterJson: JSON.stringify(record)
                        })
                    }}>编辑</a>
                )
            }
        }, {
            title: '查看课时',
            key: 'look',
            render: (text, record) => {
                const { match } = this.props;
                return (
                    <NavLink to={`/class/chapter/${match.params.classId}/classHour/${record['id']}/${record['name']}`}>查看</NavLink>
                )
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <Popconfirm title="确定删除?"
                        onConfirm={() => {
                            this.deleteChapterAjax(record['id']);
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
        addChapterVisible: false,
        changeChapterVisible: false,
        changeChapterJson: ''
    }
    componentDidMount() {
        const { match } = this.props;
        this.setState({
            id: match.params.classId,
            name: match.params.className
        })
        setTimeout(() => {
            this.getChapterListAjax();
        }, 10)
    }
    deleteChapterAjax = (id) => {

    }
    //获取章节列表
    getChapterListAjax = () => {
        const { axios } = this.props;
        this.setState({
            tableListLoading: true
        })
        axios({
            url: `/admin/course/${this.state.id}/chapter`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = [];
                res.data.chapter_list.forEach((value, index) => {
                    arr.push({
                        id: value.id + '',
                        name: value.name,
                        number: value.number
                    })
                })
                setTimeout(() => {
                    this.setState({
                        data: arr
                    })
                }, 10)
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
                    章节管理
                </div>
                <div className="contentHeaderButton">
                    <h3>
                        课程名称：{this.state.name}
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
                            addChapterVisible: true
                        })
                    }}>
                        添加章节
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
                    this.state.addChapterVisible &&
                    <AddChapter
                        axios={this.props.axios}
                        toggle={this.state.addChapterVisible}
                        closeModal={() => {
                            this.setState({
                                addChapterVisible: false
                            })
                        }}
                        upDataList={this.getChapterListAjax}
                    />
                }
                {
                    this.state.changeChapterVisible &&
                    <ChangeChapter
                        axios={this.props.axios}
                        toggle={this.state.changeChapterVisible}
                        closeModal={() => {
                            this.setState({
                                changeChapterVisible: false
                            })
                        }}
                        upDataList={this.getChapterListAjax}
                        changeChapterJson={this.state.changeChapterJson}
                    />
                }
            </div>
        )
    }
}

export default withRouter(Chapter)