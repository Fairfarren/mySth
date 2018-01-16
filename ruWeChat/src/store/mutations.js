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
export const WX_RECORDING_CONFIG = (state, wxConfig) => {
  const wx = require('weixin-js-sdk')
  wx.config({
    debug: false,
    appId: wxConfig.appId,
    timestamp: wxConfig.timestamp,
    nonceStr: wxConfig.noncestr,
    signature: wxConfig.sign,
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
  })
  wx.ready(() => {
    let theClass = state.CLASS.name
      ? state.CLASS
      : {
        name: '汝课堂',
        url: 'http://www.ruketang.com/wechat/',
        img: 'https://i.loli.net/2018/01/16/5a5df1259a139.png',
        desc: '汝课堂”是汝来传媒旗下专注于职业教育的线上交流学习平台。致力提升教与学效率，打造全新便捷的职业教育模式。为广大职业教育老师、学生、企业员工和社会工作者提供丰富的教育资源和在线平台服务。'
      }
    wx.onMenuShareTimeline({
      title: theClass.name, // 分享标题
      link: theClass.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: theClass.img, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        alert('分享成功')
      }
    })
    wx.onMenuShareAppMessage({
      title: theClass.name, // 分享标题
      desc: theClass.desc, // 分享描述
      link: theClass.url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: theClass.img, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        alert('分享成功')
      },
      cancel: function (error) {
        // 用户取消分享后执行的回调函数
        alert('失败' + error)
      }
    })
  })
}
