import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'
import World from './components/world'


class App extends Component {
  state = {
    title: 'world',
    page: true
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
  render() {
    return (
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
      </div>
    );
  }
}

export default App;
