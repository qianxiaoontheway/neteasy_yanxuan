- 小程序
内嵌在微信超级app里面，是WebView +微信一些APP插件的混合
WedView APP 内嵌页面技术 让APP 开发使用上Web技术，比Android/IOS 更快  缺点是性能慢
在拍照  tabbar   navigationbar  等一些关键的地方又能调用原生微信里的原生组件， 提升性能
小程序发明了WXML    没有div   view
WXSS   使用弹性布局作为主要的布局方式   
js   MVMM

- 架构
小程序架构极其简单   
app.js 是入口文件
app.json  是项目配置文件  pages 找到所有的页面
1. 注册所有文件
2. Windows  设置App名字    navigationBar 背景色  文字色
3. tabbar 如果APP需要底栏
pages 小程序由页面组成
主要代码都在这里
1. wxml 写结构
2. WXSS是样式 
3. js 写逻辑
4. json 页面级别的配置文件

- 组件
小程序提供了很多内置的功能组件 
swiper  声明式组件 html 标签 功能贫瘠，
组件  集合了很多标签及功能
swiper>swiper-item 
indicator-dots="{{true}}"
{{ js 区链}}:模板符号

- 数据驱动的界面
界面， 数据 传统做法是分别由前端，后端独立做的
大前端让静态页面活起来，将直接绑定数据。
{{}} 界面模板
小程序为数据绑定提供了约定，
在page 这个构造函数里面  只要配置date 
page({
    date:{
        数据区域 -> {{}}
    }
})
 
- 指令
WX:for 循环输出指令  block 
- rpx
小程序为了适配所有手机，宽度就是750rpx,