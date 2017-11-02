import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './views/hello'
import World from './views/world'
import Show from './views/show'

import axios from 'axios'
import { connect } from 'react-redux';
import { goListAjax } from './redux/action/index'

class App extends Component {
  state = {
    upDownShow: true,
    listShow: false
  }
  componentDidMount () {
    const dispatch = this.props;
    axios.get('http://photo-sync.herokuapp.com/photos?callback=?')
    .then( (res)=> {
      // console.log(res.data);
      dispatch.ListAjax({
        list: [1,2,3,4,5]
      })
      this.setState({
        listShow: true
      })
    })
  }
  render() {
    const dispatch = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <button 
            onClick={
              () => { this.setState({
                upDownShow: !this.state.upDownShow
              }) }
            }>
            upDownShow
          </button>
        </div>
        <div>
          {
            this.state.upDownShow && 
            <div>
              <Hello />
              <World />
              <Show />
            </div>
          }
        </div>
        <ul>
          {
            this.state.listShow 
            ? dispatch.list.map( (value) => {
                return <li key={value}>{value}</li>
              })
            : <li><p>加载中</p></li> 
          }
        </ul>
      </div>
    );
  }
}

function mapState(state,ownProps){
  return state
}
//声明方法，点击的时候去获取return的方法
function mapDispatch (dispatch, ownProps) {
  // console.log(ownProps);
  return {
      ListAjax:(text) => {
          dispatch(goListAjax(text))
      }
  }
}

export default connect(mapState, mapDispatch)(App);
