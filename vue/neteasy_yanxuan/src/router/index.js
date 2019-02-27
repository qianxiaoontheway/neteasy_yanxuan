import Vue from 'vue';
import Router from 'vue-router';
//首页子路由组件
import Index from '@/page/index/index'
import Home from  '@/page/index/home'
import Cook from  '@/page/index/cook'
import Parts from  '@/page/index/parts'
import Cloth from '@/page/index/cloth'
import Wash from '@/page/index/wash'
import Baby from '@/page/index/baby'
import Messy from '@/page/index/messy'
import Drink from '@/page/index/drink'
import Hobby from '@/page/index/hobby'

//独立模块
import special from  '@/page/special/index'
import shopcart from '@/page/shopcart/index'
import self from '@/page/self/index'
Vue.use(Router);

export  default new Router({
    routes: [
        {
            path:'/',
            name:'Index',
            component:Index,
            children:[
                {
                    path:'/',
                    name:'Home',
                    component:Home
                },
                {
                    path:'/home',
                    name:'Home',
                    component:Home
                },
                {
                    path:'/cook',
                    name:'Cook',
                    component:Cook
                },
                {
                    path:'/parts',
                    name:'Parts',
                    component:Parts
                },
                {
                    path:'/special',
                    name:'special',
                    component:special
                },
                {
                    path:'/shopcart',
                    name:'shopcart',
                    component:shopcart
                },
                {
                    path:'/self',
                    name:'self',
                    component:self
                },
                {
                    path:'/cloth',
                    name:'Cloth',
                    component:Cloth
                },
                {
                    path:'/wash',
                    name:'Wash',
                    component:Wash
                },
                {
                    path:'/baby',
                    name:'Baby',
                    component:Baby
                },
                {
                    path:'/messy',
                    name:'Messy',
                    component:Messy
                },
                {      
                    path:'/drink',
                    name:'Drink',
                    component:Drink
                },
                {      
                    path:'/hobby',
                    name:'Hobby',
                    component:Hobby
                },
                


            ]
        }
    ]
})