const app = getApp();
const globalData = app.globalData; //(globalData:跨页面共享)
//放在根上 globalData
//小程序内没有cookie
Page({
  data: {
    auth: -1,
    nickname:'',
    avatarUrl:'',
    emotions:['serene','hehe','ecstatic','sad','terrified'],
    colors:{
      'serene':'#64d9fe',
      'hehe':'#d3fc1e',
      'ecstatic':'#f7dc0e',
      'sad':'#ec238a',
      'terrified':'#ee1aea'

    },
    openid:null,
    activeEmotion:'hehe'

  },
  onLoad() {
    // 用户的授权有很多方面 scope.userInfo 
    this.getScope(this.getUserInfo, ()=> {
      this.setData({
        auth:0

      })
      
    });
  },
  // 高阶函数， success 参数也是一个函数，
  getScope (success, fail, name = 'scope.userInfo') {
    //函数体
    wx.getSetting({
      success: (res)=>{
        //console.log(res);
        if(res.authSetting[name]){
          success();

        } else {
          fail();
        }
      }
    })
  },
  getUserInfo () {
    //console.log('userinfo')
    if (!globalData.nickname||!globalData.avatarUrl){
      //wx.getUserInfo(nickname,avatar)
      this._getUserInfo((res)=>{
       // console.log(res);
       this.setData({
         nickname:res.nickName,
         avatarUrl:res.avatarUrl
       })
       globalData.nickname= res.nickName;
       globalData.avatarUrl = res.avatarUrl;

      })
    }

    
  }, 
  _getUserInfo(cb= ()=>{}){
    wx.getUserInfo({
      success:(res)=>{
        cb(res.userInfo);
      }
    })

  },
  submitEmotion(){
    //database 里面一条记录的保存
    //如何在小程序的前端拿到openid?
    //activeEmotion
    let {openid,activeEmotion} = this.data
   // addEmotion(openid,activeEmotion);
  },
  checkedColor(e){
    let activeEmotion = e.currentTarget.dataset.emotion
    this.setData({
      activeEmotion
    })
  }
})
