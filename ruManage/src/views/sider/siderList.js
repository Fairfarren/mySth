//侧边栏
import React, { Component } from 'react'

import {
    NavLink
} from 'react-router-dom'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SiderList extends Component {
    handleClick = (e) => {
        // console.log('click ', e);
    }
    render() {
        const location = window.location.href.split('/')[3] || 'class';
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 200 }}
                defaultSelectedKeys={[location]}
                defaultOpenKeys={['g1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>内容中心</span></span>}>
                    <MenuItemGroup key="g1">
                        <Menu.Item key="class">
                            <NavLink to='/class'>
                                课程管理
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="category">
                            <NavLink to='/category'>
                                类别管理
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="recommend">
                            <NavLink to='/recommend'>
                                推荐位设置
                            </NavLink>
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}

export default SiderList;