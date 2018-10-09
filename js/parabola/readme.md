- 数学公式
支持抛物线运动
x 水平方向上没有加速度 1000 =speed * time
y 受到重力作用 有加速度 A = 2*( YEnd - YStar)/(Time*Time)
起始点 位于屏幕左上角 0 0
会有终止点 落在 1000    1000 位置

- 实现方案
 1. 定位
 2. 怎么让它一直动？setInterval
 requestAnimationFrame(fn)
 createElement 添加一个元素
 removeChild 寻找到父节点把它删掉
 