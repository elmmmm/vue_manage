import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Login from '../views/Login'


// 动态导入 路由组件
const Goods = () => import('../views/Goods/index.vue')
const Order = () => import('../views/Order/index.vue')
const User = () => import('../views/User/index.vue')
const UserInfo = () => import('../views/User/UserInfo')
const Ticket = () => import('../views/User/Ticket')

Vue.use(VueRouter)

const routes = [
    {
        path: '/', //根页面-框架页
        component: Layout,
        //路由元信息
        meta: {
            isLogin: true
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/goods',
                name: 'Goods',
                component: Goods,
            },
            {
                path: '/order',
                name: 'Order',
                component: Order
            },
            {
                path: '/user',
                name: 'User',
                component:User,
                redirect: '/user/userinfo',
                children: [
                    {
                        path: 'userinfo',   // 二级路由不要加斜杠
                        name: 'UserInfo',
                        component: UserInfo
                    },
                    {
                        path: 'ticket',
                        name: 'Ticket',
                        component: Ticket
                    }
                ]
            }
        ]
    },
    {
        path: '/login',  //登录页
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router
