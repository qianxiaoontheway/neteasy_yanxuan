-this
指针
1.函数的运行方式有关
> 作为事件处理函数，this 指向事件发生的对象
>如果是箭头函数  this 指向父级的this
>普通函数 this指向全局 window(前) globe(后)
>作为对象的方法被执行，  this 指向对象

-js的数据类型
基础类型：
数值型，字符串，布尔值，undefind,null,symbol
复杂数据类型
object 
数组 对象字面量 函数 
typeof 不能区分
找个工具，call 
Object.prototime.tostring.call(variable);
[object Array]
 
 -transition

 -classList
 contains  add remove toggle