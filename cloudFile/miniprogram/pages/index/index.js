// miniprogram/pages/index/index.js
const db = wx.cloud.database();
const userInfo = db.collection('userInfo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList:[]
  },
  getUserInfo: function(result){
    console.log(result);
    // openID用户独有,只有云函数能拿到
    wx.cloud.callFunction({
      name:'qianxiao',
      complete: res=> {
        console.log(res)
        userInfo.add({
          data:result.detail.userInfo
        })
        console.log(res)
      },
      onShareAppMessage:(res)=>{
        return{
          title:'12121',
          path:'./pages/index/index',
          imageUrl:'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
          success:res=>{
            console.log('转发成功')
          },
        }
      }
    })
  },

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
