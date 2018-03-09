import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//引用路由
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  Prompt
} from 'react-router-dom'

import Hello from './components/hello'
import World from './components/world'
import Children1 from './components/children1'
import Children2 from './components/children2'

//路由
import Dom1 from './views/Dom1'
import Dom2 from './views/Dom2'
import Dom3 from './views/Dom3'


class App extends Component {
  state = {
    title: 'world',
    page: true,
    inputValue: 1
  }
  qwe = () => {
    this.setState({
      title: this.state.title == 'world' ? 'hello' : 'world'
    })
  };
  changePage = () => {
    if(this.state.page){
      return (
        <Hello title={this.state.title}>
          <span>qwe</span>
          <span>zxc</span>
        </Hello>
      )
    }else{
      return <World />
    }
  }
  fairthChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  upF = (value) => {
    console.log(value);
    this.setState({
      inputValue: value
    })
  }
  downF = (value) => {
    this.setState({
      inputValue: value
    })
  }
  childrenChangeInput = (value) => {
    this.setState({
      inputValue: value
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <p onClick={this.qwe}>click</p>
          <p>{this.state.title}</p>
          <p>
            <button onClick={ ()=>{ this.setState({ page: true }) }}>show hello</button>
            <button onClick={ ()=>{ this.setState({ page: false }) }}>show world</button>
          </p>
          {
            this.changePage()
          }
          <h1>下面是路由</h1>
          <div>
            <NavLink activeClassName="navColor" to="/dom1/123">dom1</NavLink>
            <NavLink activeClassName="navColor" to={{ pathname:'/dom2/456', search:'?name=lyk'}}>dom2</NavLink>
            <NavLink isActive={ (match, location)=> { console.log(match); console.log(location); return match}} activeStyle={{fontSize: '30px'}} activeClassName="navColor" replace to="/dom3/789">dom3</NavLink>
            <NavLink to="/qwe/ewq">一个匹配不到的标签</NavLink>
            <NavLink to="/asd">重定向/asd -> /dom1</NavLink>
          </div>
          <Switch>
            <Route path="/dom1/:id" component={Dom1} />
            <Route path="/dom2/:id" component={Dom2} />
            <Route path="/dom3/:id" component={Dom3} />
            <Route path="/asd" render={ ()=>( <Redirect to="/dom1/123" />)} />
            <Route path="/:id" render={ (location) => (<div>Hello React-router.id = {location.match.params.id}</div>)}/>
          </Switch>
          <Prompt message={ ()=>{ console.log('bye')}} />
          <div>
            <input name="children" value={this.state.inputValue} onChange={this.fairthChange}/>
          </div>
          <Children1 
            title={this.state.inputValue}
            onUp={this.upF}
            onDown={this.downF}/>
          <Children2 
            title={this.state.inputValue}
            onInputChange={this.childrenChangeInput}/>
        </div>
      </Router>
    );
  }
}

export default App;
