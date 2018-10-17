//var str='visit Microsoft'
//console.log(str.replace('MIicrosoft','alibaba'));
//var money ='$88888888$'
//console.log(money.replace(/\$/g,'人民币'))

let html =`abc{{username}}edfcccc`;
let reg= /\{\{(.*)\}\}/gm;
console.log(reg.test(html),RegExp.$1)