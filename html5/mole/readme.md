1. 分析布局+简历html结构
2. box-sizing
盒子模型
默认 width height 设置是对盒子模型里的内容设置，然而元素在页面上的真正占的位置是整个盒子的模型，内容>padding>border>margin,
元素出现在页面上，其实是一个paiting绘制的原则。

如何解决？
box-sizing: border-box
站位大小=border+padding+content=设置的width,优先border和padding占位置，余下的才是内容的位置
