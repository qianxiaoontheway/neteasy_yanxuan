链式调用 chain
非常优雅 
很简单  将我们的方法面向对象化 (prototype),每个函数做完功能后 return this(当前对象)
$('div')  返回一个JQuery(fn)对象
JQuery.prototype = {
    method:return this;
}