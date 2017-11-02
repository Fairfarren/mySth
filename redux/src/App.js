import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './views/hello'
import World from './views/world'
import Show from './views/show'

class App extends Component {
  state = {
    upDownShow: true
  }
  render() {
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
      </div>
    );
  }
}

export default App;
