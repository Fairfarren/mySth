import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//引用路由
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
//组件，home
import Home from './views/home'
//
import Hello from './views/hello'

class App extends Component {
  state = {
    hello: 'world'
  };
  componentWillReceiveProps (nextProps) {
    console.log(nextProps.location);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <NavLink to="/home" activeClassName="colorNav">home</NavLink>
            <NavLink to="/" exact activeClassName="colorNav">hello</NavLink>
            <NavLink to="/hello" activeClassName="colorNav">选中hello了</NavLink>
          </header>
          <Route path="/home" title="qwe" component={Home} />
          <Route path="/" exact render={ () => (
            <Redirect from="/" to="/hello" />
          )}/>
          <Route path="/hello" component={Hello}/>
        </div>
      </Router>
      
      
    );
  }
}

export default App;
