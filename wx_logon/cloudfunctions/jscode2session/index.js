// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring')
const request = require('request');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let {code} = event;
    let id = 'wx01441ed92eba4c83';
    let secretKey = 'd2da23d63f8f220ba4b0cb5affe62e91';
    const data = {
        appid:id,
        secret:secretKey,
        js_code:code,
        grant_type:'authorization_code'
    }
    let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`
    console.log(url);
    return new Promise((resolve,reject)=>{
        request.get(url,(error,response,body)=>{
          console.log(response);

            if(error || response.statusCode!==200){
                reject(error)
            }else{
              console.log(body);
                try{
                    const r = JSON.parse(body);
                    resolve(r);

                } catch(e){
                    reject(e)
                }

            }
        })
    })
    //在进行session之前  后端   操作小程序的登录 当然要小程序同意

}