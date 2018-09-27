-css 命名规范BEM
Block
页面是由多个Block构成的，跟其他的block区分开来， tabbar 
Element__
在区块中担负的职责，取唯一性的名字，
并不是简单的父子关系
————label
————icon
Modifier
表达状态的修改
_item_on
-weui
微信ui规范，内嵌公众号小程序，调起webview,为了让用户体验一致，让用户有认同感
在mobile web app 
前端界面框架 weui.css
-组件
大部分的项目，70%都是通用组件构成，组件，拿来就用。
1.tabbar
.tabbar>a.item>(span>img+span.badge)+p
词汇量 组件词汇tabbar badge  一般词汇item
良好的结构和语义化标签
flex 1:1:1

-http 状态码 
有状态码，方便分析
2开头的都是好事，常用的为200
3开头的就是要跳转
4开头 404（哥哥 notfind) 403(无权使用)
5开头的一般都是错误，如：语法错误

