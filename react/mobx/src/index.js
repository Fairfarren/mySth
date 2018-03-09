import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//全局css
import './App.scss'
//mobx
import store from './mobx/index'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
