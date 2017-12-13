import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//全局css
import './App.scss'
//mobx
import store from './mobx/index'
//antd
// import DatePicker from 'antd/lib/date-picker';
import 'antd/dist/antd.css';

import axios from 'axios'

//axios设置
axios.defaults.baseURL = 'http://192.168.3.28:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

ReactDOM.render(<App store={store} axios={axios}/>, document.getElementById('root'));
registerServiceWorker();
