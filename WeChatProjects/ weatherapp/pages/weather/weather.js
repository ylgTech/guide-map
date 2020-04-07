// pages/index/weather.js
//var app = getApp();
var urlProfix = require('../../configuration.js').urlProfix;
var weatherKey = require('../../configuration.js').weatherKey;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '../../images/warm-bg.jpg',
    temp: 15,
  },
  /*获取页面高度*/

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this
    wx.request ({
      url: urlProfix + '/now?',
      method:'GET',
        data:{
          location: 'changsha',
          key: weatherKey,
        },
      success: function (res) {
        console.log(res)
        that.setData({
          basic: res.data.HeWeather6[0].basic,
          now: res.data.HeWeather6[0].now,
          update: res.data.HeWeather6[0].update,
        })
      }
    })




    console.log(urlProfix)
    var that = this
    //console.log(app.globalData)
    wx.getSystemInfo({
      success: function(res) {
        console.log('windowHeight: ' + res.windowHeight)
        that.setData({
          windowHeight: res.windowHeight,
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})