import React, { Component } from 'react'
import { 
    withRouter,
    NavLink
} from 'react-router-dom'

//ui框架
import {
    Input,
    Row,
    Col,
    Table,
    Button,
    Modal,
    Popconfirm
} from 'antd';

const Search = Input.Search;

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
            dataIndex: 'smallNumber',
            key: 'smallNumber'
        }, {
            title: '编辑',
            dataIndex: 'change',
            key: 'change',
            render: (text, record) => (
                <a onClick={() => {
                    console.log(record);
                }} type="primary">编辑</a>
            )
        }, {
            title: '查看分类别',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => (
                <NavLink to={`/small/${text}`}>查看分类别</NavLink>
            )
        }, {
            title: '推荐状态',
            dataIndex: 'recommend',
            key: 'recommend'
        }, {
            title: '推荐至首页',
            dataIndex: 'qwe',
            key: 'qwe'
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
        data: []//表格数据
    }
    componentDidMount() {
        this.getCategoryAjax();
    }
    //获取大类列表
    getCategoryAjax = () => {
        const { axios } = this.props;
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
                        name: value.name
                    })
                })
                setTimeout(() => {
                    this.setState({
                        data: arr
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
                    <Button>
                        添加类别
                    </Button>
                </div>
                <div className="contentContent">
                    <Row gutter={20}>
                        <Col span={6}>
                            <Search
                                placeholder="输入要查找的名称"
                                onSearch={value => console.log(value)}
                                enterButton
                            />
                        </Col>
                    </Row>
                </div>
                <div className="contentContent">
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
            </div>
        )
    }
}

export default withRouter(Category);