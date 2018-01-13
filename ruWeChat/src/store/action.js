import axios from 'axios'

axios.defaults.baseURL = 'http://www.ruketang.com'
    // axios.defaults.baseURL = 'http://tao.liu:5000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

export const GET_USER_INFO = ({ commit }) => {
    axios.get('/wx/profile').then(res => {

    }).catch(error => {
        console.log(error)
    })
}