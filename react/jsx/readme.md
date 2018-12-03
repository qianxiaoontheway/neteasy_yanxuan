JSX React模板的一种语法
Component render ()
函数式组件  return ()
template 跟vue不一样，在js里  JSX 交给babel 去工作

1. JSX 是一切组建的基础   函数式组件，以返回JSX为目标
2. JSX真的就是JS  可以执行一切JS
3. React JSX React.creatrElement()更优雅的表达
可读性，
JSX  用来描述UI信息， React.createElement()更能表达这点
不管是小程序 vue  react 都是MVVM
模板  数据绑定的{} {{}}
jsx 不支持 wx:for  还好它的纯js的，可以自己写逻辑 灵活
(
    <ul>
    {
       user.map((user,index)=><li key={index}>{user.name}-{user.type}<li>)
    }
     </ul>
)