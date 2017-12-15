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
import moment from 'moment'
import 'moment/locale/zh-cn'

import axios from 'axios'

moment.locale('zh-cn');

//axios设置
axios.defaults.baseURL = 'http://192.168.3.28:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

ReactDOM.render(<App store={store} axios={axios}/>, document.getElementById('root'));
registerServiceWorker();
