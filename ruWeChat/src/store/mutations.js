// 设置用户信息
export const SETUSER = (state, data) => {
  data.mobile = data.mobile ? data.mobile : ''
  state.USER = data
}
// 端口401跳转
export const NOW401 = state => {
  window.location.href = `http://www.ruketang.com/wx/authorized?url=http%3a%2f%2fwww.ruketang.com%2fwechat`
}
