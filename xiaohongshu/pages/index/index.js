import { loadNotes} from '../../utils/util';

let col1H = 0;
let col2H =0;
Page({
  data:{
    text_url:'',
    col1:[],
    col2:[]
  },
  onLoad(){
     loadNotes((data)=>{
       console.log(data);
       this.setData({
         test_url:data.data[0].pic,
         col1:[data.data[0]]
       })

     })
  },
  onImageLoad(event){
    let oImageW = event.detail.width;
    let oImageH = event.detail.height;

  },
  upper(){},
  lower(){}

})