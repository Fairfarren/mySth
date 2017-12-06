import React, { Component } from 'react';
//mobx
import { observer } from 'mobx-react';

//router
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

//异步加载组件
import Bundle from './bundle'
//同步加载头部，列表，和登录页
import SiderList from './views/sider/siderList'
import TheHeader from './views/theHeader/theHeader'
import LoginView from './login'
//antd
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

//路由
//登录
// const LoginView = (props) => (
// 	<Bundle load={() => import('./login')}>
// 		{(Demo) => <Demo {...props} />}
// 	</Bundle>
// )
//内容中心/课程管理
const TheClass = (props) => (
	<Bundle load={() => import('./views/content/class')}>
		{(Demo) => <Demo {...props} />}
	</Bundle>
)
//内容中心/类别管理
const Category = (props) => (
	<Bundle load={() => import('./views/content/category')}>
		{(Demo) => <Demo {...props} />}
	</Bundle>
)
//内容中心/推荐位设置
const Recommend = (props) => (
	<Bundle load={() => import('./views/content/recommend')}>
		{(Demo) => <Demo {...props} />}
	</Bundle>
)

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
										<Route path="/" exact render={() => (<Redirect to="/class" />)} />
										<Route path="/class" render={() => (<TheClass axios={this.props.axios} />)} />
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
