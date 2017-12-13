import React, { Component } from 'react'

import {
    Row,
    Col,
    Icon,
    Menu,
    Dropdown
} from 'antd'




class TheHeader extends Component {
    state = {
        user: 123
    }
    //退出
    signOut = () => {
        const { store } = this.props;
        store.user.name = '';
        store.user.token = '';
        sessionStorage.removeItem('token');
    }
    //下拉
    menu = (
        <Menu onClick={this.signOut}>
            <Menu.Item key="1">退出登录</Menu.Item>
        </Menu>
    )
    render() {
        return (
            <div id="header">
                <Row type="flex" justify="space-between" align="middle">
                    <Col span={4}>
                        <img src={require('../../static/images/0.png')} alt="logo" />
                    </Col>
                    <Col span={1}>
                        <Dropdown overlay={this.menu}>
                            <Icon 
                                type="user" 
                                className="userImg" 
                                style={{color: '#6AB6F1'}}/>
                        </Dropdown>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default TheHeader;