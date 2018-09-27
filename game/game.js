//const game= new pharser.Game();
//phaser 命名空间 JSON  object
const phaser = {};
phaser.Game = function(w,h,type,selecter,ele,option) {
//函数被new 运行，构造函数
console.log('构造函数');
this.width =w;
this.height =h;
}

let zombiegame = new phaser.Game(800,600);
console.log(zombiegame.with,zombiegamg.height)