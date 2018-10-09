- 浏览器显示html+css
1.html文件
html标签， dom 树
解析文档树
解析css 渲染树
如何放置元素 都要计算出来

BFC规则
1. 给父元素加上overflow:hidden后  可以创建一个格式化的上下文环境，定义 他可以得到子元素的高度

- stylus
是一个css的预编译系统   有一套自己的语法规则，
写的是stylus.styl文件，通过stylus编译成css文件
1. 省去了很多的约定

stylus style.styl -o css.css
使用stylus编译 .styl文件 输出到css.css 文件

使用stylus构建css开发工作流程
代码写在.style文件中 浏览器要的是.css文件
stylus -w style,styl -o style.css
live-server 监听css文件的改变 自动刷新页面