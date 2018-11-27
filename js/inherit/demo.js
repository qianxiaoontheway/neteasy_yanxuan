function Parent(){
    this.name = 'kevin'
}
Parent.prototype.getName = function(){
    console.log(this.name)
}

function Child (){

}
Child.prototype = new Parent();
var child1 = new Child();
//父类 子类 ，prototype 属性 原型式继承
//Person 函数 this 指针 new   js本没有类 只有对象 object
Person.prototype