- Component
来自于Facebook  用搭积木的概念来类比做网站。
我们的网页不再由标签这一个原子级别的构成，  div+css
由组件构成 swiper scroll-view  mapview 一块积木   也叫一个组件  实现自己的表现行为和方法，具有特定的功能或表现
页面具有区块    功能块
calendar  组件  第三方

- 自定义组件开发
components 是MVVM架构的核心   他跟pages 是平级的，
component  构成page    在page.json文件里
{
    'usingComponents'{
        'icon':'../../components/icon/index'
    }
}
icon组件
在应用之中会用到一些图标，字体图标 
比如：edit add map home
alley  iconfont ttf 文件  样式
相对独立的  一个组件
可以在多个页面进行复用   