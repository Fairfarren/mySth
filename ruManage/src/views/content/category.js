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
    Popconfirm
} from 'antd';

//懒加载组件
import Bundle from '../../bundle'
const AddCategory = (props) => (
    <Bundle load={() => import('../../components/addCategory')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

const ChangeCategory = (props) => (
    <Bundle load={() => import('../../components/changeCategory')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

class Category extends Component {
    state = {
        page: 1,//页数
        total: 4,//总页数
        columns: [{//表格格式
            title: '一级类别',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '分类别数',
            dataIndex: 'count',
            key: 'count'
        }, {
            title: '编辑',
            dataIndex: 'change',
            key: 'change',
            render: (text, record) => (
                <a onClick={() => {
                    this.setState({
                        changeCategoryVisible: true,
                        changeCategoryJson: JSON.stringify(record)
                    })
                }} type="primary">编辑</a>
            )
        }, {
            title: '查看分类别',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => {
                return (
                    <NavLink to={`/category/small/${record['id']}/${record['name']}`}>查看分类别</NavLink>
                )
            }
        }, {
            title: '推荐状态',
            key: 'is_index',
            render: (text, record) => {
                if (record['is_index']) {
                    return '已推荐'
                } else {
                    return '未推荐'
                }
            }
        }, {
            title: '推荐至首页',
            key: 'qwe',
            render: (text, record) => {
                const true_index =
                    <Popconfirm title="确定取消推荐?"
                        onConfirm={() => {

                        }}
                        onCancel={() => {

                        }}
                        okText="Yes" cancelText="No">
                        <Button type="danger">取消推荐</Button>
                    </Popconfirm>
                const false_index =
                    <Popconfirm title="确定推荐?"
                        onConfirm={() => {

                        }}
                        onCancel={() => {

                        }}
                        okText="Yes" cancelText="No">
                        <Button>推荐</Button>
                    </Popconfirm>
                if (record['is_index']) {
                    return true_index
                } else {
                    return false_index
                }
            }
        }, {
            title: '删除',
            dataIndex: 'delete',
            key: 'delete',
            render: (text, record) => (
                <Popconfirm title="确定删除😱？" onConfirm={() => {
                    console.log(1)
                }} onCancel={() => {
                    console.log(2)
                }} okText="确定🤥" cancelText="取消😘">
                    <Button type="danger">删除</Button>
                </Popconfirm>
            )
        }],
        data: [],//表格数据
        //列表等待
        tableListLoading: true,
        addCategoryVisible: false,
        changeCategoryVisible: false,
        changeCategoryJson: ''
    }
    componentDidMount() {
        this.getCategoryAjax();
    }
    //获取大类列表
    getCategoryAjax = () => {
        const { axios } = this.props;
        this.setState({
            tableListLoading: true
        })
        axios({
            url: '/admin/category',
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = [];
                res.data.category_list.forEach((value, index) => {
                    arr.push({
                        id: value.id + '',
                        name: value.name,
                        count: value.count,
                        is_index: value.is_index
                    })
                })
                setTimeout(() => {
                    this.setState({
                        data: arr,
                        tableListLoading: false
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
    //编辑
    changeCategory = (e) => {
        console.log(e);
    }
    //查看分类别
    lookSmall = (e) => {
        console.log(e);
    }
    render() {
        return (
            <div className="contentBox">
                <div className="contentHeader">
                    类别管理
                </div>
                <div className="contentContent">
                    <Button onClick={() => {
                        this.setState({
                            addCategoryVisible: true
                        })
                    }}>
                        添加类别
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
                    this.state.addCategoryVisible &&
                    <AddCategory
                        axios={this.props.axios}
                        toggle={this.state.addCategoryVisible}
                        closeModal={() => {
                            this.setState({
                                addCategoryVisible: false
                            })
                        }}
                        upDataList={this.getCategoryAjax}
                    />
                }
                {
                    this.state.changeCategoryVisible &&
                    <ChangeCategory
                        axios={this.props.axios}
                        toggle={this.state.changeCategoryVisible}
                        closeModal={() => {
                            this.setState({
                                changeCategoryVisible: false
                            })
                        }}
                        upDataList={this.getCategoryAjax}
                        changeCategoryJson={this.state.changeCategoryJson}
                    />
                }
            </div>
        )
    }
}

export default withRouter(Category);