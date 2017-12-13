import React, { Component } from 'react';

import {
    withRouter,
    NavLink
} from 'react-router-dom'

import {
    Button,
    Row,
    Col,
    Input,
    Modal,
    Icon,
    Table
} from 'antd'

const Search = Input.Search;

class Small extends Component {
    state = {
        columns: [],//小类列表格式
        data: [],//小类列表数据
        total: 10,//总页数
        page: 1,//当前页
    }
    componentDidMount() {
        this.getCategoryAjax();
    }
    //获取小类
    getCategoryAjax = () => {
        const { axios, match } = this.props;
        const id = match.params.id;
        axios({
            url: `/admin/category/${id}/small`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {

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
                <div className="contentContent">
                    <NavLink to="/category">
                        <Button type="primary">
                            <Icon type="left" />返回
                        </Button>
                    </NavLink>
                </div>
                <div className="contentContent">
                    <Button>
                        添加二级类别
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

export default withRouter(Small);