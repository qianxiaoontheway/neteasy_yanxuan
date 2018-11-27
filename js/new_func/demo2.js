function Parent(name){
    this.name = name;
}
let p = new Parent('阿三');
console.log(Parent.prototype);
console.log(p.__proto__);//p.__proto__ == Parent.prototype;
console.log(Parent.__proto__);