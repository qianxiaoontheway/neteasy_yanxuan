如何设计跨终端的网页栅格系统，4等分（pc）   三等分（IPAD）  二等分（手机）

- twitter Bootstrap 是一个自适应的前端框架   可以实现一份代码到处运行。
在一个col上定义多个尺寸
media query
.col-lg-n 超大  >1200 min-width
.col-md-n 中等电脑  笔记本>1000px     1000-1200px  sm
.col-sm-n  ipad >768px <1024px
.col-xs-n  手机<768   max-width 767

- .container
.row
.col-${n}

- float 具有更好的兼容性