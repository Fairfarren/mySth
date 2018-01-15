import axios from 'axios'

axios.defaults.baseURL = 'http://www.ruketang.com'
// axios.defaults.baseURL = 'http://tao.liu:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

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
