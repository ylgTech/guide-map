// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    windowHeight:0,
    windowWidth:0,
    time: 3,  // 倒计时3s
    imgsrc: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

  },
  //右上角分享功能
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '',
      path: '/pages/home/home?id=' + that.data.scratchId,
      success: function (res) {
        // 转发成功

        that.shareClick();
      },
      fail: function (res) {
        // 转发失败
      }
    }
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
        if(windowHeight/windowWidth>1.8){
          that.setData({
            imgsrc: '../../img/welcome2.jpg'
          })
        }
        else{
          that.setData({
            imgsrc: '../../img/welcome.png'
          })
        }
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