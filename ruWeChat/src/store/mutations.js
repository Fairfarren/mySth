// 设置用户信息
export const SETUSER = (state, data) => {
  data.mobile = data.mobile ? data.mobile : ''
  state.USER = data
}
// 储存课程信息
export const SETCLASS = (state, data) => {
  state.CLASS = data
}
// 清空课程配置
export const CLEARCLASS = (state, data) => {
  state.CLASS = {}
}
// 端口401跳转
export const NOW401 = state => {
  window.location.href = `http://www.ruketang.com/wx/authorized?url=http%3a%2f%2fwww.ruketang.com%2fwechat`
}

// 微信基本配置
export const WX_NO_CLASS_CONFIG = (state, data) => {

}
