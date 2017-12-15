import React, { Component } from 'react';
//mobx
import { observer } from 'mobx-react';

//router
import {
	HashRouter as Router,
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
//内容中心/课程管理/章节管理
const Chapter = (props) => (
	<Bundle load={() => import('./views/content/chapter')}>
		{(Demo) => <Demo {...props} />}
	</Bundle>
)
//内容中心/课程管理/章节管理/课时管理
const ClassHour = (props) => (
	<Bundle load={() => import('./views/content/classHour')}>
		{(Demo) => <Demo {...props} />}
	</Bundle>
)
//内容中心/类别管理
const Category = (props) => (
	<Bundle load={() => import('./views/content/category')}>
		{(Demo) => <Demo {...props} />}
	</Bundle>
)
//内容中心/二级分类列表
const Small = (props) => (
	<Bundle load={() => import('./views/content/small')}>
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
										<Route path="/class" exact render={() => (<TheClass axios={this.props.axios} />)} />
										<Route path="/class/chapter/:classId/:className" exact render={() => (<Chapter axios={this.props.axios} />)} />
										<Route path="/class/chapter/:classId/classHour/:chapterId/:chapterName" exact render={() => (<ClassHour axios={this.props.axios}/>)}/>
										<Route path="/category" exact render={() => (<Category axios={this.props.axios} />)} />
										<Route path="/category/small/:categoryId/:categoryName" exact render={() => (<Small axios={this.props.axios} />)} />
										<Route path="/recommend" render={() => (<Recommend axios={this.props.axios} />)} />
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
