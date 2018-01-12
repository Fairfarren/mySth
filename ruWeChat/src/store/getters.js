// 手机号中间星星
export const USERPHONEPSW = state => {
  return `${state.USER.mobile.slice(0, 3)}****${state.USER.mobile.slice(7, 11)}`
}
// 判断男女
export const USERSEX = state => {
  const sex = state.USER.sex
  let value = ''
  switch (sex) {
    case 0:
      value = '女'
      break
    case 1:
      value = '男'
      break
    case 2:
      value = '未知'
      break
    default:
      break
  }
  return value
}
