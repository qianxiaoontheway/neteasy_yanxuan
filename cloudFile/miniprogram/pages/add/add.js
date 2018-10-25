// miniprogram/pages/add/add.js
const db = wx.cloud.database()
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  upload: function() {
    //手机 摄像头  或者相册
    //ios Android  小程序
    wx.chooseImage({
      count: 4,
      sizeType:['original', 'compressed'],
      sourceType:['camera','album'],
      success:res=>{
        //console.log(res)
        const tempFilepaths = res.tempFilePaths;
        //文件上传流程？
        for(let i = 0; i<tempFilepaths.length; i++){
          //1.取个不会重复的文件名  时间戳
          //2.写入的过程
          let randString = Math.floor(Math.random()*1000000)+'.png';
          wx.cloud.uploadFile({
            cloudpath:randString,
            filepath:tempFilepaths[i],
            success: res =>{
              console.log(res);
              photos.add({
                data:{
                  image:res.fileID
                }
              }).then(res=>{
                wx.showToast({
                  title:'上传成功',
                  icon: 'success',
                })
              })
            },
            fail:console.err
          })
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