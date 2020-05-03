// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    windowHeight:0,
    windowWidth:0,
    time: 3,  // 倒计时3s
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
    this.getWindowHeight();

    /**
     * 倒计时3s 自动跳转界面
     */
    this.data.Time = setInterval(() => {
      this.setData({
        time: --this.data.time
      })
      if (this.data.time <= 0) {
        clearInterval(this.data.Time)
        this.redirect()
      }
    }, 1000)
	},

  /** 
   * 获取用户设备屏幕高度
   */
  getWindowHeight: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        var windowHeight = res.windowHeight
        var windowWidth = res.windowWidth
        that.setData({
          windowHeight: windowHeight,
          windowWidth: windowWidth
        })
      },
    })
  },

	/**
	 * 跳转至地图页面
	 */
	redirect: function () {
    clearInterval(this.data.Time)
		wx.reLaunch({
			url: '../home/home',
		})
	}
})