import React, { Component } from 'react';

import {
    withRouter,
    NavLink
} from 'react-router-dom'

import {
    Button,
    Input,
    Modal,
    Icon,
    Table,
    Popconfirm
} from 'antd'

//懒加载组件
import Bundle from '../../bundle'
const AddSmall = (props) => (
    <Bundle load={() => import('../../components/addSmall')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

class Small extends Component {
    state = {
        name: '',
        columns: [{
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '编辑',
            key: 'change',
            render: (text, record) => {
                return (
                    <a>编辑</a>
                )
            }
        }, {
            title: '删除',
            key: 'delete',
            render: (text, record) => {
                return (
                    <Popconfirm title="确定删除?"
                        onConfirm={() => {
                            
                        }}
                        onCancel={() => {

                        }}
                        okText="Yes" cancelText="No">
                        <Button type="danger">删除</Button>
                    </Popconfirm>
                )
            }
        }],//小类列表格式
        data: [],//小类列表数据
        total: 10,//总页数
        page: 1,//当前页
        //列表等待
        tableListLoading: true,
        addSmallVisible: false
    }
    componentDidMount() {
        const { match } = this.props;
        this.setState({
            name: match.params.categoryName
        })
        this.getCategoryAjax();
    }
    //获取小类
    getCategoryAjax = () => {
        const { axios, match } = this.props;
        this.setState({
            tableListLoading: true
        })
        axios({
            url: `/admin/category/${match.params.categoryId}/small`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            this.setState({
                tableListLoading: false
            })
            if (res.data.status_code === 200) {
                if (res.data.small_list.length > 0) {
                    let arr = [];
                    res.data.small_list.forEach((value, index) => {
                        arr.push({
                            category: value.category,
                            id: value.id,
                            name: value.name
                        })
                    })
                    setTimeout(() => {
                        this.setState({
                            data: arr,
                        })
                    }, 10)
                }
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
    render() {
        return (
            <div className="contentBox">
                <div className="contentHeader">
                    二级类别管理
                </div>
                <div className="contentHeaderButton">
                    <h3>
                        大类名称：{this.state.name}
                    </h3>
                </div>
                <div className="contentContent">
                    <Button icon="rollback" className="goBack" onClick={() => {
                        this.props.history.goBack(-1)
                    }}>
                        返回
                    </Button>
                    <Button onClick={() => {
                        this.setState({
                            addSmallVisible: true
                        })
                    }}>
                        添加二级类别
                    </Button>
                </div>
                <div className="contentContent">
                    {/* 表格 */}
                    <Table
                        loading={this.state.tableListLoading}
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
                    this.state.addSmallVisible &&
                    <AddSmall
                        axios={this.props.axios}
                        toggle={this.state.addSmallVisible}
                        closeModal={() => {
                            this.setState({
                                addSmallVisible: false
                            })
                        }}
                        upDataList={this.getCategoryAjax}
                    />
                }
            </div>
        )
    }
}

export default withRouter(Small);