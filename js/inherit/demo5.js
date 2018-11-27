function Person(name){
    this.name = name;
}
let p = new Person('阿三');
console.log(typeof Person);//function
console.log(typeof p);//object
console.log(Person.prototype);
console.log(p.prototype);
console.log
(Person.prototype.constructor ===Person);
console.log(Person._proto_);
console.log(p._proto_)