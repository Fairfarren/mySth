// pages/hello/hello.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      '../../images/43393846_p0.jpg',
      '../../images/51331207_p1.jpg',
      '../../images/51806057_p0.jpg'
    ],
    //选择器
    arr: [
      1, 2, 3, 4, 5
    ],
    index:0,
    arr2: [
      ['a1','a2','a3'],
      ['b1','b2','b3'],
      ['c1','c2','c3']
    ],
    multiIndex: [0,0,0],
    date: '2016-09-01',
    //end选择器

    //地图
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    //end地图
  },
  // 播放
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  },
  // end播放

  //选择器方法
  changeSelector: function (e){
    //默认
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  changeMultiSelector: function (e){
    //多项选择
    console.log(e);
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindDateChange: function (e) {
    //时间选择
    console.log(e)
    this.setData({
      date: e.detail.value
    })
  },
  //end选择器方法

  //地图
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  //end地图
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})