- 模板里要有 if else  for  指令
模板里存在业务逻辑  wx:if   wx:else wx:for

MVVM里面界面有状态 登录前和登陆后状态

界面状态由数据来决定
hasUserInfo 决定了界面有两种界面状态 wx:if   wx:else

- 微信的生态及机制
小程序的优势：可以获得用户信任和信息，可以分享到讨论组

用户信息，是隐私，要使用 则要获取授权

button 询问   特殊的按钮  open-type="getUserInfo"
bindgetuesrinfo='getUserInfo'
block 显示的过程

- setData()
改变data里面数据的值
并且拥有让界面里相关的部分热更新的能力

- wx:key
循环一定要加一个唯一性的key
列表值发生改变，如果直接替换整个列表的wxml，太浪费了
key  找到相应的那个 进行更新

- 设计数据
lists =[已完成2项   未完成8项]
lists 全部列表
doneLists= []
undoneLists= []
v-for="{{lists}}"

currentState="all"
v-if + v-for
界面状态
 多种状态
 1. tabbar .active  UI状态 =>数据驱动   currenState='all'
 任务列表  列表数据， UI状态 除了lists外，  只要再加一个就行   
 currentList   