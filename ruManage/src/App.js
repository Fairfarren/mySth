import React, { Component } from 'react';
//mobx
import { observer } from 'mobx-react';

//router
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
	Redirect
} from 'react-router-dom'
//路由
//登录页面
import LoginView from './login'
//头部
import TheHeader from './views/theHeader/theHeader'
//侧边栏按钮
import SiderList from './views/sider/siderList'

import Class from './views/content/class'
import Category from './views/content/category'
import Recommend from './views/content/recommend'

//antd
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


@observer
class App extends Component {
	state = {
		layoutHeight: ''
	};
	componentDidMount() {
		let height = `${document.documentElement.clientHeight - 64}px`;
		this.setState({
			layoutHeight: height
		})
		//给user.token赋值
		if (sessionStorage.token) {
			this.props.store.user.token = sessionStorage.token;
		}
	}
	render() {
		const { user } = this.props.store
		return (
			<Router >
				{
					user.token ?
						<Layout className="App">
							<Header>
								<TheHeader store={this.props.store} />
							</Header>
							<Layout style={{ minHeight: this.state.layoutHeight }}>
								{/* 侧边栏 */}
								<Sider>
									<SiderList />
								</Sider>
								{/* 内容 */}
								<Content>
									<Switch>
										<Route path="/" exact render={ ()=>( <Redirect to="/class" />)} />
										<Route path="/class" component={Class} />
										<Route path="/category" component={Category} />
										<Route path="/recommend" component={Recommend} />
									</Switch>
								</Content>
							</Layout>
							{/* <Footer>Footer</Footer> */}
						</Layout> :
						<LoginView store={this.props.store} axios={this.props.axios} />
				}
			</Router>
		);
	}
}

export default App;
