1. js 本身没有类  除了基本数据类型外，只有对象  将对象的prototype链指向要继承的对象，
2. prototype 是函数的属性，
3. 继承三步
- 父类的构造函数执行一下，相当于super()
- prototype属性指向 父类的实例
- 将prototype.constructor 指向构造函数

类 Parent 三部分 prototype是方法上的属性
1. 构造函数 new Fn() { }<=this
2. 构造函数prototype  属性 方法
 对象沿着原型链去查找方法
 3. 构造函数和原型链有联系的
   Parent.prototype.constructor

   - typeof 其实复杂数据类型只有function 和object 是语法原生支持的，其他都只是变种而已。
   Function vs object
   函数在js里面也叫一等对象 js才是真正的面向对象
   函数可以被执行的对象
   可以当做object 的构造函数。
   - prototype 属性只属于函数
   _proto_函数或方法都有此私有属性

   一个对象A的_proto_属性指向哪个对象B，B就是A的原型对象（父），A拿到B里所有的属性和方法，也可以拿到B的原型对象C上的属性和方法，以此递归，所谓原型链