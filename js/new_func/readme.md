new 到底做了什么？
let p = new Person();
p 是 Object 类型, person 函数类型 typeof 
1. parent 被执行，加了new 后，parent 函数会在P的作用域下执行 this,指向当前的作用域（P）
构造函数里的属性被当做P的属性被创建
2. p.__proto__ 指向 person.prototype p继承了 person.prototype中色属性和方法