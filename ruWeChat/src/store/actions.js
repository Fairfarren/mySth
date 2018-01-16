import axios from 'axios'
import { Toast } from 'vant'

axios.defaults.baseURL = 'http://www.ruketang.com'
// axios.defaults.baseURL = 'http://tao.liu:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

// 获取课程信息
export const GET_CLASS_AJAX = ({ commit }, id) => {
  return new Promise(function (resolve, reject) {
    axios.get(`/wx/course_info?course_id=${id}`).then(res => {
      if (res.data.status_code === 200) {
        // this.theClass = res.data.data
        commit('SETCLASS', res.data.data)
        // Promise返回
        resolve(res.data.data)
      } else if (res.data.status_code === 401) {
        commit('NOW401')
      } else {
        Toast.fail(res.data.msg)
      }
    }).catch(error => {
      console.log(error)
      Toast.fail('网络连接错误')
    })
  })
}

// 获取用户信息登录
export const GET_USER_INFO = ({ commit }) => {
  axios.get('/wx/profile').then(res => {
    if (res.data.status_code === 200) {
      commit('SETUSER', res.data.data)
    } else if (res.data.status_code === 401) {
      commit('NOW401')
    }
  }).catch(error => {
    console.log(error)
  })
}

// 获取微信配置
export const WX_CONFIG_AJAX = ({ commit }, data) => {
  return new Promise(function (resolve, reject) {
    axios.get('/wx/share', {
      params: {
        url: encodeURIComponent(window.location.href.split('#')[0])
      }
    }).then(res => {
      if (res.data.status_code === 201) {
        commit('WX_RECORDING_CONFIG', res.data.data)
        resolve(res.data.data)
      }
    }).catch(error => {
      console.log(error)
    })
  })
}
