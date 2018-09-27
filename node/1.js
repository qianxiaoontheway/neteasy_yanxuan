var fs =require('fs');
var date;
try{
date= fs.readFileSync('./fileForRead111','utf8')
;
console.log(date); 
}catch(err) {
    console.error('读取文件出错:'+ err.message);
}