// pages/new/new.js

//调用list页面所需信息
var listData = require('../../data/list.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 手机页面高度
    windowHeight: 0,
    statusBarHeight: 0,
    titleBarHeight: 0,
    mapHeight: 0,
    // 
    menu: [],
    listItem: null,
    // 这里的lon、lat默认为中南大学南校区文法楼
    longitude: 112.936395,
    latitude: 28.160311,
    // 弹窗
    show: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWindowHeight();
    this.setData({
      menu: listData.init,
      listItem: listData.menzhen[0].content
    })
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

  },

  /**
   * 获取页面的高度
   */
  getWindowHeight: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        var statusBarHeight = res.statusBarHeight;
        var titleBarHeight;
        // 确定titleBar高度（区分安卓和苹果
        if (wx.getSystemInfoSync().system.indexOf('iOS') > -1) {
          titleBarHeight = 44
        } else {
          titleBarHeight = 48
        }
        var contentHeight = res.windowHeight - statusBarHeight - titleBarHeight
        console.log('windowHeight: ' + res.windowHeight)
        that.setData({
          windowHeight: res.windowHeight,
          statusBarHeight: statusBarHeight,
          titleBarHeight: titleBarHeight,
          mapHeight: contentHeight - 32,  // menuBar: 32px
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },

  onClose: function () {
    this.setData({
      show: false
    })
  }
})