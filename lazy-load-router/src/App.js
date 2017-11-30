import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//router
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom'
//异步加载组件
import Bundle from './bunble'

// import dome1Model from 'bundle-loader?lazy!./views/demo1'

const Demo1 = (props) => (
	<Bundle load={() => import('./views/demo1')}>
		{(Demo1) => <Demo1 {...props} />}
	</Bundle>
)
const Demo2 = (props) => (
	<Bundle load={() => import('./views/demo2')}>
		{(Demo2) => <Demo2 {...props} />}
	</Bundle>
)
const Demo3 = (props) => (
	<Bundle load={() => import('./views/demo3')}>
		{(Demo3) => <Demo3 {...props} />}
	</Bundle>
)


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<div>
						<NavLink to="/demo1">demo1</NavLink>
						<NavLink to="/demo2">demo2</NavLink>
						<NavLink to="/demo3">demo3</NavLink>
					</div>
					<Route path="/demo1" component={Demo1} />
					<Route path="/demo2" component={Demo2} />
					<Route path="/demo3" component={Demo3} />
				</div>
			</Router>
		);
	}
}

export default App;
