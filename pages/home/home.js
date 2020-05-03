// pages/home/home.js

//调用list页面所需信息
var listData_SC = require('../../data/SouthCampus.js');
var listData_MC = require('../../data/MainCampus.js');
var listData_RC = require('../../data/RailwayCampus.js');
var listData_XC = require('../../data/XyCampus.js');
//不是用于页面渲染的数据放置此处、优化小程序性能

//用于获取屏幕信息 适配屏幕大小
var windowHeight = 0;
//调取微信内置地图时、传入的参数
var navigateName
var widths = []
var view
//当前使用数据
var listData = listData_SC

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDetail: '',
    scrollLeft: 0,
    scrollTop: 0,
    //状态栏和标题栏的高度
    windowHeight: 0,
    statusBarHeight: 0,
    titleBarHeight: 0,
    // 地图高度
    mapHeight: 0,
    //用于标记当前id是否展开
    selectedMenu: 0,
    // 这里的lon、lat默认为中南大学南校区文法楼
    longitude: 112.936395,
    latitude: 28.160311,
    //地图缩放级别
    scale: 18,
    //存放list信息
    list: [],
    //存放list-item信息
    listItem: [],
    // 列表popup 展示与否
    show: true,
    //将地图中选中的marker对应的地点在list中显现
    toView: '',
    //提示语信息
    hintMessage: '',
    //用于打开关于我们界面
    isAboutShown: false,
    //校区切换
    option1: [{
        text: '南校区',
        value: 1,
        id: 1
      },
      {
        text: '校本部',
        value: 2,
        id: 2
      },
      {
        text: '铁道校区',
        value: 3,
        id: 3
      },
      {
        text: '湘雅校区',
        value: 4,
        id: 4
      }
    ],
    value1: 1,
    switch1: 1,
    hintIcon: 'star-o',
    imgShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad--------------------->');
    this.initData()
  },

  initData: function () {
    let key = listData.init[0].varName
    this.setData({
      list: listData.init,
      listItem: listData[key][0].content,
      hintMessage: '共有' + listData[key][0].content.length + '个' + listData[key][0].head,
      hintIcon: listData[key][0].icon,
      toView: listData[key][0].content[0].id,
      selectedMenu: 0,
      scrollLeft: 0
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(e) {
    console.log('onReady--------------------->');
    this.mapCtx = wx.createMapContext('myMap')
    this.includePoints()
    // 获取menu-item宽度信息
    const query = wx.createSelectorQuery()
    query.selectAll('.menu-item').boundingClientRect()
    query.exec(function(res) {
      widths = new Array(res[0].length)
      for (let i = 0; i < widths.length; i++) {
        widths[i] = res[0][i].left
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(e) {
    console.log('onShow--------------------->');
    this.getWindowHeight();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /** 
   * 获取用户设备屏幕高度
   */
  getWindowHeight: function() {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        var statusBarHeight = res.statusBarHeight;
        var titleBarHeight;
        // 确定titleBar高度（区分安卓和苹果
        if (wx.getSystemInfoSync().system.indexOf('iOS') > -1) {
          titleBarHeight = 44
        } else {
          titleBarHeight = 48
        }
        windowHeight = res.windowHeight - statusBarHeight - titleBarHeight
        console.log('windowHeight: ' + res.windowHeight)
        that.setData({
          windowHeight: res.windowHeight,
          statusBarHeight: statusBarHeight,
          titleBarHeight: titleBarHeight,
          mapHeight: windowHeight - 32,
        })
      },
    })
  },

  scopeSetting: function() {
    var that = this;
    wx.getSetting({
      success(res) {
        //地理位置
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success(res) {
              that.moveToLocation();
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '定位失败，你未开启定位权限，点击开启定位权限',
                success: function(res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success: function(res) {
                        if (res.authSetting['scope.userLocation']) {
                          that.moveToLocation();
                        } else {
                          console.log('用户未同意地理位置权限')
                        }
                      }
                    })
                  }
                }
              })
            }
          })
        } else {
          that.moveToLocation();
        }
      }
    })
  },

  /**
   * 请求用户所在地理位置、并移动到地图中心
   */
  moveToLocation: function() {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 16,
        })
      },
    })
  },

  /**
   * 改动提示信息
   */
  changeHintMessage: function(e) {
    console.log(e)
    this.setData({
      hintMessage: '共有' + e.content.length + '个' + e.head,
      
    })
  },

  /**
   * 缩放比例使得标点能全部显现
   */
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [60],
      points: this.data.listItem
    })
  },

  /**
   * 选取目的地、获取经纬度
   */
  selectDestination: function(e) {
    let i = e.currentTarget.dataset.index
    this.setData({
      show: false,
      latitude: this.data.listItem[i].latitude,
      longitude: this.data.listItem[i].longitude,
      scale: 18,
    })
    navigateName = this.data.listItem[i].name
  },

  /**
   * 得到scroll—view的id 实现scrll-into-view的功能
   */
  getDestinationId: function(e) {
    this.setData({
      show: true,
    })
    view = e.markerId
  },

  /**
   * 调取导航界面、并获取相关数据
   */
  navigate: function(e) {
    //调用 selectDestination()解决参数没有更新的问题
    this.selectDestination(e)
    console.log(e)
    let index = this.data.selectedMenu
    var that = this
    wx.openLocation({ //​使用微信内置地图查看位置。
      latitude: that.data.latitude,
      longitude: that.data.longitude,
      name: that.data.list[index].head,
      address: navigateName
    })
  },

  /**
   * 复制官Q到剪贴板
   */
  copyQQ: function() {
    wx.setClipboardData({
      data: '2420538090',
    })
  },

  /**
   * 弹出地点列表，并赋值
   */
  showPopup: function(e) {
    let index = e.currentTarget.dataset.index
    let name = this.data.list[index].varName
    console.log(name)
    console.log(listData)
    var listItem = listData[name][0]
    view = listData[name][0].content[0].id
    this.changeHintMessage(listItem)
    this.setData({
      listItem: listItem.content,
      selectedMenu: index,
      show: true,
      showDetail: '',
      scrollLeft: widths[index - 1],
      toView: view,
      hintIcon: listItem.icon
    })
    console.log(this.data.listItem)
    this.includePoints()
  },

  /**
   * 列表弹出完成时触发，使scroll-view滚动到选中地点
   */
  toView: function() {
    this.setData({
      toView: view,
    })
  },

  /**
   * 展示关于我们界面
   */
  about: function() {
    this.setData({
      show: true,
      showDetail: 'about',
    })
  },

  /**
   * 隐藏列表
   */
  onClose() {
    this.setData({
      show: false
    });
  },

  /**
   * 点击事件
   */
  onSwitch1Change({ detail }) {
    this.setData({
      switch1: detail
    });
    console.log(this.data.switch1);
    switch (this.data.switch1) {
      case 1:
        listData = listData_SC;
        longitude: 112.936395
        latitude: 28.160311
        break;
      case 2:
        listData = listData_MC;
        //此处为切换到本部中心点默认位置
        longitude: 112.936395
        latitude: 28.160311
        break;
      case 3:
        listData = listData_RC;
        //此处为切换到铁道校区中心点的位置
        longitude: 112.936395
        latitude: 28.160311
        break;
      case 4:
        listData=listData_XC;
        break;
    }
    this.initData()
  },

  showModel: function (e) {
    let i = e.currentTarget.dataset.index
    this.setData({
      imgShow: true,
      imgUrl: this.data.listItem[i].imagePath,
      imgText: this.data.listItem[i].name
    })
  },

  hideModal: function () {
    this.setData({
      imgShow: false
    })
  }
})